/**
 * Fuzzy search optimized for Japanese romanized judo terms.
 * Handles: missing hyphens, partial matches, typos, diacritics, character swaps.
 */

/**
 * Normalize a string for comparison: lowercase, remove hyphens/diacritics/spaces
 */
function normalize(str: string): string {
  return str
    .toLowerCase()
    .normalize("NFD")
    .replace(/[\u0300-\u036f]/g, "") // remove diacritics
    .replace(/[-\s'']/g, "");        // remove hyphens, spaces, apostrophes
}

/**
 * Calculate similarity score between two strings (0-1).
 * Uses a combination of substring matching and character-level matching.
 */
function similarityScore(query: string, target: string): number {
  const nq = normalize(query);
  const nt = normalize(target);

  if (nt.length === 0 || nq.length === 0) return 0;

  // Exact normalized match
  if (nt === nq) return 1;

  // Normalized contains
  if (nt.includes(nq)) return 0.9;

  // Query contains target (e.g., searching for "seoinagemorote" would match "seoi-nage")
  if (nq.includes(nt)) return 0.7;

  // Starts-with bonus
  if (nt.startsWith(nq)) return 0.95;

  // Check if all query chars appear in order (subsequence match)
  let qi = 0;
  for (let ti = 0; ti < nt.length && qi < nq.length; ti++) {
    if (nt[ti] === nq[qi]) qi++;
  }
  const subsequenceRatio = qi / nq.length;
  if (subsequenceRatio >= 0.85) return 0.6 * subsequenceRatio;

  // Trigram similarity for typo tolerance
  const trigramScore = trigramSimilarity(nq, nt);
  if (trigramScore > 0.3) return trigramScore * 0.7;

  // Levenshtein-based for short queries
  if (nq.length <= 6) {
    const dist = levenshteinDistance(nq, nt.slice(0, nq.length + 2));
    const maxLen = Math.max(nq.length, nt.slice(0, nq.length + 2).length);
    const levScore = 1 - dist / maxLen;
    if (levScore >= 0.6) return levScore * 0.5;
  }

  return 0;
}

/**
 * Trigram similarity (Dice coefficient)
 */
function getTrigrams(str: string): Set<string> {
  const trigrams = new Set<string>();
  const padded = `  ${str} `;
  for (let i = 0; i < padded.length - 2; i++) {
    trigrams.add(padded.slice(i, i + 3));
  }
  return trigrams;
}

function trigramSimilarity(a: string, b: string): number {
  const ta = getTrigrams(a);
  const tb = getTrigrams(b);
  let intersection = 0;
  ta.forEach(t => { if (tb.has(t)) intersection++; });
  return (2 * intersection) / (ta.size + tb.size);
}

/**
 * Simple Levenshtein distance
 */
function levenshteinDistance(a: string, b: string): number {
  const m = a.length, n = b.length;
  const dp: number[][] = Array.from({ length: m + 1 }, (_, i) =>
    Array.from({ length: n + 1 }, (_, j) => (i === 0 ? j : j === 0 ? i : 0))
  );
  for (let i = 1; i <= m; i++) {
    for (let j = 1; j <= n; j++) {
      dp[i][j] = a[i - 1] === b[j - 1]
        ? dp[i - 1][j - 1]
        : 1 + Math.min(dp[i - 1][j], dp[i][j - 1], dp[i - 1][j - 1]);
    }
  }
  return dp[m][n];
}

/**
 * Check if a query fuzzy-matches against a target string.
 * Returns score > 0 if match, 0 if no match.
 * threshold: minimum score to consider a match (default 0.3)
 */
export function fuzzyMatch(query: string, target: string, threshold = 0.3): number {
  if (query.length < 2) return 0;
  
  // Check against individual words in target too
  const words = target.split(/[\s,;]+/);
  let bestScore = similarityScore(query, target);
  
  for (const word of words) {
    if (word.length < 2) continue;
    const score = similarityScore(query, word);
    if (score > bestScore) bestScore = score;
  }
  
  return bestScore >= threshold ? bestScore : 0;
}

/**
 * Filter and sort results by fuzzy relevance.
 */
export function fuzzyFilter<T>(
  items: T[],
  query: string,
  getSearchableStrings: (item: T) => string[],
  threshold = 0.3
): T[] {
  if (query.length < 2) return [];
  
  const scored = items
    .map(item => {
      const strings = getSearchableStrings(item);
      let bestScore = 0;
      for (const str of strings) {
        const score = fuzzyMatch(query, str, threshold);
        if (score > bestScore) bestScore = score;
      }
      return { item, score: bestScore };
    })
    .filter(({ score }) => score > 0)
    .sort((a, b) => b.score - a.score);

  return scored.map(({ item }) => item);
}

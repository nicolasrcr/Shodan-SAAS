import { historyData } from "@/data/judoData";
import jigoroKanoImg from "@/assets/jigoro-kano.jpg";
import { useLanguage } from "@/contexts/LanguageContext";

const HistoriaSection = () => {
  const { language } = useLanguage();

  const content = {
    pt: {
      title: "História do Judô",
      founder: {
        title: "Jigoro Kano",
        dates: "1860 - 1938",
        kanji: "嘉納 治五郎 (かのう じごろう)",
        birth: "📍 Nascimento: 28 de outubro de 1860, Mikage (atual Kobe)",
        education: "🏛️ Formação: Universidade Imperial de Tóquio",
        physique: "💪 Físico: 1,57m / 50kg - frágil, sofria bullying",
        studies: "📚 Estudou: Tenjin Shin'yō-ryū e Kitō-ryū (Jujutsu)"
      },
      curiosities: {
        title: "Curiosidades sobre Kano",
        items: historyData.curiosities
      },
      timeline: {
        title: "Linha do Tempo",
        items: historyData.timeline
      },
      kodokan: {
        title: "Kodokan - Instituto do Caminho",
        facts: historyData.kodokanFacts
      },
      origins: {
        title: "Origens das Artes Marciais",
        items: historyData.origins
      },
      brazil: {
        title: "Judô no Brasil",
        items: historyData.brazilTimeline
      },
      facts: historyData.founderFacts
    },
    en: {
      title: "History of Judo",
      founder: {
        title: "Jigoro Kano",
        dates: "1860 - 1938",
        kanji: "嘉納 治五郎 (Kano Jigoro)",
        birth: "📍 Born: October 28, 1860, Mikage (now Kobe)",
        education: "🏛️ Education: Tokyo Imperial University",
        physique: "💪 Physique: 1.57m / 50kg - frail, was bullied",
        studies: "📚 Studied: Tenjin Shin'yō-ryū and Kitō-ryū (Jujutsu)"
      },
      curiosities: {
        title: "Curiosities about Kano",
        items: [
          "🗣️ Polyglot fluent in English, French, Spanish and German besides Japanese",
          "💰 Wealthy family - father owned a sake brewing company",
          "😢 Lost his mother very young, which influenced his search for self-discipline",
          "📺 Soap opera 'Judo Ichidai' (95 episodes, 1962-1964) told his story",
          "🔍 Google honored Kano in 2021 with a special Doodle",
          "🏅 Japanese team visits his grave before the Olympics",
          "💴 Name cited in discussions about new Japanese banknotes",
          "👨‍🎓 Tsunejirō Tomita was his first student (June 5, 1882)",
          "📝 When born was called 'Shinnosuke', changed to Jigoro later",
          "🏫 Founded the Kobukan school to teach Chinese students",
        ]
      },
      timeline: {
        title: "Timeline",
        items: [
          { year: "1860", event: "October 28 - Birth of Jigoro Kano (name: Shinnosuke) in Mikage, Settsu Province (now Hyōgo)" },
          { year: "1877", event: "Kano begins studying Jujutsu at Tenjin Shin'yō-ryū school" },
          { year: "1881", event: "Studies at Kitō-ryū school and obtains Menkyo (license to teach)" },
          { year: "1882", event: "May - Foundation of Kodokan with 12 tatami mats (~24m²) in Tokyo" },
          { year: "1882", event: "June 5 - Tsunejirō Tomita becomes the first official student" },
          { year: "1886", event: "Decisive victory of Kodokan over traditional Jujutsu school" },
          { year: "1891", event: "Kano marries Sumako Takezoe" },
          { year: "1895", event: "Gokyo no Waza is officially established (40 techniques in 5 groups)" },
          { year: "1906", event: "Kodokan expands to 207 tatami mats" },
          { year: "1908", event: "Law makes Judo/Kendo mandatory in Japanese high schools" },
          { year: "1909", event: "Kano becomes the first Asian member of the IOC" },
          { year: "1920", event: "Revision of Go-Kyo to current form (Shin-Go-Kyo)" },
          { year: "1938", event: "May 4 - Death by pneumonia, aged 77, on the Hikawa Maru ship" },
          { year: "1951", event: "Foundation of the IJF (International Judo Federation)" },
          { year: "1964", event: "Judo debuts at the Tokyo Olympic Games" },
          { year: "1972", event: "Judo becomes a permanent Olympic sport" },
          { year: "1992", event: "Women's Judo officially enters the Olympics (Barcelona)" },
        ]
      },
      kodokan: {
        title: "Kodokan - Institute of the Way",
        facts: [
          "講道館 (Kodokan) = KO (lecture/study) + DO (way) + KAN (institute) = 'Institute for Studying the Way'",
          "Started with only 12 tatami mats (approximately 24m²)",
          "The first dojo was at Eisho-ji temple (Jōdo Buddhist sect)",
          "In 1885 already had 54 enrolled students",
          "In 1906 expanded to 207 tatami mats",
          "Today has 8 floors and more than 500 tatami mats",
          "Symbol: Yata-no-Kagami (sacred mirror) - means 'The 8-Hand Mirror'",
          "It is the world center of Judo and reference for all federations",
        ]
      },
      origins: {
        title: "Origins of Martial Arts",
        items: [
          { country: "🇨🇳 China", desc: "Millennial martial tradition. Kung Fu as generic term. 5th century BC records on Shuai Jiao (Chinese wrestling)." },
          { country: "🇬🇷 Greece/Rome", desc: "Pankration in Ancient Olympic Games. Roman gladiators practiced various forms of combat." },
          { country: "🇪🇬 Egypt", desc: "Tomb paintings show fighting system similar to boxing. Hieroglyphs in pyramids record techniques." },
          { country: "🇮🇳 India", desc: "Mallayuddha - oldest known codified form (5000 years). Recorded in the Mahabharata epic." },
          { country: "🇯🇵 Japan", desc: "Jujutsu since 238 BC. 'Yield to win' concept inspired by the willow. Art of the samurais." },
        ]
      },
      brazil: {
        title: "Judo in Brazil",
        items: [
          { year: "1910s", event: "Takaharu Saigo teaches Judo in São Paulo to the Japanese community" },
          { year: "1922", event: "Demonstrations for Brazilian political and military authorities" },
          { year: "1925", event: "Count Koma (Mitsuyo Maeda) arrives in Pará and teaches the Gracie family" },
          { year: "1931", event: "First official Judo tournament in Brazil, in Araçatuba-SP" },
          { year: "1936", event: "Ryuzo Ogawa lands in Registro-SP, bringing traditional Judo" },
          { year: "1938", event: "Ogawa opens his academy in Liberdade neighborhood in São Paulo" },
          { year: "1969", event: "Chiaki Ishii wins Brazil's first world bronze" },
          { year: "1972", event: "Chiaki Ishii wins Olympic bronze in Munich" },
          { year: "1984", event: "Douglas Vieira wins Olympic silver in Los Angeles" },
          { year: "2012", event: "Sarah Menezes wins first female Olympic gold in London" },
        ]
      },
      facts: [
        "Founded Judo in May 1882, creating the Kodokan in Tokyo at age 21",
        "First Asian member of the International Olympic Committee (IOC) in 1909",
        "Adapted techniques from traditional JUJUTSU (Tenjin Shin'yō-ryū and Kitō-ryū)",
        "Created the colored belt ranking system, adopted by other martial arts",
        "Introduced the principles Seiryoku Zen'yo and Jita Kyoei",
        "Was polyglot: spoke English, French, Spanish and German fluently",
        "Created the Judogi, first modern martial arts uniform",
        "Acted as teacher and director of various schools in Japan",
        "Is considered the father of Judo and Japanese Physical Education",
        "Besides judoka, was an educator and reformer of the Japanese educational system",
      ]
    }
  };

  const t = content[language === 'en' ? 'en' : 'pt'];

  return (
    <div className="animate-fade-in">
      <h2 className="section-title">
        <span className="section-title-icon">史</span>
        {t.title}
      </h2>

      {/* Founder Section */}
      <div className="grid md:grid-cols-[220px_1fr] gap-7 mb-10">
        <div className="card-red flex flex-col items-center justify-center py-6 px-6 text-center overflow-hidden">
          <img 
            src={jigoroKanoImg} 
            alt="Mestre Jigoro Kano, fundador do Judô"
            className="w-32 h-40 object-cover rounded-lg mb-3 border-2 border-primary/30"
          />
          <h3 className="text-lg font-semibold text-white">{t.founder.title}</h3>
          <p className="text-sm text-muted-foreground mt-1">{t.founder.dates}</p>
        </div>

        <div className="card-judo">
          <h3 className="text-xl font-semibold text-white mb-1">{t.founder.title}</h3>
          <p className="text-primary text-sm mb-4">{t.founder.kanji}</p>
          
          <div className="grid gap-2 mb-5 text-sm text-foreground/80">
            <p>{t.founder.birth}</p>
            <p>{t.founder.education}</p>
            <p>{t.founder.physique}</p>
            <p>{t.founder.studies}</p>
          </div>

          <div className="space-y-2">
            {t.facts.map((fact, index) => (
              <div key={index} className="p-3 bg-primary/10 rounded-lg border-l-3 border-primary text-sm text-foreground/80">
                {fact}
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Curiosities Grid */}
      <h3 className="text-lg font-semibold text-primary flex items-center gap-2 mb-5 mt-8">
        <span>💡</span> {t.curiosities.title}
      </h3>
      <div className="grid sm:grid-cols-2 gap-4 mb-10">
        {t.curiosities.items.map((curiosity, index) => (
          <div 
            key={index} 
            className="p-4 bg-card/80 rounded-xl border-l-4 border-primary transition-all hover:translate-x-1 hover:bg-secondary/20"
          >
            <p className="text-sm text-foreground/80 leading-relaxed">{curiosity}</p>
          </div>
        ))}
      </div>

      {/* Timeline */}
      <h3 className="text-lg font-semibold text-primary flex items-center gap-2 mb-5 mt-8">
        <span>📅</span> {t.timeline.title}
      </h3>
      <div className="relative">
        <div className="absolute left-[7px] top-0 bottom-0 w-[2px] bg-gradient-to-b from-primary to-primary/20" />
        <div className="space-y-0">
          {t.timeline.items.map((item, index) => (
            <div key={index} className="timeline-item">
              <span className="text-primary font-bold text-sm">{item.year}</span>
              <p className="text-foreground/80 text-sm mt-1">{item.event}</p>
            </div>
          ))}
        </div>
      </div>

      {/* Kodokan */}
      <h3 className="text-lg font-semibold text-primary flex items-center gap-2 mb-5 mt-10">
        <span>🏛️</span> {t.kodokan.title}
      </h3>
      <div className="card-judo">
        <div className="space-y-3">
          {t.kodokan.facts.map((fact, index) => (
            <div key={index} className="flex items-start gap-3 p-3 bg-black/20 rounded-lg">
              <span className="text-primary text-sm mt-0.5">◆</span>
              <p className="text-sm text-foreground/80">{fact}</p>
            </div>
          ))}
        </div>
      </div>

      {/* World Origins */}
      <h3 className="text-lg font-semibold text-primary flex items-center gap-2 mb-5 mt-10">
        <span>🌍</span> {t.origins.title}
      </h3>
      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4 mb-10">
        {t.origins.items.map((origin, index) => (
          <div key={index} className="card-red p-5 hover:border-primary transition-all hover:-translate-y-1">
            <h4 className="text-primary font-bold text-lg mb-2">{origin.country}</h4>
            <p className="text-sm text-foreground/70 leading-relaxed">{origin.desc}</p>
          </div>
        ))}
      </div>

      {/* Brazil Timeline */}
      <h3 className="text-lg font-semibold text-primary flex items-center gap-2 mb-5 mt-10">
        <span>🇧🇷</span> {t.brazil.title}
      </h3>
      <div className="relative">
        <div className="absolute left-[7px] top-0 bottom-0 w-[2px] bg-gradient-to-b from-green-500 to-green-500/20" />
        <div className="space-y-0">
          {t.brazil.items.map((item, index) => (
            <div key={index} className="timeline-item">
              <span className="text-green-400 font-bold text-sm">{item.year}</span>
              <p className="text-foreground/80 text-sm mt-1">{item.event}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default HistoriaSection;
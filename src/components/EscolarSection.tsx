import { useLanguage } from '@/contexts/LanguageContext';

const EscolarSection = () => {
  const { language } = useLanguage();

  const content = {
    pt: {
      title: 'Judô Escolar',
      intro: 'O judô escolar desenvolve aspectos físicos, cognitivos, sociais e emocionais através dos princípios de respeito, disciplina e cooperação. É uma ferramenta poderosa de formação do caráter e desenvolvimento integral da criança e do adolescente.',
      beltSystem: 'Sistema de Faixas Infantis',
      pedagogyTitle: 'Princípios Pedagógicos',
      methodology: 'Metodologia por Fases de Desenvolvimento',
      guidingPrinciples: 'Princípios Norteadores',
      competitions: 'Competições por Categoria',
      benefits: 'Benefícios do Judô para Crianças',
      teacherRole: 'Papel do Professor',
      responsibilities: 'Responsabilidades',
      training: 'Formação Recomendada',
      faixas: [
        { cor: 'bg-white', titulo: 'Faixa Branca', emoji: '⬜', idade: 'Iniciantes (qualquer idade)', conteudo: 'Ukemi básico, etiqueta do dojô, primeiros contatos, saudações' },
        { cor: 'bg-gray-400', titulo: 'Faixa Cinza', emoji: '🔘', idade: '4-6 anos', conteudo: 'Jogos educativos, primeira técnica, lateralidade, coordenação' },
        { cor: 'bg-blue-600', titulo: 'Faixa Azul', emoji: '🔵', idade: '7-9 anos', conteudo: 'Técnicas básicas de projeção e imobilização, movimentação' },
        { cor: 'bg-yellow-400', titulo: 'Faixa Amarela', emoji: '🟡', idade: '10-12 anos', conteudo: 'Ampliação do repertório técnico, combinações simples' },
        { cor: 'bg-orange-500', titulo: 'Faixa Laranja', emoji: '🟠', idade: '13-14 anos', conteudo: 'Introdução à competição, estratégias básicas de luta' },
        { cor: 'bg-green-500', titulo: 'Faixa Verde', emoji: '🟢', idade: '15-16 anos', conteudo: 'Preparação para graduação adulta, técnicas avançadas, katas' },
      ],
      pedagogia: [
        { titulo: 'Ludicidade', icon: '遊', desc: 'O ensino para crianças (4-12 anos) deve priorizar jogos e brincadeiras, desenvolvendo funções executivas e psicomotoras de forma natural e prazerosa.' },
        { titulo: 'Progressão', icon: '進', desc: 'Idade 7-10 anos é ideal para introdução de movimentos simples. O sistema Gokyo e técnicas de solo devem ser introduzidos gradualmente.' },
        { titulo: 'Valores', icon: '徳', desc: 'Ênfase nos valores morais do judô: cortesia, coragem, sinceridade, honra, modéstia, respeito, autocontrole e amizade.' },
        { titulo: 'Segurança', icon: '守', desc: 'Ukemi (quedas) deve ser a base do treinamento infantil. Competições devem ser adaptadas à idade. Proteção é prioridade absoluta.' },
      ],
      fases: [
        { fase: 'Fase 1 (4-6 anos)', desc: 'Jogos motores, brincadeiras de movimento, ukemi lúdico, primeiros contatos' },
        { fase: 'Fase 2 (7-9 anos)', desc: 'Técnicas básicas simplificadas, jogos de oposição, introdução às saudações' },
        { fase: 'Fase 3 (10-12 anos)', desc: 'Gokyo básico, randori controlado, primeiras competições adaptadas' },
        { fase: 'Fase 4 (13-14 anos)', desc: 'Transição para judô adulto, técnicas completas, competições regulares' },
      ],
      principios: [
        'Respeitar o desenvolvimento motor de cada faixa etária', 'Priorizar o lúdico sobre o competitivo em crianças pequenas',
        'Desenvolver todas as capacidades físicas de forma equilibrada', 'Ensinar valores através da prática, não apenas teoria',
        'Incluir a família no processo de aprendizagem', 'Adaptar regras de competição para cada faixa etária',
      ],
      competicoesInfantis: [
        { cat: 'Festival', idade: 'Até 8 anos', formato: 'Participativo, sem classificação' },
        { cat: 'Sub-11', idade: '9-10 anos', formato: 'Com classificação, medalhas' },
        { cat: 'Sub-13', idade: '11-12 anos', formato: 'Regras adaptadas, tempo reduzido' },
        { cat: 'Sub-15 (Infantil)', idade: '13-14 anos', formato: 'Próximo às regras oficiais' },
      ],
      beneficios: [
        { icon: '集', text: 'Concentração e foco' }, { icon: '仲', text: 'Socialização e trabalho em equipe' },
        { icon: '体', text: 'Coordenação motora' }, { icon: '信', text: 'Autoconfiança e autoestima' },
        { icon: '律', text: 'Disciplina e respeito' }, { icon: '鍛', text: 'Condicionamento físico' },
        { icon: '敬', text: 'Respeito aos outros e hierarquia' }, { icon: '勝', text: 'Superação de limites pessoais' },
      ],
      responsabilidades: ['Garantir segurança física e emocional', 'Ser exemplo dos valores do judô', 'Adaptar metodologia à faixa etária', 'Manter comunicação com famílias', 'Identificar talentos e dificuldades'],
      formacao: ['Graduação mínima: Faixa Preta', 'Curso de capacitação infantil', 'Conhecimento em desenvolvimento motor', 'Formação em primeiros socorros', 'Atualização constante (seminários)'],
    },
    en: {
      title: 'School Judo',
      intro: 'School judo develops physical, cognitive, social and emotional aspects through the principles of respect, discipline and cooperation. It is a powerful tool for character building and comprehensive development of children and adolescents.',
      beltSystem: 'Children Belt System',
      pedagogyTitle: 'Pedagogical Principles',
      methodology: 'Methodology by Development Phases',
      guidingPrinciples: 'Guiding Principles',
      competitions: 'Competitions by Category',
      benefits: 'Benefits of Judo for Children',
      teacherRole: 'Teacher\'s Role',
      responsibilities: 'Responsibilities',
      training: 'Recommended Training',
      faixas: [
        { cor: 'bg-white', titulo: 'White Belt', emoji: '⬜', idade: 'Beginners (any age)', conteudo: 'Basic ukemi, dojo etiquette, first contacts, greetings' },
        { cor: 'bg-gray-400', titulo: 'Gray Belt', emoji: '🔘', idade: '4-6 years', conteudo: 'Educational games, first technique, laterality, coordination' },
        { cor: 'bg-blue-600', titulo: 'Blue Belt', emoji: '🔵', idade: '7-9 years', conteudo: 'Basic throwing and immobilization techniques, movement' },
        { cor: 'bg-yellow-400', titulo: 'Yellow Belt', emoji: '🟡', idade: '10-12 years', conteudo: 'Expanding technical repertoire, simple combinations' },
        { cor: 'bg-orange-500', titulo: 'Orange Belt', emoji: '🟠', idade: '13-14 years', conteudo: 'Introduction to competition, basic fighting strategies' },
        { cor: 'bg-green-500', titulo: 'Green Belt', emoji: '🟢', idade: '15-16 years', conteudo: 'Preparation for adult grading, advanced techniques, katas' },
      ],
      pedagogia: [
        { titulo: 'Playfulness', icon: '遊', desc: 'Teaching for children (4-12 years) should prioritize games and play, developing executive and psychomotor functions naturally and pleasurably.' },
        { titulo: 'Progression', icon: '進', desc: 'Age 7-10 is ideal for introducing simple movements. The Gokyo system and ground techniques should be introduced gradually.' },
        { titulo: 'Values', icon: '徳', desc: 'Emphasis on judo moral values: courtesy, courage, sincerity, honor, modesty, respect, self-control and friendship.' },
        { titulo: 'Safety', icon: '守', desc: 'Ukemi (falls) should be the foundation of children\'s training. Competitions must be adapted to age. Protection is absolute priority.' },
      ],
      fases: [
        { fase: 'Phase 1 (4-6 years)', desc: 'Motor games, movement play, playful ukemi, first contacts' },
        { fase: 'Phase 2 (7-9 years)', desc: 'Simplified basic techniques, opposition games, introduction to greetings' },
        { fase: 'Phase 3 (10-12 years)', desc: 'Basic Gokyo, controlled randori, first adapted competitions' },
        { fase: 'Phase 4 (13-14 years)', desc: 'Transition to adult judo, complete techniques, regular competitions' },
      ],
      principios: [
        'Respect the motor development of each age group', 'Prioritize play over competition in young children',
        'Develop all physical abilities in a balanced way', 'Teach values through practice, not just theory',
        'Include family in the learning process', 'Adapt competition rules for each age group',
      ],
      competicoesInfantis: [
        { cat: 'Festival', idade: 'Up to 8 years', formato: 'Participatory, no ranking' },
        { cat: 'U-11', idade: '9-10 years', formato: 'With ranking, medals' },
        { cat: 'U-13', idade: '11-12 years', formato: 'Adapted rules, reduced time' },
        { cat: 'U-15 (Infantile)', idade: '13-14 years', formato: 'Close to official rules' },
      ],
      beneficios: [
        { icon: '集', text: 'Concentration and focus' }, { icon: '仲', text: 'Socialization and teamwork' },
        { icon: '体', text: 'Motor coordination' }, { icon: '信', text: 'Self-confidence and self-esteem' },
        { icon: '律', text: 'Discipline and respect' }, { icon: '鍛', text: 'Physical conditioning' },
        { icon: '敬', text: 'Respect for others and hierarchy' }, { icon: '勝', text: 'Overcoming personal limits' },
      ],
      responsabilidades: ['Ensure physical and emotional safety', 'Be an example of judo values', 'Adapt methodology to age group', 'Maintain communication with families', 'Identify talents and difficulties'],
      formacao: ['Minimum: Black Belt', 'Children\'s training course', 'Knowledge in motor development', 'First aid training', 'Constant updates (seminars)'],
    }
  };

  const t = content[language === 'en' ? 'en' : 'pt'];

  return (
    <div className="animate-fade-in">
      <h2 className="section-title"><span className="section-title-icon">🔰</span>{t.title}</h2>
      <div className="card-judo mb-8"><p className="text-sm text-foreground/70">{t.intro}</p></div>

      <h3 className="text-lg font-semibold text-primary flex items-center gap-2 mb-4"><span>🥋</span> {t.beltSystem}</h3>
      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4 mb-10">
        {t.faixas.map((faixa, index) => (
          <div key={index} className="card-judo">
            <div className="flex items-center gap-3 mb-3"><div className={`w-10 h-3 rounded-full ${faixa.cor}`}></div><div><h4 className="font-semibold text-white text-sm">{faixa.emoji} {faixa.titulo}</h4><p className="text-xs text-primary">{faixa.idade}</p></div></div>
            <p className="text-xs text-muted-foreground">{faixa.conteudo}</p>
          </div>
        ))}
      </div>

      <h3 className="text-lg font-semibold text-primary flex items-center gap-2 mb-4"><span>📜</span> {t.pedagogyTitle}</h3>
      <div className="grid sm:grid-cols-2 gap-4 mb-10">
        {t.pedagogia.map((item, index) => (
          <div key={index} className="card-red p-5"><div className="flex items-center gap-3 mb-2"><span className="text-2xl">{item.icon}</span><h4 className="font-semibold text-white">{item.titulo}</h4></div><p className="text-sm text-foreground/70">{item.desc}</p></div>
        ))}
      </div>

      <h3 className="text-lg font-semibold text-primary flex items-center gap-2 mb-4"><span>🥋</span> {t.methodology}</h3>
      <div className="card-judo mb-8">
        <div className="grid sm:grid-cols-2 gap-4 mb-6">
          {t.fases.map((item, index) => (<div key={index} className="bg-muted/20 rounded-lg p-4"><h4 className="font-semibold text-primary text-sm mb-2">{item.fase}</h4><p className="text-xs text-foreground/70">{item.desc}</p></div>))}
        </div>
        <h4 className="font-semibold text-white mb-3">{t.guidingPrinciples}</h4>
        <div className="grid sm:grid-cols-2 gap-2">
          {t.principios.map((princ, index) => (<div key={index} className="flex items-start gap-2"><span className="text-primary">✓</span><p className="text-xs text-foreground/70">{princ}</p></div>))}
        </div>
      </div>

      <h3 className="text-lg font-semibold text-primary flex items-center gap-2 mb-4"><span>🥇</span> {t.competitions}</h3>
      <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-10">
        {t.competicoesInfantis.map((comp, index) => (<div key={index} className="card-judo text-center"><h4 className="font-semibold text-white">{comp.cat}</h4><p className="text-xs text-primary mb-1">{comp.idade}</p><p className="text-xs text-muted-foreground">{comp.formato}</p></div>))}
      </div>

      <h3 className="text-lg font-semibold text-primary flex items-center gap-2 mb-4"><span>✨</span> {t.benefits}</h3>
      <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-3 mb-10">
        {t.beneficios.map((item, index) => (<div key={index} className="card-judo text-center p-4"><span className="text-2xl block mb-2">{item.icon}</span><p className="text-sm text-white">{item.text}</p></div>))}
      </div>

      <h3 className="text-lg font-semibold text-primary flex items-center gap-2 mb-4"><span>🥋</span> {t.teacherRole}</h3>
      <div className="card-red p-6">
        <div className="grid sm:grid-cols-2 gap-4">
          <div><h4 className="font-semibold text-white mb-3">{t.responsibilities}</h4><ul className="space-y-2 text-sm text-foreground/70">{t.responsabilidades.map((r, i) => <li key={i}>• {r}</li>)}</ul></div>
          <div><h4 className="font-semibold text-white mb-3">{t.training}</h4><ul className="space-y-2 text-sm text-foreground/70">{t.formacao.map((f, i) => <li key={i}>• {f}</li>)}</ul></div>
        </div>
      </div>
    </div>
  );
};

export default EscolarSection;

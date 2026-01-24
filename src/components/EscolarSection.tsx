const EscolarSection = () => {
  const faixas = [
    { cor: 'bg-white', titulo: 'Faixa Branca', emoji: '⬜', idade: 'Iniciantes (qualquer idade)', conteudo: 'Ukemi básico, etiqueta do dojô, primeiros contatos, saudações' },
    { cor: 'bg-gray-400', titulo: 'Faixa Cinza', emoji: '🔘', idade: '4-6 anos', conteudo: 'Jogos educativos, primeira técnica, lateralidade, coordenação' },
    { cor: 'bg-blue-600', titulo: 'Faixa Azul', emoji: '🔵', idade: '7-9 anos', conteudo: 'Técnicas básicas de projeção e imobilização, movimentação' },
    { cor: 'bg-yellow-400', titulo: 'Faixa Amarela', emoji: '🟡', idade: '10-12 anos', conteudo: 'Ampliação do repertório técnico, combinações simples' },
    { cor: 'bg-orange-500', titulo: 'Faixa Laranja', emoji: '🟠', idade: '13-14 anos', conteudo: 'Introdução à competição, estratégias básicas de luta' },
    { cor: 'bg-green-500', titulo: 'Faixa Verde', emoji: '🟢', idade: '15-16 anos', conteudo: 'Preparação para graduação adulta, técnicas avançadas, katas' },
  ];

  const pedagogia = [
    { 
      titulo: 'Ludicidade', 
      icon: '🎮',
      desc: 'O ensino para crianças (4-12 anos) deve priorizar jogos e brincadeiras, desenvolvendo funções executivas e psicomotoras de forma natural e prazerosa. A criança aprende brincando.' 
    },
    { 
      titulo: 'Progressão', 
      icon: '📈',
      desc: 'Idade 7-10 anos é ideal para introdução de movimentos simples. O sistema Gokyo e técnicas de solo devem ser introduzidos gradualmente, respeitando a maturação.' 
    },
    { 
      titulo: 'Valores', 
      icon: '💎',
      desc: 'Ênfase nos valores morais do judô: cortesia (Rei), coragem (Yuki), sinceridade (Makoto), honra (Meiyo), modéstia (Kenkyo), respeito (Sonkei), autocontrole (Jisei) e amizade (Yujo).' 
    },
    { 
      titulo: 'Segurança', 
      icon: '🛡️',
      desc: 'Ukemi (quedas) deve ser a base do treinamento infantil. Competições devem ser adaptadas à idade. Proteção é prioridade absoluta.' 
    },
  ];

  const beneficios = [
    { icon: '🧠', text: 'Concentração e foco' },
    { icon: '🤝', text: 'Socialização e trabalho em equipe' },
    { icon: '💪', text: 'Coordenação motora' },
    { icon: '😊', text: 'Autoconfiança e autoestima' },
    { icon: '🎯', text: 'Disciplina e respeito' },
    { icon: '🏃', text: 'Condicionamento físico' },
    { icon: '🙏', text: 'Respeito aos outros e hierarquia' },
    { icon: '🌟', text: 'Superação de limites pessoais' },
  ];

  const metodologia = {
    fases: [
      { fase: 'Fase 1 (4-6 anos)', desc: 'Jogos motores, brincadeiras de movimento, ukemi lúdico, primeiros contatos' },
      { fase: 'Fase 2 (7-9 anos)', desc: 'Técnicas básicas simplificadas, jogos de oposição, introdução às saudações' },
      { fase: 'Fase 3 (10-12 anos)', desc: 'Gokyo básico, randori controlado, primeiras competições adaptadas' },
      { fase: 'Fase 4 (13-14 anos)', desc: 'Transição para judô adulto, técnicas completas, competições regulares' },
    ],
    principios: [
      'Respeitar o desenvolvimento motor de cada faixa etária',
      'Priorizar o lúdico sobre o competitivo em crianças pequenas',
      'Desenvolver todas as capacidades físicas de forma equilibrada',
      'Ensinar valores através da prática, não apenas teoria',
      'Incluir a família no processo de aprendizagem',
      'Adaptar regras de competição para cada faixa etária',
    ],
  };

  const competicoesInfantis = [
    { cat: 'Festival', idade: 'Até 8 anos', formato: 'Participativo, sem classificação' },
    { cat: 'Sub-11', idade: '9-10 anos', formato: 'Com classificação, medalhas' },
    { cat: 'Sub-13', idade: '11-12 anos', formato: 'Regras adaptadas, tempo reduzido' },
    { cat: 'Sub-15 (Infantil)', idade: '13-14 anos', formato: 'Próximo às regras oficiais' },
  ];

  return (
    <div className="animate-fade-in">
      <h2 className="section-title">
        <span className="section-title-icon">🎓</span>
        Judô Escolar
      </h2>

      <div className="card-judo mb-8">
        <p className="text-sm text-foreground/70">
          O judô escolar desenvolve aspectos <strong>físicos, cognitivos, sociais e emocionais</strong> através 
          dos princípios de respeito, disciplina e cooperação. É uma ferramenta poderosa de formação do caráter
          e desenvolvimento integral da criança e do adolescente.
        </p>
      </div>

      {/* Faixas Infantis */}
      <h3 className="text-lg font-semibold text-primary flex items-center gap-2 mb-4">
        <span>🥋</span> Sistema de Faixas Infantis
      </h3>
      
      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4 mb-10">
        {faixas.map((faixa, index) => (
          <div key={index} className="card-judo">
            <div className="flex items-center gap-3 mb-3">
              <div className={`w-10 h-3 rounded-full ${faixa.cor}`}></div>
              <div>
                <h4 className="font-semibold text-white text-sm">{faixa.emoji} {faixa.titulo}</h4>
                <p className="text-xs text-primary">{faixa.idade}</p>
              </div>
            </div>
            <p className="text-xs text-muted-foreground">{faixa.conteudo}</p>
          </div>
        ))}
      </div>

      {/* Pedagogia */}
      <h3 className="text-lg font-semibold text-primary flex items-center gap-2 mb-4">
        <span>📚</span> Princípios Pedagógicos
      </h3>
      
      <div className="grid sm:grid-cols-2 gap-4 mb-10">
        {pedagogia.map((item, index) => (
          <div key={index} className="card-red p-5">
            <div className="flex items-center gap-3 mb-2">
              <span className="text-2xl">{item.icon}</span>
              <h4 className="font-semibold text-white">{item.titulo}</h4>
            </div>
            <p className="text-sm text-foreground/70">{item.desc}</p>
          </div>
        ))}
      </div>

      {/* Metodologia por Fases */}
      <h3 className="text-lg font-semibold text-primary flex items-center gap-2 mb-4">
        <span>📊</span> Metodologia por Fases de Desenvolvimento
      </h3>
      
      <div className="card-judo mb-8">
        <div className="grid sm:grid-cols-2 gap-4 mb-6">
          {metodologia.fases.map((item, index) => (
            <div key={index} className="bg-muted/20 rounded-lg p-4">
              <h4 className="font-semibold text-primary text-sm mb-2">{item.fase}</h4>
              <p className="text-xs text-foreground/70">{item.desc}</p>
            </div>
          ))}
        </div>
        <h4 className="font-semibold text-white mb-3">Princípios Norteadores</h4>
        <div className="grid sm:grid-cols-2 gap-2">
          {metodologia.principios.map((princ, index) => (
            <div key={index} className="flex items-start gap-2">
              <span className="text-primary">✓</span>
              <p className="text-xs text-foreground/70">{princ}</p>
            </div>
          ))}
        </div>
      </div>

      {/* Competições Infantis */}
      <h3 className="text-lg font-semibold text-primary flex items-center gap-2 mb-4">
        <span>🏆</span> Competições por Categoria
      </h3>
      
      <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-10">
        {competicoesInfantis.map((comp, index) => (
          <div key={index} className="card-judo text-center">
            <h4 className="font-semibold text-white">{comp.cat}</h4>
            <p className="text-xs text-primary mb-1">{comp.idade}</p>
            <p className="text-xs text-muted-foreground">{comp.formato}</p>
          </div>
        ))}
      </div>

      {/* Benefícios */}
      <h3 className="text-lg font-semibold text-primary flex items-center gap-2 mb-4">
        <span>✨</span> Benefícios do Judô para Crianças
      </h3>
      
      <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-3">
        {beneficios.map((item, index) => (
          <div key={index} className="card-judo text-center p-4">
            <span className="text-2xl block mb-2">{item.icon}</span>
            <p className="text-sm text-white">{item.text}</p>
          </div>
        ))}
      </div>

      {/* Papel do Professor */}
      <h3 className="text-lg font-semibold text-primary flex items-center gap-2 mb-4 mt-10">
        <span>👨‍🏫</span> Papel do Professor
      </h3>
      
      <div className="card-red p-6">
        <div className="grid sm:grid-cols-2 gap-4">
          <div>
            <h4 className="font-semibold text-white mb-3">Responsabilidades</h4>
            <ul className="space-y-2 text-sm text-foreground/70">
              <li>• Garantir segurança física e emocional</li>
              <li>• Ser exemplo dos valores do judô</li>
              <li>• Adaptar metodologia à faixa etária</li>
              <li>• Manter comunicação com famílias</li>
              <li>• Identificar talentos e dificuldades</li>
            </ul>
          </div>
          <div>
            <h4 className="font-semibold text-white mb-3">Formação Recomendada</h4>
            <ul className="space-y-2 text-sm text-foreground/70">
              <li>• Graduação mínima: Faixa Preta</li>
              <li>• Curso de capacitação infantil</li>
              <li>• Conhecimento em desenvolvimento motor</li>
              <li>• Formação em primeiros socorros</li>
              <li>• Atualização constante (seminários)</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default EscolarSection;

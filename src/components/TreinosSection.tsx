const TreinosSection = () => {
  const practiceForms = [
    { 
      kanji: '乱取り', 
      romaji: 'Randori', 
      title: 'Treinamento Livre', 
      desc: 'Método para aprender técnicas de ataque e defesa movimentando-se livremente, sem causar dano ao outro. É a aplicação prática das técnicas em situação dinâmica.' 
    },
    { 
      kanji: '形', 
      romaji: 'Kata', 
      title: 'Formas', 
      desc: 'Método de aplicar técnicas pré-estabelecidas com um parceiro. Preserva a tradição e ensina os princípios fundamentais. Ex: Nage-no-Kata (Formas de Projeção).' 
    },
    { 
      kanji: '講義', 
      romaji: 'Kogi', 
      title: 'Palestra', 
      desc: 'Aulas orais sobre técnicas de Judô, aspectos espirituais, filosóficos, história e aplicação na vida social.' 
    },
    { 
      kanji: '問答', 
      romaji: 'Mondo', 
      title: 'Perguntas e Respostas', 
      desc: 'Aprendizagem através de perguntas e respostas mútuas entre professor e aluno. Estimula o pensamento crítico.' 
    },
    { 
      kanji: '試合', 
      romaji: 'Shiai', 
      title: 'Competição', 
      desc: 'Teste de desenvolvimento técnico em situações de combate real com pontuação. Aplica tudo que foi aprendido sob pressão.' 
    },
    { 
      kanji: '打ち込み', 
      romaji: 'Uchi-Komi', 
      title: 'Entradas Repetidas', 
      desc: 'Repetição sistemática das entradas das técnicas sem completar a projeção. Desenvolve automatismo, velocidade e precisão nos movimentos.' 
    },
    { 
      kanji: '投げ込み', 
      romaji: 'Nage-Komi', 
      title: 'Projeções Completas', 
      desc: 'Prática de projeções completas com o parceiro caindo. Desenvolve o timing, kuzushi (desequilíbrio) e a finalização das técnicas.' 
    },
    { 
      kanji: '回し', 
      romaji: 'Mawashi', 
      title: 'Treinamento Rotativo', 
      desc: 'Troca constante de parceiros durante o randori. Permite experimentar diferentes estilos, pesos e níveis técnicos.' 
    },
  ];

  const trainingTips = [
    { icon: '🔄', title: 'Aquecimento', desc: 'Sempre inicie com aquecimento geral e específico para evitar lesões' },
    { icon: '🎯', title: 'Foco', desc: 'Concentre-se em poucas técnicas por treino para melhor absorção' },
    { icon: '🤝', title: 'Parceiro', desc: 'Respeite seu parceiro - ele é essencial para seu desenvolvimento' },
    { icon: '📊', title: 'Progressão', desc: 'Evolua gradualmente: básico → intermediário → avançado' },
    { icon: '🧘', title: 'Ukemi', desc: 'Pratique quedas regularmente - é a base da segurança no Judô' },
    { icon: '💪', title: 'Recuperação', desc: 'Descanse adequadamente entre treinos intensos' },
    { icon: '📝', title: 'Anotações', desc: 'Mantenha um diário de treinos para acompanhar sua evolução' },
    { icon: '🎥', title: 'Vídeos', desc: 'Grave seus treinos para análise técnica posterior' },
  ];

  const classStructure = [
    { num: 1, title: 'Saudação e Aquecimento', time: '10-15 min', desc: 'Rei, alongamento geral e específico, preparação corporal' },
    { num: 2, title: 'Ukemi (Quedas)', time: '10 min', desc: 'Mae-ukemi, ushiro-ukemi, yoko-ukemi, zenpo-kaiten' },
    { num: 3, title: 'Técnica Principal', time: '30-40 min', desc: 'Uchi-komi, Nage-komi, técnicas de solo, combinações' },
    { num: 4, title: 'Randori e Encerramento', time: '20-30 min', desc: 'Treino livre (tachi-waza e ne-waza), saudação final' },
  ];

  const physicalPreparation = [
    { icon: '🏃', title: 'Resistência', desc: 'Corrida, corda, circuitos aeróbicos para manter ritmo no combate' },
    { icon: '💪', title: 'Força', desc: 'Musculação funcional, exercícios com peso corporal, pegada' },
    { icon: '🤸', title: 'Flexibilidade', desc: 'Alongamentos dinâmicos e estáticos para amplitude de movimento' },
    { icon: '⚡', title: 'Explosão', desc: 'Pliometria, sprints, movimentos rápidos para entradas' },
    { icon: '🧠', title: 'Coordenação', desc: 'Exercícios de agilidade, mudança de direção, timing' },
    { icon: '🎯', title: 'Grip', desc: 'Fortalecimento de pegada com gi, toalhas, caneleiras' },
  ];

  return (
    <div className="animate-fade-in">
      <h2 className="section-title">
        <span className="section-title-icon">練</span>
        Treinamentos - Métodos de Prática
      </h2>

      <div className="card-judo mb-8">
        <p className="text-sm text-foreground/70">
          O Judô possui diversos métodos de treinamento, cada um com objetivos específicos. 
          A combinação equilibrada dessas formas desenvolve o judoca completo técnica, física e mentalmente.
        </p>
      </div>

      {/* Métodos de Treino */}
      <h3 className="text-lg font-semibold text-primary flex items-center gap-2 mb-4">
        <span>🥋</span> Métodos de Treinamento
      </h3>
      
      <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-10">
        {practiceForms.map((form, index) => (
          <div key={index} className="card-judo">
            <div className="flex items-center gap-3 mb-3">
              <span className="text-2xl font-serif text-primary">{form.kanji}</span>
              <div>
                <h4 className="font-semibold text-white">{form.title}</h4>
                <p className="text-xs text-muted-foreground">{form.romaji}</p>
              </div>
            </div>
            <p className="text-sm text-foreground/70">{form.desc}</p>
          </div>
        ))}
      </div>

      {/* Estrutura da Aula */}
      <h3 className="text-lg font-semibold text-primary flex items-center gap-2 mb-4">
        <span>📋</span> Estrutura Típica de uma Aula
      </h3>
      
      <div className="card-red p-6 mb-10">
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {classStructure.map((item, index) => (
            <div key={index} className="text-center">
              <div className="w-12 h-12 rounded-full bg-primary/20 flex items-center justify-center mx-auto mb-2">
                <span className="text-xl font-bold text-primary">{item.num}</span>
              </div>
              <h4 className="font-semibold text-white text-sm">{item.title}</h4>
              <p className="text-xs text-primary mb-1">{item.time}</p>
              <p className="text-xs text-muted-foreground">{item.desc}</p>
            </div>
          ))}
        </div>
      </div>

      {/* Preparação Física */}
      <h3 className="text-lg font-semibold text-primary flex items-center gap-2 mb-4">
        <span>🏋️</span> Preparação Física Específica
      </h3>
      
      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4 mb-10">
        {physicalPreparation.map((item, index) => (
          <div key={index} className="card-judo flex items-start gap-3">
            <span className="text-2xl">{item.icon}</span>
            <div>
              <h4 className="font-semibold text-white text-sm">{item.title}</h4>
              <p className="text-xs text-muted-foreground">{item.desc}</p>
            </div>
          </div>
        ))}
      </div>

      {/* Dicas de Treino */}
      <h3 className="text-lg font-semibold text-primary flex items-center gap-2 mb-4">
        <span>💡</span> Dicas de Treinamento
      </h3>
      
      <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
        {trainingTips.map((tip, index) => (
          <div key={index} className="card-judo flex items-start gap-3">
            <span className="text-2xl">{tip.icon}</span>
            <div>
              <h4 className="font-semibold text-white text-sm">{tip.title}</h4>
              <p className="text-xs text-muted-foreground">{tip.desc}</p>
            </div>
          </div>
        ))}
      </div>

      {/* Progressão de Treino */}
      <h3 className="text-lg font-semibold text-primary flex items-center gap-2 mb-4 mt-10">
        <span>📈</span> Progressão Recomendada
      </h3>
      
      <div className="card-judo">
        <div className="grid sm:grid-cols-3 gap-6">
          <div className="text-center p-4 bg-green-500/10 border border-green-500/30 rounded-xl">
            <h4 className="font-semibold text-green-400 mb-2">Iniciante</h4>
            <ul className="text-xs text-foreground/70 space-y-1 text-left">
              <li>• Ukemi (quedas) - base de tudo</li>
              <li>• 2-3 técnicas por grupo</li>
              <li>• Movimentação básica</li>
              <li>• Etiqueta e saudações</li>
            </ul>
          </div>
          <div className="text-center p-4 bg-yellow-500/10 border border-yellow-500/30 rounded-xl">
            <h4 className="font-semibold text-yellow-400 mb-2">Intermediário</h4>
            <ul className="text-xs text-foreground/70 space-y-1 text-left">
              <li>• Gokyo completo</li>
              <li>• Combinações de técnicas</li>
              <li>• Ne-waza (solo)</li>
              <li>• Randori regular</li>
            </ul>
          </div>
          <div className="text-center p-4 bg-red-500/10 border border-red-500/30 rounded-xl">
            <h4 className="font-semibold text-red-400 mb-2">Avançado</h4>
            <ul className="text-xs text-foreground/70 space-y-1 text-left">
              <li>• Tokui-waza (especialização)</li>
              <li>• Renraku-waza (encadeamentos)</li>
              <li>• Katas formais</li>
              <li>• Estratégia competitiva</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TreinosSection;

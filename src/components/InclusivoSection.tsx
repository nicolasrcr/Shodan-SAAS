const InclusivoSection = () => {
  const objetivos = [
    { titulo: 'Social', desc: 'Integração, pertencimento e respeito mútuo', icone: '🤝', cor: 'bg-green-500/20 border-green-500/30' },
    { titulo: 'Cognitivo', desc: 'Concentração, estratégia e tomada de decisão', icone: '🧠', cor: 'bg-blue-500/20 border-blue-500/30' },
    { titulo: 'Motor', desc: 'Coordenação, equilíbrio e consciência corporal', icone: '🏃', cor: 'bg-orange-500/20 border-orange-500/30' },
    { titulo: 'Emocional', desc: 'Autoestima, autocontrole e resiliência', icone: '💚', cor: 'bg-purple-500/20 border-purple-500/30' },
  ];

  const abordagens = [
    { 
      tipo: 'TEA', 
      nome: 'Transtorno do Espectro Autista',
      cor: 'bg-blue-500',
      estrategias: [
        'Ambiente estruturado e previsível',
        'Rotinas claras e consistentes',
        'Uso de pictogramas e comunicação visual',
        'Redução de estímulos sensoriais excessivos',
        'Instruções curtas e objetivas',
        'Tempo de adaptação individual',
      ]
    },
    { 
      tipo: 'TDAH', 
      nome: 'Déficit de Atenção e Hiperatividade',
      cor: 'bg-yellow-500',
      estrategias: [
        'Atividades dinâmicas e variadas',
        'Pausas frequentes entre exercícios',
        'Reforço positivo constante',
        'Tarefas curtas e objetivas',
        'Canalizar energia através do movimento',
        'Evitar filas longas de espera',
      ]
    },
    { 
      tipo: 'AH/SD', 
      nome: 'Altas Habilidades/Superdotação',
      cor: 'bg-purple-500',
      estrategias: [
        'Desafios extras e aprofundamento',
        'Papel de liderança e mentoria',
        'Aprofundamento técnico e teórico',
        'Mentoria de colegas menos experientes',
        'Projetos especiais e pesquisas',
        'Participação em eventos avançados',
      ]
    },
    { 
      tipo: 'DV', 
      nome: 'Deficiência Visual',
      cor: 'bg-gray-500',
      estrategias: [
        'Comunicação tátil e verbal detalhada',
        'Descrição clara de todos os movimentos',
        'Contato físico guiado para ensino',
        'Uso de sinais sonoros',
        'Ambiente organizado e previsível',
        'Identificação verbal ao se aproximar',
      ]
    },
    { 
      tipo: 'DA', 
      nome: 'Deficiência Auditiva',
      cor: 'bg-pink-500',
      estrategias: [
        'Sinais visuais para comandos',
        'Demonstração física das técnicas',
        'Posicionamento frontal do professor',
        'Uso de LIBRAS quando possível',
        'Contato visual antes de falar',
        'Repetição através de demonstração',
      ]
    },
    { 
      tipo: 'DF', 
      nome: 'Deficiência Física',
      cor: 'bg-teal-500',
      estrategias: [
        'Adaptações técnicas individualizadas',
        'Foco em técnicas compatíveis',
        'Parajudô para atletas elegíveis',
        'Equipamentos adaptados se necessário',
        'Avaliação médica prévia',
        'Objetivos realistas e progressivos',
      ]
    },
    { 
      tipo: 'DI', 
      nome: 'Deficiência Intelectual',
      cor: 'bg-amber-500',
      estrategias: [
        'Linguagem simples e direta',
        'Demonstrações práticas',
        'Repetição paciente',
        'Fragmentação de técnicas em etapas',
        'Reforço positivo frequente',
        'Respeito ao tempo individual',
      ]
    },
    { 
      tipo: 'Síndrome de Down', 
      nome: 'Trissomia do Cromossomo 21',
      cor: 'bg-cyan-500',
      estrategias: [
        'Atenção à hipotonia muscular',
        'Fortalecimento progressivo',
        'Cuidado com articulações',
        'Atividades lúdicas',
        'Socialização incentivada',
        'Avaliação cardiológica prévia',
      ]
    },
  ];

  const principios = [
    'Respeitar o ritmo individual de cada praticante',
    'Adaptar a metodologia, não reduzir expectativas',
    'Promover ambiente acolhedor e sem julgamentos',
    'Celebrar pequenas conquistas e progressos',
    'Incluir família no processo de desenvolvimento',
    'Capacitar professores para atendimento inclusivo',
    'Usar linguagem respeitosa e pessoa-primeiro',
    'Focar nas potencialidades, não nas limitações',
  ];

  const parajudo = {
    intro: 'O Parajudô é a modalidade paralímpica do Judô para atletas com deficiência visual. Está presente nos Jogos Paralímpicos desde Seul 1988 (masculino) e Atenas 2004 (feminino).',
    classificacoes: [
      { classe: 'B1', desc: 'Cegueira total ou percepção de luz sem reconhecer formatos' },
      { classe: 'B2', desc: 'Baixa visão severa - até 2/60 ou campo visual de até 5°' },
      { classe: 'B3', desc: 'Baixa visão moderada - até 6/60 ou campo visual de até 20°' },
    ],
    regras: [
      'Atletas iniciam já com pegada (kumi-kata)',
      'Árbitro posiciona os atletas antes do Hajime',
      'Tatame com texturas diferentes nas bordas',
      'Não há penalização por sair da área',
      'Atletas B1 lutam com círculo vermelho no judogi',
    ],
    brasileiros: [
      'Antonio Tenório - 4x medalhista paralímpico',
      'Débora Menezes - Ouro em Tóquio 2020',
      'Alana Maldonado - Ouro em Tóquio 2020',
      'Wilians Araújo - Medalhista paralímpico',
    ],
  };

  return (
    <div className="animate-fade-in">
      <h2 className="section-title">
        <span className="section-title-icon">♿</span>
        Judô Inclusivo
      </h2>

      <div className="card-judo mb-8">
        <p className="text-sm text-foreground/70">
          O Judô é uma ferramenta poderosa de inclusão social. Seus princípios de respeito mútuo (<em>Jita Kyoei</em>) 
          e máxima eficiência (<em>Seiryoku Zenyo</em>) se aplicam perfeitamente ao trabalho com pessoas 
          com necessidades especiais. O tatame é um espaço de igualdade.
        </p>
      </div>

      {/* Objetivos */}
      <h3 className="text-lg font-semibold text-primary flex items-center gap-2 mb-4">
        <span>🎯</span> Objetivos do Judô Inclusivo
      </h3>
      
      <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-10">
        {objetivos.map((obj, index) => (
          <div key={index} className={`card-judo ${obj.cor} border`}>
            <div className="flex items-center gap-3 mb-2">
              <span className="text-2xl">{obj.icone}</span>
              <h4 className="font-semibold text-white">{obj.titulo}</h4>
            </div>
            <p className="text-sm text-muted-foreground">{obj.desc}</p>
          </div>
        ))}
      </div>

      {/* Abordagens Específicas */}
      <h3 className="text-lg font-semibold text-primary flex items-center gap-2 mb-4">
        <span>📋</span> Estratégias por Tipo de Necessidade
      </h3>
      
      <div className="grid sm:grid-cols-2 gap-4 mb-10">
        {abordagens.map((ab, index) => (
          <div key={index} className="card-judo">
            <div className="flex items-center gap-3 mb-3">
              <span className={`${ab.cor} text-white text-xs font-bold px-2 py-1 rounded`}>
                {ab.tipo}
              </span>
              <h4 className="font-semibold text-white text-sm">{ab.nome}</h4>
            </div>
            <ul className="space-y-1">
              {ab.estrategias.map((estrategia, i) => (
                <li key={i} className="text-xs text-muted-foreground flex items-start gap-2">
                  <span className="text-primary">•</span> {estrategia}
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>

      {/* Princípios */}
      <h3 className="text-lg font-semibold text-primary flex items-center gap-2 mb-4">
        <span>💡</span> Princípios Fundamentais
      </h3>
      
      <div className="card-red p-6 mb-10">
        <div className="grid sm:grid-cols-2 gap-3">
          {principios.map((princ, index) => (
            <div key={index} className="flex items-start gap-2">
              <span className="text-primary">✓</span>
              <p className="text-sm text-foreground/80">{princ}</p>
            </div>
          ))}
        </div>
      </div>

      {/* Parajudô */}
      <h3 className="text-lg font-semibold text-primary flex items-center gap-2 mb-4">
        <span>🏅</span> Parajudô
      </h3>
      
      <div className="card-judo mb-6">
        <p className="text-sm text-foreground/70 mb-4">{parajudo.intro}</p>
        
        <h4 className="font-semibold text-white mb-3">Classificação Visual</h4>
        <div className="grid sm:grid-cols-3 gap-4 mb-6">
          {parajudo.classificacoes.map((c, index) => (
            <div key={index} className="bg-background/30 rounded-lg p-3 text-center">
              <p className="text-primary font-bold text-lg">{c.classe}</p>
              <p className="text-xs text-muted-foreground">{c.desc}</p>
            </div>
          ))}
        </div>

        <h4 className="font-semibold text-white mb-3">Regras Específicas</h4>
        <ul className="space-y-2 mb-6">
          {parajudo.regras.map((regra, index) => (
            <li key={index} className="text-sm text-foreground/70 flex items-start gap-2">
              <span className="text-primary">•</span> {regra}
            </li>
          ))}
        </ul>

        <h4 className="font-semibold text-white mb-3">🇧🇷 Destaques Brasileiros</h4>
        <div className="grid sm:grid-cols-2 gap-2">
          {parajudo.brasileiros.map((atleta, index) => (
            <div key={index} className="bg-green-500/10 border border-green-500/30 rounded-lg p-2 text-center">
              <p className="text-sm text-foreground/80">{atleta}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default InclusivoSection;

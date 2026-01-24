const SocorrosSection = () => {
  const emergencias = {
    situacoes: [
      'Perda de consciência (desmaio prolongado)',
      'Dificuldade respiratória grave',
      'Suspeita de lesão na coluna vertebral',
      'Fratura exposta (osso visível)',
      'Sangramento intenso que não para',
      'Convulsão',
      'Dor no peito ou falta de ar súbita',
      'Suspeita de lesão no pescoço',
    ],
  };

  const procedimentos = [
    { 
      titulo: 'Contusões e Hematomas', 
      icone: '🦵', 
      passos: [
        'Afastar o atleta da área de luta',
        'Aplicar gelo ou bolsa térmica por 15-20 minutos',
        'Elevar a região afetada acima do coração',
        'Comprimir com bandagem elástica se necessário',
        'Observar evolução nas próximas 24-48 horas',
        'Se piorar, encaminhar ao médico',
      ]
    },
    { 
      titulo: 'Desmaio por Estrangulamento', 
      icone: '💫', 
      passos: [
        'Soltar IMEDIATAMENTE a técnica de estrangulamento',
        'Deitar o atleta de lado (posição de recuperação)',
        'Afrouxar o judogi e a faixa',
        'Elevar as pernas levemente (15-30cm)',
        'Manter vias aéreas livres',
        'Se não acordar em 30 segundos, chamar emergência',
        'Monitorar respiração até recuperação completa',
      ]
    },
    { 
      titulo: 'Luxação e Torção Articular', 
      icone: '🔧', 
      passos: [
        'Imobilizar a articulação afetada imediatamente',
        'NÃO tentar "colocar no lugar" - isso é função médica',
        'Aplicar gelo envolto em pano (nunca direto na pele)',
        'Manter a região elevada e imóvel',
        'Encaminhar ao pronto-socorro para avaliação',
        'Não permitir que o atleta volte a treinar',
      ]
    },
    { 
      titulo: 'Cortes e Escoriações', 
      icone: '🩹', 
      passos: [
        'Calçar luvas descartáveis (proteção do socorrista)',
        'Limpar o ferimento com água limpa ou soro fisiológico',
        'Aplicar antisséptico (povidine ou clorexidina)',
        'Cobrir com curativo ou gaze estéril',
        'Se sangramento intenso, pressionar com gaze',
        'Se corte profundo ou extenso, encaminhar ao médico',
      ]
    },
    { 
      titulo: 'Sangramento Nasal', 
      icone: '👃', 
      passos: [
        'Sentar o atleta com a cabeça levemente inclinada para frente',
        'Apertar as narinas com os dedos por 10 minutos',
        'NÃO inclinar a cabeça para trás',
        'Aplicar compressa fria na testa/nuca',
        'Se não parar em 20 minutos, encaminhar ao médico',
      ]
    },
    { 
      titulo: 'Suspeita de Fratura', 
      icone: '🦴', 
      passos: [
        'Imobilizar o membro sem movimentar',
        'Não tentar endireitar ou alinhar',
        'Aplicar gelo envolto em pano',
        'Manter o atleta calmo e imóvel',
        'Chamar SAMU (192) imediatamente',
        'Se fratura exposta, cobrir com gaze estéril sem pressionar',
      ]
    },
  ];

  const telefones = [
    { numero: '192', servico: 'SAMU', cor: 'bg-red-500', desc: 'Serviço de Atendimento Móvel de Urgência' },
    { numero: '193', servico: 'Bombeiros', cor: 'bg-orange-500', desc: 'Corpo de Bombeiros Militar' },
    { numero: '190', servico: 'Polícia Militar', cor: 'bg-blue-500', desc: 'Para emergências de segurança' },
  ];

  const kitEssencial = [
    { icon: '🧊', item: 'Gelo / Bolsa térmica' },
    { icon: '🩹', item: 'Curativos variados' },
    { icon: '🧴', item: 'Antisséptico (povidine)' },
    { icon: '🩺', item: 'Bandagens elásticas' },
    { icon: '🧤', item: 'Luvas descartáveis' },
    { icon: '✂️', item: 'Tesoura sem ponta' },
    { icon: '📋', item: 'Gaze estéril' },
    { icon: '💊', item: 'Soro fisiológico' },
    { icon: '🎗️', item: 'Esparadrapo' },
    { icon: '📞', item: 'Lista de telefones' },
    { icon: '🩼', item: 'Tala improvisada' },
    { icon: '📝', item: 'Ficha de emergência dos alunos' },
  ];

  const prevencao = [
    { icon: '🧘', titulo: 'Ukemi Regular', desc: 'Quedas bem treinadas previnem 90% das lesões' },
    { icon: '🔥', titulo: 'Aquecimento', desc: 'Nunca iniciar treino sem aquecimento adequado' },
    { icon: '💧', titulo: 'Hidratação', desc: 'Manter hidratação durante todo o treino' },
    { icon: '😴', titulo: 'Descanso', desc: 'Respeitar tempo de recuperação entre treinos' },
    { icon: '🥋', titulo: 'Judogi', desc: 'Manter judogi limpo e em boas condições' },
    { icon: '💅', titulo: 'Higiene', desc: 'Unhas cortadas e cabelo preso' },
  ];

  return (
    <div className="animate-fade-in">
      <h2 className="section-title">
        <span className="section-title-icon">🚑</span>
        Primeiros Socorros no Tatame
      </h2>

      {/* Alerta Principal */}
      <div className="bg-red-500/20 border-2 border-red-500/50 rounded-xl p-6 mb-8">
        <h3 className="text-lg font-semibold text-red-400 flex items-center gap-2 mb-3">
          <span>🚨</span> Quando Chamar Socorro Imediatamente
        </h3>
        <ul className="grid sm:grid-cols-2 gap-2">
          {emergencias.situacoes.map((sit, index) => (
            <li key={index} className="text-sm text-foreground/80 flex items-center gap-2">
              <span className="text-red-400">●</span> {sit}
            </li>
          ))}
        </ul>
        <div className="mt-4 p-4 bg-red-600/30 rounded-lg">
          <p className="text-sm text-red-300 font-medium">
            ⛔ NÃO mova a vítima se houver suspeita de lesão na coluna ou pescoço!
          </p>
          <p className="text-xs text-red-200 mt-1">
            Mantenha a vítima imóvel e aguarde o socorro especializado.
          </p>
        </div>
      </div>

      {/* Telefones de Emergência */}
      <h3 className="text-lg font-semibold text-primary flex items-center gap-2 mb-4">
        <span>📞</span> Telefones de Emergência
      </h3>
      
      <div className="grid grid-cols-3 gap-4 mb-10">
        {telefones.map((tel, index) => (
          <div key={index} className={`${tel.cor} rounded-xl p-4 text-center`}>
            <p className="text-3xl font-bold text-white">{tel.numero}</p>
            <p className="text-sm text-white/90 font-semibold">{tel.servico}</p>
            <p className="text-xs text-white/70 mt-1">{tel.desc}</p>
          </div>
        ))}
      </div>

      {/* Procedimentos */}
      <h3 className="text-lg font-semibold text-primary flex items-center gap-2 mb-4">
        <span>🏥</span> Procedimentos por Tipo de Lesão
      </h3>
      
      <div className="grid sm:grid-cols-2 gap-4 mb-10">
        {procedimentos.map((proc, index) => (
          <div key={index} className="card-judo">
            <div className="flex items-center gap-3 mb-3 pb-2 border-b border-primary/20">
              <span className="text-2xl">{proc.icone}</span>
              <h4 className="font-semibold text-white">{proc.titulo}</h4>
            </div>
            <ol className="space-y-2">
              {proc.passos.map((passo, i) => (
                <li key={i} className="text-sm text-foreground/70 flex items-start gap-2">
                  <span className="text-primary font-bold min-w-[20px]">{i + 1}.</span>
                  {passo}
                </li>
              ))}
            </ol>
          </div>
        ))}
      </div>

      {/* Prevenção */}
      <h3 className="text-lg font-semibold text-primary flex items-center gap-2 mb-4">
        <span>🛡️</span> Prevenção de Lesões
      </h3>
      
      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4 mb-10">
        {prevencao.map((item, index) => (
          <div key={index} className="card-judo flex items-start gap-3">
            <span className="text-2xl">{item.icon}</span>
            <div>
              <h4 className="font-semibold text-white text-sm">{item.titulo}</h4>
              <p className="text-xs text-muted-foreground">{item.desc}</p>
            </div>
          </div>
        ))}
      </div>

      {/* Kit de Primeiros Socorros */}
      <h3 className="text-lg font-semibold text-primary flex items-center gap-2 mb-4">
        <span>🧰</span> Kit Essencial no Dojô
      </h3>
      
      <div className="card-red p-6">
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-4">
          {kitEssencial.map((item, index) => (
            <div key={index} className="text-center">
              <span className="text-2xl block mb-1">{item.icon}</span>
              <p className="text-xs text-foreground/70">{item.item}</p>
            </div>
          ))}
        </div>
        <div className="mt-6 p-4 bg-primary/10 rounded-lg">
          <p className="text-sm text-foreground/80">
            <strong className="text-primary">Importante:</strong> O kit deve estar sempre acessível, 
            identificado e com materiais dentro da validade. Verifique mensalmente.
          </p>
        </div>
      </div>
    </div>
  );
};

export default SocorrosSection;

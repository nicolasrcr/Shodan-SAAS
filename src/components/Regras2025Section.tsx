import { useLanguage } from "@/contexts/LanguageContext";

const Regras2025Section = () => {
  const { language } = useLanguage();

  const info = language === 'pt' ? {
    evento: 'Seminário Técnico Nacional de Judô 2025',
    local: 'Istambul, Turquia',
    data: '14-15 de dezembro de 2024',
    delegacao: ['Edison Minakawa (Coordenador)', 'Thiara Bertholi', 'Marcelo Theotônio', 'Victor Penalber']
  } : {
    evento: 'National Judo Technical Seminar 2025',
    local: 'Istanbul, Turkey',
    data: 'December 14-15, 2024',
    delegacao: ['Edison Minakawa (Coordinator)', 'Thiara Bertholi', 'Marcelo Theotônio', 'Victor Penalber']
  };

  const pontuacaoTachiwaza = language === 'pt'
    ? [
        { pontos: 'Ippon', criterio: 'Queda controlada de costas com força, velocidade e controle', cor: 'bg-green-500/20 border-green-500/30 text-green-400' },
        { pontos: 'Waza-ari', criterio: 'Queda com rotação >90° mas não claramente de costas', cor: 'bg-blue-500/20 border-blue-500/30 text-blue-400' },
        { pontos: 'Yuko (NOVO)', criterio: 'Queda 90°, ombro com apoio de cotovelo, sentado ≥90°', cor: 'bg-yellow-500/20 border-yellow-500/30 text-yellow-400' },
      ]
    : [
        { pontos: 'Ippon', criterio: 'Controlled back fall with force, speed and control', cor: 'bg-green-500/20 border-green-500/30 text-green-400' },
        { pontos: 'Waza-ari', criterio: 'Fall with rotation >90° but not clearly on back', cor: 'bg-blue-500/20 border-blue-500/30 text-blue-400' },
        { pontos: 'Yuko (NEW)', criterio: 'Fall 90°, shoulder with elbow support, seated ≥90°', cor: 'bg-yellow-500/20 border-yellow-500/30 text-yellow-400' },
      ];

  const pontuacaoOsaekomi = [
    { pontos: 'Ippon', tempo: language === 'pt' ? '20 segundos' : '20 seconds', cor: 'bg-green-500' },
    { pontos: 'Waza-ari', tempo: language === 'pt' ? '10-19 segundos' : '10-19 seconds', cor: 'bg-blue-500' },
    { pontos: 'Yuko', tempo: language === 'pt' ? '5-9 segundos' : '5-9 seconds', cor: 'bg-yellow-500' },
  ];

  const novasRegras = language === 'pt'
    ? [
        { titulo: 'Yuko Reintroduzido', desc: 'O Yuko volta ao sistema de pontuação. Contagem infinita de Yukos. Yukos NUNCA somam para Waza-ari. No Golden Score, 5 segundos de osaekomi = Yuko + Soremadê.', icone: '📊' },
        { titulo: 'Abraço de Urso (Bear Hug)', desc: 'Agora é permitido, EXCETO quando mãos/braços ficam entrelaçados formando um círculo completo (nesse caso = Shido).', icone: '🐻' },
        { titulo: 'Seoi-nage Invertido (Drop Seoi)', desc: 'Permitido para Sênior e Júnior. PROIBIDO para Cadetes (Sub-18) - aplicação resulta em Shido.', icone: '🔄' },
        { titulo: 'Uso da Cabeça (Tori)', desc: 'Sênior/Júnior podem usar a cabeça como apoio para projetar. Cadetes NÃO podem usar (resulta em Shido).', icone: '👤' },
        { titulo: 'Defesa com Cabeça (Uke)', desc: 'Sênior/Júnior podem defender com a cabeça. Cadetes não podem (Tori pontua + Uke recebe Shido). Fazer ponte = Ippon direto para Tori.', icone: '🛡️' },
        { titulo: 'Mergulho (Diving)', desc: 'Mergulhar de cabeça diretamente no tatame continua sendo Hansoku-make direto. Extremamente perigoso.', icone: '⚠️' },
        { titulo: 'Pegadas Abaixo da Faixa', desc: 'Permitido na parte EXTERNA da perna até a altura da coxa. Pegadas na parte INTERNA da perna = Shido.', icone: '👖' },
        { titulo: 'Pegadas Internas (Grip)', desc: 'Tachi-waza: permitido DENTRO da manga, PROIBIDO dentro da calça. Ne-waza: ambos permitidos.', icone: '✋' },
        { titulo: 'Ataque Falso', desc: 'Ataques sem intenção real, sem kumikata adequado, ou "volume fighting" (fingir atacar) = Shido.', icone: '🚫' },
        { titulo: 'Kansetsu/Shime em Pé', desc: 'Aplicar chave ou estrangulamento em pé: sem queda ou queda leve = Shido. Queda perigosa = Hansoku-make.', icone: '⛔' },
        { titulo: 'Waki-Gatame em Pé', desc: 'Continua PROIBIDO. Aplicar Waki-gatame em pé = Hansoku-make direto.', icone: '❌' },
        { titulo: 'Matte no Solo', desc: 'Árbitro pode dar Matte quando não houver progressão clara no ne-waza. Maior dinamismo nas lutas.', icone: '⏸️' },
      ]
    : [
        { titulo: 'Yuko Reintroduced', desc: 'Yuko returns to the scoring system. Infinite Yuko count. Yukos NEVER add up to Waza-ari. In Golden Score, 5 seconds of osaekomi = Yuko + Soremade.', icone: '📊' },
        { titulo: 'Bear Hug', desc: 'Now allowed, EXCEPT when hands/arms are interlocked forming a complete circle (in that case = Shido).', icone: '🐻' },
        { titulo: 'Reverse Seoi-nage (Drop Seoi)', desc: 'Allowed for Senior and Junior. PROHIBITED for Cadets (U18) - results in Shido.', icone: '🔄' },
        { titulo: 'Head Use (Tori)', desc: 'Senior/Junior can use head as support to throw. Cadets CANNOT (results in Shido).', icone: '👤' },
        { titulo: 'Head Defense (Uke)', desc: 'Senior/Junior can defend with head. Cadets cannot (Tori scores + Uke gets Shido). Bridging = direct Ippon for Tori.', icone: '🛡️' },
        { titulo: 'Diving', desc: 'Diving headfirst into the mat remains direct Hansoku-make. Extremely dangerous.', icone: '⚠️' },
        { titulo: 'Grips Below Belt', desc: 'Allowed on EXTERNAL part of leg up to thigh height. Grips on INTERNAL part = Shido.', icone: '👖' },
        { titulo: 'Internal Grips', desc: 'Tachi-waza: allowed INSIDE sleeve, PROHIBITED inside pants. Ne-waza: both allowed.', icone: '✋' },
        { titulo: 'False Attack', desc: 'Attacks without real intention, without proper kumikata, or "volume fighting" = Shido.', icone: '🚫' },
        { titulo: 'Kansetsu/Shime Standing', desc: 'Applying lock or choke standing: no fall or light fall = Shido. Dangerous fall = Hansoku-make.', icone: '⛔' },
        { titulo: 'Waki-Gatame Standing', desc: 'Still PROHIBITED. Applying Waki-gatame standing = direct Hansoku-make.', icone: '❌' },
        { titulo: 'Matte on Ground', desc: 'Referee can call Matte when no clear progression in ne-waza. More dynamism in fights.', icone: '⏸️' },
      ];

  const regrasCadetes = language === 'pt'
    ? [
        'Não podem usar cabeça para projetar (Shido)',
        'Não podem usar cabeça para defender (Tori pontua + Uke recebe Shido)',
        'Não podem fazer Seoi-nage invertido/Drop Seoi (Shido)',
        'Se fizerem ponte na defesa = Ippon direto para Tori',
        'Todas as regras de segurança são mais rigorosas',
      ]
    : [
        'Cannot use head to throw (Shido)',
        'Cannot use head to defend (Tori scores + Uke gets Shido)',
        'Cannot do reverse Seoi-nage/Drop Seoi (Shido)',
        'If bridging in defense = direct Ippon for Tori',
        'All safety rules are more restrictive',
      ];

  const permitidoProibido = language === 'pt' ? {
    permitido: [
      'Abraço de urso (sem entrelaçar braços)',
      'Seoi-nage invertido (Sênior/Júnior)',
      'Uso da cabeça para projetar (Sênior/Júnior)',
      'Pegadas externas abaixo da faixa',
      'Pegada dentro da manga em tachi-waza',
      'Qualquer pegada em ne-waza',
    ],
    proibido: [
      'Diving (mergulho de cabeça) = Hansoku-make',
      'Abraço com braços entrelaçados = Shido',
      'Pegadas internas na calça (tachi-waza) = Shido',
      'Ataques falsos / volume fighting = Shido',
      'Waki-gatame em pé = Hansoku-make',
      'Leg grab direto = Shido',
    ],
  } : {
    permitido: [
      'Bear hug (without interlocking arms)',
      'Reverse Seoi-nage (Senior/Junior)',
      'Head use for throwing (Senior/Junior)',
      'External grips below belt',
      'Grip inside sleeve in tachi-waza',
      'Any grip in ne-waza',
    ],
    proibido: [
      'Diving (headfirst) = Hansoku-make',
      'Hug with interlocked arms = Shido',
      'Internal pants grips (tachi-waza) = Shido',
      'False attacks / volume fighting = Shido',
      'Waki-gatame standing = Hansoku-make',
      'Direct leg grab = Hansoku-make',
    ],
  };

  return (
    <div className="animate-fade-in">
      <h2 className="section-title">
        <span className="section-title-icon">新</span>
        {language === 'pt' ? 'Regras 2025 - Novas Regras IJF' : '2025 Rules - New IJF Rules'}
      </h2>

      {/* Info do Seminário */}
      <div className="card-red p-6 mb-8">
        <h3 className="text-lg font-semibold text-primary mb-3">📋 {info.evento}</h3>
        <div className="grid sm:grid-cols-2 gap-4 text-sm">
          <div>
            <p className="text-muted-foreground">📍 <strong>{language === 'pt' ? 'Local' : 'Location'}:</strong> {info.local}</p>
            <p className="text-muted-foreground">📅 <strong>{language === 'pt' ? 'Data' : 'Date'}:</strong> {info.data}</p>
          </div>
          <div>
            <p className="text-muted-foreground mb-1"><strong>{language === 'pt' ? 'Delegação Brasileira' : 'Brazilian Delegation'}:</strong></p>
            <ul className="text-xs text-foreground/70">
              {info.delegacao.map((pessoa, i) => <li key={i}>• {pessoa}</li>)}
            </ul>
          </div>
        </div>
      </div>

      {/* Pontuação Tachi-Waza */}
      <h3 className="text-lg font-semibold text-primary flex items-center gap-2 mb-4">
        <span>🥋</span> {language === 'pt' ? 'Pontuação Tachi-Waza (Em Pé)' : 'Tachi-Waza Scoring (Standing)'}
      </h3>
      <div className="grid sm:grid-cols-3 gap-4 mb-8">
        {pontuacaoTachiwaza.map((item, index) => (
          <div key={index} className={`p-4 rounded-xl border ${item.cor}`}>
            <h4 className="font-bold text-lg mb-2">{item.pontos}</h4>
            <p className="text-sm text-foreground/80">{item.criterio}</p>
          </div>
        ))}
      </div>

      {/* Pontuação Osaekomi */}
      <h3 className="text-lg font-semibold text-primary flex items-center gap-2 mb-4">
        <span>⏱️</span> {language === 'pt' ? 'Pontuação Osaekomi (Imobilização)' : 'Osaekomi Scoring (Pins)'}
      </h3>
      <div className="grid grid-cols-3 gap-4 mb-8">
        {pontuacaoOsaekomi.map((item, index) => (
          <div key={index} className={`${item.cor} rounded-xl p-4 text-center text-white`}>
            <p className="text-2xl font-bold">{item.tempo}</p>
            <p className="text-sm opacity-90">{item.pontos}</p>
          </div>
        ))}
      </div>

      {/* Golden Score */}
      <div className="card-judo mb-8 border-primary/50">
        <h4 className="font-semibold text-primary mb-2">⚡ Golden Score - {language === 'pt' ? 'Regra Especial' : 'Special Rule'}</h4>
        <p className="text-sm text-foreground/80">
          {language === 'pt'
            ? 'Osaekomi de 5 segundos = Yuko + Soremadê (fim do combate). Ou seja, no Golden Score, qualquer osaekomi de 5s encerra a luta imediatamente.'
            : 'Osaekomi of 5 seconds = Yuko + Soremade (end of match). In Golden Score, any 5s osaekomi ends the fight immediately.'}
        </p>
      </div>

      {/* Novas Regras */}
      <h3 className="text-lg font-semibold text-primary flex items-center gap-2 mb-4">
        <span>📜</span> {language === 'pt' ? 'Principais Mudanças 2025' : 'Main 2025 Changes'}
      </h3>
      <div className="grid sm:grid-cols-2 gap-4 mb-8">
        {novasRegras.map((regra, index) => (
          <div key={index} className="card-judo">
            <div className="flex items-start gap-3">
              <span className="text-2xl">{regra.icone}</span>
              <div>
                <h4 className="font-semibold text-white text-sm mb-1">{regra.titulo}</h4>
                <p className="text-xs text-muted-foreground">{regra.desc}</p>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Regras Específicas para Cadetes */}
      <h3 className="text-lg font-semibold text-primary flex items-center gap-2 mb-4">
        <span>🧒</span> {language === 'pt' ? 'Regras Específicas para Cadetes (Sub-18)' : 'Specific Rules for Cadets (U18)'}
      </h3>
      <div className="bg-orange-500/10 border border-orange-500/30 rounded-xl p-6 mb-8">
        <p className="text-sm text-orange-300 mb-4">
          ⚠️ {language === 'pt' ? 'Cadetes têm regras mais restritivas para proteção dos atletas jovens:' : 'Cadets have more restrictive rules to protect young athletes:'}
        </p>
        <ul className="space-y-2">
          {regrasCadetes.map((regra, index) => (
            <li key={index} className="text-sm text-foreground/80 flex items-start gap-2">
              <span className="text-orange-400">●</span> {regra}
            </li>
          ))}
        </ul>
      </div>

      {/* Resumo Visual */}
      <h3 className="text-lg font-semibold text-primary flex items-center gap-2 mb-4">
        <span>📊</span> {language === 'pt' ? 'Resumo: O que Mudou?' : 'Summary: What Changed?'}
      </h3>
      <div className="card-judo">
        <div className="grid sm:grid-cols-2 gap-6">
          <div>
            <h4 className="font-semibold text-green-400 mb-3 flex items-center gap-2">
              ✅ {language === 'pt' ? 'Agora é Permitido' : 'Now Allowed'}
            </h4>
            <ul className="space-y-2 text-sm text-foreground/80">
              {permitidoProibido.permitido.map((item, index) => <li key={index}>• {item}</li>)}
            </ul>
          </div>
          <div>
            <h4 className="font-semibold text-red-400 mb-3 flex items-center gap-2">
              ❌ {language === 'pt' ? 'Continua Proibido / Novo Shido' : 'Still Prohibited / New Shido'}
            </h4>
            <ul className="space-y-2 text-sm text-foreground/80">
              {permitidoProibido.proibido.map((item, index) => <li key={index}>• {item}</li>)}
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Regras2025Section;

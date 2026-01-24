const Regras2025Section = () => {
  const info = {
    evento: 'Seminário Técnico Nacional de Judô 2025',
    local: 'Istambul, Turquia',
    data: '14-15 de dezembro de 2024',
    delegacao: ['Edison Minakawa (Coordenador)', 'Thiara Bertholi', 'Marcelo Theotônio', 'Victor Penalber']
  };

  const pontuacaoTachiwaza = [
    { pontos: 'Ippon', criterio: 'Queda controlada de costas', cor: 'bg-green-500/20 border-green-500/30 text-green-400' },
    { pontos: 'Waza-ari', criterio: 'Queda >90° mas não de costas', cor: 'bg-blue-500/20 border-blue-500/30 text-blue-400' },
    { pontos: 'Yuko (NOVO)', criterio: 'Queda 90°, ombro com apoio de cotovelo, sentado ≥90°', cor: 'bg-yellow-500/20 border-yellow-500/30 text-yellow-400' },
  ];

  const pontuacaoOsaekomi = [
    { pontos: 'Ippon', tempo: '20 segundos', cor: 'bg-green-500' },
    { pontos: 'Waza-ari', tempo: '10-19 segundos', cor: 'bg-blue-500' },
    { pontos: 'Yuko', tempo: '5-9 segundos', cor: 'bg-yellow-500' },
  ];

  const novasRegras = [
    { titulo: 'Yuko Reintroduzido', desc: 'Contagem infinita de Yukos. Yukos nunca somam para Waza-ari.', icone: '📊' },
    { titulo: 'Abraço de Urso', desc: 'Permitido, EXCETO com mãos/braços entrelaçados formando círculo (= Shido).', icone: '🐻' },
    { titulo: 'Seoi-nage Invertido', desc: 'Permitido para Sênior/Júnior. Proibido para Cadetes (Shido).', icone: '🔄' },
    { titulo: 'Uso da Cabeça (Tori)', desc: 'Sênior/Júnior podem usar cabeça para projetar. Cadetes não podem (Shido).', icone: '👤' },
    { titulo: 'Defesa com Cabeça (Uke)', desc: 'Sênior/Júnior podem. Cadetes não podem (pontuação + Shido). Ponte = Ippon.', icone: '🛡️' },
    { titulo: 'Mergulho (Diving)', desc: 'Mergulhar de cabeça no tatame = Hansoku-make direto.', icone: '⚠️' },
    { titulo: 'Pegadas Abaixo da Faixa', desc: 'Permitido na parte externa da perna até altura da coxa. Pegadas internas = Shido.', icone: '👖' },
    { titulo: 'Pegadas Internas', desc: 'Tachi-waza: permitido dentro da manga, proibido dentro da calça. Ne-waza: ambos permitidos.', icone: '✋' },
    { titulo: 'Ataque Falso', desc: 'Ataques sem intenção real, sem kumikata, ou "volume fighting" = Shido.', icone: '🚫' },
    { titulo: 'Kansetsu/Shime em Pé', desc: 'Sem queda ou queda leve = Shido. Queda perigosa = Hansoku-make.', icone: '⛔' },
  ];

  const regrasCadetes = [
    'Não podem usar cabeça para projetar (Shido)',
    'Não podem usar cabeça para defender (Tori pontua + Uke recebe Shido)',
    'Não podem fazer Seoi-nage invertido (Shido)',
  ];

  return (
    <div className="animate-fade-in">
      <h2 className="section-title">
        <span className="section-title-icon">新</span>
        Regras 2025 - Novas Regras IJF
      </h2>

      {/* Info do Seminário */}
      <div className="card-red p-6 mb-8">
        <h3 className="text-lg font-semibold text-primary mb-3">📋 {info.evento}</h3>
        <div className="grid sm:grid-cols-2 gap-4 text-sm">
          <div>
            <p className="text-muted-foreground">📍 <strong>Local:</strong> {info.local}</p>
            <p className="text-muted-foreground">📅 <strong>Data:</strong> {info.data}</p>
          </div>
          <div>
            <p className="text-muted-foreground mb-1"><strong>Delegação Brasileira:</strong></p>
            <ul className="text-xs text-foreground/70">
              {info.delegacao.map((pessoa, i) => (
                <li key={i}>• {pessoa}</li>
              ))}
            </ul>
          </div>
        </div>
      </div>

      {/* Pontuação Tachi-Waza */}
      <h3 className="text-lg font-semibold text-primary flex items-center gap-2 mb-4">
        <span>🥋</span> Pontuação Tachi-Waza (Em Pé)
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
        <span>⏱️</span> Pontuação Osaekomi (Imobilização)
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
        <h4 className="font-semibold text-primary mb-2">⚡ Golden Score</h4>
        <p className="text-sm text-foreground/80">
          Osaekomi de <strong>5 segundos</strong> = Yuko + <strong>Soremadê</strong> (fim do combate)
        </p>
      </div>

      {/* Novas Regras */}
      <h3 className="text-lg font-semibold text-primary flex items-center gap-2 mb-4">
        <span>📜</span> Principais Mudanças 2025
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
        <span>🧒</span> Regras Específicas para Cadetes (Sub-18)
      </h3>
      <div className="bg-orange-500/10 border border-orange-500/30 rounded-xl p-6">
        <p className="text-sm text-orange-300 mb-4">
          ⚠️ Cadetes têm regras mais restritivas para proteção dos atletas jovens:
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
      <h3 className="text-lg font-semibold text-primary flex items-center gap-2 mb-4 mt-10">
        <span>📊</span> Resumo: O que Mudou?
      </h3>
      <div className="card-judo">
        <div className="grid sm:grid-cols-2 gap-6">
          <div>
            <h4 className="font-semibold text-green-400 mb-3 flex items-center gap-2">
              ✅ Agora é Permitido
            </h4>
            <ul className="space-y-2 text-sm text-foreground/80">
              <li>• Abraço de urso (sem entrelaçar)</li>
              <li>• Seoi-nage invertido (Sênior/Júnior)</li>
              <li>• Uso da cabeça para projetar (Sênior/Júnior)</li>
              <li>• Pegadas externas abaixo da faixa</li>
            </ul>
          </div>
          <div>
            <h4 className="font-semibold text-red-400 mb-3 flex items-center gap-2">
              ❌ Continua Proibido / Novo Shido
            </h4>
            <ul className="space-y-2 text-sm text-foreground/80">
              <li>• Diving (mergulho de cabeça) = Hansoku-make</li>
              <li>• Abraço com braços entrelaçados = Shido</li>
              <li>• Pegadas internas na calça (tachi-waza)</li>
              <li>• Ataques falsos / volume fighting</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Regras2025Section;

import { rulesData } from "@/data/judoData";

const RegrasSection = () => {
  const additionalCommands = [
    { term: "YOSHI", def: "Continue (após pausa breve)" },
    { term: "HIKI-WAKE", def: "Empate" },
    { term: "SONO-MAMA", def: "Não se mova (congelar posição)" },
    { term: "SOGO-GACHI", def: "Vitória composta" },
    { term: "FUSEN-GACHI", def: "Vitória por ausência do oponente" },
    { term: "KIKEN-GACHI", def: "Vitória por desistência do oponente" },
  ];

  const prohibitedActions = [
    { action: "Leg Grab", desc: "Pegar diretamente nas pernas sem ataque prévio (Hansoku-make direto)", icon: "🦵" },
    { action: "Diving", desc: "Mergulhar de cabeça no tatame (Hansoku-make direto)", icon: "⚠️" },
    { action: "Passividade", desc: "Evitar luta, não atacar (Shido após 45s sem ação)", icon: "🚫" },
    { action: "Defesa cruzada", desc: "Braços cruzados por mais de 5 segundos (Shido)", icon: "❌" },
    { action: "Pegada abaixo da faixa", desc: "Sem ataque simultâneo (Shido)", icon: "👖" },
    { action: "Puxar para o solo", desc: "Sem ataque válido (Shido)", icon: "⬇️" },
  ];

  const combatAreas = [
    { area: "Área de Combate", size: "8m x 8m (mínimo) a 10m x 10m", color: "Verde ou amarelo" },
    { area: "Área de Perigo", size: "1m de largura (faixa vermelha)", color: "Vermelho" },
    { area: "Área de Segurança", size: "3m ao redor", color: "Azul ou outra cor" },
    { area: "Área Total", size: "14m x 14m a 16m x 16m", color: "Variada" },
  ];

  const fightDurations = [
    { category: "Sênior Masculino", time: "5 minutos" },
    { category: "Sênior Feminino", time: "4 minutos" },
    { category: "Júnior (Sub-21)", time: "4 minutos" },
    { category: "Cadete (Sub-18)", time: "4 minutos" },
    { category: "Infantil (Sub-15)", time: "3 minutos" },
    { category: "Golden Score", time: "Sem limite (primeiro a pontuar)" },
  ];

  return (
    <div className="animate-fade-in">
      <h2 className="section-title">
        <span className="section-title-icon">則</span>
        Regras e Arbitragem
      </h2>

      <div className="grid md:grid-cols-2 gap-6 mb-10">
        {/* Scoring */}
        <div className="card-judo">
          <h3 className="text-lg font-semibold text-primary flex items-center gap-2 mb-5">
            📊 Pontuação
          </h3>
          <div className="space-y-4">
            {rulesData.scoring.map((score, index) => (
              <div key={index} className="p-4 bg-muted/30 rounded-xl">
                <div className="font-semibold mb-1" style={{ color: score.color }}>
                  {score.term} - {score.desc}
                </div>
                <p className="text-xs text-muted-foreground">{score.detail}</p>
              </div>
            ))}
          </div>
          
          {/* Ippon Criteria */}
          <div className="mt-6 p-5 bg-green-500/10 border border-green-500/30 rounded-2xl">
            <h4 className="font-semibold text-green-400 mb-4 text-center">
              🥇 Critérios para Ippon
            </h4>
            <p className="text-sm text-foreground/80 mb-4 text-center">
              Para ser considerado Ippon, o arremesso deve demonstrar:
            </p>
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
              <div className="text-center p-3 bg-muted/30 rounded-xl">
                <span className="text-2xl block mb-1">💪</span>
                <span className="text-sm font-semibold text-green-400">Força</span>
              </div>
              <div className="text-center p-3 bg-muted/30 rounded-xl">
                <span className="text-2xl block mb-1">⚡</span>
                <span className="text-sm font-semibold text-green-400">Velocidade</span>
              </div>
              <div className="text-center p-3 bg-muted/30 rounded-xl">
                <span className="text-2xl block mb-1">🎯</span>
                <span className="text-sm font-semibold text-green-400">Controle</span>
              </div>
              <div className="text-center p-3 bg-muted/30 rounded-xl">
                <span className="text-2xl block mb-1">✨</span>
                <span className="text-sm font-semibold text-green-400">Impacto Perfeito</span>
              </div>
            </div>
          </div>
        </div>

        {/* Commands */}
        <div className="card-judo">
          <h3 className="text-lg font-semibold text-primary flex items-center gap-2 mb-5">
            📢 Comandos do Árbitro
          </h3>
          <div className="space-y-3">
            {rulesData.commands.map((command, index) => (
              <div key={index} className="flex items-center gap-3 p-3 bg-muted/30 rounded-lg">
                <span className="text-primary font-bold text-sm min-w-[100px]">{command.term}</span>
                <span className="text-sm text-foreground/80">{command.def}</span>
              </div>
            ))}
            {additionalCommands.map((command, index) => (
              <div key={`add-${index}`} className="flex items-center gap-3 p-3 bg-muted/30 rounded-lg">
                <span className="text-primary font-bold text-sm min-w-[100px]">{command.term}</span>
                <span className="text-sm text-foreground/80">{command.def}</span>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Immobilization Times */}
      <h3 className="text-lg font-semibold text-primary flex items-center gap-2 mb-5">
        ⏱️ Tempos de Imobilização
      </h3>
      <div className="grid grid-cols-3 gap-4 mb-10">
        <div className="p-6 bg-green-500/10 border border-green-500/30 rounded-2xl text-center">
          <span className="text-3xl font-bold text-green-400">20s</span>
          <p className="text-sm text-foreground/70 mt-2">Ippon</p>
        </div>
        <div className="p-6 bg-blue-500/10 border border-blue-500/30 rounded-2xl text-center">
          <span className="text-3xl font-bold text-blue-400">10-19s</span>
          <p className="text-sm text-foreground/70 mt-2">Waza-ari</p>
        </div>
        <div className="p-6 bg-yellow-500/10 border border-yellow-500/30 rounded-2xl text-center">
          <span className="text-3xl font-bold text-yellow-400">5-9s</span>
          <p className="text-sm text-foreground/70 mt-2">Yuko (2025)</p>
        </div>
      </div>

      {/* Penalties */}
      <h3 className="text-lg font-semibold text-primary flex items-center gap-2 mb-5">
        ⚠️ Sistema de Penalidades
      </h3>
      <div className="card-judo mb-8">
        <div className="grid sm:grid-cols-3 gap-4">
          {rulesData.penalties.map((penalty, index) => (
            <div key={index} className="p-4 bg-muted/30 rounded-xl text-center">
              <h4 className="font-semibold text-yellow-500 mb-2">{penalty.name}</h4>
              <p className="text-sm text-foreground/70">{penalty.effect}</p>
            </div>
          ))}
        </div>
        <div className="mt-5 p-4 bg-red-500/10 border border-red-500/30 rounded-xl">
          <p className="text-sm text-foreground/80">
            <span className="text-red-400 font-semibold">Hansoku-Make Direto:</span> Aplicado em casos de 
            ações perigosas, antidesportivas ou que coloquem em risco a integridade física do oponente.
          </p>
        </div>
      </div>

      {/* Prohibited Actions */}
      <h3 className="text-lg font-semibold text-primary flex items-center gap-2 mb-5">
        🚫 Ações Proibidas (Kinshi-Waza)
      </h3>
      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4 mb-10">
        {prohibitedActions.map((item, index) => (
          <div key={index} className="card-judo">
            <div className="flex items-center gap-2 mb-2">
              <span className="text-xl">{item.icon}</span>
              <h4 className="font-semibold text-white text-sm">{item.action}</h4>
            </div>
            <p className="text-xs text-muted-foreground">{item.desc}</p>
          </div>
        ))}
      </div>

      {/* Competition Area */}
      <h3 className="text-lg font-semibold text-primary flex items-center gap-2 mb-5">
        🥋 Área de Competição
      </h3>
      <div className="card-judo mb-8">
        <div className="grid sm:grid-cols-2 gap-6">
          <div>
            <h4 className="font-semibold text-white mb-3">Dimensões</h4>
            <div className="space-y-2">
              {combatAreas.map((area, index) => (
                <div key={index} className="flex justify-between text-sm p-2 bg-muted/20 rounded">
                  <span className="text-foreground/70">{area.area}</span>
                  <span className="text-primary">{area.size}</span>
                </div>
              ))}
            </div>
          </div>
          <div>
            <h4 className="font-semibold text-white mb-3">Tempo de Luta por Categoria</h4>
            <div className="space-y-2">
              {fightDurations.map((item, index) => (
                <div key={index} className="flex justify-between text-sm p-2 bg-muted/20 rounded">
                  <span className="text-foreground/70">{item.category}</span>
                  <span className="text-primary">{item.time}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Gestures */}
      <h3 className="text-lg font-semibold text-primary flex items-center gap-2 mb-5">
        👐 Gestos do Árbitro
      </h3>
      <div className="card-judo">
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
          <div className="text-center p-4 bg-muted/20 rounded-xl">
            <span className="text-3xl block mb-2">☝️</span>
            <p className="text-sm font-semibold text-white">Ippon</p>
            <p className="text-xs text-muted-foreground">Braço estendido acima da cabeça</p>
          </div>
          <div className="text-center p-4 bg-muted/20 rounded-xl">
            <span className="text-3xl block mb-2">👋</span>
            <p className="text-sm font-semibold text-white">Waza-ari</p>
            <p className="text-xs text-muted-foreground">Braço estendido na lateral (45°)</p>
          </div>
          <div className="text-center p-4 bg-muted/20 rounded-xl">
            <span className="text-3xl block mb-2">🤚</span>
            <p className="text-sm font-semibold text-white">Matte</p>
            <p className="text-xs text-muted-foreground">Mão aberta para frente</p>
          </div>
          <div className="text-center p-4 bg-muted/20 rounded-xl">
            <span className="text-3xl block mb-2">👇</span>
            <p className="text-sm font-semibold text-white">Osaekomi</p>
            <p className="text-xs text-muted-foreground">Braço estendido apontando para os atletas</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default RegrasSection;

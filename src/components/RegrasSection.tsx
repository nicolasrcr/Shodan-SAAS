import { rulesData } from "@/data/judoData";

const RegrasSection = () => {
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
          </div>
        </div>
      </div>

      {/* Immobilization Times */}
      <h3 className="text-lg font-semibold text-primary flex items-center gap-2 mb-5">
        ⏱️ Tempos de Imobilização
      </h3>
      <div className="grid grid-cols-2 gap-4 mb-10">
        <div className="p-6 bg-green-500/10 border border-green-500/30 rounded-2xl text-center">
          <span className="text-3xl font-bold text-green-400">20s</span>
          <p className="text-sm text-foreground/70 mt-2">Ippon</p>
        </div>
        <div className="p-6 bg-blue-500/10 border border-blue-500/30 rounded-2xl text-center">
          <span className="text-3xl font-bold text-blue-400">10-19s</span>
          <p className="text-sm text-foreground/70 mt-2">Waza-ari</p>
        </div>
      </div>

      {/* Penalties */}
      <h3 className="text-lg font-semibold text-primary flex items-center gap-2 mb-5">
        ⚠️ Sistema de Penalidades
      </h3>
      <div className="card-judo">
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

      {/* Competition Area */}
      <h3 className="text-lg font-semibold text-primary flex items-center gap-2 mb-5 mt-10">
        🥋 Área de Competição
      </h3>
      <div className="card-judo">
        <div className="grid sm:grid-cols-2 gap-6">
          <div>
            <h4 className="font-semibold text-white mb-3">Dimensões</h4>
            <ul className="space-y-2 text-sm text-foreground/80">
              <li>• <strong>Área de combate:</strong> 8m x 8m (mínimo) a 10m x 10m</li>
              <li>• <strong>Área de segurança:</strong> 3m ao redor</li>
              <li>• <strong>Total:</strong> 14m x 14m a 16m x 16m</li>
              <li>• <strong>Cor área de combate:</strong> Verde ou amarelo</li>
              <li>• <strong>Cor área de perigo:</strong> Vermelho</li>
            </ul>
          </div>
          <div>
            <h4 className="font-semibold text-white mb-3">Tempo de Luta</h4>
            <ul className="space-y-2 text-sm text-foreground/80">
              <li>• <strong>Sênior Masculino:</strong> 5 minutos</li>
              <li>• <strong>Sênior Feminino:</strong> 4 minutos</li>
              <li>• <strong>Cadetes:</strong> 4 minutos</li>
              <li>• <strong>Golden Score:</strong> Sem limite de tempo</li>
              <li>• <strong>Decisão:</strong> Primeiro a pontuar vence</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default RegrasSection;

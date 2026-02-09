import { useLanguage } from "@/contexts/LanguageContext";

const NomenclaturaSection = () => {
  const { language } = useLanguage();

  const content = {
    pt: {
      title: "Nomenclatura Japonesa",
      titles: {
        posicoes: "Posições e Posturas",
        termos: "Termos Básicos",
        corpo: "Partes do Corpo",
        nage: "Nomenclatura Nage-Waza",
        ne: "Nomenclatura Ne-Waza (Solo)",
        partesCorpo: "Partes do Corpo",
        direcao: "Direção",
        tamanho: "Tamanho",
        acao: "Ação"
      },
      positions: [
        { name: 'Ritsui', desc: 'Em pé' },
        { name: 'Seiza', desc: 'Ajoelhado (formal)' },
        { name: 'Anza', desc: 'Pernas cruzadas (informal)' },
        { name: 'Chū-Goshi', desc: 'Agachado' },
        { name: 'Kyoshi', desc: 'Ajoelhado com 1 joelho' },
        { name: 'Zai', desc: 'Sentado' },
        { name: 'Aomuke', desc: 'Deitado de costas' },
      ],
      terminology: [
        { term: 'Matte', def: 'Parar' }, { term: 'Hajime', def: 'Começar' },
        { term: 'Sensei', def: 'Professor' }, { term: 'Judô', def: 'Caminho Suave' },
        { term: 'Migi', def: 'Direita' }, { term: 'Hidari', def: 'Esquerda' },
        { term: 'Dojô', def: 'Área de Treinamento' }, { term: 'Uchi-Komi', def: 'Entradas de técnicas' },
        { term: 'Obi', def: 'Faixa' }, { term: 'Judogi', def: 'Uniforme do Judô' },
        { term: 'Kiotsuke', def: 'Atenção' }, { term: 'Randori', def: 'Treinamento livre' },
        { term: 'Uke', def: 'Quem recebe a técnica' }, { term: 'Tori', def: 'Quem aplica a técnica' },
        { term: 'Kuzushi', def: 'Desequilíbrio' }, { term: 'Tsukuri', def: 'Preparação/Entrada' },
        { term: 'Kake', def: 'Aplicar/Executar' }, { term: 'Kime', def: 'Decidir/Conclusão' },
      ],
      bodyParts: [
        { jp: 'Atama', pt: 'Cabeça' }, { jp: 'Kubi', pt: 'Pescoço' }, { jp: 'Kata', pt: 'Ombro' },
        { jp: 'Mune', pt: 'Peito' }, { jp: 'Senaka', pt: 'Costas' }, { jp: 'Waki', pt: 'Axila' },
        { jp: 'Hara', pt: 'Barriga' }, { jp: 'Koshi', pt: 'Quadril' }, { jp: 'Mata', pt: 'Virilha' },
        { jp: 'Hiza', pt: 'Joelho' }, { jp: 'Ashi', pt: 'Pé/Perna' }, { jp: 'Kakato', pt: 'Calcanhar' },
        { jp: 'Te', pt: 'Mão' }, { jp: 'Ude', pt: 'Braço' }, { jp: 'Yubi', pt: 'Dedo' },
      ],
      nageNomenclatura: {
        parteCorpo: [
          { term: 'MATA', def: 'Virilha' }, { term: 'HIZA', def: 'Joelho' },
          { term: 'ASHI', def: 'Pé/Perna' }, { term: 'KATA', def: 'Ombro' },
          { term: 'SEOI', def: 'Pelas costas' }, { term: 'GOSHI/KOSHI', def: 'Quadril' },
          { term: 'SODE', def: 'Manga' }, { term: 'OBI', def: 'Faixa' },
          { term: 'ERI', def: 'Gola' }, { term: 'TE', def: 'Mão' }, { term: 'UDE', def: 'Braço' },
        ],
        direcao: [
          { term: 'SOTO', def: 'Por fora' }, { term: 'UCHI', def: 'Por dentro' },
          { term: 'YOKO', def: 'Lado/Lateral' }, { term: 'SUMI', def: 'Diagonal/Canto' },
          { term: 'MAE', def: 'Frente' }, { term: 'USHIRO', def: 'Trás' },
        ],
        tamanho: [
          { term: 'O (大)', def: 'Grande' }, { term: 'KO (小)', def: 'Pequeno' },
        ],
        acao: [
          { term: 'GAKE', def: 'Trava/Gancho' }, { term: 'GARI', def: 'Ceifada (cortar raiz)' },
          { term: 'HARAI/BARAI', def: 'Varrida leve' }, { term: 'SASAE', def: 'Bloquear' },
          { term: 'NAGE', def: 'Projeção' }, { term: 'GAESHI', def: 'Inversão/Reversão' },
          { term: 'OTOSHI', def: 'Queda (cima p/ baixo)' }, { term: 'MAKIKOMI', def: 'Enrolando/Caindo junto' },
          { term: 'GURUMA', def: 'Roda/Girar' }, { term: 'TSURI-KOMI', def: 'Levantar e puxar' },
          { term: 'SUTEMI', def: 'Sacrifício' },
        ],
      },
      neNomenclatura: [
        { term: 'GATAME', def: 'Imobilizar/Fixar' }, { term: 'JIME/SHIME', def: 'Estrangular' },
        { term: 'GARAMI', def: 'Torcer/Entrelaçar' }, { term: 'HISHIGI', def: 'Esmagar/Hiperestender' },
        { term: 'KESA', def: 'Deitado/Diagonal' }, { term: 'SHIHO', def: 'Quatro apoios/Ajoelhado' },
        { term: 'KAMI', def: 'Por cima/Pela cabeça' }, { term: 'YOKO', def: 'Lado/Lateral' },
        { term: 'TATE', def: 'Montada/Vertical' }, { term: 'KUZURE', def: 'Variação/Modificado' },
        { term: 'JUJI', def: 'Cruzado (cruz)' }, { term: 'SANKAKU', def: 'Triângulo' },
        { term: 'HADAKA', def: 'Nu (sem usar gola)' }, { term: 'OKURI', def: 'Deslizar' },
        { term: 'URA', def: 'Invertido/Por trás' }, { term: 'NAMI', def: 'Normal' },
        { term: 'GYAKU', def: 'Invertido/Reverso' },
      ]
    },
    en: {
      title: "Japanese Nomenclature",
      titles: {
        posicoes: "Positions and Postures",
        termos: "Basic Terms",
        corpo: "Body Parts",
        nage: "Nage-Waza Nomenclature",
        ne: "Ne-Waza Nomenclature (Ground)",
        partesCorpo: "Body Parts",
        direcao: "Direction",
        tamanho: "Size",
        acao: "Action"
      },
      positions: [
        { name: 'Ritsui', desc: 'Standing' },
        { name: 'Seiza', desc: 'Kneeling (formal)' },
        { name: 'Anza', desc: 'Cross-legged (informal)' },
        { name: 'Chū-Goshi', desc: 'Crouching' },
        { name: 'Kyoshi', desc: 'Kneeling on one knee' },
        { name: 'Zai', desc: 'Sitting' },
        { name: 'Aomuke', desc: 'Lying on back' },
      ],
      terminology: [
        { term: 'Matte', def: 'Stop/Wait' }, { term: 'Hajime', def: 'Begin' },
        { term: 'Sensei', def: 'Teacher' }, { term: 'Judo', def: 'Gentle Way' },
        { term: 'Migi', def: 'Right' }, { term: 'Hidari', def: 'Left' },
        { term: 'Dojo', def: 'Training Hall' }, { term: 'Uchi-Komi', def: 'Technique entry practice' },
        { term: 'Obi', def: 'Belt' }, { term: 'Judogi', def: 'Judo Uniform' },
        { term: 'Kiotsuke', def: 'Attention' }, { term: 'Randori', def: 'Free practice' },
        { term: 'Uke', def: 'Receiver of technique' }, { term: 'Tori', def: 'Executor of technique' },
        { term: 'Kuzushi', def: 'Unbalancing' }, { term: 'Tsukuri', def: 'Fitting/Entry' },
        { term: 'Kake', def: 'Execution/Throw' }, { term: 'Kime', def: 'Focus/Decision' },
      ],
      bodyParts: [
        { jp: 'Atama', pt: 'Head' }, { jp: 'Kubi', pt: 'Neck' }, { jp: 'Kata', pt: 'Shoulder' },
        { jp: 'Mune', pt: 'Chest' }, { jp: 'Senaka', pt: 'Back' }, { jp: 'Waki', pt: 'Armpit' },
        { jp: 'Hara', pt: 'Stomach' }, { jp: 'Koshi', pt: 'Hip' }, { jp: 'Mata', pt: 'Groin' },
        { jp: 'Hiza', pt: 'Knee' }, { jp: 'Ashi', pt: 'Foot/Leg' }, { jp: 'Kakato', pt: 'Heel' },
        { jp: 'Te', pt: 'Hand' }, { jp: 'Ude', pt: 'Arm' }, { jp: 'Yubi', pt: 'Finger' },
      ],
      nageNomenclatura: {
        parteCorpo: [
          { term: 'MATA', def: 'Groin' }, { term: 'HIZA', def: 'Knee' },
          { term: 'ASHI', def: 'Foot/Leg' }, { term: 'KATA', def: 'Shoulder' },
          { term: 'SEOI', def: 'On the back' }, { term: 'GOSHI/KOSHI', def: 'Hip' },
          { term: 'SODE', def: 'Sleeve' }, { term: 'OBI', def: 'Belt' },
          { term: 'ERI', def: 'Lapel' }, { term: 'TE', def: 'Hand' }, { term: 'UDE', def: 'Arm' },
        ],
        direcao: [
          { term: 'SOTO', def: 'Outer' }, { term: 'UCHI', def: 'Inner' },
          { term: 'YOKO', def: 'Side' }, { term: 'SUMI', def: 'Corner' },
          { term: 'MAE', def: 'Front' }, { term: 'USHIRO', def: 'Back' },
        ],
        tamanho: [
          { term: 'O (大)', def: 'Major/Big' }, { term: 'KO (小)', def: 'Minor/Small' },
        ],
        acao: [
          { term: 'GAKE', def: 'Hook/Prop' }, { term: 'GARI', def: 'Reap' },
          { term: 'HARAI/BARAI', def: 'Sweep' }, { term: 'SASAE', def: 'Block/Prop' },
          { term: 'NAGE', def: 'Throw' }, { term: 'GAESHI', def: 'Counter/Reversal' },
          { term: 'OTOSHI', def: 'Drop' }, { term: 'MAKIKOMI', def: 'Wrap-around' },
          { term: 'GURUMA', def: 'Wheel' }, { term: 'TSURI-KOMI', def: 'Lift-pull' },
          { term: 'SUTEMI', def: 'Sacrifice' },
        ],
      },
      neNomenclatura: [
        { term: 'GATAME', def: 'Hold/Lock' }, { term: 'JIME/SHIME', def: 'Choke/Strangle' },
        { term: 'GARAMI', def: 'Entangle/Lock' }, { term: 'HISHIGI', def: 'Crush/Break' },
        { term: 'KESA', def: 'Scarf' }, { term: 'SHIHO', def: 'Four quarters' },
        { term: 'KAMI', def: 'Upper/Top' }, { term: 'YOKO', def: 'Side' },
        { term: 'TATE', def: 'Vertical' }, { term: 'KUZURE', def: 'Modified' },
        { term: 'JUJI', def: 'Cross' }, { term: 'SANKAKU', def: 'Triangle' },
        { term: 'HADAKA', def: 'Naked' }, { term: 'OKURI', def: 'Sliding' },
        { term: 'URA', def: 'Reverse/Back' }, { term: 'NAMI', def: 'Normal' },
        { term: 'GYAKU', def: 'Reverse' },
      ]
    }
  };

  const t = content[language === 'en' ? 'en' : 'pt'];

  return (
    <div className="animate-fade-in">
      <h2 className="section-title">
        <span className="section-title-icon">言</span>
        {t.title}
      </h2>

      {/* Posições e Posturas */}
      <h3 className="text-lg font-semibold text-primary flex items-center gap-2 mb-4">
        <span>🧘</span> {t.titles.posicoes}
      </h3>
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-7 gap-3 mb-10">
        {t.positions.map((item, i) => (
          <div key={i} className="card-judo text-center p-3">
            <p className="text-primary font-semibold text-sm">{item.name}</p>
            <p className="text-xs text-muted-foreground">{item.desc}</p>
          </div>
        ))}
      </div>

      {/* Termos Básicos */}
      <h3 className="text-lg font-semibold text-primary flex items-center gap-2 mb-4">
        <span>📚</span> {t.titles.termos}
      </h3>
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 lg:grid-cols-10 gap-3 mb-10">
        {t.terminology.map((item, i) => (
          <div key={i} className="card-judo text-center p-3">
            <p className="text-primary font-semibold text-sm">{item.term}</p>
            <p className="text-xs text-muted-foreground">{item.def}</p>
          </div>
        ))}
      </div>

      {/* Partes do Corpo */}
      <h3 className="text-lg font-semibold text-primary flex items-center gap-2 mb-4">
        <span>🦵</span> {t.titles.corpo}
      </h3>
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 lg:grid-cols-10 gap-3 mb-10">
        {t.bodyParts.map((item, i) => (
          <div key={i} className="card-judo text-center p-3">
            <p className="text-primary font-semibold text-sm">{item.jp}</p>
            <p className="text-xs text-muted-foreground">{item.pt}</p>
          </div>
        ))}
      </div>

      {/* Nomenclatura Nage-Waza */}
      <h3 className="text-lg font-semibold text-primary flex items-center gap-2 mb-4">
        <span>🥋</span> {t.titles.nage}
      </h3>
      
      <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-6">
        <div className="card-judo">
          <h4 className="text-sm font-semibold text-white mb-3">{t.titles.partesCorpo}</h4>
          <div className="space-y-2">
            {t.nageNomenclatura.parteCorpo.map((item, i) => (
              <div key={i} className="flex justify-between text-xs">
                <span className="text-primary font-medium">{item.term}</span>
                <span className="text-muted-foreground">{item.def}</span>
              </div>
            ))}
          </div>
        </div>

        <div className="card-judo">
          <h4 className="text-sm font-semibold text-white mb-3">{t.titles.direcao}</h4>
          <div className="space-y-2">
            {t.nageNomenclatura.direcao.map((item, i) => (
              <div key={i} className="flex justify-between text-xs">
                <span className="text-primary font-medium">{item.term}</span>
                <span className="text-muted-foreground">{item.def}</span>
              </div>
            ))}
          </div>
        </div>

        <div className="card-judo">
          <h4 className="text-sm font-semibold text-white mb-3">{t.titles.tamanho}</h4>
          <div className="space-y-2">
            {t.nageNomenclatura.tamanho.map((item, i) => (
              <div key={i} className="flex justify-between text-xs">
                <span className="text-primary font-medium">{item.term}</span>
                <span className="text-muted-foreground">{item.def}</span>
              </div>
            ))}
          </div>
        </div>

        <div className="card-judo">
          <h4 className="text-sm font-semibold text-white mb-3">{t.titles.acao}</h4>
          <div className="space-y-2">
            {t.nageNomenclatura.acao.map((item, i) => (
              <div key={i} className="flex justify-between text-xs">
                <span className="text-primary font-medium">{item.term}</span>
                <span className="text-muted-foreground">{item.def}</span>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Nomenclatura Ne-Waza */}
      <h3 className="text-lg font-semibold text-primary flex items-center gap-2 mb-4 mt-8">
        <span>🤼</span> {t.titles.ne}
      </h3>
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-3">
        {t.neNomenclatura.map((item, i) => (
          <div key={i} className="card-judo text-center p-3">
            <p className="text-primary font-semibold text-sm">{item.term}</p>
            <p className="text-xs text-muted-foreground">{item.def}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default NomenclaturaSection;
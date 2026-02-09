import { useLanguage } from "@/contexts/LanguageContext";

const EtiquetaSection = () => {
  const { language } = useLanguage();

  const content = {
    pt: {
      title: "Etiqueta do Judô",
      sections: {
        saudacoes: "Saudações (Rei)",
        conduta: "Conduta no Dojô",
        judogi: "Partes do Judogi",
        graduacao: "Sistema de Graduação",
        faixasBasicas: "Faixas Kyu (Básicas)",
        faixasIntermediarias: "Faixas Intermediárias",
        faixasDan: "Faixas Dan (Mestres)",
        hierarquia: "Hierarquia no Dojô",
        estrutura: "Estrutura do Dojô"
      },
      saudacoes: [
        { name: 'Ritsu-Rei', kanji: '立礼', desc: 'Saudação em pé', steps: ['Calcanhares unidos, pés levemente abertos', 'Mãos espalmadas ao longo das coxas', 'Inclinação de ~30° a partir da cintura'] },
        { name: 'Za-Rei', kanji: '座礼', desc: 'Saudação ajoelhado (Seiza)', steps: ['Ajoelhar primeiro perna esquerda', 'Sentar sobre os calcanhares', 'Mãos formam triângulo no chão', 'Levantar primeiro perna direita'] },
        { name: 'Tō-No-Rei', desc: 'Saudação ao entrar no dojo', steps: ['Feita em pé', 'Antes de pisar no tatame'] },
        { name: 'Taijō-No-Rei', desc: 'Saudação ao sair do dojo', steps: ['Feita em pé', 'Ao deixar o tatame'] },
        { name: 'Shomen-Ni-Rei', desc: 'Saudação à frente (Kamiza)', steps: ['Saudação ao local de honra'] },
        { name: 'Sensei-Ni-Rei', desc: 'Saudação ao professor', steps: ['Feita após Shomen-Ni-Rei'] },
        { name: 'Otagai-Ni-Rei', desc: 'Saudação mútua entre alunos', steps: ['Feita em pé ou ajoelhado'] },
      ],
      conducts: [
        { icon: '🚿', text: 'Estar de banho tomado, mãos e pés limpos. Higiene é essencial.' },
        { icon: '✂️', text: 'Unhas dos pés e mãos sempre cortadas para não machucar o companheiro.' },
        { icon: '👕', text: 'Mulheres devem usar camiseta branca de gola fechada por baixo do judogi.' },
        { icon: '💇', text: 'Cabelos grandes devem estar bem presos para não soltar durante a aula.' },
        { icon: '🧺', text: 'Judogi sempre seco e limpo. Deixar em local arejado para não ter odor.' },
        { icon: '💍', text: 'Retirar brincos, anéis, pulseiras, correntes ou qualquer material.' },
        { icon: '🎀', text: 'Faixa bem amarrada na cintura com nó firme.' },
        { icon: '👟', text: 'Calçados organizados e enfileirados, fundo voltado para o dojo.' },
        { icon: '👖', text: 'Cordões da calça devem ficar para dentro, não aparentes.' },
        { icon: '🚶', text: 'Para ENTRAR: pé esquerdo primeiro. Para SAIR: pé direito primeiro.' },
      ],
      judogiComponents: [
        { icon: '👘', name: 'Uwagi', desc: 'Casaco/jaqueta do judogi' },
        { icon: '👖', name: 'Zubon/Shitabaki', desc: 'Calça do judogi' },
        { icon: '🎀', name: 'Obi', desc: 'Faixa que indica a graduação' },
        { icon: '👔', name: 'Eri', desc: 'Gola/lapela do casaco' },
        { icon: '💪', name: 'Sode', desc: 'Manga do casaco' },
        { icon: '✋', name: 'Sode-Guchi', desc: 'Boca da manga' },
      ],
      beltSystem: {
        basicas: [
          { name: 'Branca', rank: 'Inicial', color: '#ffffff', age: 'Sem idade mínima' },
          { name: 'Branca/Cinza', rank: '8º Kyu', color: 'linear-gradient(90deg, #fff 50%, #808080 50%)', age: '4 anos, 3 meses' },
          { name: 'Cinza', rank: '7º Kyu', color: '#808080', age: '5 anos, 3 meses' },
          { name: 'Cinza/Azul', rank: '6º Kyu', color: 'linear-gradient(90deg, #808080 50%, #1e40af 50%)', age: '6 anos, 6 meses' },
          { name: 'Azul', rank: '5º Kyu', color: '#1e40af', age: '7 anos, 6 meses' },
          { name: 'Azul/Amarela', rank: '4º Kyu', color: 'linear-gradient(90deg, #1e40af 50%, #fbbf24 50%)', age: '8 anos, 6 meses' },
          { name: 'Amarela', rank: '3º Kyu', color: '#fbbf24', age: '9 anos, 6 meses' },
          { name: 'Laranja', rank: '2º Kyu', color: '#f97316', age: '10 anos, 12 meses' },
        ],
        intermediarias: [
          { name: 'Verde', rank: '1º Kyu', color: '#22c55e', age: '11 anos, 12 meses' },
          { name: 'Roxa', rank: '1º Kyu', color: '#8b5cf6', age: '12 anos, 12 meses' },
          { name: 'Marrom', rank: '1º Kyu', color: '#78350f', age: '13 anos, 12 meses' },
          { name: 'Marrom (avan.)', rank: '1º Kyu', color: '#78350f', age: '14 anos, 12 meses' },
        ],
        dan: [
          { name: 'Preta', rank: '1º ao 5º Dan', color: '#000000', age: 'A partir de 16 anos' },
          { name: 'Coral', rank: '6º ao 8º Dan', color: 'linear-gradient(90deg, #dc2626 50%, #fff 50%)', age: 'A partir de 44 anos' },
          { name: 'Vermelha', rank: '9º e 10º Dan', color: '#dc2626', age: 'A partir de 66 anos' },
        ],
      },
      hierarquia: {
        senpai: {
          title: "Senpai",
          desc: "Aluno mais experiente. Responsável por orientar e auxiliar os Kohai. Serve de exemplo de conduta e dedicação."
        },
        kohai: {
          title: "Kohai",
          desc: "Aluno menos experiente. Deve respeitar e aprender com os Senpai. Demonstra humildade e vontade de aprender."
        }
      },
      dojo: {
        kamiza: "KAMIZA (Lugar de Honra)",
        joseki: "JOSEKI (Convidados)",
        embujo: "EMBUJO (Área de Prática)",
        shimoseki: "SHIMOSEKI (Auxiliares)",
        shimoza: "SHIMOZA (Entrada / Alunos)",
        legend: [
          { color: "bg-primary", label: "Kamiza: Altar/foto do fundador" },
          { color: "bg-blue-500", label: "Joseki: Visitantes e juízes" },
          { color: "bg-green-500", label: "Embujo: Área de treino" },
          { color: "bg-purple-500", label: "Shimoseki: Instrutores auxiliares" },
        ]
      }
    },
    en: {
      title: "Judo Etiquette",
      sections: {
        saudacoes: "Greetings (Rei)",
        conduta: "Dojo Conduct",
        judogi: "Judogi Parts",
        graduacao: "Ranking System",
        faixasBasicas: "Kyu Belts (Basic)",
        faixasIntermediarias: "Intermediate Belts",
        faixasDan: "Dan Belts (Masters)",
        hierarquia: "Dojo Hierarchy",
        estrutura: "Dojo Structure"
      },
      saudacoes: [
        { name: 'Ritsu-Rei', kanji: '立礼', desc: 'Standing Bow', steps: ['Heels together, feet slightly open', 'Hands flat along thighs', 'Bow ~30° from the waist'] },
        { name: 'Za-Rei', kanji: '座礼', desc: 'Kneeling Bow (Seiza)', steps: ['Kneel left leg first', 'Sit on heels', 'Hands form triangle on floor', 'Stand up right leg first'] },
        { name: 'Tō-No-Rei', desc: 'Bow when entering dojo', steps: ['Done standing', 'Before stepping on tatami'] },
        { name: 'Taijō-No-Rei', desc: 'Bow when leaving dojo', steps: ['Done standing', 'Upon leaving the tatami'] },
        { name: 'Shomen-Ni-Rei', desc: 'Bow to front (Kamiza)', steps: ['Bow to the place of honor'] },
        { name: 'Sensei-Ni-Rei', desc: 'Bow to teacher', steps: ['Done after Shomen-Ni-Rei'] },
        { name: 'Otagai-Ni-Rei', desc: 'Mutual bow between students', steps: ['Done standing or kneeling'] },
      ],
      conducts: [
        { icon: '🚿', text: 'Have taken a shower, hands and feet clean. Hygiene is essential.' },
        { icon: '✂️', text: 'Fingernails and toenails always trimmed to avoid hurting partner.' },
        { icon: '👕', text: 'Women must wear a white t-shirt with closed collar under the judogi.' },
        { icon: '💇', text: 'Long hair must be tied back well so it doesn\'t come loose.' },
        { icon: '🧺', text: 'Judogi always dry and clean. Keep in airy place to avoid odor.' },
        { icon: '💍', text: 'Remove earrings, rings, bracelets, necklaces or any material.' },
        { icon: '🎀', text: 'Belt tied securely around waist.' },
        { icon: '👟', text: 'Shoes organized and lined up, heels facing the dojo.' },
        { icon: '👖', text: 'Pants drawstrings must be inside, not visible.' },
        { icon: '🚶', text: 'To ENTER: left foot first. To EXIT: right foot first.' },
      ],
      judogiComponents: [
        { icon: '👘', name: 'Uwagi', desc: 'Jacket' },
        { icon: '👖', name: 'Zubon/Shitabaki', desc: 'Pants' },
        { icon: '🎀', name: 'Obi', desc: 'Belt indicating rank' },
        { icon: '👔', name: 'Eri', desc: 'Collar/Lapel' },
        { icon: '💪', name: 'Sode', desc: 'Sleeve' },
        { icon: '✋', name: 'Sode-Guchi', desc: 'Sleeve opening' },
      ],
      beltSystem: {
        basicas: [
          { name: 'White', rank: 'Initial', color: '#ffffff', age: 'No minimum age' },
          { name: 'White/Grey', rank: '8th Kyu', color: 'linear-gradient(90deg, #fff 50%, #808080 50%)', age: '4 years, 3 months' },
          { name: 'Grey', rank: '7th Kyu', color: '#808080', age: '5 years, 3 months' },
          { name: 'Grey/Blue', rank: '6th Kyu', color: 'linear-gradient(90deg, #808080 50%, #1e40af 50%)', age: '6 years, 6 months' },
          { name: 'Blue', rank: '5th Kyu', color: '#1e40af', age: '7 years, 6 months' },
          { name: 'Blue/Yellow', rank: '4th Kyu', color: 'linear-gradient(90deg, #1e40af 50%, #fbbf24 50%)', age: '8 years, 6 months' },
          { name: 'Yellow', rank: '3rd Kyu', color: '#fbbf24', age: '9 years, 6 months' },
          { name: 'Orange', rank: '2nd Kyu', color: '#f97316', age: '10 years, 12 months' },
        ],
        intermediarias: [
          { name: 'Green', rank: '1st Kyu', color: '#22c55e', age: '11 years, 12 months' },
          { name: 'Purple', rank: '1st Kyu', color: '#8b5cf6', age: '12 years, 12 months' },
          { name: 'Brown', rank: '1st Kyu', color: '#78350f', age: '13 years, 12 months' },
          { name: 'Brown (adv.)', rank: '1st Kyu', color: '#78350f', age: '14 years, 12 months' },
        ],
        dan: [
          { name: 'Black', rank: '1st to 5th Dan', color: '#000000', age: 'From 16 years' },
          { name: 'Coral', rank: '6th to 8th Dan', color: 'linear-gradient(90deg, #dc2626 50%, #fff 50%)', age: 'From 44 years' },
          { name: 'Red', rank: '9th and 10th Dan', color: '#dc2626', age: 'From 66 years' },
        ],
      },
      hierarquia: {
        senpai: {
          title: "Senpai",
          desc: "More experienced student. Responsible for guiding and helping Kohai. Serves as example of conduct and dedication."
        },
        kohai: {
          title: "Kohai",
          desc: "Less experienced student. Must respect and learn from Senpai. Demonstrates humility and willingness to learn."
        }
      },
      dojo: {
        kamiza: "KAMIZA (Place of Honor)",
        joseki: "JOSEKI (Guests)",
        embujo: "EMBUJO (Practice Area)",
        shimoseki: "SHIMOSEKI (Assistants)",
        shimoza: "SHIMOZA (Entrance / Students)",
        legend: [
          { color: "bg-primary", label: "Kamiza: Altar/Founder's photo" },
          { color: "bg-blue-500", label: "Joseki: Visitors and judges" },
          { color: "bg-green-500", label: "Embujo: Practice area" },
          { color: "bg-purple-500", label: "Shimoseki: Assistant instructors" },
        ]
      }
    }
  };

  const t = content[language === 'en' ? 'en' : 'pt'];

  return (
    <div className="animate-fade-in">
      <h2 className="section-title">
        <span className="section-title-icon">礼</span>
        {t.title}
      </h2>

      {/* Saudações */}
      <h3 className="text-lg font-semibold text-primary flex items-center gap-2 mb-4">
        <span>🙏</span> {t.sections.saudacoes}
      </h3>
      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4 mb-10">
        {t.saudacoes.map((item, i) => (
          <div key={i} className="card-judo p-4">
            <div className="flex items-center gap-2 mb-2">
              <span className="text-primary font-semibold">{item.name}</span>
              {item.kanji && <span className="text-xs text-muted-foreground">({item.kanji})</span>}
            </div>
            <p className="text-sm text-foreground/70 mb-2">{item.desc}</p>
            <ul className="space-y-1">
              {item.steps.map((step, j) => (
                <li key={j} className="text-xs text-muted-foreground flex items-start gap-2">
                  <span className="text-primary">●</span>
                  {step}
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>

      {/* Conduta no Dojô */}
      <h3 className="text-lg font-semibold text-primary flex items-center gap-2 mb-4">
        <span>📋</span> {t.sections.conduta}
      </h3>
      <div className="grid sm:grid-cols-2 gap-3 mb-10">
        {t.conducts.map((item, i) => (
          <div key={i} className="flex items-start gap-3 p-3 bg-card/50 rounded-lg border border-primary/10 hover:border-primary/30 transition-colors">
            <span className="text-xl">{item.icon}</span>
            <p className="text-sm text-foreground/80">{item.text}</p>
          </div>
        ))}
      </div>

      {/* Judogi */}
      <h3 className="text-lg font-semibold text-primary flex items-center gap-2 mb-4">
        <span>🥋</span> {t.sections.judogi}
      </h3>
      <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-3 mb-10">
        {t.judogiComponents.map((item, i) => (
          <div key={i} className="card-judo text-center p-4 hover:-translate-y-1 transition-transform">
            <span className="text-3xl block mb-2">{item.icon}</span>
            <p className="text-primary font-semibold text-sm">{item.name}</p>
            <p className="text-xs text-muted-foreground">{item.desc}</p>
          </div>
        ))}
      </div>

      {/* Sistema de Graduação */}
      <h3 className="text-lg font-semibold text-primary flex items-center gap-2 mb-4">
        <span>🎓</span> {t.sections.graduacao}
      </h3>
      
      {/* Faixas Básicas (Kyu) */}
      <h4 className="text-sm font-semibold text-foreground/80 mb-3">{t.sections.faixasBasicas}</h4>
      <div className="grid grid-cols-2 sm:grid-cols-4 lg:grid-cols-8 gap-3 mb-6">
        {t.beltSystem.basicas.map((belt, i) => (
          <div key={i} className="card-judo text-center p-3 hover:-translate-y-1 transition-transform">
            <div className="w-full h-5 rounded mb-2" style={{ background: belt.color }} />
            <p className="text-white font-semibold text-xs">{belt.name}</p>
            <p className="text-xs text-muted-foreground">{belt.rank}</p>
            <p className="text-xs text-green-400 mt-1">{belt.age}</p>
          </div>
        ))}
      </div>

      {/* Faixas Intermediárias */}
      <h4 className="text-sm font-semibold text-foreground/80 mb-3">{t.sections.faixasIntermediarias}</h4>
      <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 mb-6">
        {t.beltSystem.intermediarias.map((belt, i) => (
          <div key={i} className="card-judo text-center p-3 hover:-translate-y-1 transition-transform">
            <div className="w-full h-5 rounded mb-2" style={{ background: belt.color }} />
            <p className="text-white font-semibold text-xs">{belt.name}</p>
            <p className="text-xs text-muted-foreground">{belt.rank}</p>
            <p className="text-xs text-green-400 mt-1">{belt.age}</p>
          </div>
        ))}
      </div>

      {/* Faixas Dan */}
      <h4 className="text-sm font-semibold text-foreground/80 mb-3">{t.sections.faixasDan}</h4>
      <div className="grid sm:grid-cols-3 gap-4 mb-10">
        {t.beltSystem.dan.map((belt, i) => (
          <div key={i} className="card-judo text-center p-4 hover:-translate-y-1 transition-transform">
            <div className="w-full h-6 rounded mb-2" style={{ background: belt.color }} />
            <p className="text-white font-semibold">{belt.name}</p>
            <p className="text-sm text-muted-foreground">{belt.rank}</p>
            <p className="text-xs text-primary mt-1">{belt.age}</p>
          </div>
        ))}
      </div>

      {/* Hierarquia */}
      <h3 className="text-lg font-semibold text-primary flex items-center gap-2 mb-4">
        <span>👥</span> {t.sections.hierarquia}
      </h3>
      <div className="grid sm:grid-cols-2 gap-6 mb-10">
        <div className="p-6 rounded-2xl bg-gradient-to-br from-primary/15 to-gold-dark/15 border-2 border-primary/40 text-center hover:-translate-y-1 transition-transform">
          <span className="text-4xl font-serif text-primary">先輩</span>
          <h4 className="text-lg font-semibold text-white mt-3 mb-2">{t.hierarquia.senpai.title}</h4>
          <p className="text-sm text-foreground/70 leading-relaxed">
            {t.hierarquia.senpai.desc}
          </p>
        </div>
        <div className="p-6 rounded-2xl bg-gradient-to-br from-secondary/20 to-judo-red-dark/20 border-2 border-secondary/40 text-center hover:-translate-y-1 transition-transform">
          <span className="text-4xl font-serif text-red-400">後輩</span>
          <h4 className="text-lg font-semibold text-white mt-3 mb-2">{t.hierarquia.kohai.title}</h4>
          <p className="text-sm text-foreground/70 leading-relaxed">
            {t.hierarquia.kohai.desc}
          </p>
        </div>
      </div>

      {/* Estrutura do Dojô */}
      <h3 className="text-lg font-semibold text-primary flex items-center gap-2 mb-4">
        <span>🏛️</span> {t.sections.estrutura}
      </h3>
      <div className="card-judo p-6">
        <div className="grid grid-cols-3 gap-2 mb-6 text-center text-sm font-medium">
          <div className="col-span-3 p-5 rounded-lg bg-gradient-to-br from-secondary/40 to-judo-red-dark/40 border-2 border-primary text-primary">
            {t.dojo.kamiza}
          </div>
          <div className="p-4 rounded-lg bg-blue-500/20 border border-blue-500/40 text-blue-400">
            {t.dojo.joseki}
          </div>
          <div className="p-10 rounded-lg bg-green-500/15 border border-dashed border-green-500/40 text-green-400">
            {t.dojo.embujo}
          </div>
          <div className="p-4 rounded-lg bg-purple-500/20 border border-purple-500/40 text-purple-400">
            {t.dojo.shimoseki}
          </div>
          <div className="col-span-3 p-4 rounded-lg bg-white/5 border border-white/20 text-foreground/60">
            {t.dojo.shimoza}
          </div>
        </div>

        <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
          {t.dojo.legend.map((item, index) => (
            <div key={index} className="flex items-center gap-2 p-2 bg-black/20 rounded-lg">
              <div className={`w-3 h-3 rounded-full ${item.color}`} />
              <span className="text-xs text-foreground/70">{item.label}</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default EtiquetaSection;
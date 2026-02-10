import { useLanguage } from "@/contexts/LanguageContext";

const KatameWazaSection = () => {
  const { language } = useLanguage();

  const katameData = language === 'pt' ? {
    osaekomi: { 
      title: '抑込技 Osae-Komi-Waza (Imobilizações)', 
      techniques: [
        { name: 'Kesa-Gatame', kanji: '袈裟固', desc: 'Imobilização em diagonal' },
        { name: 'Kuzure-Kesa-Gatame', kanji: '崩袈裟固', desc: 'Variação do Kesa-Gatame' },
        { name: 'Ushiro-Kesa-Gatame', kanji: '後袈裟固', desc: 'Kesa-Gatame por trás' },
        { name: 'Yoko-Shiho-Gatame', kanji: '横四方固', desc: 'Imobilização lateral, quatro apoios' },
        { name: 'Tate-Shiho-Gatame', kanji: '縦四方固', desc: 'Imobilização montada' },
        { name: 'Kami-Shiho-Gatame', kanji: '上四方固', desc: 'Imobilização por cima' },
        { name: 'Kuzure-Kami-Shiho-Gatame', kanji: '崩上四方固', desc: 'Variação do Kami-Shiho' },
        { name: 'Kata-Gatame', kanji: '肩固', desc: 'Imobilização pelo ombro' },
        { name: 'Ura-Gatame', kanji: '裏固', desc: 'Imobilização invertida' },
        { name: 'Uki-Gatame', kanji: '浮固', desc: 'Imobilização flutuante' },
      ]
    },
    shime: { 
      title: '絞技 Shime-Waza (Estrangulamentos)', 
      techniques: [
        { name: 'Nami-Juji-Jime', kanji: '並十字絞', desc: 'Estrangulamento cruzado normal' },
        { name: 'Gyaku-Juji-Jime', kanji: '逆十字絞', desc: 'Estrangulamento cruzado invertido' },
        { name: 'Kata-Juji-Jime', kanji: '片十字絞', desc: 'Estrangulamento meio cruzado' },
        { name: 'Hadaka-Jime', kanji: '裸絞', desc: 'Estrangulamento nu (sem gola)' },
        { name: 'Okuri-Eri-Jime', kanji: '送襟絞', desc: 'Estrangulamento deslizando a gola' },
        { name: 'Kata-Ha-Jime', kanji: '片羽絞', desc: 'Estrangulamento com uma asa' },
        { name: 'Kata-Te-Jime', kanji: '片手絞', desc: 'Estrangulamento com uma mão' },
        { name: 'Ryote-Jime', kanji: '両手絞', desc: 'Estrangulamento com duas mãos' },
        { name: 'Sode-Guruma-Jime', kanji: '袖車絞', desc: 'Estrangulamento roda de manga' },
        { name: 'Tsukkomi-Jime', kanji: '突込絞', desc: 'Estrangulamento empurrando' },
        { name: 'Sankaku-Jime', kanji: '三角絞', desc: 'Estrangulamento em triângulo' },
      ]
    },
    kansetsu: { 
      title: '関節技 Kansetsu-Waza (Chaves de Articulação)', 
      techniques: [
        { name: 'Ude-Garami', kanji: '腕絡', desc: 'Chave de braço torcendo (americana)' },
        { name: 'Ude-Hishigi-Juji-Gatame', kanji: '腕挫十字固', desc: 'Chave de braço cruzada (armlock)' },
        { name: 'Ude-Hishigi-Ude-Gatame', kanji: '腕挫腕固', desc: 'Chave de braço com o braço' },
        { name: 'Ude-Hishigi-Hiza-Gatame', kanji: '腕挫膝固', desc: 'Chave de braço com o joelho' },
        { name: 'Ude-Hishigi-Waki-Gatame', kanji: '腕挫腋固', desc: 'Chave de braço pela axila' },
        { name: 'Ude-Hishigi-Hara-Gatame', kanji: '腕挫腹固', desc: 'Chave de braço pelo abdômen' },
        { name: 'Ude-Hishigi-Ashi-Gatame', kanji: '腕挫脚固', desc: 'Chave de braço com a perna' },
        { name: 'Ude-Hishigi-Te-Gatame', kanji: '腕挫手固', desc: 'Chave de braço com a mão' },
        { name: 'Ude-Hishigi-Sankaku-Gatame', kanji: '腕挫三角固', desc: 'Chave de braço em triângulo' },
      ]
    },
  } : {
    osaekomi: { 
      title: '抑込技 Osae-Komi-Waza (Pins/Hold-downs)', 
      techniques: [
        { name: 'Kesa-Gatame', kanji: '袈裟固', desc: 'Scarf hold' },
        { name: 'Kuzure-Kesa-Gatame', kanji: '崩袈裟固', desc: 'Modified scarf hold' },
        { name: 'Ushiro-Kesa-Gatame', kanji: '後袈裟固', desc: 'Reverse scarf hold' },
        { name: 'Yoko-Shiho-Gatame', kanji: '横四方固', desc: 'Side four-corner hold' },
        { name: 'Tate-Shiho-Gatame', kanji: '縦四方固', desc: 'Vertical four-corner hold (mount)' },
        { name: 'Kami-Shiho-Gatame', kanji: '上四方固', desc: 'Upper four-corner hold' },
        { name: 'Kuzure-Kami-Shiho-Gatame', kanji: '崩上四方固', desc: 'Modified upper hold' },
        { name: 'Kata-Gatame', kanji: '肩固', desc: 'Shoulder hold' },
        { name: 'Ura-Gatame', kanji: '裏固', desc: 'Rear hold' },
        { name: 'Uki-Gatame', kanji: '浮固', desc: 'Floating hold' },
      ]
    },
    shime: { 
      title: '絞技 Shime-Waza (Chokes/Strangles)', 
      techniques: [
        { name: 'Nami-Juji-Jime', kanji: '並十字絞', desc: 'Normal cross choke' },
        { name: 'Gyaku-Juji-Jime', kanji: '逆十字絞', desc: 'Reverse cross choke' },
        { name: 'Kata-Juji-Jime', kanji: '片十字絞', desc: 'Half cross choke' },
        { name: 'Hadaka-Jime', kanji: '裸絞', desc: 'Naked choke (rear naked)' },
        { name: 'Okuri-Eri-Jime', kanji: '送襟絞', desc: 'Sliding lapel choke' },
        { name: 'Kata-Ha-Jime', kanji: '片羽絞', desc: 'Single wing choke' },
        { name: 'Kata-Te-Jime', kanji: '片手絞', desc: 'One-hand choke' },
        { name: 'Ryote-Jime', kanji: '両手絞', desc: 'Two-hand choke' },
        { name: 'Sode-Guruma-Jime', kanji: '袖車絞', desc: 'Sleeve wheel choke' },
        { name: 'Tsukkomi-Jime', kanji: '突込絞', desc: 'Thrust choke' },
        { name: 'Sankaku-Jime', kanji: '三角絞', desc: 'Triangle choke' },
      ]
    },
    kansetsu: { 
      title: '関節技 Kansetsu-Waza (Joint Locks)', 
      techniques: [
        { name: 'Ude-Garami', kanji: '腕絡', desc: 'Arm entanglement (Americana/Kimura)' },
        { name: 'Ude-Hishigi-Juji-Gatame', kanji: '腕挫十字固', desc: 'Cross armlock (armbar)' },
        { name: 'Ude-Hishigi-Ude-Gatame', kanji: '腕挫腕固', desc: 'Arm armlock' },
        { name: 'Ude-Hishigi-Hiza-Gatame', kanji: '腕挫膝固', desc: 'Knee armlock' },
        { name: 'Ude-Hishigi-Waki-Gatame', kanji: '腕挫腋固', desc: 'Armpit armlock' },
        { name: 'Ude-Hishigi-Hara-Gatame', kanji: '腕挫腹固', desc: 'Stomach armlock' },
        { name: 'Ude-Hishigi-Ashi-Gatame', kanji: '腕挫脚固', desc: 'Leg armlock' },
        { name: 'Ude-Hishigi-Te-Gatame', kanji: '腕挫手固', desc: 'Hand armlock' },
        { name: 'Ude-Hishigi-Sankaku-Gatame', kanji: '腕挫三角固', desc: 'Triangle armlock' },
      ]
    },
  };

  const prohibitedTechniques = language === 'pt'
    ? [
        { name: 'Do-Jime', kanji: '胴絞', desc: 'Estrangulamento do tronco com as pernas (tesoura no corpo)' },
        { name: 'Ashi-Garami', kanji: '足絡', desc: 'Chave de perna/tornozelo entrelaçando' },
        { name: 'Kawazu-Gake', kanji: '河津掛', desc: 'Enrolar a perna por trás e cair sobre o oponente' },
        { name: 'Kani-Basami', kanji: '蟹挟', desc: 'Tesoura voadora (entrada pelas duas pernas)' },
      ]
    : [
        { name: 'Do-Jime', kanji: '胴絞', desc: 'Trunk strangle with legs (body scissors)' },
        { name: 'Ashi-Garami', kanji: '足絡', desc: 'Leg/ankle entanglement lock' },
        { name: 'Kawazu-Gake', kanji: '河津掛', desc: 'Wrapping leg behind and falling on opponent' },
        { name: 'Kani-Basami', kanji: '蟹挟', desc: 'Flying scissors (double leg entry)' },
      ];

  return (
    <div className="animate-fade-in">
      <h2 className="section-title">
        <span className="section-title-icon">固</span>
        Katame-Waza - {language === 'pt' ? 'Técnicas de Domínio' : 'Grappling Techniques'}
      </h2>

      <div className="card-judo mb-8">
        <p className="text-sm text-foreground/70">
          {language === 'pt'
            ? 'Katame-Waza são técnicas de controle divididas em 3 categorias: Osae-Komi-Waza (imobilizações), Shime-Waza (estrangulamentos) e Kansetsu-Waza (chaves de articulação).'
            : 'Katame-Waza are control techniques divided into 3 categories: Osae-Komi-Waza (pins/hold-downs), Shime-Waza (chokes/strangles) and Kansetsu-Waza (joint locks).'}
        </p>
      </div>

      {Object.entries(katameData).map(([key, category]) => (
        <div key={key} className="mb-10">
          <h3 className="text-lg font-semibold text-white flex items-center gap-3 mb-5">
            <span className="text-2xl font-serif text-primary">{category.title.split(' ')[0]}</span>
            {category.title.split(' ').slice(1).join(' ')}
          </h3>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {category.techniques.map((technique, index) => (
              <div key={index} className="card-judo text-center hover:scale-[1.02] transition-transform">
                <h4 className="font-semibold text-white text-sm mb-2">{technique.name}</h4>
                <p className="text-2xl font-serif text-primary mb-2">{technique.kanji}</p>
                <p className="text-xs text-muted-foreground">{technique.desc}</p>
              </div>
            ))}
          </div>
        </div>
      ))}

      {/* Prohibited Techniques */}
      <h3 className="text-lg font-semibold text-primary flex items-center gap-2 mb-5 mt-10">
        <span>⛔</span> Kinshi-Waza ({language === 'pt' ? 'Técnicas Proibidas' : 'Prohibited Techniques'})
      </h3>
      <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
        {prohibitedTechniques.map((technique, index) => (
          <div 
            key={index} 
            className="p-4 bg-red-500/10 border border-red-500/30 rounded-xl text-center"
          >
            <h4 className="font-semibold text-red-400 text-sm mb-1">{technique.name}</h4>
            <p className="text-xl font-serif text-red-400/80 mb-2">{technique.kanji}</p>
            <p className="text-xs text-foreground/60">{technique.desc}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default KatameWazaSection;

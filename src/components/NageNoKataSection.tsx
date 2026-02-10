import { useLanguage } from "@/contexts/LanguageContext";

const NageNoKataSection = () => {
  const { language } = useLanguage();

  const grupos = language === 'pt'
    ? [
        { nome: 'Te-Waza', kanji: '手技', numero: '1º Grupo', desc: 'Técnicas de Mão/Braço', tecnicas: [
          { name: 'Uki-Otoshi', kanji: '浮落', desc: 'Queda flutuante' },
          { name: 'Seoi-Nage', kanji: '背負投', desc: 'Projeção pelas costas' },
          { name: 'Kata-Guruma', kanji: '肩車', desc: 'Roda sobre os ombros' },
        ]},
        { nome: 'Koshi-Waza', kanji: '腰技', numero: '2º Grupo', desc: 'Técnicas de Quadril', tecnicas: [
          { name: 'Uki-Goshi', kanji: '浮腰', desc: 'Quadril flutuante' },
          { name: 'Harai-Goshi', kanji: '払腰', desc: 'Quadril varrendo' },
          { name: 'Tsurikomi-Goshi', kanji: '釣込腰', desc: 'Quadril levantando e puxando' },
        ]},
        { nome: 'Ashi-Waza', kanji: '足技', numero: '3º Grupo', desc: 'Técnicas de Perna/Pé', tecnicas: [
          { name: 'Okuri-Ashi-Harai', kanji: '送足払', desc: 'Varrer os pés deslizando' },
          { name: 'Sasae-Tsurikomi-Ashi', kanji: '支釣込足', desc: 'Bloqueio do pé levantando' },
          { name: 'Uchi-Mata', kanji: '内股', desc: 'Coxa interna' },
        ]},
        { nome: 'Ma-Sutemi-Waza', kanji: '真捨身技', numero: '4º Grupo', desc: 'Técnicas de Sacrifício para Trás', tecnicas: [
          { name: 'Tomoe-Nage', kanji: '巴投', desc: 'Projeção em círculo' },
          { name: 'Ura-Nage', kanji: '裏投', desc: 'Projeção para trás' },
          { name: 'Sumi-Gaeshi', kanji: '隅返', desc: 'Virada de canto' },
        ]},
        { nome: 'Yoko-Sutemi-Waza', kanji: '横捨身技', numero: '5º Grupo', desc: 'Técnicas de Sacrifício Lateral', tecnicas: [
          { name: 'Yoko-Gake', kanji: '横掛', desc: 'Gancho lateral' },
          { name: 'Yoko-Guruma', kanji: '横車', desc: 'Roda lateral' },
          { name: 'Uki-Waza', kanji: '浮技', desc: 'Técnica flutuante' },
        ]},
      ]
    : [
        { nome: 'Te-Waza', kanji: '手技', numero: '1st Group', desc: 'Hand/Arm Techniques', tecnicas: [
          { name: 'Uki-Otoshi', kanji: '浮落', desc: 'Floating drop' },
          { name: 'Seoi-Nage', kanji: '背負投', desc: 'Shoulder throw' },
          { name: 'Kata-Guruma', kanji: '肩車', desc: 'Shoulder wheel' },
        ]},
        { nome: 'Koshi-Waza', kanji: '腰技', numero: '2nd Group', desc: 'Hip Techniques', tecnicas: [
          { name: 'Uki-Goshi', kanji: '浮腰', desc: 'Floating hip' },
          { name: 'Harai-Goshi', kanji: '払腰', desc: 'Sweeping hip' },
          { name: 'Tsurikomi-Goshi', kanji: '釣込腰', desc: 'Lifting pulling hip' },
        ]},
        { nome: 'Ashi-Waza', kanji: '足技', numero: '3rd Group', desc: 'Leg/Foot Techniques', tecnicas: [
          { name: 'Okuri-Ashi-Harai', kanji: '送足払', desc: 'Sliding foot sweep' },
          { name: 'Sasae-Tsurikomi-Ashi', kanji: '支釣込足', desc: 'Propping lifting foot' },
          { name: 'Uchi-Mata', kanji: '内股', desc: 'Inner thigh' },
        ]},
        { nome: 'Ma-Sutemi-Waza', kanji: '真捨身技', numero: '4th Group', desc: 'Rear Sacrifice Techniques', tecnicas: [
          { name: 'Tomoe-Nage', kanji: '巴投', desc: 'Circle throw' },
          { name: 'Ura-Nage', kanji: '裏投', desc: 'Rear throw' },
          { name: 'Sumi-Gaeshi', kanji: '隅返', desc: 'Corner reversal' },
        ]},
        { nome: 'Yoko-Sutemi-Waza', kanji: '横捨身技', numero: '5th Group', desc: 'Side Sacrifice Techniques', tecnicas: [
          { name: 'Yoko-Gake', kanji: '横掛', desc: 'Side hook' },
          { name: 'Yoko-Guruma', kanji: '横車', desc: 'Side wheel' },
          { name: 'Uki-Waza', kanji: '浮技', desc: 'Floating technique' },
        ]},
      ];

  return (
    <div className="animate-fade-in">
      <h2 className="section-title">
        <span className="section-title-icon">投形</span>
        Nage-no-Kata - {language === 'pt' ? 'Forma das Projeções' : 'Forms of Throwing'}
      </h2>

      <div className="card-judo mb-8">
        <p className="text-sm text-foreground/70">
          {language === 'pt'
            ? <>O <strong>Nage-no-Kata</strong> (投の形) é a "Forma das Projeções", criada por Jigoro Kano em 1887. É composto por <strong>15 técnicas</strong> divididas em 5 grupos de 3 técnicas cada, demonstrando os princípios fundamentais das projeções.</>
            : <>The <strong>Nage-no-Kata</strong> (投の形) is the "Forms of Throwing", created by Jigoro Kano in 1887. It consists of <strong>15 techniques</strong> divided into 5 groups of 3 techniques each, demonstrating the fundamental principles of throwing.</>}
        </p>
      </div>

      <div className="space-y-6">
        {grupos.map((grupo, index) => (
          <div key={index} className="card-judo">
            <div className="flex items-center gap-4 mb-4 pb-3 border-b border-primary/20">
              <span className="text-3xl font-serif text-primary">{grupo.kanji}</span>
              <div>
                <h3 className="font-semibold text-white">{grupo.nome}</h3>
                <p className="text-xs text-muted-foreground">{grupo.numero} - {grupo.desc}</p>
              </div>
            </div>
            
            <div className="grid sm:grid-cols-3 gap-3">
              {grupo.tecnicas.map((tecnica, i) => (
                <div key={i} className="bg-background/30 rounded-lg p-3 text-center">
                  <p className="text-xl font-serif text-primary mb-1">{tecnica.kanji}</p>
                  <p className="font-medium text-white text-sm">{tecnica.name}</p>
                  <p className="text-xs text-muted-foreground">{tecnica.desc}</p>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default NageNoKataSection;

import { principlesData } from "@/data/judoData";
import { principlesDataEn } from "@/data/judoDataEn";
import { useLanguage } from "@/contexts/LanguageContext";

const PrincipiosSection = () => {
  const { language } = useLanguage();
  const data = language === 'en' ? principlesDataEn : principlesData;

  const content = {
    pt: {
      title: "Princípios do Judô",
      codeTitle: "Código Moral do Judô",
      phrasesTitle: "Frases de Jigoro Kano",
      practiceTitle: "Formas de Prática",
      benefitsTitle: "Benefícios do Judô",
      benefitsPhysical: "Benefícios Físicos",
      benefitsMoral: "Benefícios Morais"
    },
    en: {
      title: "Principles of Judo",
      codeTitle: "Judo Moral Code",
      phrasesTitle: "Jigoro Kano Quotes",
      practiceTitle: "Forms of Practice",
      benefitsTitle: "Benefits of Judo",
      benefitsPhysical: "Physical Benefits",
      benefitsMoral: "Moral Benefits"
    }
  };

  const t = content[language === 'en' ? 'en' : 'pt'];

  return (
    <div className="animate-fade-in">
      <h2 className="section-title">
        <span className="section-title-icon">心</span>
        {t.title}
      </h2>

      {/* Main Principles */}
      <div className="grid md:grid-cols-3 gap-6 mb-10">
        {data.mainPrinciples.map((principle, index) => (
          <div key={index} className="card-red text-center p-8 hover:scale-[1.02] transition-transform">
            <span className="text-5xl font-serif text-primary block mb-3">{principle.kanji}</span>
            <h3 className="text-xl font-semibold text-white mb-1">{principle.romaji}</h3>
            <p className="text-primary text-sm mb-4">{principle.meaning}</p>
            <p className="text-sm text-foreground/70 leading-relaxed">{principle.desc}</p>
          </div>
        ))}
      </div>

      {/* Moral Code */}
      <h3 className="text-lg font-semibold text-primary flex items-center gap-2 mb-5 mt-8">
        <span>📜</span> {t.codeTitle}
      </h3>
      <div className="grid grid-cols-2 sm:grid-cols-4 lg:grid-cols-7 gap-4 mb-10">
        {data.moralCode.map((item, index) => (
          <div 
            key={index} 
            className="card-red p-5 text-center hover:-translate-y-1 transition-transform"
          >
            <h4 className="text-primary font-bold text-base mb-1">{item.title}</h4>
            <p className="text-primary/70 text-xs mb-2">{item.kanji}</p>
            <p className="text-foreground/70 text-sm">{item.desc}</p>
          </div>
        ))}
      </div>

      {/* Ideologies */}
      <h3 className="text-lg font-semibold text-primary flex items-center gap-2 mb-5 mt-8">
        <span>💭</span> {t.phrasesTitle}
      </h3>
      <div className="grid gap-3 mb-10">
        {data.ideologies.map((phrase, index) => (
          <div 
            key={index} 
            className="p-4 bg-card/60 rounded-xl border-l-4 border-primary italic text-foreground/80 text-sm"
          >
            "{phrase}"
          </div>
        ))}
      </div>

      {/* Practice Forms */}
      <h3 className="text-lg font-semibold text-primary flex items-center gap-2 mb-5 mt-10">
        <span>🥋</span> {t.practiceTitle}
      </h3>
      <div className="grid sm:grid-cols-2 lg:grid-cols-5 gap-4 mb-10">
        {data.practiceForms.map((form, index) => (
          <div key={index} className="card-judo hover:-translate-y-1 transition-transform">
            <div className="flex items-center gap-3 mb-3">
              <span className="text-3xl font-serif text-primary">{form.kanji}</span>
              <div>
                <h4 className="font-semibold text-white">{form.title}</h4>
                <p className="text-xs text-muted-foreground">{form.romaji}</p>
              </div>
            </div>
            <p className="text-sm text-foreground/70">{form.desc}</p>
          </div>
        ))}
      </div>

      {/* Benefits */}
      <h3 className="text-lg font-semibold text-primary flex items-center gap-2 mb-5 mt-8">
        <span>✨</span> {t.benefitsTitle}
      </h3>
      <div className="grid md:grid-cols-2 gap-6">
        {/* Physical Benefits */}
        <div className="p-6 rounded-2xl border border-green-500/30 bg-gradient-to-br from-green-500/10 to-green-600/10">
          <h4 className="text-lg font-semibold text-green-400 flex items-center gap-2 mb-4">
            <span>💪</span> {t.benefitsPhysical}
          </h4>
          <div className="space-y-3">
            {data.benefits.physical.map((benefit, index) => (
              <div key={index} className="flex items-start gap-2 text-sm text-foreground/80">
                <span className="text-green-400 font-bold mt-0.5">✓</span>
                <span>{benefit}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Moral Benefits */}
        <div className="p-6 rounded-2xl border border-blue-500/30 bg-gradient-to-br from-blue-500/10 to-blue-600/10">
          <h4 className="text-lg font-semibold text-blue-400 flex items-center gap-2 mb-4">
            <span>🧠</span> {t.benefitsMoral}
          </h4>
          <div className="space-y-3">
            {data.benefits.moral.map((benefit, index) => (
              <div key={index} className="flex items-start gap-2 text-sm text-foreground/80">
                <span className="text-blue-400 font-bold mt-0.5">✓</span>
                <span>{benefit}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default PrincipiosSection;
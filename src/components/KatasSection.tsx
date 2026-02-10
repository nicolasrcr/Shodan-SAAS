import { useLanguage } from "@/contexts/LanguageContext";

const KatasSection = () => {
  const { language } = useLanguage();

  const outrosKatas = language === 'pt'
    ? [
        { name: 'Kime-no-Kata', kanji: '極の形', desc: 'Forma de decisão/combate real. 20 técnicas de defesa contra ataques armados e desarmados.' },
        { name: 'Kodokan Goshin-jutsu', kanji: '講道館護身術', desc: 'Forma moderna de defesa pessoal. 21 técnicas contra ataques contemporâneos.' },
        { name: 'Ju-no-Kata', kanji: '柔の形', desc: 'Forma da suavidade. 15 técnicas demonstrando o princípio Ju (ceder).' },
        { name: 'Itsutsu-no-Kata', kanji: '五の形', desc: 'Forma dos cinco princípios. 5 técnicas representando forças da natureza.' },
        { name: 'Koshiki-no-Kata', kanji: '古式の形', desc: 'Forma antiga. 21 técnicas preservadas do Jujutsu clássico.' },
        { name: 'Seiryoku-Zenyo Kokumin-Taiiku', kanji: '精力善用国民体育', desc: 'Exercícios de educação física nacional baseados nos princípios do Judô.' },
      ]
    : [
        { name: 'Kime-no-Kata', kanji: '極の形', desc: 'Forms of decision/real combat. 20 defense techniques against armed and unarmed attacks.' },
        { name: 'Kodokan Goshin-jutsu', kanji: '講道館護身術', desc: 'Modern self-defense form. 21 techniques against contemporary attacks.' },
        { name: 'Ju-no-Kata', kanji: '柔の形', desc: 'Forms of gentleness. 15 techniques demonstrating the Ju principle (yielding).' },
        { name: 'Itsutsu-no-Kata', kanji: '五の形', desc: 'Forms of five principles. 5 techniques representing forces of nature.' },
        { name: 'Koshiki-no-Kata', kanji: '古式の形', desc: 'Ancient forms. 21 techniques preserved from classical Jujutsu.' },
        { name: 'Seiryoku-Zenyo Kokumin-Taiiku', kanji: '精力善用国民体育', desc: 'National physical education exercises based on Judo principles.' },
      ];

  return (
    <div className="animate-fade-in">
      <h2 className="section-title">
        <span className="section-title-icon">形</span>
        Katas - {language === 'pt' ? 'Formas do Judô' : 'Judo Forms'}
      </h2>

      <div className="card-judo mb-8">
        <p className="text-sm text-foreground/70">
          {language === 'pt'
            ? <><strong>Kata</strong> (形) significa "forma" ou "modelo". São sequências pré-determinadas de técnicas executadas entre Tori (quem aplica) e Uke (quem recebe), preservando a tradição e a essência técnica do Judô.</>
            : <><strong>Kata</strong> (形) means "form" or "model". They are pre-determined sequences of techniques performed between Tori (the one who applies) and Uke (the one who receives), preserving the tradition and technical essence of Judo.</>}
        </p>
      </div>

      {/* Randori-no-Kata */}
      <h3 className="text-lg font-semibold text-primary flex items-center gap-2 mb-4">
        <span>🥋</span> Randori-no-Kata ({language === 'pt' ? 'Formas de Treinamento Livre' : 'Free Practice Forms'})
      </h3>
      
      <div className="grid sm:grid-cols-2 gap-4 mb-8">
        <div className="card-red p-6">
          <div className="flex items-center gap-3 mb-3">
            <span className="text-3xl font-serif text-primary">投形</span>
            <div>
              <h4 className="font-semibold text-white">Nage-no-Kata</h4>
              <p className="text-xs text-muted-foreground">{language === 'pt' ? 'Forma das Projeções' : 'Forms of Throwing'}</p>
            </div>
          </div>
          <p className="text-sm text-foreground/70">
            {language === 'pt'
              ? '15 técnicas em 5 grupos: Te-waza, Koshi-waza, Ashi-waza, Ma-sutemi-waza, Yoko-sutemi-waza. Criado por Jigoro Kano em 1887.'
              : '15 techniques in 5 groups: Te-waza, Koshi-waza, Ashi-waza, Ma-sutemi-waza, Yoko-sutemi-waza. Created by Jigoro Kano in 1887.'}
          </p>
        </div>

        <div className="card-red p-6">
          <div className="flex items-center gap-3 mb-3">
            <span className="text-3xl font-serif text-primary">固形</span>
            <div>
              <h4 className="font-semibold text-white">Katame-no-Kata</h4>
              <p className="text-xs text-muted-foreground">{language === 'pt' ? 'Forma de Domínio' : 'Forms of Grappling'}</p>
            </div>
          </div>
          <p className="text-sm text-foreground/70">
            {language === 'pt'
              ? '15 técnicas em 3 grupos: Osaekomi-waza (imobilizações), Shime-waza (estrangulamentos), Kansetsu-waza (chaves).'
              : '15 techniques in 3 groups: Osaekomi-waza (pins), Shime-waza (chokes), Kansetsu-waza (joint locks).'}
          </p>
        </div>
      </div>

      {/* Outros Katas */}
      <h3 className="text-lg font-semibold text-primary flex items-center gap-2 mb-4">
        <span>📜</span> {language === 'pt' ? 'Outros Katas Oficiais' : 'Other Official Katas'}
      </h3>
      
      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
        {outrosKatas.map((kata, index) => (
          <div key={index} className="card-judo">
            <div className="flex items-center gap-2 mb-2">
              <h4 className="font-semibold text-white">{kata.name}</h4>
              <span className="text-xs text-primary">{kata.kanji}</span>
            </div>
            <p className="text-xs text-muted-foreground">{kata.desc}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default KatasSection;

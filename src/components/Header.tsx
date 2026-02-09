import { useLanguage } from "@/contexts/LanguageContext";

interface HeaderProps {
  onNavigate: (section: string) => void;
}

const Header = ({ onNavigate }: HeaderProps) => {
  const { t } = useLanguage();

  return (
    <header className="sticky top-0 z-50 bg-gradient-to-r from-secondary via-judo-red-dark to-secondary border-b-[3px] border-primary">
      <div className="max-w-7xl mx-auto px-6 py-3">
        <div className="flex items-center justify-between">
          <div 
            className="flex items-center gap-4 cursor-pointer group"
            onClick={() => onNavigate('home')}
          >
            <span className="text-4xl md:text-5xl font-serif text-primary transition-transform group-hover:scale-105">
              柔道
            </span>
            <div>
              <h1 className="text-lg md:text-xl font-bold text-white">{t("header.title")}</h1>
              <p className="text-xs text-foreground/70">{t("header.subtitle")}</p>
            </div>
          </div>
          
          <div className="text-right flex items-center gap-3">
            <span className="text-2xl text-primary animate-pulse-gold">●</span>
            <div>
              <div className="text-2xl md:text-3xl font-serif text-primary">初段</div>
              <p className="text-[10px] text-foreground/60 hidden sm:block">{t("header.firstDan")}</p>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
import { useLocation } from "react-router-dom";
import { useEffect } from "react";
import { useLanguage } from "@/contexts/LanguageContext";
import LanguageToggle from "@/components/LanguageToggle";

const NotFound = () => {
  const location = useLocation();
  const { t } = useLanguage();

  useEffect(() => {
    console.error("404 Error: User attempted to access non-existent route:", location.pathname);
  }, [location.pathname]);

  return (
    <div className="flex min-h-screen items-center justify-center bg-gradient-to-b from-background via-card to-background">
      <div className="absolute top-4 right-4">
        <LanguageToggle />
      </div>
      <div className="text-center">
        <h1 className="mb-4 text-6xl font-bold text-primary">{t("notfound.title")}</h1>
        <p className="mb-4 text-xl text-muted-foreground">{t("notfound.message")}</p>
        <a href="/" className="text-primary underline hover:text-primary/90">
          {t("notfound.returnHome")}
        </a>
      </div>
    </div>
  );
};

export default NotFound;

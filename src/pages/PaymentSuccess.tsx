import { useNavigate } from "react-router-dom";
import { useAuth } from "@/contexts/AuthContext";
import { useLanguage } from "@/contexts/LanguageContext";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { CheckCircle, LogOut, Home } from "lucide-react";
import LanguageToggle from "@/components/LanguageToggle";

const PaymentSuccess = () => {
  const navigate = useNavigate();
  const { profile, signOut } = useAuth();
  const { t, language } = useLanguage();

  const handleSignOut = async () => {
    await signOut();
    navigate('/');
  };

  const handleGoHome = () => {
    navigate('/curso');
  };

  const formatDate = (date: Date) => {
    return date.toLocaleDateString(language === 'pt' ? 'pt-BR' : 'en-US');
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-background via-card to-background">
      {/* Header */}
      <header className="bg-gradient-to-r from-secondary via-judo-red-dark to-secondary border-b-[3px] border-primary py-4">
        <div className="max-w-6xl mx-auto px-4 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <span className="text-4xl font-serif text-primary">柔道</span>
            <div>
              <h1 className="text-lg font-bold text-white">{t("header.title")}</h1>
              <p className="text-xs text-foreground/70">{t("common.hello")}, {profile?.name?.split(' ')[0]}!</p>
            </div>
          </div>
          <div className="flex items-center gap-3">
            <LanguageToggle />
            <Button
              onClick={handleSignOut}
              variant="outline"
              size="sm"
              className="border-primary/50 text-primary hover:bg-primary hover:text-secondary"
            >
              <LogOut className="w-4 h-4 mr-2" />
              {t("common.logout")}
            </Button>
          </div>
        </div>
      </header>

      <main className="max-w-4xl mx-auto px-4 py-16">
        {/* Success Icon */}
        <div className="text-center mb-12">
          <div className="w-24 h-24 mx-auto mb-6 rounded-full bg-green-500/20 flex items-center justify-center animate-in fade-in zoom-in duration-500">
            <CheckCircle className="w-12 h-12 text-green-500" />
          </div>
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-4 animate-in fade-in slide-in-from-bottom duration-700">
            {t("success.paymentConfirmed")} <span className="text-green-500">{t("success.confirmed")}</span>
          </h1>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto mb-2 animate-in fade-in slide-in-from-bottom duration-900">
            {t("success.thankYou")}
          </p>
          <p className="text-muted-foreground text-sm max-w-2xl mx-auto animate-in fade-in slide-in-from-bottom duration-1000">
            {t("success.oneYearAccess")}
          </p>
        </div>

        {/* Success Card */}
        <Card className="card-red rounded-3xl overflow-hidden mb-8 animate-in fade-in slide-in-from-bottom-4 duration-1000">
          <CardContent className="p-8 md:p-12">
            <div className="text-center space-y-6">
              <div className="grid md:grid-cols-2 gap-4 text-left">
                <div className="bg-secondary/50 rounded-lg p-4">
                  <p className="text-sm text-muted-foreground mb-1">{t("success.paymentStatus")}</p>
                  <p className="text-lg font-bold text-green-500">{t("success.approved")}</p>
                </div>
                <div className="bg-secondary/50 rounded-lg p-4">
                  <p className="text-sm text-muted-foreground mb-1">{t("success.yourEmail")}</p>
                  <p className="text-sm font-mono text-white break-all">{profile?.email}</p>
                </div>
              </div>

              <div className="bg-primary/20 border border-primary/50 rounded-lg p-6">
                <h3 className="text-xl font-bold text-white mb-3">{t("success.nextSteps")}</h3>
                <ul className="space-y-2 text-sm text-muted-foreground text-left">
                  <li className="flex gap-3">
                    <span className="text-primary font-bold">1.</span>
                    <span>{t("success.step1")}</span>
                  </li>
                  <li className="flex gap-3">
                    <span className="text-primary font-bold">2.</span>
                    <span>{t("success.step2")}</span>
                  </li>
                  <li className="flex gap-3">
                    <span className="text-primary font-bold">3.</span>
                    <span>{t("success.step3")} {formatDate(new Date(Date.now() + 365 * 24 * 60 * 60 * 1000))}</span>
                  </li>
                </ul>
              </div>

              <div className="flex flex-col sm:flex-row gap-4 justify-center pt-4">
                <Button
                  onClick={handleGoHome}
                  className="btn-gold text-lg py-6 px-8"
                >
                  <Home className="w-5 h-5 mr-2" />
                  {t("success.accessCourse")}
                </Button>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Help Text */}
        <div className="text-center text-sm text-muted-foreground">
          <p>
            {t("success.questionsAccess")}{' '}
            <a
              href="https://wa.me/5561996634944"
              target="_blank"
              rel="noopener noreferrer"
              className="text-primary hover:underline font-medium"
            >
              WhatsApp (61) 99663-4944
            </a>
          </p>
        </div>
      </main>
    </div>
  );
};

export default PaymentSuccess;

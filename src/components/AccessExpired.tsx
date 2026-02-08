import { useNavigate } from "react-router-dom";
import { useAuth } from "@/contexts/AuthContext";
import { useLanguage } from "@/contexts/LanguageContext";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Clock, CreditCard, Smartphone, LogOut, Check, AlertTriangle, Loader2 } from "lucide-react";
import { useState } from "react";
import { supabase } from "@/integrations/supabase/client";
import { toast } from "sonner";
import LanguageToggle from "@/components/LanguageToggle";

interface AccessExpiredProps {
  expirationDate: Date;
}

const AccessExpired = ({ expirationDate }: AccessExpiredProps) => {
  const navigate = useNavigate();
  const { profile, user, signOut } = useAuth();
  const { t, language } = useLanguage();
  const [showPixModal, setShowPixModal] = useState(false);
  const [isProcessing, setIsProcessing] = useState(false);

  const formatDate = (date: Date) => {
    return date.toLocaleDateString(language === 'pt' ? 'pt-BR' : 'en-US');
  };

  const handleSignOut = async () => {
    await signOut();
    navigate('/');
  };

  const handleCardPayment = async () => {
    if (!user || !profile) {
      toast.error(t("common.error"));
      return;
    }

    setIsProcessing(true);
    try {
      const { data, error } = await supabase.functions.invoke('mercadopago-checkout', {
        body: {
          type: 'renewal',
          userId: user.id,
          userEmail: profile.email,
          userName: profile.name,
        },
      });

      if (error) throw error;

      if (data?.initPoint) {
        window.location.href = data.initPoint;
      } else {
        throw new Error('Payment link error');
      }
    } catch (error: any) {
      console.error('Payment error:', error);
      toast.error(error.message || t("common.error"));
    } finally {
      setIsProcessing(false);
    }
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
        {/* Expired Icon */}
        <div className="text-center mb-8">
          <div className="w-24 h-24 mx-auto mb-6 rounded-full bg-destructive/20 flex items-center justify-center">
            <Clock className="w-12 h-12 text-destructive" />
          </div>
          <h1 className="text-3xl md:text-4xl font-bold text-white mb-4">
            {t("expired.accessExpired")} <span className="text-destructive">{t("expired.expired")}</span>
          </h1>
          <div className="flex items-center justify-center gap-2 mb-4">
            <AlertTriangle className="w-5 h-5 text-destructive" />
            <p className="text-destructive font-medium">
              {t("expired.expiredOn")} {formatDate(expirationDate)}
            </p>
          </div>
          <p className="text-muted-foreground max-w-xl mx-auto">
            {t("expired.accessPeriodEnded")}
          </p>
        </div>

        {/* Renewal Card */}
        <Card className="card-red rounded-3xl overflow-hidden mb-8">
          <CardContent className="p-8 md:p-12">
            <div className="text-center">
              <h2 className="text-2xl font-bold text-white mb-2">{t("expired.renewAccess")}</h2>
              <p className="text-muted-foreground mb-6">{t("expired.continuePreparation")}</p>
              
              <ul className="space-y-2 text-sm text-muted-foreground mb-8 inline-block text-left">
                <li className="flex items-center gap-2">
                  <Check className="w-4 h-4 text-primary" /> {t("expired.12moreMonths")}
                </li>
                <li className="flex items-center gap-2">
                  <Check className="w-4 h-4 text-primary" /> {t("expired.17modulesUpdated")}
                </li>
                <li className="flex items-center gap-2">
                  <Check className="w-4 h-4 text-primary" /> {t("expired.newContent")}
                </li>
                <li className="flex items-center gap-2">
                  <Check className="w-4 h-4 text-primary" /> {t("expired.whatsappSupport")}
                </li>
              </ul>

              <div className="mb-8">
                <div className="text-muted-foreground line-through text-lg mb-1">R$ 197</div>
                <div className="text-5xl md:text-6xl font-bold text-primary mb-2">
                  R$ 99,90
                </div>
                <p className="text-sm text-muted-foreground">{t("expired.annualRenewal")}</p>
              </div>

              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button 
                  onClick={handleCardPayment}
                  disabled={isProcessing}
                  className="btn-gold text-lg py-6 px-8"
                >
                  {isProcessing ? (
                    <Loader2 className="w-5 h-5 mr-2 animate-spin" />
                  ) : (
                    <CreditCard className="w-5 h-5 mr-2" />
                  )}
                  {isProcessing ? t("common.processing") : t("expired.renewWithCard")}
                </Button>
                <Button 
                  onClick={() => setShowPixModal(true)}
                  variant="outline"
                  className="border-primary text-primary hover:bg-primary hover:text-secondary text-lg py-6 px-8"
                >
                  <Smartphone className="w-5 h-5 mr-2" />
                  {t("expired.renewWithPix")}
                </Button>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Help Text */}
        <div className="text-center text-sm text-muted-foreground">
          <p>
            {t("expired.questionsRenewal")}{' '}
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

      {/* PIX Modal */}
      {showPixModal && (
        <div className="fixed inset-0 bg-black/80 flex items-center justify-center z-50 p-4">
          <Card className="max-w-md w-full bg-card border-primary/30">
            <CardContent className="p-6">
              <h3 className="text-xl font-bold text-white mb-4 text-center">{t("expired.pixRenewalTitle")}</h3>
              <div className="bg-secondary/50 rounded-lg p-4 mb-4">
                <p className="text-sm text-muted-foreground mb-2">{t("pix.key")}</p>
                <p className="text-primary font-mono break-all">62.333.509/0001-03</p>
              </div>
              <div className="bg-secondary/50 rounded-lg p-4 mb-4">
                <p className="text-sm text-muted-foreground mb-2">{t("pix.value")}</p>
                <p className="text-2xl font-bold text-primary">R$ 99,90</p>
              </div>
              <div className="bg-secondary/50 rounded-lg p-4 mb-4">
                <p className="text-sm text-muted-foreground mb-2">{t("pix.yourEmail")}</p>
                <p className="text-white font-mono text-sm">{profile?.email}</p>
              </div>
              <div className="bg-primary/20 border border-primary/50 rounded-lg p-4 mb-4">
                <p className="text-sm text-muted-foreground mb-2">{t("pix.whatsapp")}</p>
                <a 
                  href="https://wa.me/5561996634944" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="text-primary font-bold text-lg hover:underline"
                >
                  (61) 99663-4944
                </a>
              </div>
              <p className="text-sm text-muted-foreground mb-4 text-center">
                {t("expired.renewalWithin24h")}
              </p>
              <Button 
                onClick={() => setShowPixModal(false)}
                className="w-full btn-gold"
              >
                {t("common.understood")}
              </Button>
            </CardContent>
          </Card>
        </div>
      )}
    </div>
  );
};

export default AccessExpired;

import { useState, useEffect } from "react";
import { useNavigate, Link, useSearchParams } from "react-router-dom";
import { useAuth } from "@/contexts/AuthContext";
import { supabase } from "@/integrations/supabase/client";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Alert, AlertDescription } from "@/components/ui/alert";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Eye, EyeOff, Loader2, Check, CreditCard, QrCode } from "lucide-react";
import { z } from "zod";

const cadastroSchema = z.object({
  name: z.string().trim().min(3, "Nome deve ter pelo menos 3 caracteres").max(100, "Nome muito longo"),
  email: z.string().trim().email("Email inválido").max(255, "Email muito longo"),
  phone: z.string().trim().min(10, "Telefone inválido").max(20, "Telefone inválido"),
  password: z.string().min(6, "Senha deve ter pelo menos 6 caracteres").max(100, "Senha muito longa"),
  paymentMethod: z.enum(["pix", "cartao"]),
});

const AuthPage = () => {
  const navigate = useNavigate();
  const [searchParams] = useSearchParams();
  const { signIn, signUp } = useAuth();
  
  // Tab state - check URL param for initial tab
  const initialTab = searchParams.get('tab') === 'cadastro' ? 'cadastro' : 'login';
  const [activeTab, setActiveTab] = useState(initialTab);
  
  // Login state
  const [loginEmail, setLoginEmail] = useState("");
  const [loginPassword, setLoginPassword] = useState("");
  const [showLoginPassword, setShowLoginPassword] = useState(false);
  const [loginLoading, setLoginLoading] = useState(false);
  const [loginError, setLoginError] = useState("");
  const [needsEmailConfirm, setNeedsEmailConfirm] = useState(false);
  const [resendLoading, setResendLoading] = useState(false);
  const [resendSent, setResendSent] = useState(false);

  // Cadastro state
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    password: "",
    confirmPassword: "",
    paymentMethod: "pix" as "pix" | "cartao",
  });
  const [showCadastroPassword, setShowCadastroPassword] = useState(false);
  const [cadastroLoading, setCadastroLoading] = useState(false);
  const [cadastroError, setCadastroError] = useState("");
  const [cadastroSuccess, setCadastroSuccess] = useState(false);

  // Update tab when URL changes
  useEffect(() => {
    const tab = searchParams.get('tab');
    if (tab === 'cadastro') {
      setActiveTab('cadastro');
    } else if (tab === 'login') {
      setActiveTab('login');
    }
  }, [searchParams]);

  // Login handlers
  const handleLogin = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoginError("");
    setResendSent(false);
    setLoginLoading(true);

    const { error } = await signIn(loginEmail, loginPassword);

    if (error) {
      const code = (error as unknown as { code?: string })?.code;
      const msg = (error.message || "").toLowerCase();
      const isEmailNotConfirmed =
        code === "email_not_confirmed" ||
        msg.includes("email not confirmed") ||
        msg.includes("email_not_confirmed");

      if (isEmailNotConfirmed) {
        setNeedsEmailConfirm(true);
        setLoginError(
          "Seu email ainda não foi confirmado. Verifique sua caixa de entrada e o spam (lixo eletrônico)."
        );
      } else {
        setNeedsEmailConfirm(false);
        setLoginError("Email ou senha incorretos. Tente novamente.");
      }
      setLoginLoading(false);
      return;
    }

    setNeedsEmailConfirm(false);
    navigate('/curso');
  };

  const handleResendConfirmation = async () => {
    const normalizedEmail = loginEmail.trim().toLowerCase();
    if (!normalizedEmail) return;

    setResendLoading(true);
    setResendSent(false);
    setLoginError("");

    const { error } = await supabase.auth.resend({
      type: "signup",
      email: normalizedEmail,
    });

    if (error) {
      setLoginError(
        "Não foi possível reenviar o email agora. Aguarde alguns minutos e tente novamente."
      );
      setResendLoading(false);
      return;
    }

    setResendSent(true);
    setResendLoading(false);
  };

  // Cadastro handlers
  const formatPhone = (value: string) => {
    const numbers = value.replace(/\D/g, '');
    if (numbers.length <= 2) return numbers;
    if (numbers.length <= 7) return `(${numbers.slice(0, 2)}) ${numbers.slice(2)}`;
    if (numbers.length <= 11) return `(${numbers.slice(0, 2)}) ${numbers.slice(2, 7)}-${numbers.slice(7)}`;
    return `(${numbers.slice(0, 2)}) ${numbers.slice(2, 7)}-${numbers.slice(7, 11)}`;
  };

  const handleChange = (field: string) => (e: React.ChangeEvent<HTMLInputElement>) => {
    let value = e.target.value;
    if (field === 'phone') {
      value = formatPhone(value);
    }
    setFormData(prev => ({ ...prev, [field]: value }));
  };

  const handleCadastro = async (e: React.FormEvent) => {
    e.preventDefault();
    setCadastroError("");

    if (formData.password !== formData.confirmPassword) {
      setCadastroError("As senhas não coincidem");
      return;
    }

    const validation = cadastroSchema.safeParse({
      name: formData.name,
      email: formData.email,
      phone: formData.phone.replace(/\D/g, ''),
      password: formData.password,
      paymentMethod: formData.paymentMethod,
    });

    if (!validation.success) {
      setCadastroError(validation.error.errors[0].message);
      return;
    }

    setCadastroLoading(true);

    const { error } = await signUp(
      formData.email,
      formData.password,
      formData.name,
      formData.phone,
      formData.paymentMethod
    );

    if (error) {
      if (error.message.includes('already registered')) {
        setCadastroError("Este email já está cadastrado. Tente fazer login.");
      } else if (error.message.includes('rate limit') || error.message.includes('over_email_send_rate_limit')) {
        setCadastroError("Limite de envio de emails atingido. Aguarde alguns minutos e tente novamente.");
      } else {
        setCadastroError("Erro ao criar conta. Tente novamente.");
      }
      setCadastroLoading(false);
      return;
    }

    setCadastroSuccess(true);
    setCadastroLoading(false);
  };

  // Cadastro success state
  if (cadastroSuccess) {
    return (
      <div className="min-h-screen bg-gradient-to-b from-background via-card to-background flex items-center justify-center p-4">
        <Card className="max-w-md w-full bg-card/80 border-primary/20">
          <CardContent className="p-8 text-center">
            <div className="w-16 h-16 mx-auto mb-6 rounded-full bg-primary/20 flex items-center justify-center">
              <Check className="w-8 h-8 text-primary" />
            </div>
            <h2 className="text-2xl font-bold text-white mb-4">Cadastro Realizado!</h2>
            <p className="text-muted-foreground mb-6">
              Sua conta foi criada com sucesso. Verifique seu email para confirmar o cadastro.
            </p>
            <div className="space-y-3">
              <Button onClick={() => { setCadastroSuccess(false); setActiveTab('login'); }} className="w-full btn-gold">
                Fazer Login
              </Button>
              <Button onClick={() => navigate('/')} variant="outline" className="w-full border-primary/50 text-primary">
                Voltar ao Início
              </Button>
            </div>
          </CardContent>
        </Card>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-b from-background via-card to-background flex items-center justify-center p-4">
      <div className="w-full max-w-md">
        {/* Logo */}
        <div className="text-center mb-8">
          <Link to="/" className="inline-block">
            <span className="text-5xl font-serif text-primary">柔道</span>
            <p className="text-sm text-muted-foreground mt-2">Exame Shodan</p>
          </Link>
        </div>

        <Card className="bg-card/80 border-primary/20">
          <CardHeader className="text-center pb-2">
            <CardTitle className="text-2xl text-white">
              {activeTab === 'login' ? 'Entrar' : 'Criar Conta'}
            </CardTitle>
            <CardDescription>
              {activeTab === 'login' 
                ? 'Acesse sua conta para continuar estudando' 
                : 'Cadastre-se para acessar o curso'}
            </CardDescription>
          </CardHeader>
          <CardContent>
            <Tabs value={activeTab} onValueChange={setActiveTab} className="w-full">
              <TabsList className="grid w-full grid-cols-2 mb-6 bg-secondary/50">
                <TabsTrigger 
                  value="login" 
                  className="data-[state=active]:bg-primary data-[state=active]:text-secondary"
                >
                  Login
                </TabsTrigger>
                <TabsTrigger 
                  value="cadastro"
                  className="data-[state=active]:bg-primary data-[state=active]:text-secondary"
                >
                  Cadastro
                </TabsTrigger>
              </TabsList>

              {/* Login Tab */}
              <TabsContent value="login" className="mt-0">
                <form onSubmit={handleLogin} className="space-y-4">
                  {loginError && (
                    <Alert variant="destructive">
                      <AlertDescription>{loginError}</AlertDescription>
                    </Alert>
                  )}

                  <div className="space-y-2">
                    <Label htmlFor="login-email" className="text-white">Email</Label>
                    <Input
                      id="login-email"
                      type="email"
                      placeholder="seu@email.com"
                      value={loginEmail}
                      onChange={(e) => setLoginEmail(e.target.value)}
                      required
                      className="bg-secondary/50 border-primary/20 focus:border-primary"
                    />
                  </div>

                  <div className="space-y-2">
                    <div className="flex items-center justify-between">
                      <Label htmlFor="login-password" className="text-white">Senha</Label>
                      <Link 
                        to="/recuperar-senha" 
                        className="text-xs text-primary hover:underline"
                      >
                        Esqueci a senha
                      </Link>
                    </div>
                    <div className="relative">
                      <Input
                        id="login-password"
                        type={showLoginPassword ? "text" : "password"}
                        placeholder="Sua senha"
                        value={loginPassword}
                        onChange={(e) => setLoginPassword(e.target.value)}
                        required
                        className="bg-secondary/50 border-primary/20 focus:border-primary pr-10"
                      />
                      <button
                        type="button"
                        onClick={() => setShowLoginPassword(!showLoginPassword)}
                        className="absolute right-3 top-1/2 -translate-y-1/2 text-muted-foreground hover:text-primary"
                      >
                        {showLoginPassword ? <EyeOff className="w-4 h-4" /> : <Eye className="w-4 h-4" />}
                      </button>
                    </div>
                  </div>

                  <Button
                    type="submit"
                    disabled={loginLoading}
                    className="w-full btn-gold py-6"
                  >
                    {loginLoading ? (
                      <>
                        <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                        Entrando...
                      </>
                    ) : (
                      "Entrar"
                    )}
                  </Button>

                  {needsEmailConfirm && (
                    <div className="space-y-3 pt-2">
                      <Button
                        type="button"
                        variant="outline"
                        disabled={resendLoading || !loginEmail.trim()}
                        onClick={handleResendConfirmation}
                        className="w-full border-primary/50 text-primary hover:bg-primary hover:text-secondary"
                      >
                        {resendLoading ? (
                          <>
                            <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                            Reenviando...
                          </>
                        ) : (
                          "Reenviar email de confirmação"
                        )}
                      </Button>
                      {resendSent && (
                        <p className="text-xs text-muted-foreground text-center">
                          Email reenviado! Confira sua caixa de entrada e o spam.
                        </p>
                      )}
                    </div>
                  )}
                </form>
              </TabsContent>

              {/* Cadastro Tab */}
              <TabsContent value="cadastro" className="mt-0">
                <form onSubmit={handleCadastro} className="space-y-4">
                  {cadastroError && (
                    <Alert variant="destructive">
                      <AlertDescription>{cadastroError}</AlertDescription>
                    </Alert>
                  )}

                  <div className="space-y-2">
                    <Label htmlFor="name" className="text-white">Nome Completo</Label>
                    <Input
                      id="name"
                      type="text"
                      placeholder="Seu nome completo"
                      value={formData.name}
                      onChange={handleChange('name')}
                      required
                      className="bg-secondary/50 border-primary/20 focus:border-primary"
                    />
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="email" className="text-white">Email</Label>
                    <Input
                      id="email"
                      type="email"
                      placeholder="seu@email.com"
                      value={formData.email}
                      onChange={handleChange('email')}
                      required
                      className="bg-secondary/50 border-primary/20 focus:border-primary"
                    />
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="phone" className="text-white">Telefone (WhatsApp)</Label>
                    <Input
                      id="phone"
                      type="tel"
                      placeholder="(00) 00000-0000"
                      value={formData.phone}
                      onChange={handleChange('phone')}
                      required
                      className="bg-secondary/50 border-primary/20 focus:border-primary"
                    />
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="password" className="text-white">Senha</Label>
                    <div className="relative">
                      <Input
                        id="password"
                        type={showCadastroPassword ? "text" : "password"}
                        placeholder="Mínimo 6 caracteres"
                        value={formData.password}
                        onChange={handleChange('password')}
                        required
                        className="bg-secondary/50 border-primary/20 focus:border-primary pr-10"
                      />
                      <button
                        type="button"
                        onClick={() => setShowCadastroPassword(!showCadastroPassword)}
                        className="absolute right-3 top-1/2 -translate-y-1/2 text-muted-foreground hover:text-primary"
                      >
                        {showCadastroPassword ? <EyeOff className="w-4 h-4" /> : <Eye className="w-4 h-4" />}
                      </button>
                    </div>
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="confirmPassword" className="text-white">Confirmar Senha</Label>
                    <Input
                      id="confirmPassword"
                      type={showCadastroPassword ? "text" : "password"}
                      placeholder="Repita a senha"
                      value={formData.confirmPassword}
                      onChange={handleChange('confirmPassword')}
                      required
                      className="bg-secondary/50 border-primary/20 focus:border-primary"
                    />
                  </div>

                  <div className="space-y-3">
                    <Label className="text-white">Forma de Pagamento Preferida</Label>
                    <RadioGroup
                      value={formData.paymentMethod}
                      onValueChange={(value: "pix" | "cartao") => 
                        setFormData(prev => ({ ...prev, paymentMethod: value }))
                      }
                      className="grid grid-cols-2 gap-3"
                    >
                      <div className="relative">
                        <RadioGroupItem
                          value="pix"
                          id="pix"
                          className="peer sr-only"
                        />
                        <Label
                          htmlFor="pix"
                          className="flex flex-col items-center justify-center rounded-lg border-2 border-primary/20 bg-secondary/50 p-4 hover:bg-secondary/70 peer-data-[state=checked]:border-primary peer-data-[state=checked]:bg-primary/20 cursor-pointer transition-all"
                        >
                          <QrCode className="h-6 w-6 mb-2 text-primary" />
                          <span className="text-sm font-medium text-white">PIX</span>
                        </Label>
                      </div>
                      <div className="relative">
                        <RadioGroupItem
                          value="cartao"
                          id="cartao"
                          className="peer sr-only"
                        />
                        <Label
                          htmlFor="cartao"
                          className="flex flex-col items-center justify-center rounded-lg border-2 border-primary/20 bg-secondary/50 p-4 hover:bg-secondary/70 peer-data-[state=checked]:border-primary peer-data-[state=checked]:bg-primary/20 cursor-pointer transition-all"
                        >
                          <CreditCard className="h-6 w-6 mb-2 text-primary" />
                          <span className="text-sm font-medium text-white">Cartão</span>
                        </Label>
                      </div>
                    </RadioGroup>
                  </div>

                  <Button
                    type="submit"
                    disabled={cadastroLoading}
                    className="w-full btn-gold py-6"
                  >
                    {cadastroLoading ? (
                      <>
                        <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                        Criando conta...
                      </>
                    ) : (
                      "Criar Conta"
                    )}
                  </Button>
                </form>

                {/* Price reminder */}
                <div className="mt-4 text-center">
                  <p className="text-sm text-muted-foreground">
                    Valor do curso: <span className="text-primary font-bold">R$ 197</span> (pagamento único)
                  </p>
                </div>
              </TabsContent>
            </Tabs>

            <div className="mt-6 text-center">
              <Link to="/" className="text-sm text-muted-foreground hover:text-primary">
                ← Voltar para a página inicial
              </Link>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default AuthPage;

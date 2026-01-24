import { useState } from 'react';

interface Question {
  q: string;
  o: string[];
  c: number;
}

interface QuizCategory {
  title: string;
  icon: string;
  questions: Question[];
}

const quizData: Record<string, QuizCategory> = {
  historia: {
    title: 'História do Judô',
    icon: '史',
    questions: [
      { q: 'Em que ano foi fundado o Kodokan?', o: ['1880', '1882', '1884', '1886'], c: 1 },
      { q: 'Quem é o fundador do Judô?', o: ['Mitsuyo Maeda', 'Jigoro Kano', 'Kyuzo Mifune', 'Helio Gracie'], c: 1 },
      { q: 'O que significa Kodokan?', o: ['Casa do Judô', 'Instituto para Estudar o Caminho', 'Escola de Luta', 'Templo Marcial'], c: 1 },
      { q: 'Em que ano o Judô estreou nas Olimpíadas?', o: ['1960', '1964', '1968', '1972'], c: 1 },
      { q: 'Quem foi o primeiro aluno do Kodokan?', o: ['Kyuzo Mifune', 'Tsunejirō Tomita', 'Shiro Saigo', 'Mitsuyo Maeda'], c: 1 },
      { q: 'Onde nasceu Jigoro Kano?', o: ['Tóquio', 'Osaka', 'Mikage (Kobe)', 'Kyoto'], c: 2 },
      { q: 'Qual a data de nascimento de Jigoro Kano?', o: ['28/10/1858', '28/10/1860', '28/10/1862', '28/10/1864'], c: 1 },
      { q: 'Em que ano Kano se tornou membro do COI?', o: ['1900', '1909', '1912', '1920'], c: 1 },
      { q: 'Quantos tatames tinha o primeiro Kodokan?', o: ['6', '12', '20', '30'], c: 1 },
      { q: 'Quem levou o Judô para o Brasil?', o: ['Jigoro Kano', 'Mitsuyo Maeda', 'Kyuzo Mifune', 'Ryuzo Ogawa'], c: 1 },
    ]
  },
  principios: {
    title: 'Princípios e Filosofia',
    icon: '心',
    questions: [
      { q: 'O que significa "Seiryoku Zen\'yo"?', o: ['Prosperidade mútua', 'Máxima eficácia com mínimo esforço', 'Caminho suave', 'Respeito mútuo'], c: 1 },
      { q: 'O que significa "Jita Kyoei"?', o: ['Máxima eficiência', 'Benefícios mútuos e prosperidade', 'Caminho do guerreiro', 'Força interior'], c: 1 },
      { q: 'Quantas virtudes compõem o Código Moral do Judô?', o: ['5', '6', '7', '8'], c: 2 },
      { q: 'O que significa "Ju" em Judô?', o: ['Força', 'Suavidade/Flexibilidade', 'Caminho', 'Técnica'], c: 1 },
      { q: 'O que significa "Do" em Judô?', o: ['Força', 'Arte', 'Caminho', 'Luta'], c: 2 },
      { q: 'O que é Kuzushi?', o: ['Execução', 'Preparação', 'Desequilíbrio', 'Finalização'], c: 2 },
      { q: 'O que é Tsukuri?', o: ['Desequilíbrio', 'Preparação/Encaixe', 'Execução', 'Finalização'], c: 1 },
      { q: 'O que é Kake?', o: ['Desequilíbrio', 'Preparação', 'Execução/Projeção', 'Defesa'], c: 2 },
      { q: 'Quem é Tori?', o: ['Quem recebe a técnica', 'Quem aplica a técnica', 'O árbitro', 'O professor'], c: 1 },
      { q: 'Quem é Uke?', o: ['Quem aplica a técnica', 'Quem recebe a técnica', 'O árbitro', 'O professor'], c: 1 },
    ]
  },
  nomenclatura: {
    title: 'Nomenclatura Japonesa',
    icon: '言',
    questions: [
      { q: 'O que significa "GARI"?', o: ['Varrida', 'Ceifada', 'Gancho', 'Roda'], c: 1 },
      { q: 'O que significa "NAGE"?', o: ['Queda', 'Projeção', 'Imobilização', 'Chave'], c: 1 },
      { q: 'O que significa "GATAME"?', o: ['Estrangular', 'Imobilizar/Fixar', 'Projetar', 'Torcer'], c: 1 },
      { q: 'O que significa "UCHI"?', o: ['Por fora', 'Por dentro', 'Lado', 'Frente'], c: 1 },
      { q: 'O que significa "SOTO"?', o: ['Por dentro', 'Por fora', 'Frente', 'Trás'], c: 1 },
      { q: 'O que significa "O" (大)?', o: ['Pequeno', 'Médio', 'Grande', 'Muito grande'], c: 2 },
      { q: 'O que significa "KO" (小)?', o: ['Grande', 'Médio', 'Pequeno', 'Muito pequeno'], c: 2 },
      { q: 'O que significa "GURUMA"?', o: ['Projeção', 'Roda', 'Queda', 'Salto'], c: 1 },
      { q: 'O que significa "JIME/SHIME"?', o: ['Imobilizar', 'Estrangular', 'Torcer', 'Quebrar'], c: 1 },
      { q: 'O que significa "HARAI"?', o: ['Ceifar', 'Varrer', 'Girar', 'Puxar'], c: 1 },
    ]
  },
  tecnicas: {
    title: 'Técnicas (Waza)',
    icon: '技',
    questions: [
      { q: 'Quantas técnicas compõem o Gokyo tradicional?', o: ['30', '40', '50', '60'], c: 1 },
      { q: 'O-soto-gari pertence a qual grupo de técnicas?', o: ['Te-waza', 'Koshi-waza', 'Ashi-waza', 'Sutemi-waza'], c: 2 },
      { q: 'Seoi-nage pertence a qual grupo?', o: ['Te-waza', 'Koshi-waza', 'Ashi-waza', 'Sutemi-waza'], c: 0 },
      { q: 'O-goshi pertence a qual grupo?', o: ['Te-waza', 'Koshi-waza', 'Ashi-waza', 'Sutemi-waza'], c: 1 },
      { q: 'Tomoe-nage pertence a qual grupo?', o: ['Te-waza', 'Koshi-waza', 'Ma-sutemi-waza', 'Yoko-sutemi-waza'], c: 2 },
      { q: 'O que significa Osaekomi-waza?', o: ['Técnicas de projeção', 'Técnicas de imobilização', 'Técnicas de estrangulamento', 'Técnicas de chave'], c: 1 },
      { q: 'Qual técnica é conhecida como "grande ceifada externa"?', o: ['O-uchi-gari', 'O-soto-gari', 'Ko-soto-gari', 'Ko-uchi-gari'], c: 1 },
      { q: 'Kesa-gatame é uma técnica de que tipo?', o: ['Projeção', 'Imobilização', 'Estrangulamento', 'Chave'], c: 1 },
      { q: 'Juji-gatame ataca qual articulação?', o: ['Ombro', 'Pulso', 'Cotovelo', 'Joelho'], c: 2 },
      { q: 'Quantos grupos tem o Nage-no-Kata?', o: ['3', '4', '5', '6'], c: 2 },
    ]
  },
  regras: {
    title: 'Regras e Arbitragem',
    icon: '則',
    questions: [
      { q: 'Quanto tempo de imobilização vale Ippon?', o: ['15 segundos', '20 segundos', '25 segundos', '30 segundos'], c: 1 },
      { q: 'O que significa "Matte"?', o: ['Começar', 'Parar', 'Fim', 'Continuar'], c: 1 },
      { q: 'O que significa "Hajime"?', o: ['Parar', 'Começar', 'Fim', 'Atenção'], c: 1 },
      { q: 'Quantos Shidos resultam em Hansoku-make?', o: ['2', '3', '4', '5'], c: 1 },
      { q: 'O que significa "Osaekomi"?', o: ['Projeção válida', 'Imobilização válida', 'Estrangulamento', 'Chave'], c: 1 },
      { q: 'O que significa "Toketa"?', o: ['Imobilização válida', 'Escapou da imobilização', 'Fim da luta', 'Fora da área'], c: 1 },
      { q: 'Quanto tempo dura uma luta de judô masculino sênior?', o: ['4 minutos', '5 minutos', '6 minutos', '7 minutos'], c: 1 },
      { q: 'O que é Golden Score?', o: ['Prorrogação sem limite', 'Ponto extra', 'Desempate por penalidades', 'Decisão dos juízes'], c: 0 },
      { q: 'Waza-ari + Waza-ari equivale a?', o: ['Yuko', 'Waza-ari-awasete-ippon', 'Shido', 'Nada'], c: 1 },
      { q: 'Qual cor de judogi o atleta usa no lado esquerdo do placar?', o: ['Branco', 'Azul', 'Qualquer um', 'Depende do torneio'], c: 1 },
    ]
  },
  regras2025: {
    title: 'Regras 2025',
    icon: '新',
    questions: [
      { q: 'O Yuko foi reintroduzido nas regras de 2025?', o: ['Não', 'Sim, com contagem infinita', 'Sim, máximo 3', 'Apenas para cadetes'], c: 1 },
      { q: 'Quanto tempo de osaekomi vale Yuko em 2025?', o: ['0-4 segundos', '5-9 segundos', '10-14 segundos', '15-19 segundos'], c: 1 },
      { q: 'Abraço de urso (bear hug) é permitido em 2025?', o: ['Não, nunca', 'Sim, sempre', 'Sim, exceto com braços entrelaçados', 'Apenas em ne-waza'], c: 2 },
      { q: 'Seoi-nage invertido é permitido para cadetes em 2025?', o: ['Sim', 'Não', 'Apenas com autorização', 'Depende do torneio'], c: 1 },
      { q: 'O que acontece se cadete usar a cabeça para defender em 2025?', o: ['Nada', 'Matte', 'Tori pontua + Uke recebe Shido', 'Hansoku-make'], c: 2 },
      { q: 'Diving (mergulhar de cabeça) resulta em?', o: ['Shido', 'Matte', 'Hansoku-make', 'Advertência verbal'], c: 2 },
      { q: 'No Golden Score 2025, osaekomi de 5s resulta em?', o: ['Nada', 'Shido para Uke', 'Yuko + Soremadê', 'Waza-ari'], c: 2 },
      { q: 'Pegada dentro da manga é permitida em 2025?', o: ['Não', 'Sim, em tachi-waza', 'Apenas em ne-waza', 'Sim, em ambos'], c: 1 },
      { q: 'Ataque falso (volume fighting) resulta em?', o: ['Nada', 'Matte', 'Shido', 'Hansoku-make'], c: 2 },
      { q: 'Waki-gatame em pé continua sendo?', o: ['Permitido', 'Shido', 'Hansoku-make', 'Liberado para sênior'], c: 2 },
    ]
  },
};

const QuizzesSection = () => {
  const [currentQuiz, setCurrentQuiz] = useState<string | null>(null);
  const [questionIndex, setQuestionIndex] = useState(0);
  const [score, setScore] = useState(0);
  const [answered, setAnswered] = useState(0);
  const [selectedAnswer, setSelectedAnswer] = useState<number | null>(null);
  const [showResult, setShowResult] = useState(false);
  const [quizCompleted, setQuizCompleted] = useState(false);

  const startQuiz = (category: string) => {
    setCurrentQuiz(category);
    setQuestionIndex(0);
    setScore(0);
    setAnswered(0);
    setSelectedAnswer(null);
    setShowResult(false);
    setQuizCompleted(false);
  };

  const handleAnswer = (index: number) => {
    if (selectedAnswer !== null) return;
    
    setSelectedAnswer(index);
    setShowResult(true);
    setAnswered(prev => prev + 1);
    
    const quiz = quizData[currentQuiz!];
    if (index === quiz.questions[questionIndex].c) {
      setScore(prev => prev + 1);
    }

    setTimeout(() => {
      if (questionIndex + 1 >= quiz.questions.length) {
        setQuizCompleted(true);
      } else {
        setQuestionIndex(prev => prev + 1);
        setSelectedAnswer(null);
        setShowResult(false);
      }
    }, 1500);
  };

  const backToMenu = () => {
    setCurrentQuiz(null);
    setQuizCompleted(false);
  };

  if (!currentQuiz) {
    return (
      <div className="animate-fade-in">
        <h2 className="section-title">
          <span className="section-title-icon">問</span>
          Quizzes - Teste seus Conhecimentos
        </h2>

        <div className="card-judo mb-8">
          <p className="text-sm text-foreground/70">
            Escolha uma categoria e teste seus conhecimentos sobre Judô. 
            São mais de 60 perguntas divididas em 6 categorias diferentes!
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {Object.entries(quizData).map(([key, quiz]) => (
            <button
              key={key}
              onClick={() => startQuiz(key)}
              className="card-judo text-left hover:border-primary transition-colors p-6"
            >
              <div className="flex items-center justify-between mb-3">
                <div>
                  <h3 className="font-semibold text-white">{quiz.title}</h3>
                  <p className="text-xs text-muted-foreground">{quiz.questions.length} perguntas</p>
                </div>
                <span className="text-3xl text-primary font-serif">{quiz.icon}</span>
              </div>
              <div className="flex items-center gap-2 text-primary text-sm">
                <span>Iniciar Quiz</span>
                <span>→</span>
              </div>
            </button>
          ))}
        </div>

        <div className="card-red p-6 mt-8">
          <h3 className="font-semibold text-white mb-2">💡 Dicas para o Quiz</h3>
          <ul className="space-y-1 text-sm text-foreground/70">
            <li>• Leia cada pergunta com atenção antes de responder</li>
            <li>• Você tem tempo ilimitado para responder</li>
            <li>• Após responder, a resposta correta será mostrada</li>
            <li>• Ao final, você verá sua pontuação total</li>
          </ul>
        </div>
      </div>
    );
  }

  const quiz = quizData[currentQuiz];
  const question = quiz.questions[questionIndex];

  if (quizCompleted) {
    const percentage = Math.round((score / quiz.questions.length) * 100);
    let emoji = '📚';
    let message = 'Continue estudando!';
    if (percentage >= 90) { emoji = '🏆'; message = 'Excelente! Você domina o assunto!'; }
    else if (percentage >= 70) { emoji = '🥈'; message = 'Muito bom! Quase lá!'; }
    else if (percentage >= 50) { emoji = '👍'; message = 'Bom trabalho! Pode melhorar!'; }

    return (
      <div className="animate-fade-in">
        <h2 className="section-title">
          <span className="section-title-icon">{quiz.icon}</span>
          Quiz: {quiz.title}
        </h2>

        <div className="card-judo text-center p-8">
          <span className="text-6xl block mb-4">{emoji}</span>
          <h3 className="text-2xl font-bold text-white mb-2">Quiz Concluído!</h3>
          <p className="text-lg text-foreground/80 mb-4">
            Você acertou <span className="text-primary font-bold">{score}</span> de{' '}
            <span className="text-primary font-bold">{quiz.questions.length}</span>
          </p>
          <div className="w-32 h-32 mx-auto mb-4 rounded-full flex items-center justify-center"
               style={{ background: `conic-gradient(var(--primary) ${percentage * 3.6}deg, rgba(255,255,255,0.1) 0deg)` }}>
            <div className="w-24 h-24 rounded-full bg-background flex items-center justify-center">
              <span className="text-2xl font-bold text-primary">{percentage}%</span>
            </div>
          </div>
          <p className="text-foreground/70 mb-6">{message}</p>
          <div className="flex gap-4 justify-center">
            <button
              onClick={backToMenu}
              className="px-6 py-3 bg-muted/50 rounded-lg text-white hover:bg-muted transition-colors"
            >
              ← Menu
            </button>
            <button
              onClick={() => startQuiz(currentQuiz)}
              className="px-6 py-3 bg-primary text-primary-foreground rounded-lg hover:bg-primary/90 transition-colors font-semibold"
            >
              Tentar Novamente
            </button>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="animate-fade-in">
      <h2 className="section-title">
        <span className="section-title-icon">{quiz.icon}</span>
        Quiz: {quiz.title}
      </h2>

      <div className="card-judo">
        <div className="flex items-center justify-between mb-4">
          <button
            onClick={backToMenu}
            className="text-sm text-muted-foreground hover:text-white transition-colors"
          >
            ← Voltar
          </button>
          <div className="text-sm text-primary">
            {questionIndex + 1} / {quiz.questions.length}
          </div>
        </div>

        <div className="h-2 bg-muted/30 rounded-full mb-6 overflow-hidden">
          <div 
            className="h-full bg-primary transition-all duration-300"
            style={{ width: `${((questionIndex) / quiz.questions.length) * 100}%` }}
          />
        </div>

        <h3 className="text-lg font-semibold text-white mb-6">{question.q}</h3>

        <div className="space-y-3">
          {question.o.map((option, index) => {
            let buttonClass = 'w-full p-4 rounded-xl text-left flex items-center gap-3 transition-all ';
            
            if (showResult) {
              if (index === question.c) {
                buttonClass += 'bg-green-500/30 border-2 border-green-500 text-white';
              } else if (index === selectedAnswer && index !== question.c) {
                buttonClass += 'bg-red-500/30 border-2 border-red-500 text-white';
              } else {
                buttonClass += 'bg-muted/20 border border-muted/30 text-muted-foreground';
              }
            } else {
              buttonClass += 'bg-muted/20 border border-muted/30 text-white hover:border-primary hover:bg-primary/10';
            }

            return (
              <button
                key={index}
                onClick={() => handleAnswer(index)}
                disabled={selectedAnswer !== null}
                className={buttonClass}
              >
                <span className="w-8 h-8 rounded-full bg-primary/20 flex items-center justify-center text-primary font-semibold text-sm">
                  {String.fromCharCode(65 + index)}
                </span>
                <span>{option}</span>
                {showResult && index === question.c && (
                  <span className="ml-auto text-green-400">✓</span>
                )}
                {showResult && index === selectedAnswer && index !== question.c && (
                  <span className="ml-auto text-red-400">✗</span>
                )}
              </button>
            );
          })}
        </div>

        <div className="mt-6 text-center text-sm text-muted-foreground">
          Acertos: <span className="text-primary font-semibold">{score}</span> / {answered}
        </div>
      </div>
    </div>
  );
};

export default QuizzesSection;

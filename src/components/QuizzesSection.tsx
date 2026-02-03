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
      { q: 'Qual a data de nascimento de Jigoro Kano?', o: ['28/10/1858', '28/10/1860', '28/10/1862', '28/10/1864'], c: 0 },
      { q: 'Em que ano Kano se tornou membro do COI?', o: ['1900', '1909', '1912', '1920'], c: 1 },
      { q: 'Quantos tatames tinha o primeiro Kodokan?', o: ['6', '12', '20', '30'], c: 1 },
      { q: 'Quem levou o Judô para o Brasil?', o: ['Jigoro Kano', 'Mitsuyo Maeda', 'Kyuzo Mifune', 'Ryuzo Ogawa'], c: 1 },
      { q: 'Em que cidade do Brasil Mitsuyo Maeda chegou?', o: ['São Paulo', 'Rio de Janeiro', 'Belém do Pará', 'Salvador'], c: 2 },
      { q: 'Qual era o apelido de Mitsuyo Maeda?', o: ['Mestre Kano', 'Conde Koma', 'Samurai do Norte', 'Judoka de Ferro'], c: 1 },
      { q: 'Em que ano Mitsuyo Maeda chegou ao Brasil?', o: ['1910', '1914', '1920', '1925'], c: 1 },
      { q: 'Quando foi fundada a Federação Paulista de Judô?', o: ['1945', '1950', '1954', '1958'], c: 2 },
      { q: 'Quando foi fundada a Confederação Brasileira de Judô?', o: ['1962', '1965', '1969', '1972'], c: 2 },
      { q: 'Quem foi o primeiro brasileiro campeão mundial de Judô?', o: ['Chiaki Ishii', 'Aurélio Miguel', 'Rogério Sampaio', 'João Derly'], c: 0 },
      { q: 'Em que ano o Brasil ganhou seu primeiro ouro olímpico no Judô?', o: ['1984', '1988', '1992', '1996'], c: 2 },
      { q: 'Qual o nome do primeiro Dojo do Kodokan?', o: ['Eishoji', 'Kodokan', 'Budokan', 'Shudokan'], c: 0 },
      { q: 'O Kodokan foi fundado em qual cidade?', o: ['Osaka', 'Tóquio', 'Kyoto', 'Kobe'], c: 1 },
      { q: 'Em que ano Jigoro Kano faleceu?', o: ['1935', '1938', '1940', '1942'], c: 1 },
      { q: 'Qual escola de Jujutsu Kano estudou primeiro?', o: ['Kitō-ryū', 'Tenjin Shin\'yō-ryū', 'Yoshin-ryū', 'Takenouchi-ryū'], c: 1 },
      { q: 'Em que ano foi fundada a IJF?', o: ['1945', '1951', '1956', '1964'], c: 1 },
      { q: 'Qual atleta brasileiro ganhou ouro olímpico em 1984?', o: ['Chiaki Ishii', 'Douglas Vieira', 'Aurélio Miguel', 'Rogério Sampaio'], c: 1 },
      { q: 'Quem ganhou o primeiro ouro olímpico feminino do Brasil no Judô?', o: ['Ketleyn Quadros', 'Sarah Menezes', 'Rafaela Silva', 'Mayra Aguiar'], c: 1 },
      { q: 'Em que Olimpíada Sarah Menezes conquistou o ouro?', o: ['Pequim 2008', 'Londres 2012', 'Rio 2016', 'Tóquio 2020'], c: 1 },
      { q: 'Qual foi a primeira arte marcial olímpica?', o: ['Judô', 'Karatê', 'Taekwondo', 'Luta Greco-Romana'], c: 0 },
      { q: 'Em que ano o Judô feminino entrou nas Olimpíadas?', o: ['1988', '1992', '1996', '2000'], c: 1 },
      { q: 'Qual país tem mais medalhas olímpicas no Judô?', o: ['Brasil', 'França', 'Japão', 'Coreia do Sul'], c: 2 },
      { q: 'Onde foi realizado o primeiro campeonato mundial de Judô?', o: ['Paris', 'Tóquio', 'Rio de Janeiro', 'Londres'], c: 1 },
      { q: 'Em que ano foi o primeiro mundial de Judô?', o: ['1951', '1956', '1964', '1972'], c: 1 },
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
      { q: 'Qual é o terceiro princípio do Judô?', o: ['Força', 'Ju (Suavidade)', 'Velocidade', 'Resistência'], c: 1 },
      { q: 'O que significa a cor branca no Judogi?', o: ['Força', 'Pureza de intenções', 'Poder', 'Tradição'], c: 1 },
      { q: 'Qual virtude do código moral significa "Coragem"?', o: ['Makoto', 'Yuki', 'Rei', 'Meiyo'], c: 1 },
      { q: 'O que significa "Rei" no código moral?', o: ['Respeito/Cortesia', 'Coragem', 'Honra', 'Modéstia'], c: 0 },
      { q: 'O que significa "Meiyo"?', o: ['Coragem', 'Modéstia', 'Honra', 'Amizade'], c: 2 },
      { q: 'O que significa "Shin" no código moral?', o: ['Força', 'Sinceridade', 'Honra', 'Amizade'], c: 1 },
      { q: 'Qual a virtude que representa "Autocontrole"?', o: ['Jisei', 'Yuki', 'Rei', 'Makoto'], c: 0 },
      { q: 'O que significa "Yu" no código moral?', o: ['Modéstia', 'Amizade', 'Coragem', 'Respeito'], c: 2 },
      { q: 'Qual virtude significa "Benevolência"?', o: ['Jin', 'Gi', 'Rei', 'Chi'], c: 0 },
      { q: 'O que significa "Gi" no código moral?', o: ['Honra', 'Justiça/Retidão', 'Coragem', 'Modéstia'], c: 1 },
      { q: 'Qual o significado de "Shingi" no Judô?', o: ['Amizade verdadeira', 'Técnica perfeita', 'Sinceridade e lealdade', 'Força interior'], c: 2 },
      { q: 'O que representa o salgueiro na filosofia do Judô?', o: ['Força bruta', 'Ceder para vencer', 'Rapidez', 'Resistência'], c: 1 },
      { q: 'Qual conceito ensina que "quem teme perder já está vencido"?', o: ['Kuzushi', 'Meiyo', 'Coragem', 'Filosofia de Kano'], c: 3 },
      { q: 'O que é "Mondo" no contexto do Judô?', o: ['Tipo de queda', 'Perguntas e respostas', 'Técnica de solo', 'Competição'], c: 1 },
      { q: 'O que é "Kogi" na prática do Judô?', o: ['Treino livre', 'Palestra/Aula teórica', 'Competição', 'Kata'], c: 1 },
      { q: 'O que significa "Bunkai" no Judô?', o: ['Análise das técnicas', 'Aquecimento', 'Competição', 'Saudação'], c: 0 },
      { q: 'Qual é o objetivo final do Judô segundo Kano?', o: ['Vencer lutas', 'Aperfeiçoamento pessoal', 'Força física', 'Competições'], c: 1 },
      { q: 'O que significa "Mushin" no contexto marcial?', o: ['Força máxima', 'Mente vazia/sem pensamento', 'Velocidade', 'Técnica perfeita'], c: 1 },
      { q: 'Qual conceito representa "caminho do guerreiro"?', o: ['Judô', 'Bushido', 'Jujutsu', 'Kendo'], c: 1 },
      { q: 'O que é "Zanshin" no Judô?', o: ['Relaxamento', 'Estado de alerta contínuo', 'Descanso', 'Técnica'], c: 1 },
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
      { q: 'O que significa "KOSHI"?', o: ['Mão', 'Perna', 'Quadril', 'Ombro'], c: 2 },
      { q: 'O que significa "ASHI"?', o: ['Mão', 'Perna/Pé', 'Quadril', 'Ombro'], c: 1 },
      { q: 'O que significa "TE"?', o: ['Mão', 'Perna', 'Quadril', 'Ombro'], c: 0 },
      { q: 'O que significa "SEOI"?', o: ['Jogar', 'Carregar nas costas', 'Puxar', 'Empurrar'], c: 1 },
      { q: 'O que significa "OTOSHI"?', o: ['Queda', 'Salto', 'Giro', 'Empurrão'], c: 0 },
      { q: 'O que significa "MAKIKOMI"?', o: ['Enrolar junto', 'Separar', 'Puxar', 'Empurrar'], c: 0 },
      { q: 'O que significa "SUTEMI"?', o: ['Defesa', 'Sacrifício', 'Ataque', 'Queda'], c: 1 },
      { q: 'O que significa "WAZA"?', o: ['Força', 'Técnica', 'Caminho', 'Luta'], c: 1 },
      { q: 'O que significa "KESA"?', o: ['Cachecol/Faixa diagonal', 'Quadrado', 'Círculo', 'Triângulo'], c: 0 },
      { q: 'O que significa "JUJI"?', o: ['Cruz', 'Círculo', 'Triângulo', 'Quadrado'], c: 0 },
      { q: 'O que significa "MAWASHI"?', o: ['Direto', 'Girar/Circular', 'Reto', 'Diagonal'], c: 1 },
      { q: 'O que significa "KAMI"?', o: ['Baixo', 'Superior/Acima', 'Lateral', 'Posterior'], c: 1 },
      { q: 'O que significa "YOKO"?', o: ['Frente', 'Trás', 'Lateral', 'Acima'], c: 2 },
      { q: 'O que significa "TATE"?', o: ['Horizontal', 'Montado/Vertical', 'Diagonal', 'Invertido'], c: 1 },
      { q: 'O que significa "URA"?', o: ['Frente', 'Reverso/Traseiro', 'Lado', 'Acima'], c: 1 },
      { q: 'O que significa "HANE"?', o: ['Pular/Saltar', 'Andar', 'Correr', 'Parar'], c: 0 },
      { q: 'O que significa "TSURIKOMI"?', o: ['Empurrar', 'Puxar e levantar', 'Girar', 'Cair'], c: 1 },
      { q: 'O que significa "TOMOE"?', o: ['Quadrado', 'Círculo/Espiral', 'Triângulo', 'Reto'], c: 1 },
      { q: 'O que significa "KATA"?', o: ['Ombro/Forma', 'Perna', 'Braço', 'Cabeça'], c: 0 },
      { q: 'O que significa "HADAKA"?', o: ['Vestido', 'Nu/Descoberto', 'Coberto', 'Apertado'], c: 1 },
      { q: 'O que significa "ICHI"?', o: ['Dois', 'Um', 'Três', 'Quatro'], c: 1 },
      { q: 'O que significa "NI"?', o: ['Um', 'Dois', 'Três', 'Quatro'], c: 1 },
      { q: 'O que significa "SAN"?', o: ['Um', 'Dois', 'Três', 'Quatro'], c: 2 },
      { q: 'O que significa "SHI/YON"?', o: ['Três', 'Quatro', 'Cinco', 'Seis'], c: 1 },
      { q: 'O que significa "GO"?', o: ['Quatro', 'Cinco', 'Seis', 'Sete'], c: 1 },
    ]
  },
  gokyo: {
    title: 'Gokyo - 40 Técnicas',
    icon: '投',
    questions: [
      { q: 'Quantas técnicas compõem o Gokyo tradicional?', o: ['30', '40', '50', '60'], c: 1 },
      { q: 'O-soto-gari pertence a qual grupo de técnicas?', o: ['Te-waza', 'Koshi-waza', 'Ashi-waza', 'Sutemi-waza'], c: 2 },
      { q: 'Seoi-nage pertence a qual grupo?', o: ['Te-waza', 'Koshi-waza', 'Ashi-waza', 'Sutemi-waza'], c: 0 },
      { q: 'O-goshi pertence a qual grupo?', o: ['Te-waza', 'Koshi-waza', 'Ashi-waza', 'Sutemi-waza'], c: 1 },
      { q: 'Tomoe-nage pertence a qual grupo?', o: ['Te-waza', 'Koshi-waza', 'Ma-sutemi-waza', 'Yoko-sutemi-waza'], c: 2 },
      { q: 'Quantos grupos tem o Gokyo?', o: ['3', '4', '5', '6'], c: 2 },
      { q: 'O-soto-gari está em qual Kyo do Gokyo?', o: ['Ikkyo (1º)', 'Nikyo (2º)', 'Sankyo (3º)', 'Yonkyo (4º)'], c: 0 },
      { q: 'Uchi-mata está em qual Kyo do Gokyo?', o: ['Ikkyo (1º)', 'Nikyo (2º)', 'Sankyo (3º)', 'Yonkyo (4º)'], c: 2 },
      { q: 'Harai-goshi está em qual Kyo do Gokyo?', o: ['Ikkyo (1º)', 'Nikyo (2º)', 'Sankyo (3º)', 'Yonkyo (4º)'], c: 1 },
      { q: 'Qual técnica é "grande ceifada externa"?', o: ['O-uchi-gari', 'O-soto-gari', 'Ko-soto-gari', 'Ko-uchi-gari'], c: 1 },
      { q: 'Qual técnica é "grande ceifada interna"?', o: ['O-uchi-gari', 'O-soto-gari', 'Ko-soto-gari', 'Ko-uchi-gari'], c: 0 },
      { q: 'Qual técnica é "pequena ceifada interna"?', o: ['O-uchi-gari', 'O-soto-gari', 'Ko-soto-gari', 'Ko-uchi-gari'], c: 3 },
      { q: 'Qual técnica é "projeção de quadril"?', o: ['Seoi-nage', 'O-goshi', 'Tai-otoshi', 'Tomoe-nage'], c: 1 },
      { q: 'Qual técnica é "projeção pelas costas"?', o: ['Seoi-nage', 'O-goshi', 'Tai-otoshi', 'Tomoe-nage'], c: 0 },
      { q: 'Qual técnica é "queda de corpo"?', o: ['Seoi-nage', 'O-goshi', 'Tai-otoshi', 'Tomoe-nage'], c: 2 },
      { q: 'Qual técnica é "projeção em círculo"?', o: ['Seoi-nage', 'O-goshi', 'Tai-otoshi', 'Tomoe-nage'], c: 3 },
      { q: 'De-ashi-harai está em qual Kyo?', o: ['Ikkyo (1º)', 'Nikyo (2º)', 'Sankyo (3º)', 'Yonkyo (4º)'], c: 0 },
      { q: 'Hiza-guruma está em qual Kyo?', o: ['Ikkyo (1º)', 'Nikyo (2º)', 'Sankyo (3º)', 'Yonkyo (4º)'], c: 0 },
      { q: 'Sasae-tsurikomi-ashi está em qual Kyo?', o: ['Ikkyo (1º)', 'Nikyo (2º)', 'Sankyo (3º)', 'Yonkyo (4º)'], c: 0 },
      { q: 'Uki-goshi está em qual Kyo?', o: ['Ikkyo (1º)', 'Nikyo (2º)', 'Sankyo (3º)', 'Yonkyo (4º)'], c: 0 },
      { q: 'O que significa "Te-waza"?', o: ['Técnicas de quadril', 'Técnicas de mão/braço', 'Técnicas de perna', 'Técnicas de sacrifício'], c: 1 },
      { q: 'O que significa "Koshi-waza"?', o: ['Técnicas de quadril', 'Técnicas de mão', 'Técnicas de perna', 'Técnicas de sacrifício'], c: 0 },
      { q: 'O que significa "Ashi-waza"?', o: ['Técnicas de quadril', 'Técnicas de mão', 'Técnicas de perna/pé', 'Técnicas de sacrifício'], c: 2 },
      { q: 'Qual técnica significa "roda do joelho"?', o: ['Ashi-guruma', 'Hiza-guruma', 'Koshi-guruma', 'O-guruma'], c: 1 },
      { q: 'Qual técnica significa "varrer o pé que avança"?', o: ['Okuri-ashi-harai', 'De-ashi-harai', 'Harai-goshi', 'Ko-soto-gake'], c: 1 },
      { q: 'Harai-tsurikomi-ashi está em qual Kyo?', o: ['Ikkyo (1º)', 'Nikyo (2º)', 'Sankyo (3º)', 'Yonkyo (4º)'], c: 1 },
      { q: 'Qual técnica é "projeção de ombro único"?', o: ['Seoi-nage', 'Ippon-seoi-nage', 'Morote-seoi-nage', 'Kata-guruma'], c: 1 },
      { q: 'Kata-guruma pertence a qual grupo?', o: ['Te-waza', 'Koshi-waza', 'Ashi-waza', 'Sutemi-waza'], c: 0 },
      { q: 'Sumi-gaeshi pertence a qual grupo?', o: ['Te-waza', 'Koshi-waza', 'Ma-sutemi-waza', 'Yoko-sutemi-waza'], c: 2 },
      { q: 'Uki-waza pertence a qual grupo?', o: ['Te-waza', 'Koshi-waza', 'Ma-sutemi-waza', 'Yoko-sutemi-waza'], c: 3 },
    ]
  },
  katamewaza: {
    title: 'Katame-Waza (Solo)',
    icon: '固',
    questions: [
      { q: 'O que significa Osaekomi-waza?', o: ['Técnicas de projeção', 'Técnicas de imobilização', 'Técnicas de estrangulamento', 'Técnicas de chave'], c: 1 },
      { q: 'O que significa Shime-waza?', o: ['Imobilização', 'Estrangulamento', 'Chave articular', 'Projeção'], c: 1 },
      { q: 'O que significa Kansetsu-waza?', o: ['Imobilização', 'Estrangulamento', 'Chave articular', 'Projeção'], c: 2 },
      { q: 'Kesa-gatame é uma técnica de que tipo?', o: ['Projeção', 'Imobilização', 'Estrangulamento', 'Chave'], c: 1 },
      { q: 'Juji-gatame ataca qual articulação?', o: ['Ombro', 'Pulso', 'Cotovelo', 'Joelho'], c: 2 },
      { q: 'Qual técnica é "imobilização em 4 cantos"?', o: ['Kesa-gatame', 'Yoko-shiho-gatame', 'Kami-shiho-gatame', 'Tate-shiho-gatame'], c: 1 },
      { q: 'Qual técnica é "imobilização superior em 4 cantos"?', o: ['Kesa-gatame', 'Yoko-shiho-gatame', 'Kami-shiho-gatame', 'Tate-shiho-gatame'], c: 2 },
      { q: 'Qual técnica é "imobilização montada em 4 cantos"?', o: ['Kesa-gatame', 'Yoko-shiho-gatame', 'Kami-shiho-gatame', 'Tate-shiho-gatame'], c: 3 },
      { q: 'Hadaka-jime é que tipo de estrangulamento?', o: ['Com o judogi', 'Sem o judogi (nu)', 'Com as pernas', 'Com o braço cruzado'], c: 1 },
      { q: 'Okuri-eri-jime usa qual parte do corpo?', o: ['Pernas', 'Gola do judogi', 'Braço nu', 'Mãos cruzadas'], c: 1 },
      { q: 'Quantas imobilizações são oficiais no Judô?', o: ['5', '7', '10', '12'], c: 2 },
      { q: 'Quantos estrangulamentos são oficiais no Judô?', o: ['8', '10', '11', '12'], c: 2 },
      { q: 'Quantas chaves são oficiais no Judô?', o: ['5', '7', '9', '10'], c: 2 },
      { q: 'Ude-garami ataca qual articulação?', o: ['Ombro', 'Cotovelo', 'Pulso', 'Joelho'], c: 1 },
      { q: 'Ude-hishigi-ude-gatame ataca o quê?', o: ['Ombro', 'Cotovelo', 'Pulso', 'Joelho'], c: 1 },
      { q: 'Sankaku-jime usa qual parte do corpo?', o: ['Braços', 'Pernas (triângulo)', 'Gola', 'Costas'], c: 1 },
      { q: 'O que significa "Hon" em Hon-kesa-gatame?', o: ['Modificado', 'Básico/Principal', 'Invertido', 'Lateral'], c: 1 },
      { q: 'O que significa "Kuzure" em Kuzure-kesa-gatame?', o: ['Modificado/Variação', 'Básico', 'Invertido', 'Duplo'], c: 0 },
      { q: 'Chaves de joelho são permitidas no Judô?', o: ['Sim, sempre', 'Não, são proibidas', 'Só para faixas pretas', 'Só em treinos'], c: 1 },
      { q: 'Qual imobilização o Tori fica de lado?', o: ['Tate-shiho-gatame', 'Yoko-shiho-gatame', 'Kami-shiho-gatame', 'Ura-gatame'], c: 1 },
      { q: 'O que é "Ne-waza"?', o: ['Trabalho em pé', 'Trabalho no solo', 'Projeções', 'Quedas'], c: 1 },
      { q: 'Qual técnica é conhecida como "mata-leão"?', o: ['Okuri-eri-jime', 'Hadaka-jime', 'Kata-ha-jime', 'Gyaku-juji-jime'], c: 1 },
      { q: 'O que significa "Gyaku" em Gyaku-juji-jime?', o: ['Normal', 'Invertido/Reverso', 'Duplo', 'Lateral'], c: 1 },
      { q: 'Qual a posição de Kuzure-kami-shiho-gatame?', o: ['Lateral', 'Montada', 'Por cima modificada', 'Invertida'], c: 2 },
      { q: 'Kata-gatame é uma técnica de quê?', o: ['Projeção', 'Imobilização', 'Estrangulamento', 'Chave'], c: 1 },
      { q: 'Qual técnica usa as pernas em forma de triângulo?', o: ['Juji-gatame', 'Sankaku-jime', 'Kata-ha-jime', 'Hadaka-jime'], c: 1 },
      { q: 'O que é "Newaza-gaeshi"?', o: ['Ataque', 'Defesa/Reversão no solo', 'Projeção', 'Estrangulamento'], c: 1 },
      { q: 'Qual imobilização o Tori fica por cima?', o: ['Yoko-shiho-gatame', 'Kami-shiho-gatame', 'Kesa-gatame', 'Tate-shiho-gatame'], c: 3 },
      { q: 'Ashi-garami é uma técnica de quê?', o: ['Projeção', 'Imobilização', 'Estrangulamento', 'Chave na perna'], c: 3 },
      { q: 'Qual a diferença entre Juji-jime e Nami-juji-jime?', o: ['Nenhuma', 'Posição das mãos', 'Uso das pernas', 'Direção do ataque'], c: 1 },
    ]
  },
  placar: {
    title: 'Sistema de Placar',
    icon: '🏆',
    questions: [
      { q: 'O que é Ippon?', o: ['Vantagem parcial', 'Ponto completo (vitória)', 'Penalidade', 'Empate'], c: 1 },
      { q: 'Quanto tempo de imobilização resulta em Ippon?', o: ['15 segundos', '20 segundos', '25 segundos', '30 segundos'], c: 1 },
      { q: 'O que é Waza-ari?', o: ['Ponto completo', 'Meia vitória/vantagem', 'Penalidade leve', 'Empate'], c: 1 },
      { q: 'Quanto tempo de imobilização vale Waza-ari?', o: ['5-9 segundos', '10-19 segundos', '15-19 segundos', '20-25 segundos'], c: 1 },
      { q: 'O que acontece com dois Waza-ari?', o: ['Empate', 'Waza-ari-awasete-ippon', 'Golden Score', 'Nada'], c: 1 },
      { q: 'O que é Yuko (regras 2025)?', o: ['Ponto máximo', 'Pequena vantagem', 'Penalidade grave', 'Vitória por decisão'], c: 1 },
      { q: 'Quanto tempo de osaekomi vale Yuko em 2025?', o: ['0-4 segundos', '5-9 segundos', '10-14 segundos', '15-19 segundos'], c: 1 },
      { q: 'O que é Shido?', o: ['Pontuação positiva', 'Penalidade leve', 'Vitória', 'Empate técnico'], c: 1 },
      { q: 'Quantos Shidos resultam em desqualificação?', o: ['1', '2', '3', '4'], c: 2 },
      { q: 'O que é Hansoku-make?', o: ['Vitória por pontos', 'Desqualificação', 'Empate', 'Vantagem técnica'], c: 1 },
      { q: 'O que é Golden Score?', o: ['Ponto extra', 'Prorrogação/morte súbita', 'Desempate por juízes', 'Penalidade'], c: 1 },
      { q: 'No Golden Score, quem marca primeiro...', o: ['Continua lutando', 'Vence imediatamente', 'Recebe vantagem', 'Depende do árbitro'], c: 1 },
      { q: 'O que significa "Hajime"?', o: ['Parar', 'Começar', 'Fim da luta', 'Atenção'], c: 1 },
      { q: 'O que significa "Matte"?', o: ['Começar', 'Parar/pausar', 'Fim', 'Continuar'], c: 1 },
      { q: 'O que significa "Sore-made"?', o: ['Começar', 'Parar', 'Fim da luta', 'Atenção'], c: 2 },
      { q: 'O que significa "Osaekomi"?', o: ['Projeção válida', 'Imobilização contando', 'Estrangulamento', 'Fim da luta'], c: 1 },
      { q: 'O que significa "Toketa"?', o: ['Imobilização válida', 'Escapou da imobilização', 'Continuar', 'Penalidade'], c: 1 },
      { q: 'Quanto tempo dura uma luta de judô masculino sênior?', o: ['3 minutos', '4 minutos', '5 minutos', '6 minutos'], c: 1 },
      { q: 'Quanto tempo dura uma luta de judô feminino sênior?', o: ['3 minutos', '4 minutos', '5 minutos', '6 minutos'], c: 1 },
      { q: 'Quanto tempo dura o Golden Score?', o: ['3 minutos', '5 minutos', 'Ilimitado', '10 minutos'], c: 2 },
      { q: 'Qual cor o atleta usa no lado esquerdo do placar?', o: ['Branco', 'Azul', 'Qualquer um', 'Depende do sorteio'], c: 1 },
      { q: 'Qual gesto do árbitro indica Ippon?', o: ['Braço para o lado', 'Braço levantado acima da cabeça', 'Dois braços levantados', 'Punho fechado'], c: 1 },
      { q: 'Qual gesto indica Waza-ari?', o: ['Braço levantado na vertical', 'Braço estendido em 45° para o lado', 'Dois braços cruzados', 'Mãos na cintura'], c: 1 },
      { q: 'Para quem o árbitro aponta ao anunciar pontuação?', o: ['Para o perdedor', 'Para quem pontuou', 'Para a mesa', 'Para o público'], c: 1 },
      { q: 'O que significa um Shido para o adversário em termos de pontos?', o: ['Você ganha Waza-ari', 'Você ganha Yuko', 'Não ganha pontos diretos', 'Você ganha Ippon'], c: 2 },
      { q: 'Queda com controle total resulta em?', o: ['Yuko', 'Waza-ari', 'Ippon', 'Nada'], c: 2 },
      { q: 'Estrangulamento com desistência (batida) resulta em?', o: ['Waza-ari', 'Yuko', 'Ippon', 'Shido para quem aplicou'], c: 2 },
      { q: 'Chave de braço com desistência resulta em?', o: ['Waza-ari', 'Yuko', 'Ippon', 'Empate'], c: 2 },
      { q: 'O que é "Sono-mama"?', o: ['Continuar', 'Congelar posição sem soltar', 'Fim da luta', 'Começar'], c: 1 },
      { q: 'O que é "Yoshi"?', o: ['Parar', 'Continuar após Sono-mama', 'Fim', 'Penalidade'], c: 1 },
      // Novas perguntas sobre teclado e operação do placar
      { q: 'Qual letra representa Ippon no placar eletrônico?', o: ['W', 'Y', 'I', 'P'], c: 2 },
      { q: 'Qual letra representa Waza-ari no placar?', o: ['I', 'W', 'Y', 'A'], c: 1 },
      { q: 'Qual letra representa Yuko no placar?', o: ['I', 'W', 'Y', 'U'], c: 2 },
      { q: 'O que significa "GS" no placar eletrônico?', o: ['Grande Score', 'Golden Score', 'Game Set', 'Golpe Superior'], c: 1 },
      { q: 'O que significa "FG" no placar?', o: ['Final Game', 'Fusen-Gachi', 'First Goal', 'Final Grade'], c: 1 },
      { q: 'O que significa "KG" no placar?', o: ['Kill Game', 'Kiken-Gachi', 'Knockout Game', 'Key Goal'], c: 1 },
      { q: 'O que é Fusen-Gachi?', o: ['Vitória por pontos', 'Vitória por ausência (WO)', 'Vitória por desistência', 'Empate'], c: 1 },
      { q: 'O que é Kiken-Gachi?', o: ['Vitória por pontos', 'Vitória por ausência', 'Vitória por abandono/lesão', 'Desqualificação'], c: 2 },
      { q: 'Qual tecla controla o cronômetro (play/pause) no teclado padrão?', o: ['Enter', 'Espaço (SPACE)', 'Tab', 'Ctrl'], c: 1 },
      { q: 'Qual tecla registra Toketa (escape da imobilização)?', o: ['0', '9', '8', '7'], c: 1 },
      { q: 'Qual tecla ativa o cronômetro de Osaekomi?', o: ['9', '0 ou -', '8', '7'], c: 1 },
      { q: 'Qual tecla reseta o cronômetro?', o: ['Backspace', 'Enter', 'DEL', 'ESC'], c: 2 },
      { q: 'Qual tecla ativa o Golden Score no teclado?', o: ['G', 'S', 'B', 'V'], c: 2 },
      { q: 'Qual tecla registra Ippon para o atleta Branco?', o: ['I', 'W', 'Q', 'Y'], c: 2 },
      { q: 'Qual tecla registra Ippon para o atleta Azul?', o: ['I', 'Y', 'Q', 'U'], c: 1 },
      { q: 'Qual tecla registra Waza-ari para o atleta Branco?', o: ['W', 'Q', 'E', 'A'], c: 0 },
      { q: 'Qual tecla registra Shido para o atleta Branco?', o: ['S', 'R', 'Q', 'A'], c: 1 },
      { q: 'Qual tecla registra Shido para o atleta Azul?', o: ['P', 'O', 'I', 'L'], c: 1 },
      { q: 'Qual tecla dá Shido Duplo (para ambos atletas)?', o: ['7', '8', '9', '0'], c: 1 },
      { q: 'Qual tecla dá Hansoku-Make Duplo?', o: ['6', '7', '8', '9'], c: 1 },
      { q: 'Qual tecla adiciona +1 segundo ao cronômetro?', o: ['1', '2', '3', '4'], c: 0 },
      { q: 'Qual tecla subtrai -1 segundo do cronômetro?', o: ['1', '2', '3', '4'], c: 1 },
      { q: 'Qual tecla emite o som de Ippon?', o: ['F4', 'F5', 'F6', 'F7'], c: 2 },
      { q: 'Qual tecla emite o som de Fim de luta?', o: ['F4', 'F5', 'F6', 'F7'], c: 1 },
      { q: 'Qual tecla atualiza o placar eletrônico?', o: ['F4', 'F5', 'F6', 'F7'], c: 0 },
      { q: 'Qual tecla chama o árbitro central?', o: ['F6', 'F7', 'F8', 'F9'], c: 2 },
      { q: 'Qual tecla abre a tela de Apresentação?', o: ['4', '5', '6', '7'], c: 2 },
      { q: 'Qual tecla abre a tela de Abertura?', o: ['4', '5', '6', '7'], c: 1 },
      { q: 'Qual tecla registra Fusen-Gachi (FG)?', o: ['C', 'V', 'B', 'X'], c: 0 },
      { q: 'Qual tecla registra Kiken-Gachi (KG)?', o: ['C', 'V', 'B', 'X'], c: 1 },
      { q: 'Qual tecla cancela Ippon do atleta Branco?', o: ['A', 'S', 'D', 'Q'], c: 0 },
      { q: 'Qual tecla cancela Waza-ari do atleta Branco?', o: ['A', 'S', 'D', 'W'], c: 1 },
      { q: 'Qual tecla cancela Ippon do atleta Azul?', o: ['H', 'J', 'K', 'Y'], c: 0 },
      { q: 'Qual tecla troca o torneio no sistema?', o: ['1', '2', '3', '4'], c: 2 },
      { q: 'Qual tecla troca a área de combate?', o: ['2', '3', '4', '5'], c: 2 },
      { q: 'Qual tecla ativa intervalo no cronômetro?', o: ['F7', 'F8', 'F9', 'F10'], c: 2 },
      { q: 'Qual tecla registra Indisciplina?', o: ['Z', 'X', 'C', 'V'], c: 1 },
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
      { q: 'Quanto tempo dura uma luta de judô masculino sênior?', o: ['4 minutos', '5 minutos', '6 minutos', '7 minutos'], c: 0 },
      { q: 'O que é Golden Score?', o: ['Prorrogação sem limite', 'Ponto extra', 'Desempate por penalidades', 'Decisão dos juízes'], c: 0 },
      { q: 'Waza-ari + Waza-ari equivale a?', o: ['Yuko', 'Waza-ari-awasete-ippon', 'Shido', 'Nada'], c: 1 },
      { q: 'Qual cor de judogi o atleta usa no lado esquerdo do placar?', o: ['Branco', 'Azul', 'Qualquer um', 'Depende do torneio'], c: 1 },
      { q: 'Quanto tempo de imobilização vale Waza-ari?', o: ['5-9 segundos', '10-14 segundos', '10-19 segundos', '15-19 segundos'], c: 2 },
      { q: 'O que significa "Sore-made"?', o: ['Começar', 'Parar', 'Fim da luta', 'Atenção'], c: 2 },
      { q: 'O que acontece se ambos caírem juntos (Ai-uchi)?', o: ['Ippon para ambos', 'Waza-ari para ambos', 'Não há pontuação', 'Matte'], c: 2 },
      { q: 'O que significa Hansoku-make?', o: ['Advertência leve', 'Desqualificação', 'Pontuação máxima', 'Empate'], c: 1 },
      { q: 'Qual o tamanho oficial da área de combate?', o: ['6x6 metros', '8x8 metros', '10x10 metros', '12x12 metros'], c: 1 },
      { q: 'Qual a cor da área de segurança?', o: ['Verde', 'Azul', 'Vermelho', 'Amarelo'], c: 2 },
      { q: 'Atacar as pernas diretamente é permitido?', o: ['Sim, sempre', 'Não, é Shido', 'Apenas em ne-waza', 'Só como contra-ataque'], c: 1 },
      { q: 'O que significa "Yusei-gachi"?', o: ['Vitória por Ippon', 'Vitória por superioridade', 'Empate', 'Desqualificação'], c: 1 },
      { q: 'Quanto tempo para atacar após pegar o judogi?', o: ['Imediato', '5 segundos', '10 segundos', '45 segundos'], c: 0 },
      { q: 'O que é Kumikata?', o: ['Técnica de projeção', 'Pegada no judogi', 'Posição de guarda', 'Cumprimento'], c: 1 },
      { q: 'O que é "Sono-mama"?', o: ['Continuar', 'Parar sem soltar', 'Fim da luta', 'Começar'], c: 1 },
      { q: 'O que é "Yoshi"?', o: ['Parar', 'Continuar', 'Fim', 'Penalidade'], c: 1 },
      { q: 'Qual a área mínima do tatame oficial?', o: ['6x6m', '8x8m', '14x14m', '10x10m'], c: 2 },
      { q: 'O que é "Hiki-wake"?', o: ['Vitória', 'Empate', 'Derrota', 'Desqualificação'], c: 1 },
      { q: 'Qual gesto indica Ippon?', o: ['Braço levantado', 'Braço para o lado', 'Dois braços levantados', 'Punho fechado'], c: 0 },
      { q: 'Qual gesto indica Waza-ari?', o: ['Braço levantado', 'Braço para o lado em 45°', 'Dois braços levantados', 'Punho fechado'], c: 1 },
      { q: 'O que acontece se um atleta sair da área?', o: ['Ippon', 'Shido', 'Matte', 'Nada'], c: 2 },
      { q: 'Qual é a idade mínima para categoria Sênior?', o: ['16 anos', '18 anos', '20 anos', '21 anos'], c: 1 },
      { q: 'Estrangulamentos são permitidos para cadetes?', o: ['Não', 'Sim', 'Apenas alguns', 'Depende do país'], c: 1 },
      { q: 'O que é "Fusen-gachi"?', o: ['Vitória por desistência', 'Vitória por Ippon', 'Empate', 'Derrota'], c: 0 },
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
      { q: 'Quanto tempo de imobilização vale Waza-ari em 2025?', o: ['5-9 segundos', '10-14 segundos', '10-19 segundos', '15-19 segundos'], c: 2 },
      { q: 'Quanto tempo de imobilização vale Ippon em 2025?', o: ['15 segundos', '20 segundos', '25 segundos', '30 segundos'], c: 1 },
      { q: 'Morder é considerado o quê em 2025?', o: ['Shido', 'Matte', 'Hansoku-make', 'Advertência'], c: 2 },
      { q: 'Ataques a articulações diferentes do cotovelo resultam em?', o: ['Shido', 'Matte', 'Hansoku-make', 'Nada'], c: 2 },
      { q: 'Bloquear com os braços esticados rígidos é?', o: ['Permitido', 'Shido', 'Hansoku-make', 'Apenas ne-waza'], c: 1 },
      { q: 'Quantos Yukos são necessários para empatar com Waza-ari?', o: ['1', '2', '3', 'Infinitos Yukos não igualam'], c: 3 },
      { q: 'Pegar na calça para atacar resulta em?', o: ['Nada', 'Matte', 'Shido', 'Ippon'], c: 2 },
      { q: 'O que é "pistol grip" nas regras 2025?', o: ['Pegada proibida', 'Pegada permitida', 'Tipo de projeção', 'Estrangulamento'], c: 1 },
      { q: 'Enrolar o dedo na manga é permitido em 2025?', o: ['Sim', 'Não, é Shido', 'Apenas em ne-waza', 'Apenas em tachi-waza'], c: 1 },
      { q: 'Qual a penalidade por usar dois dedos dentro da manga?', o: ['Nada', 'Matte', 'Shido', 'Hansoku-make'], c: 2 },
      { q: 'Cruzar a perna durante osaekomi é permitido?', o: ['Sim', 'Não', 'Apenas para escape', 'Apenas Tori'], c: 0 },
      { q: 'Qual mudança principal nas projeções de sacrifício em 2025?', o: ['Todas permitidas', 'Algumas proibidas', 'Critérios mais rígidos', 'Sem mudanças'], c: 2 },
      { q: 'O tempo de Golden Score mudou em 2025?', o: ['Sim, 3 minutos', 'Sim, 5 minutos', 'Não, continua ilimitado', 'Sim, 10 minutos'], c: 2 },
      { q: 'Qual a nova regra sobre pegada abaixo da faixa?', o: ['Permitida', 'Proibida em tachi-waza', 'Apenas com ataque', 'Sempre Shido'], c: 1 },
      { q: 'Empurrar o adversário para fora é permitido?', o: ['Sim', 'Não, é Shido', 'Apenas com técnica', 'Sempre Matte'], c: 1 },
    ]
  },
  katas: {
    title: 'Katas',
    icon: '形',
    questions: [
      { q: 'Quantos grupos tem o Nage-no-Kata?', o: ['3', '4', '5', '6'], c: 2 },
      { q: 'Quantas técnicas tem o Nage-no-Kata?', o: ['10', '12', '15', '20'], c: 2 },
      { q: 'Quantos grupos tem o Katame-no-Kata?', o: ['2', '3', '4', '5'], c: 1 },
      { q: 'Quantas técnicas tem o Katame-no-Kata?', o: ['10', '12', '15', '20'], c: 2 },
      { q: 'Qual o primeiro grupo do Nage-no-Kata?', o: ['Koshi-waza', 'Te-waza', 'Ashi-waza', 'Sutemi-waza'], c: 1 },
      { q: 'Qual o primeiro grupo do Katame-no-Kata?', o: ['Shime-waza', 'Osaekomi-waza', 'Kansetsu-waza', 'Ne-waza'], c: 1 },
      { q: 'Qual técnica abre o Nage-no-Kata?', o: ['Seoi-nage', 'Uki-otoshi', 'O-soto-gari', 'Harai-goshi'], c: 1 },
      { q: 'Qual técnica abre o Katame-no-Kata?', o: ['Juji-gatame', 'Kesa-gatame', 'Kata-gatame', 'Kami-shiho-gatame'], c: 1 },
      { q: 'O que significa "Kata" em japonês?', o: ['Luta', 'Forma/Modelo', 'Técnica', 'Caminho'], c: 1 },
      { q: 'O Nage-no-Kata é feito por quantas pessoas?', o: ['1', '2', '3', '4'], c: 1 },
      { q: 'Yoko-gake pertence a qual grupo do Nage-no-Kata?', o: ['Te-waza', 'Koshi-waza', 'Ma-sutemi-waza', 'Yoko-sutemi-waza'], c: 3 },
      { q: 'Tomoe-nage pertence a qual grupo do Nage-no-Kata?', o: ['Te-waza', 'Koshi-waza', 'Ma-sutemi-waza', 'Yoko-sutemi-waza'], c: 2 },
      { q: 'Uki-goshi pertence a qual grupo do Nage-no-Kata?', o: ['Te-waza', 'Koshi-waza', 'Ashi-waza', 'Ma-sutemi-waza'], c: 1 },
      { q: 'Qual a última técnica do Nage-no-Kata?', o: ['Uki-waza', 'Yoko-guruma', 'Yoko-gake', 'Tani-otoshi'], c: 0 },
      { q: 'Qual a última técnica do Katame-no-Kata?', o: ['Juji-gatame', 'Ude-garami', 'Ashi-garami', 'Ude-gatame'], c: 2 },
      { q: 'Qual kata demonstra defesa pessoal?', o: ['Nage-no-Kata', 'Kime-no-Kata', 'Katame-no-Kata', 'Ju-no-Kata'], c: 1 },
      { q: 'Qual kata enfatiza o princípio da suavidade?', o: ['Nage-no-Kata', 'Kime-no-Kata', 'Katame-no-Kata', 'Ju-no-Kata'], c: 3 },
      { q: 'Quantas técnicas de Osaekomi-waza tem o Katame-no-Kata?', o: ['3', '4', '5', '6'], c: 2 },
      { q: 'Quantas técnicas de Shime-waza tem o Katame-no-Kata?', o: ['3', '4', '5', '6'], c: 2 },
      { q: 'Quantas técnicas de Kansetsu-waza tem o Katame-no-Kata?', o: ['3', '4', '5', '6'], c: 2 },
      { q: 'Qual kata é obrigatório para exame de Shodan?', o: ['Ju-no-Kata', 'Nage-no-Kata', 'Kime-no-Kata', 'Kodokan Goshin-jutsu'], c: 1 },
      { q: 'Quem criou o sistema de Katas do Judô?', o: ['Kyuzo Mifune', 'Jigoro Kano', 'Mitsuyo Maeda', 'Isao Okano'], c: 1 },
      { q: 'Qual a ordem dos grupos no Nage-no-Kata?', o: ['Te, Koshi, Ashi, Ma-sutemi, Yoko-sutemi', 'Koshi, Te, Ashi, Sutemi', 'Ashi, Te, Koshi, Sutemi', 'Te, Ashi, Koshi, Sutemi'], c: 0 },
      { q: 'O que é Kodokan Goshin-jutsu?', o: ['Kata de projeções', 'Kata de solo', 'Kata de defesa pessoal moderna', 'Kata de competição'], c: 2 },
      { q: 'Harai-goshi pertence a qual grupo do Nage-no-Kata?', o: ['Te-waza', 'Koshi-waza', 'Ashi-waza', 'Ma-sutemi-waza'], c: 1 },
    ]
  },
  etiqueta: {
    title: 'Etiqueta e Dojo',
    icon: '礼',
    questions: [
      { q: 'O que significa "Rei"?', o: ['Luta', 'Saudação/Respeito', 'Técnica', 'Tatame'], c: 1 },
      { q: 'Qual saudação é feita em pé?', o: ['Zarei', 'Ritsurei', 'Tachi-rei', 'Seiza-rei'], c: 1 },
      { q: 'Qual saudação é feita de joelhos?', o: ['Zarei', 'Ritsurei', 'Tachi-rei', 'Ashi-rei'], c: 0 },
      { q: 'O que é Judogi?', o: ['Tatame', 'Uniforme do Judô', 'Faixa', 'Saudação'], c: 1 },
      { q: 'O que é Obi?', o: ['Calça', 'Jaqueta', 'Faixa', 'Tatame'], c: 2 },
      { q: 'O que é Uwagi?', o: ['Calça', 'Jaqueta', 'Faixa', 'Tatame'], c: 1 },
      { q: 'O que é Zubon?', o: ['Calça', 'Jaqueta', 'Faixa', 'Tatame'], c: 0 },
      { q: 'O que é Dojo?', o: ['Uniforme', 'Local de treino', 'Técnica', 'Professor'], c: 1 },
      { q: 'O que é Tatame?', o: ['Uniforme', 'Tapete de treino', 'Técnica', 'Faixa'], c: 1 },
      { q: 'O que é Sensei?', o: ['Aluno', 'Professor/Mestre', 'Árbitro', 'Adversário'], c: 1 },
      { q: 'O que é Shomen?', o: ['Entrada', 'Frente/Altar do Dojo', 'Área de luta', 'Vestiário'], c: 1 },
      { q: 'Qual faixa representa o iniciante absoluto?', o: ['Amarela', 'Branca', 'Cinza', 'Azul'], c: 1 },
      { q: 'Qual a primeira faixa colorida no Brasil?', o: ['Amarela', 'Laranja', 'Cinza', 'Verde'], c: 2 },
      { q: 'Qual faixa é o 1º Dan?', o: ['Marrom', 'Preta', 'Coral', 'Vermelha'], c: 1 },
      { q: 'Qual faixa representa o grau máximo (10º Dan)?', o: ['Preta', 'Coral', 'Vermelha', 'Branca'], c: 2 },
      { q: 'O que é "Kamiza"?', o: ['Entrada do dojo', 'Lugar de honra', 'Área de treino', 'Vestiário'], c: 1 },
      { q: 'O que é "Shimoza"?', o: ['Lugar de honra', 'Lado oposto ao Kamiza', 'Área central', 'Saída'], c: 1 },
      { q: 'O que é "Joseki"?', o: ['Lado dos alunos', 'Lado dos professores', 'Centro', 'Entrada'], c: 1 },
      { q: 'O que é "Shimoseki"?', o: ['Lado dos professores', 'Lado dos alunos iniciantes', 'Centro', 'Saída'], c: 1 },
      { q: 'O que significa "Seiza"?', o: ['Ficar em pé', 'Sentar de joelhos', 'Deitar', 'Andar'], c: 1 },
      { q: 'Qual faixa é 6º Dan?', o: ['Preta', 'Coral', 'Vermelha e branca', 'Vermelha'], c: 2 },
      { q: 'A partir de qual Dan usa-se faixa coral?', o: ['5º Dan', '6º Dan', '8º Dan', '9º Dan'], c: 1 },
      { q: 'A partir de qual Dan usa-se faixa vermelha?', o: ['6º Dan', '7º Dan', '8º Dan', '9º Dan'], c: 3 },
      { q: 'O que é "Mokuso"?', o: ['Saudação', 'Meditação', 'Aquecimento', 'Técnica'], c: 1 },
      { q: 'O que é "Kiotsuke"?', o: ['Descansar', 'Atenção', 'Sentar', 'Saudar'], c: 1 },
      { q: 'O que significa "Onegaishimasu"?', o: ['Obrigado', 'Por favor/Treine comigo', 'Adeus', 'Desculpe'], c: 1 },
      { q: 'O que significa "Arigato Gozaimashita"?', o: ['Por favor', 'Muito obrigado', 'Desculpe', 'Adeus'], c: 1 },
      { q: 'Qual lado do Judogi deve ficar por cima?', o: ['Direito', 'Esquerdo', 'Não importa', 'Depende do grau'], c: 1 },
      { q: 'Por que o lado esquerdo fica por cima?', o: ['Estética', 'Tradição (mortos usam direito)', 'Praticidade', 'Regra da IJF'], c: 1 },
      { q: 'O que é "Osu"?', o: ['Ataque', 'Expressão de respeito/concordância', 'Técnica', 'Projeção'], c: 1 },
    ]
  },
  organizacao: {
    title: 'Organização Desportiva',
    icon: '🏟️',
    questions: [
      { q: 'O que significa IJF?', o: ['Int. Judo Foundation', 'Int. Judo Federation', 'Int. Japan Federation', 'Inst. Judo Formation'], c: 1 },
      { q: 'O que significa CBJ?', o: ['Centro Brasileiro de Judô', 'Confederação Brasileira de Judô', 'Comitê Brasileiro de Judô', 'Conselho Brasileiro de Judô'], c: 1 },
      { q: 'Qual é o órgão máximo do Judô mundial?', o: ['COI', 'IJF', 'Kodokan', 'CBJ'], c: 1 },
      { q: 'Onde fica a sede do Kodokan?', o: ['Kyoto', 'Osaka', 'Tóquio', 'Kobe'], c: 2 },
      { q: 'Quantas categorias de peso masculino existem nas Olimpíadas?', o: ['5', '6', '7', '8'], c: 2 },
      { q: 'Quantas categorias de peso feminino existem nas Olimpíadas?', o: ['5', '6', '7', '8'], c: 2 },
      { q: 'Qual a categoria mais leve masculina nas Olimpíadas?', o: ['55kg', '60kg', '66kg', '73kg'], c: 1 },
      { q: 'Qual a categoria mais pesada masculina nas Olimpíadas?', o: ['90kg', '100kg', '+100kg', '+110kg'], c: 2 },
      { q: 'Qual a categoria mais leve feminina nas Olimpíadas?', o: ['44kg', '48kg', '52kg', '57kg'], c: 1 },
      { q: 'Qual a categoria mais pesada feminina nas Olimpíadas?', o: ['70kg', '78kg', '+78kg', '+90kg'], c: 2 },
      { q: 'O que é PJU (União Pan-Americana de Judô)?', o: ['Federação europeia', 'Federação das Américas', 'Federação asiática', 'Federação africana'], c: 1 },
      { q: 'Qual a idade limite para categoria Cadete?', o: ['15-16 anos', '17-18 anos', '19-20 anos', '21+ anos'], c: 0 },
      { q: 'Qual a idade para categoria Júnior?', o: ['15-17 anos', '18-20 anos', '21-23 anos', '24+ anos'], c: 1 },
      { q: 'Quantos países são membros da IJF?', o: ['100+', '150+', '195+', '250+'], c: 2 },
      { q: 'Qual o maior evento de Judô do mundo?', o: ['Campeonato Mundial', 'Grand Slam Paris', 'Jogos Olímpicos', 'All Japan'], c: 2 },
      { q: 'O que é World Judo Tour?', o: ['Turismo de judocas', 'Circuito mundial de competições', 'Curso de judô', 'Exibição de katas'], c: 1 },
      { q: 'Qual a diferença entre Grand Prix e Grand Slam?', o: ['Nenhuma', 'Grand Slam dá mais pontos', 'Grand Prix é mais importante', 'São iguais'], c: 1 },
      { q: 'Onde foi realizado o primeiro Grand Slam?', o: ['Paris', 'Tóquio', 'Abu Dhabi', 'Rio de Janeiro'], c: 0 },
      { q: 'Quantos pontos vale um ouro no Grand Slam?', o: ['500', '700', '1000', '1500'], c: 2 },
      { q: 'Qual o sistema de ranking da IJF?', o: ['ELO', 'World Ranking List', 'ATP Ranking', 'FIFA Ranking'], c: 1 },
      { q: 'O que é categoria "Open"?', o: ['Peso livre', 'Idade livre', 'Faixa livre', 'Sexo livre'], c: 0 },
      { q: 'Qual federação estadual é a mais antiga do Brasil?', o: ['FPJ (São Paulo)', 'FJERJ (Rio)', 'FMJ (Minas)', 'FGJ (Goiás)'], c: 0 },
      { q: 'O Brasil está em qual continente para a IJF?', o: ['Américas', 'Pan-América', 'Sul-América', 'Latino-América'], c: 0 },
      { q: 'Qual país domina o Judô feminino mundial?', o: ['Brasil', 'França', 'Japão', 'China'], c: 2 },
      { q: 'Quantas medalhas olímpicas o Brasil tem no Judô?', o: ['15+', '20+', '25+', '30+'], c: 2 },
    ]
  },
  ukemi: {
    title: 'Ukemi - Técnicas de Queda',
    icon: '受',
    questions: [
      { q: 'O que significa "Ukemi"?', o: ['Técnica de ataque', 'Corpo que recebe (queda)', 'Projeção', 'Imobilização'], c: 1 },
      { q: 'Qual Ukemi é usado para quedas para TRÁS?', o: ['Mae-Ukemi', 'Yoko-Ukemi', 'Ushiro-Ukemi', 'Zenpo-Kaiten-Ukemi'], c: 2 },
      { q: 'Qual Ukemi é usado para quedas LATERAIS?', o: ['Mae-Ukemi', 'Yoko-Ukemi', 'Ushiro-Ukemi', 'Zenpo-Kaiten-Ukemi'], c: 1 },
      { q: 'Qual Ukemi é usado para quedas para FRENTE?', o: ['Mae-Ukemi', 'Yoko-Ukemi', 'Ushiro-Ukemi', 'Outen-Ukemi'], c: 0 },
      { q: 'O que é Zenpo-Kaiten-Ukemi?', o: ['Queda para trás', 'Rolamento para frente', 'Queda lateral', 'Queda frontal'], c: 1 },
      { q: 'Qual é o sinônimo de Ushiro-Ukemi?', o: ['Zenpo-Ukemi', 'Sokuho-Ukemi', 'Koho-Ukemi', 'Mae-Ukemi'], c: 2 },
      { q: 'Qual é o sinônimo de Yoko-Ukemi?', o: ['Zenpo-Ukemi', 'Sokuho-Ukemi', 'Koho-Ukemi', 'Mae-Ukemi'], c: 1 },
      { q: 'Na Ushiro-Ukemi, onde deve estar o queixo?', o: ['Virado para cima', 'No peito', 'Para o lado', 'Relaxado'], c: 1 },
      { q: 'Em qual ângulo os braços batem no tatame na Ushiro-Ukemi?', o: ['90°', '45°', '30°', '60°'], c: 1 },
      { q: 'Qual Ukemi é essencial para projeções de sacrifício?', o: ['Ushiro-Ukemi', 'Yoko-Ukemi', 'Mae-Ukemi', 'Zenpo-Kaiten-Ukemi'], c: 3 },
      { q: 'O que significa "Koho"?', o: ['Frente', 'Lado', 'Trás', 'Cima'], c: 2 },
      { q: 'O que significa "Zenpo"?', o: ['Frente', 'Lado', 'Trás', 'Baixo'], c: 0 },
      { q: 'O que significa "Sokuho"?', o: ['Frente', 'Lado', 'Trás', 'Rotação'], c: 1 },
      { q: 'O que significa "Kaiten"?', o: ['Queda', 'Projeção', 'Rotação/Rolamento', 'Salto'], c: 2 },
      { q: 'Qual Ukemi faz parte do Kodomo-no-Kata?', o: ['Ushiro-Ukemi', 'Mae-Ukemi', 'Outen-Ukemi', 'Zenpo-Kaiten-Ukemi'], c: 2 },
      { q: 'O que é Outen-Ukemi?', o: ['Queda para trás', 'Queda para frente', 'Rolamento lateral', 'Projeção'], c: 2 },
      { q: 'Qual Ukemi é fundamental para O-soto-gari?', o: ['Mae-Ukemi', 'Ushiro-Ukemi', 'Zenpo-Kaiten-Ukemi', 'Outen-Ukemi'], c: 1 },
      { q: 'Qual Ukemi é usado em Harai-goshi?', o: ['Ushiro-Ukemi', 'Yoko-Ukemi', 'Mae-Ukemi', 'Koho-Ukemi'], c: 1 },
      { q: 'Por que o Ukemi é considerado fundamental no Judô?', o: ['Para atacar melhor', 'Para segurança do praticante', 'Para vencer lutas', 'Para subir de faixa'], c: 1 },
      { q: 'Quantos tipos principais de Ukemi existem?', o: ['3', '4', '5', '6'], c: 2 },
      { q: 'Na Mae-Ukemi, qual parte do corpo absorve o impacto?', o: ['Costas', 'Ombros', 'Antebraços e palmas', 'Joelhos'], c: 2 },
      { q: 'Na Zenpo-Kaiten-Ukemi, sobre qual parte do corpo se rola?', o: ['Cabeça', 'Ombro diagonal', 'Costas retas', 'Quadril'], c: 1 },
      { q: 'Qual a posição correta das pernas na Ushiro-Ukemi?', o: ['Esticadas no chão', 'Elevadas', 'Cruzadas', 'Dobradas lateralmente'], c: 1 },
      { q: 'O que deve fazer o rosto na Mae-Ukemi?', o: ['Olhar para frente', 'Virar para o lado', 'Olhar para baixo', 'Olhar para cima'], c: 1 },
      { q: 'Quando o judoca deve dominar o Ukemi?', o: ['Após a faixa preta', 'Antes de progredir nas técnicas', 'Só em competições', 'Apenas em katas'], c: 1 },
    ]
  },
};

interface QuizProgress {
  [category: string]: {
    bestScore: number;
    totalQuestions: number;
    attempts: number;
    lastPlayed: string;
  };
}

const STORAGE_KEY = 'judo-quiz-progress';

const getProgress = (): QuizProgress => {
  try {
    const stored = localStorage.getItem(STORAGE_KEY);
    return stored ? JSON.parse(stored) : {};
  } catch {
    return {};
  }
};

const saveProgress = (category: string, score: number, total: number) => {
  const progress = getProgress();
  const existing = progress[category];
  
  progress[category] = {
    bestScore: existing ? Math.max(existing.bestScore, score) : score,
    totalQuestions: total,
    attempts: existing ? existing.attempts + 1 : 1,
    lastPlayed: new Date().toISOString(),
  };
  
  localStorage.setItem(STORAGE_KEY, JSON.stringify(progress));
};

interface AnswerHistory {
  questionNumber: number;
  question: string;
  isCorrect: boolean;
  selectedOption: string;
  correctOption: string;
}

const QuizzesSection = () => {
  const [currentQuiz, setCurrentQuiz] = useState<string | null>(null);
  const [questionIndex, setQuestionIndex] = useState(0);
  const [score, setScore] = useState(0);
  const [answered, setAnswered] = useState(0);
  const [selectedAnswer, setSelectedAnswer] = useState<number | null>(null);
  const [showResult, setShowResult] = useState(false);
  const [quizCompleted, setQuizCompleted] = useState(false);
  const [progress, setProgress] = useState<QuizProgress>(getProgress());
  const [answerHistory, setAnswerHistory] = useState<AnswerHistory[]>([]);

  const startQuiz = (category: string) => {
    setCurrentQuiz(category);
    setQuestionIndex(0);
    setScore(0);
    setAnswered(0);
    setSelectedAnswer(null);
    setShowResult(false);
    setQuizCompleted(false);
    setAnswerHistory([]);
  };

  const handleAnswer = (index: number) => {
    if (selectedAnswer !== null) return;
    
    setSelectedAnswer(index);
    setShowResult(true);
    setAnswered(prev => prev + 1);
    
    const quiz = quizData[currentQuiz!];
    const currentQuestion = quiz.questions[questionIndex];
    const isCorrect = index === currentQuestion.c;
    const newScore = isCorrect ? score + 1 : score;
    
    // Add to history
    setAnswerHistory(prev => [...prev, {
      questionNumber: questionIndex + 1,
      question: currentQuestion.q,
      isCorrect,
      selectedOption: currentQuestion.o[index],
      correctOption: currentQuestion.o[currentQuestion.c],
    }]);
    
    if (isCorrect) {
      setScore(newScore);
    }

    setTimeout(() => {
      if (questionIndex + 1 >= quiz.questions.length) {
        // Quiz completed - save progress
        saveProgress(currentQuiz!, newScore, quiz.questions.length);
        setProgress(getProgress());
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

        {/* Progress Summary */}
        {Object.keys(progress).length > 0 && (
          <div className="card-judo mb-8 p-4">
            <h3 className="font-semibold text-white mb-3 flex items-center gap-2">
              <span>📊</span> Seu Progresso
            </h3>
            <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-3">
              {Object.entries(progress).map(([key, data]) => {
                const quizInfo = quizData[key];
                if (!quizInfo) return null;
                const percent = Math.round((data.bestScore / data.totalQuestions) * 100);
                return (
                  <div key={key} className="p-3 bg-muted/20 rounded-lg">
                    <div className="flex items-center justify-between mb-1">
                      <span className="text-xs text-muted-foreground truncate">{quizInfo.title}</span>
                      <span className="text-primary font-serif">{quizInfo.icon}</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <div className="flex-1 h-2 bg-muted/30 rounded-full overflow-hidden">
                        <div 
                          className="h-full bg-primary transition-all"
                          style={{ width: `${percent}%` }}
                        />
                      </div>
                      <span className="text-xs text-primary font-semibold">{percent}%</span>
                    </div>
                    <p className="text-xs text-muted-foreground mt-1">{data.attempts} tentativa{data.attempts > 1 ? 's' : ''}</p>
                  </div>
                );
              })}
            </div>
          </div>
        )}

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {Object.entries(quizData).map(([key, quiz]) => {
            const quizProgress = progress[key];
            const bestPercent = quizProgress ? Math.round((quizProgress.bestScore / quizProgress.totalQuestions) * 100) : null;
            
            return (
              <button
                key={key}
                onClick={() => startQuiz(key)}
                className="card-judo text-left hover:border-primary transition-colors p-6 relative"
              >
                {bestPercent !== null && (
                  <div className="absolute top-2 right-2">
                    <span className={`text-xs px-2 py-0.5 rounded-full ${
                      bestPercent >= 90 ? 'bg-green-500/20 text-green-400' :
                      bestPercent >= 70 ? 'bg-yellow-500/20 text-yellow-400' :
                      bestPercent >= 50 ? 'bg-orange-500/20 text-orange-400' :
                      'bg-red-500/20 text-red-400'
                    }`}>
                      {bestPercent}%
                    </span>
                  </div>
                )}
                <div className="flex items-center justify-between mb-3">
                  <div>
                    <h3 className="font-semibold text-white">{quiz.title}</h3>
                    <p className="text-xs text-muted-foreground">{quiz.questions.length} perguntas</p>
                  </div>
                  <span className="text-3xl text-primary font-serif">{quiz.icon}</span>
                </div>
                <div className="flex items-center gap-2 text-primary text-sm">
                  <span>{quizProgress ? 'Jogar Novamente' : 'Iniciar Quiz'}</span>
                  <span>→</span>
                </div>
              </button>
            );
          })}
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

      {/* Score Panel */}
      <div className="card-judo mb-4 p-4">
        <div className="flex items-center justify-between mb-3">
          <h4 className="text-sm font-semibold text-white flex items-center gap-2">
            <span>📊</span> Painel de Score
          </h4>
          <span className="text-xs text-muted-foreground">
            Pergunta {questionIndex + 1} de {quiz.questions.length}
          </span>
        </div>
        
        <div className="grid grid-cols-3 gap-3 mb-3">
          {/* Acertos */}
          <div className="bg-green-500/10 border border-green-500/30 rounded-lg p-3 text-center">
            <div className="text-2xl font-bold text-green-400">{score}</div>
            <div className="text-xs text-green-400/70">Acertos</div>
          </div>
          
          {/* Erros */}
          <div className="bg-red-500/10 border border-red-500/30 rounded-lg p-3 text-center">
            <div className="text-2xl font-bold text-red-400">{answered - score}</div>
            <div className="text-xs text-red-400/70">Erros</div>
          </div>
          
          {/* Desempenho */}
          <div className="bg-primary/10 border border-primary/30 rounded-lg p-3 text-center">
            <div className="text-2xl font-bold text-primary">
              {answered > 0 ? Math.round((score / answered) * 100) : 0}%
            </div>
            <div className="text-xs text-primary/70">Desempenho</div>
          </div>
        </div>

        {/* Progress Bar */}
        <div className="h-2 bg-muted/30 rounded-full overflow-hidden">
          <div 
            className="h-full bg-gradient-to-r from-primary to-primary/70 transition-all duration-300"
            style={{ width: `${((questionIndex) / quiz.questions.length) * 100}%` }}
          />
        </div>
        <div className="flex justify-between text-xs text-muted-foreground mt-1">
          <span>Progresso</span>
          <span>{Math.round((questionIndex / quiz.questions.length) * 100)}%</span>
        </div>

        {/* Answer History */}
        {answerHistory.length > 0 && (
          <div className="mt-4 pt-4 border-t border-muted/30">
            <h5 className="text-xs font-semibold text-muted-foreground mb-2 flex items-center gap-1">
              <span>📝</span> Histórico de Respostas
            </h5>
            <div className="max-h-32 overflow-y-auto space-y-1 scrollbar-thin">
              {answerHistory.map((item, idx) => (
                <div 
                  key={idx}
                  className={`flex items-center gap-2 p-2 rounded-lg text-xs ${
                    item.isCorrect 
                      ? 'bg-green-500/10 border border-green-500/20' 
                      : 'bg-red-500/10 border border-red-500/20'
                  }`}
                >
                  <span className={`w-5 h-5 rounded-full flex items-center justify-center text-[10px] font-bold ${
                    item.isCorrect ? 'bg-green-500/30 text-green-400' : 'bg-red-500/30 text-red-400'
                  }`}>
                    {item.isCorrect ? '✓' : '✗'}
                  </span>
                  <span className="flex-1 truncate text-foreground/80">
                    <span className="text-muted-foreground">Q{item.questionNumber}:</span> {item.question}
                  </span>
                  {!item.isCorrect && (
                    <span className="text-green-400/70 text-[10px] hidden sm:inline">
                      R: {item.correctOption}
                    </span>
                  )}
                </div>
              ))}
            </div>
          </div>
        )}
      </div>

      <div className="card-judo">
        <div className="flex items-center justify-between mb-4">
          <button
            onClick={backToMenu}
            className="text-sm text-muted-foreground hover:text-white transition-colors"
          >
            ← Voltar
          </button>
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
                key={`${questionIndex}-${index}`}
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

      </div>
    </div>
  );
};

export default QuizzesSection;

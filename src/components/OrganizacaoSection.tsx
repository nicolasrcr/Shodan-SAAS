const OrganizacaoSection = () => {
  const hierarquia = [
    { sigla: 'IJF', nome: 'International Judo Federation', desc: 'Federação Internacional - governa o Judô mundial, sediada em Budapeste' },
    { sigla: 'PJC', nome: 'Confederação Pan-Americana de Judô', desc: 'Organiza o Judô nas Américas (Norte, Central e Sul)' },
    { sigla: 'CBJ', nome: 'Confederação Brasileira de Judô', desc: 'Governa o Judô no Brasil, filiada à IJF e PJC' },
    { sigla: 'Federações', nome: 'Federações Estaduais', desc: 'Ex: FBJ (Brasília), FPJ (São Paulo), FJERJ (Rio)' },
    { sigla: 'Clubes', nome: 'Academias e Clubes', desc: 'Unidades locais de treinamento, filiadas às federações' },
  ];

  const categoriasIdade = [
    { categoria: 'Sub-11', idade: '9-10 anos', cor: 'bg-cyan-500/20' },
    { categoria: 'Sub-13', idade: '11-12 anos', cor: 'bg-blue-500/20' },
    { categoria: 'Sub-15 (Infantil)', idade: '13-14 anos', cor: 'bg-green-500/20' },
    { categoria: 'Sub-18 (Cadete)', idade: '15-17 anos', cor: 'bg-yellow-500/20' },
    { categoria: 'Sub-21 (Júnior)', idade: '18-20 anos', cor: 'bg-orange-500/20' },
    { categoria: 'Sênior', idade: '15+ anos', cor: 'bg-red-500/20' },
    { categoria: 'Masters', idade: '30+ anos', cor: 'bg-purple-500/20' },
    { categoria: 'Veteranos', idade: '60+ anos', cor: 'bg-gray-500/20' },
  ];

  const categoriasPesoMasc = [
    { peso: '-60kg', nome: 'Ligeiro' },
    { peso: '-66kg', nome: 'Meio-Leve' },
    { peso: '-73kg', nome: 'Leve' },
    { peso: '-81kg', nome: 'Meio-Médio' },
    { peso: '-90kg', nome: 'Médio' },
    { peso: '-100kg', nome: 'Meio-Pesado' },
    { peso: '+100kg', nome: 'Pesado' },
  ];

  const categoriasPesoFem = [
    { peso: '-48kg', nome: 'Ligeiro' },
    { peso: '-52kg', nome: 'Meio-Leve' },
    { peso: '-57kg', nome: 'Leve' },
    { peso: '-63kg', nome: 'Meio-Médio' },
    { peso: '-70kg', nome: 'Médio' },
    { peso: '-78kg', nome: 'Meio-Pesado' },
    { peso: '+78kg', nome: 'Pesado' },
  ];

  const competicoes = [
    { nome: 'Jogos Olímpicos', freq: 'A cada 4 anos', nivel: 'Mundial', icone: '🏅' },
    { nome: 'Campeonato Mundial', freq: 'Anual', nivel: 'Mundial', icone: '🌍' },
    { nome: 'Grand Slam', freq: 'Várias por ano', nivel: 'Mundial', icone: '🏆' },
    { nome: 'Grand Prix', freq: 'Várias por ano', nivel: 'Internacional', icone: '🥇' },
    { nome: 'Continental Open', freq: 'Várias por ano', nivel: 'Continental', icone: '🎖️' },
    { nome: 'Campeonato Brasileiro', freq: 'Anual', nivel: 'Nacional', icone: '🇧🇷' },
    { nome: 'Campeonatos Estaduais', freq: 'Anual', nivel: 'Regional', icone: '📍' },
    { nome: 'Campeonatos Regionais', freq: 'Várias por ano', nivel: 'Local', icone: '🏟️' },
  ];

  const ranking = [
    { sistema: 'WRL (World Ranking List)', desc: 'Ranking mundial oficial da IJF, usado para definir cabeças de chave' },
    { sistema: 'Ranking Nacional CBJ', desc: 'Pontuação baseada em resultados em competições nacionais' },
    { sistema: 'Ranking Estadual', desc: 'Classificação dentro de cada estado/federação' },
  ];

  return (
    <div className="animate-fade-in">
      <h2 className="section-title">
        <span className="section-title-icon">🏟️</span>
        Organização Desportiva
      </h2>

      {/* Hierarquia */}
      <h3 className="text-lg font-semibold text-primary flex items-center gap-2 mb-4">
        <span>🏛️</span> Hierarquia das Federações
      </h3>
      
      <div className="space-y-3 mb-10">
        {hierarquia.map((item, index) => (
          <div key={index} className="card-judo flex items-center gap-4">
            <div className="w-16 h-16 rounded-full bg-primary/20 flex items-center justify-center flex-shrink-0">
              <span className="text-xs font-bold text-primary">{item.sigla}</span>
            </div>
            <div className="flex-grow">
              <h4 className="font-semibold text-white">{item.nome}</h4>
              <p className="text-sm text-muted-foreground">{item.desc}</p>
            </div>
            {index < hierarquia.length - 1 && (
              <div className="hidden sm:block text-primary text-2xl">↓</div>
            )}
          </div>
        ))}
      </div>

      {/* Categorias por Idade */}
      <h3 className="text-lg font-semibold text-primary flex items-center gap-2 mb-4">
        <span>📅</span> Categorias por Idade
      </h3>
      
      <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-3 mb-10">
        {categoriasIdade.map((cat, index) => (
          <div key={index} className={`card-judo ${cat.cor} border-primary/30`}>
            <h4 className="font-semibold text-white">{cat.categoria}</h4>
            <p className="text-sm text-muted-foreground">{cat.idade}</p>
          </div>
        ))}
      </div>

      {/* Categorias por Peso */}
      <h3 className="text-lg font-semibold text-primary flex items-center gap-2 mb-4">
        <span>⚖️</span> Categorias por Peso (Sênior Olímpico)
      </h3>
      
      <div className="grid sm:grid-cols-2 gap-6 mb-10">
        <div className="card-judo">
          <h4 className="font-semibold text-blue-400 mb-4 flex items-center gap-2">
            <span>♂️</span> Masculino
          </h4>
          <div className="grid grid-cols-2 gap-2">
            {categoriasPesoMasc.map((cat, index) => (
              <div key={index} className="bg-background/30 rounded-lg p-2 text-center">
                <p className="font-bold text-white">{cat.peso}</p>
                <p className="text-xs text-muted-foreground">{cat.nome}</p>
              </div>
            ))}
          </div>
        </div>

        <div className="card-judo">
          <h4 className="font-semibold text-pink-400 mb-4 flex items-center gap-2">
            <span>♀️</span> Feminino
          </h4>
          <div className="grid grid-cols-2 gap-2">
            {categoriasPesoFem.map((cat, index) => (
              <div key={index} className="bg-background/30 rounded-lg p-2 text-center">
                <p className="font-bold text-white">{cat.peso}</p>
                <p className="text-xs text-muted-foreground">{cat.nome}</p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Competições */}
      <h3 className="text-lg font-semibold text-primary flex items-center gap-2 mb-4">
        <span>🏆</span> Principais Competições
      </h3>
      
      <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-10">
        {competicoes.map((comp, index) => (
          <div key={index} className="card-judo text-center">
            <span className="text-2xl block mb-2">{comp.icone}</span>
            <h4 className="font-semibold text-white text-sm">{comp.nome}</h4>
            <p className="text-xs text-primary">{comp.freq}</p>
            <p className="text-xs text-muted-foreground">{comp.nivel}</p>
          </div>
        ))}
      </div>

      {/* Sistema de Ranking */}
      <h3 className="text-lg font-semibold text-primary flex items-center gap-2 mb-4">
        <span>📊</span> Sistemas de Ranking
      </h3>
      
      <div className="card-judo">
        <div className="space-y-4">
          {ranking.map((item, index) => (
            <div key={index} className="flex items-start gap-3 p-3 bg-muted/20 rounded-lg">
              <span className="text-primary font-bold">#{index + 1}</span>
              <div>
                <h4 className="font-semibold text-white text-sm">{item.sistema}</h4>
                <p className="text-xs text-muted-foreground">{item.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Informações Adicionais */}
      <h3 className="text-lg font-semibold text-primary flex items-center gap-2 mb-4 mt-10">
        <span>📋</span> Informações Importantes
      </h3>
      
      <div className="grid sm:grid-cols-2 gap-4">
        <div className="card-judo">
          <h4 className="font-semibold text-white mb-3">Documentação para Competir</h4>
          <ul className="space-y-2 text-sm text-foreground/70">
            <li>• Registro na federação estadual</li>
            <li>• Atestado médico válido</li>
            <li>• Documento de identidade</li>
            <li>• Judogi oficial (azul e branco)</li>
            <li>• Inscrição no evento</li>
          </ul>
        </div>
        <div className="card-judo">
          <h4 className="font-semibold text-white mb-3">Pesagem</h4>
          <ul className="space-y-2 text-sm text-foreground/70">
            <li>• Realizada no dia anterior ou no dia da competição</li>
            <li>• Tolerância: 0g (peso exato da categoria)</li>
            <li>• Atleta acima do peso = desclassificado</li>
            <li>• Pesagem oficial com judogi</li>
            <li>• Segunda pesagem (random) antes das finais</li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default OrganizacaoSection;

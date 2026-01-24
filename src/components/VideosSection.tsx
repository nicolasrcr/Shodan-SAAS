const VideosSection = () => {
  const videoCategories = [
    {
      title: 'Te-Waza (Técnicas de Mão)',
      videos: [
        { name: 'Seoi-nage', id: 'zIq0xI0ogxk' },
        { name: 'Ippon-seoi-nage', id: 'FQnOlCxo4oI' },
        { name: 'Seoi-otoshi', id: 'vu1TMVNnq34' },
        { name: 'Tai-otoshi', id: '4x6S3Q-Ktv8' },
        { name: 'Kata-guruma', id: 'cnHRhSy8yi4' },
        { name: 'Sukui-nage', id: 'vU6aJ2kFxoI' },
        { name: 'Obi-otoshi', id: 'ff8U2TVZIYI' },
        { name: 'Uki-otoshi', id: '6H5tmncOY4Q' },
        { name: 'Sumi-otoshi', id: 'lLU9wv52ni0' },
        { name: 'Yama-arashi', id: 'MGlyKmSuzdc' },
        { name: 'Obi-tori-gaeshi', id: 'bpc82SrunUU' },
        { name: 'Morote-gari', id: 'BHLQS4K85bs' },
        { name: 'Kuchiki-taoshi', id: 'ZNL47q1aJNY' },
        { name: 'Kibisu-gaeshi', id: 'SqI12aHF1P8' },
        { name: 'Uchi-mata-sukashi', id: 'y5v1kU6E01I' },
        { name: 'Ko-uchi-gaeshi', id: '8v7S_76IHBE' },
      ]
    },
    {
      title: 'Koshi-Waza (Técnicas de Quadril)',
      videos: [
        { name: 'O-goshi', id: 'yhu1mfy2vJ4' },
        { name: 'Uki-goshi', id: 'bPKwtB4lyOQ' },
        { name: 'Harai-goshi', id: 'qTo8HlAAkOo' },
        { name: 'Koshi-guruma', id: 'SU7Id6uVJ44' },
        { name: 'Tsurikomi-goshi', id: 'McfzA0yRVt4' },
        { name: 'Hane-goshi', id: 'M9_7De6A1kk' },
        { name: 'Tsuri-goshi', id: 'IKRsNEnHJKg' },
        { name: 'Utsuri-goshi', id: 'GKl0pUKGWMg' },
        { name: 'Sode-tsurikomi-goshi', id: 'WhQg2YMoW9o' },
        { name: 'Ushiro-goshi', id: 'C7OXB3wQ9Ds' },
        { name: 'O-guruma', id: 'k3l_v7rPSVg' },
      ]
    },
    {
      title: 'Ashi-Waza (Técnicas de Perna)',
      videos: [
        { name: 'De-ashi-harai', id: '4BUUvqxi_Kk' },
        { name: 'Okuri-ashi-harai', id: 'kNhJKQE5aLY' },
        { name: 'Ko-soto-gake', id: 'ORaD7hUVR80' },
        { name: 'Ko-soto-gari', id: 'jeQ541ScLB4' },
        { name: 'Ko-uchi-gari', id: '3Jb3tZvr9Ng' },
        { name: 'O-soto-gari', id: 'c-A_nP7mKAc' },
        { name: 'O-uchi-gari', id: '0itJFhV9pDQ' },
        { name: 'Uchi-mata', id: 'iUpSu5J-bgw' },
        { name: 'O-soto-otoshi', id: '4CjxN5zqHEs' },
        { name: 'Hiza-guruma', id: 'TlODJyQE57g' },
        { name: 'Ashi-guruma', id: 'N3aNe7Ufpfs' },
        { name: 'Harai-tsurikomi-ashi', id: 'pjbUb1lpmxc' },
        { name: 'Sasae-tsurikomi-ashi', id: 'z3bP4l4Ofhg' },
        { name: 'O-soto-guruma', id: 'Dt5LfUyPqVA' },
        { name: 'O-soto-gaeshi', id: '8ZjM3X_EANo' },
        { name: 'O-uchi-gaeshi', id: 'dCyZTXyjIXE' },
        { name: 'Hane-goshi-gaeshi', id: '9bZAZSBtnGs' },
        { name: 'Harai-goshi-gaeshi', id: '4U3It-7PPsc' },
        { name: 'Uchi-mata-gaeshi', id: 'Sy6sLWxkWYw' },
        { name: 'Tsubame-gaeshi', id: 'GwweWqqFB5g' },
      ]
    },
    {
      title: 'Ma-Sutemi-Waza (Sacrifício para Trás)',
      videos: [
        { name: 'Tomoe-nage', id: '880WbHvHv6A' },
        { name: 'Sumi-gaeshi', id: '5VhduA5xkbA' },
        { name: 'Hikikomi-gaeshi', id: '92zUYWBp5N8' },
        { name: 'Tawara-gaeshi', id: 'TmTWgrmViZc' },
        { name: 'Ura-nage', id: 'Fgi9b8DJ5sQ' },
      ]
    },
    {
      title: 'Yoko-Sutemi-Waza (Sacrifício Lateral)',
      videos: [
        { name: 'Yoko-otoshi', id: 'MnNG67pF_a0' },
        { name: 'Tani-otoshi', id: '3b9Me3Fohpk' },
        { name: 'Hane-makikomi', id: '6CRBGLGz9j8' },
        { name: 'Soto-makikomi', id: 'bWG9O1BVKtQ' },
        { name: 'Uchi-makikomi', id: '5BowcjduxVc' },
        { name: 'Uki-waza', id: 'weVOpJ63gII' },
        { name: 'Yoko-wakare', id: 'bp1tscHlePI' },
        { name: 'Yoko-guruma', id: 'MehP6I5cY2c' },
        { name: 'Yoko-gake', id: 'tP1Sj1uDfSo' },
        { name: 'Daki-wakare', id: 'Hr0cOMGBDYo' },
        { name: 'O-soto-makikomi', id: 'DGDv2oMwmas' },
        { name: 'Uchi-mata-makikomi', id: 'jZXENTLpJCI' },
        { name: 'Harai-makikomi', id: 'VBaHzKaCXss' },
        { name: 'Ko-uchi-makikomi', id: '_1eygIXLD_w' },
        { name: 'Kani-basami', id: 'OR-HGHnarYc' },
        { name: 'Kawazu-gake', id: 'w6G57bWACi0' },
      ]
    },
  ];

  const canaisRecomendados = [
    { name: 'Kodokan Judo Institute', desc: 'Canal oficial do Kodokan - demonstrações oficiais', url: 'https://www.youtube.com/@KodokanJudoInstitute' },
    { name: 'IJF Judo', desc: 'Federação Internacional de Judô - competições e técnicas', url: 'https://www.youtube.com/@ijabordeaux' },
    { name: 'JudoInside', desc: 'Notícias, análises técnicas e competições', url: 'https://www.youtube.com/@JudoInside' },
    { name: 'CBJ Oficial', desc: 'Confederação Brasileira de Judô', url: 'https://www.youtube.com/@cbj_oficial' },
    { name: 'Superstar Judo', desc: 'Tutoriais e análises técnicas detalhadas', url: 'https://www.youtube.com/@SuperstarJudo' },
    { name: 'Matt D\'Aquino', desc: 'Dicas de treino e técnicas avançadas', url: 'https://www.youtube.com/@BeyondGrappling' },
  ];

  return (
    <div className="animate-fade-in">
      <h2 className="section-title">
        <span className="section-title-icon">映</span>
        Vídeos - Demonstrações Técnicas
      </h2>

      <div className="card-red p-4 mb-8">
        <p className="text-sm text-foreground/80 flex items-center gap-2">
          <span>⚠️</span>
          <strong>ATENÇÃO:</strong> É necessário ter acesso à internet para visualizar os vídeos. 
          Ao clicar, você será redirecionado para o YouTube.
        </p>
      </div>

      <div className="card-judo mb-8">
        <p className="text-sm text-foreground/70">
          Playlist completa de vídeos demonstrativos de todas as técnicas oficiais do Judô. 
          Vídeos do Kodokan oficial e canais de referência mundial.
        </p>
      </div>

      {videoCategories.map((category, catIndex) => (
        <div key={catIndex} className="mb-10">
          <h3 className="text-lg font-semibold text-primary flex items-center gap-2 mb-4">
            <span>🎬</span> {category.title}
          </h3>
          
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-4">
            {category.videos.map((video, index) => (
              <a 
                key={index}
                href={`https://www.youtube.com/watch?v=${video.id}`}
                target="_blank"
                rel="noopener noreferrer"
                className="card-judo group overflow-hidden p-0 hover:border-primary transition-colors"
              >
                <div className="relative aspect-video bg-background/50">
                  <img 
                    src={`https://img.youtube.com/vi/${video.id}/mqdefault.jpg`}
                    alt={video.name}
                    className="w-full h-full object-cover opacity-80 group-hover:opacity-100 transition-opacity"
                    loading="lazy"
                  />
                  <div className="absolute inset-0 flex items-center justify-center">
                    <div className="w-10 h-10 rounded-full bg-red-600 flex items-center justify-center group-hover:scale-110 transition-transform">
                      <span className="text-white text-sm ml-0.5">▶</span>
                    </div>
                  </div>
                </div>
                <div className="p-2 text-center">
                  <p className="text-xs font-medium text-white group-hover:text-primary transition-colors truncate">
                    {video.name}
                  </p>
                </div>
              </a>
            ))}
          </div>
        </div>
      ))}

      {/* Canais Recomendados */}
      <h3 className="text-lg font-semibold text-primary flex items-center gap-2 mb-4">
        <span>📺</span> Canais Recomendados
      </h3>
      
      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
        {canaisRecomendados.map((channel, index) => (
          <a 
            key={index} 
            href={channel.url}
            target="_blank"
            rel="noopener noreferrer"
            className="card-judo text-center p-4 hover:border-primary transition-colors"
          >
            <div className="w-12 h-12 rounded-full bg-red-600 flex items-center justify-center mx-auto mb-2">
              <span className="text-white text-lg">▶</span>
            </div>
            <p className="font-medium text-white text-sm">{channel.name}</p>
            <p className="text-xs text-muted-foreground">{channel.desc}</p>
          </a>
        ))}
      </div>

      {/* Dicas para Estudo */}
      <h3 className="text-lg font-semibold text-primary flex items-center gap-2 mb-4 mt-10">
        <span>💡</span> Dicas para Estudo por Vídeo
      </h3>
      
      <div className="card-judo">
        <div className="grid sm:grid-cols-2 gap-4">
          <div>
            <h4 className="font-semibold text-white mb-2">Como Estudar</h4>
            <ul className="space-y-1 text-sm text-foreground/70">
              <li>• Assista em velocidade reduzida (0.5x ou 0.25x)</li>
              <li>• Pause para analisar posições-chave</li>
              <li>• Compare com suas próprias gravações</li>
              <li>• Foque em uma técnica por sessão de estudo</li>
            </ul>
          </div>
          <div>
            <h4 className="font-semibold text-white mb-2">O que Observar</h4>
            <ul className="space-y-1 text-sm text-foreground/70">
              <li>• Posição das mãos (kumi-kata)</li>
              <li>• Direção do desequilíbrio (kuzushi)</li>
              <li>• Momento da entrada (tsukuri)</li>
              <li>• Finalização da técnica (kake)</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default VideosSection;

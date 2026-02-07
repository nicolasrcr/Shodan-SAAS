import { useState } from 'react';
import { Badge } from '@/components/ui/badge';

interface VideoItem {
  name: string;
  id: string;
  gokyo?: string;
}

const VideoThumbnail = ({ videoId, videoName }: { videoId: string; videoName: string }) => {
  const [imgSrc, setImgSrc] = useState(`https://img.youtube.com/vi/${videoId}/mqdefault.jpg`);
  const [hasError, setHasError] = useState(false);

  const handleError = () => {
    if (imgSrc.includes('mqdefault')) {
      setImgSrc(`https://img.youtube.com/vi/${videoId}/default.jpg`);
    } else if (imgSrc.includes('default.jpg') && !hasError) {
      setHasError(true);
    }
  };

  if (hasError) {
    return (
      <div className="w-full h-full bg-gradient-to-br from-primary/20 to-primary/5 flex items-center justify-center">
        <span className="text-2xl">🥋</span>
      </div>
    );
  }

  return (
    <img 
      src={imgSrc}
      alt={videoName}
      className="w-full h-full object-cover opacity-80 group-hover:opacity-100 transition-opacity"
      loading="lazy"
      onError={handleError}
    />
  );
};

const VideosSection = () => {
  const gokyoInfo = {
    Ikkyo: { color: 'bg-yellow-500', textColor: 'text-black', kyu: '5º Kyu', emoji: '🟡' },
    Nikyo: { color: 'bg-orange-500', textColor: 'text-white', kyu: '4º Kyu', emoji: '🟠' },
    Sankyo: { color: 'bg-green-600', textColor: 'text-white', kyu: '3º Kyu', emoji: '🟢' },
    Yonkyo: { color: 'bg-blue-600', textColor: 'text-white', kyu: '2º Kyu', emoji: '🔵' },
    Gokyo: { color: 'bg-amber-800', textColor: 'text-white', kyu: '1º Kyu', emoji: '🟤' },
    Shinmeisho: { color: 'bg-gray-600', textColor: 'text-white', kyu: 'Técnicas Adicionais', emoji: '⚪' },
    Kinshi: { color: 'bg-red-700', textColor: 'text-white', kyu: 'Proibidas', emoji: '🔴' },
  };

  // Video IDs mapping for quick lookup
  const videoIds: Record<string, string> = {
    // Ikkyo (1º Gokyo)
    'De-Ashi-Harai': '4BUUvqxi_Kk',
    'Hiza-Guruma': 'TlODJyQE57g',
    'Sasae-Tsurikomi-Ashi': 'z3bP4l4Ofhg',
    'Uki-Goshi': 'bPKwtB4lyOQ',
    'O-Soto-Gari': 'c-A_nP7mKAc',
    'O-Goshi': 'yhu1mfy2vJ4',
    'O-Uchi-Gari': '0itJFhV9pDQ',
    'Seoi-Nage': 'zIq0xI0ogxk',
    // Nikyo (2º Gokyo)
    'Ko-Soto-Gari': 'jeQ541ScLB4',
    'Ko-Uchi-Gari': '3Jb3tZvr9Ng',
    'Koshi-Guruma': 'SU7Id6uVJ44',
    'Tsurikomi-Goshi': 'McfzA0yRVt4',
    'Okuri-Ashi-Harai': 'kNhJKQE5aLY',
    'Tai-Otoshi': '4x6S3Q-Ktv8',
    'Harai-Goshi': 'qTo8HlAAkOo',
    'Uchi-Mata': 'iUpSu5J-bgw',
    // Sankyo (3º Gokyo)
    'Ko-Soto-Gake': 'ORaD7hUVR80',
    'Tsuri-Goshi': 'IKRsNEnHJKg',
    'Yoko-Otoshi': 'MnNG67pF_a0',
    'Ashi-Guruma': 'N3aNe7Ufpfs',
    'Hane-Goshi': 'M9_7De6A1kk',
    'Harai-Tsurikomi-Ashi': 'pjbUb1lpmxc',
    'Tomoe-Nage': '880WbHvHv6A',
    'Kata-Guruma': 'cnHRhSy8yi4',
    // Yonkyo (4º Gokyo)
    'Sumi-Gaeshi': '5VhduA5xkbA',
    'Tani-Otoshi': '3b9Me3Fohpk',
    'Hane-Makikomi': '6CRBGLGz9j8',
    'Sukui-Nage': 'vU6aJ2kFxoI',
    'Utsuri-Goshi': 'GKl0pUKGWMg',
    'O-Guruma': 'k3l_v7rPSVg',
    'Soto-Makikomi': 'bWG9O1BVKtQ',
    'Uki-Otoshi': '6H5tmncOY4Q',
    // Gokyo (5º Gokyo)
    'O-Soto-Guruma': 'Dt5LfUyPqVA',
    'Uki-Waza': 'weVOpJ63gII',
    'Yoko-Wakare': 'bp1tscHlePI',
    'Yoko-Guruma': 'MehP6I5cY2c',
    'Ushiro-Goshi': 'C7OXB3wQ9Ds',
    'Ura-Nage': 'Fgi9b8DJ5sQ',
    'Sumi-Otoshi': 'lLU9wv52ni0',
    'Yoko-Gake': 'tP1Sj1uDfSo',
  };

  const videoCategories = [
    {
      title: 'Ikkyo - 1º Grupo (5º Kyu - Faixa Amarela)',
      gokyo: 'Ikkyo',
      videos: [
        { name: 'De-Ashi-Harai', id: videoIds['De-Ashi-Harai'], gokyo: 'Ikkyo' },
        { name: 'Hiza-Guruma', id: videoIds['Hiza-Guruma'], gokyo: 'Ikkyo' },
        { name: 'Sasae-Tsurikomi-Ashi', id: videoIds['Sasae-Tsurikomi-Ashi'], gokyo: 'Ikkyo' },
        { name: 'Uki-Goshi', id: videoIds['Uki-Goshi'], gokyo: 'Ikkyo' },
        { name: 'O-Soto-Gari', id: videoIds['O-Soto-Gari'], gokyo: 'Ikkyo' },
        { name: 'O-Goshi', id: videoIds['O-Goshi'], gokyo: 'Ikkyo' },
        { name: 'O-Uchi-Gari', id: videoIds['O-Uchi-Gari'], gokyo: 'Ikkyo' },
        { name: 'Seoi-Nage', id: videoIds['Seoi-Nage'], gokyo: 'Ikkyo' },
      ] as VideoItem[]
    },
    {
      title: 'Nikyo - 2º Grupo (4º Kyu - Faixa Laranja)',
      gokyo: 'Nikyo',
      videos: [
        { name: 'Ko-Soto-Gari', id: videoIds['Ko-Soto-Gari'], gokyo: 'Nikyo' },
        { name: 'Ko-Uchi-Gari', id: videoIds['Ko-Uchi-Gari'], gokyo: 'Nikyo' },
        { name: 'Koshi-Guruma', id: videoIds['Koshi-Guruma'], gokyo: 'Nikyo' },
        { name: 'Tsurikomi-Goshi', id: videoIds['Tsurikomi-Goshi'], gokyo: 'Nikyo' },
        { name: 'Okuri-Ashi-Harai', id: videoIds['Okuri-Ashi-Harai'], gokyo: 'Nikyo' },
        { name: 'Tai-Otoshi', id: videoIds['Tai-Otoshi'], gokyo: 'Nikyo' },
        { name: 'Harai-Goshi', id: videoIds['Harai-Goshi'], gokyo: 'Nikyo' },
        { name: 'Uchi-Mata', id: videoIds['Uchi-Mata'], gokyo: 'Nikyo' },
      ] as VideoItem[]
    },
    {
      title: 'Sankyo - 3º Grupo (3º Kyu - Faixa Verde)',
      gokyo: 'Sankyo',
      videos: [
        { name: 'Ko-Soto-Gake', id: videoIds['Ko-Soto-Gake'], gokyo: 'Sankyo' },
        { name: 'Tsuri-Goshi', id: videoIds['Tsuri-Goshi'], gokyo: 'Sankyo' },
        { name: 'Yoko-Otoshi', id: videoIds['Yoko-Otoshi'], gokyo: 'Sankyo' },
        { name: 'Ashi-Guruma', id: videoIds['Ashi-Guruma'], gokyo: 'Sankyo' },
        { name: 'Hane-Goshi', id: videoIds['Hane-Goshi'], gokyo: 'Sankyo' },
        { name: 'Harai-Tsurikomi-Ashi', id: videoIds['Harai-Tsurikomi-Ashi'], gokyo: 'Sankyo' },
        { name: 'Tomoe-Nage', id: videoIds['Tomoe-Nage'], gokyo: 'Sankyo' },
        { name: 'Kata-Guruma', id: videoIds['Kata-Guruma'], gokyo: 'Sankyo' },
      ] as VideoItem[]
    },
    {
      title: 'Yonkyo - 4º Grupo (2º Kyu - Faixa Azul)',
      gokyo: 'Yonkyo',
      videos: [
        { name: 'Sumi-Gaeshi', id: videoIds['Sumi-Gaeshi'], gokyo: 'Yonkyo' },
        { name: 'Tani-Otoshi', id: videoIds['Tani-Otoshi'], gokyo: 'Yonkyo' },
        { name: 'Hane-Makikomi', id: videoIds['Hane-Makikomi'], gokyo: 'Yonkyo' },
        { name: 'Sukui-Nage', id: videoIds['Sukui-Nage'], gokyo: 'Yonkyo' },
        { name: 'Utsuri-Goshi', id: videoIds['Utsuri-Goshi'], gokyo: 'Yonkyo' },
        { name: 'O-Guruma', id: videoIds['O-Guruma'], gokyo: 'Yonkyo' },
        { name: 'Soto-Makikomi', id: videoIds['Soto-Makikomi'], gokyo: 'Yonkyo' },
        { name: 'Uki-Otoshi', id: videoIds['Uki-Otoshi'], gokyo: 'Yonkyo' },
      ] as VideoItem[]
    },
    {
      title: 'Gokyo - 5º Grupo (1º Kyu - Faixa Marrom)',
      gokyo: 'Gokyo',
      videos: [
        { name: 'O-Soto-Guruma', id: videoIds['O-Soto-Guruma'], gokyo: 'Gokyo' },
        { name: 'Uki-Waza', id: videoIds['Uki-Waza'], gokyo: 'Gokyo' },
        { name: 'Yoko-Wakare', id: videoIds['Yoko-Wakare'], gokyo: 'Gokyo' },
        { name: 'Yoko-Guruma', id: videoIds['Yoko-Guruma'], gokyo: 'Gokyo' },
        { name: 'Ushiro-Goshi', id: videoIds['Ushiro-Goshi'], gokyo: 'Gokyo' },
        { name: 'Ura-Nage', id: videoIds['Ura-Nage'], gokyo: 'Gokyo' },
        { name: 'Sumi-Otoshi', id: videoIds['Sumi-Otoshi'], gokyo: 'Gokyo' },
        { name: 'Yoko-Gake', id: videoIds['Yoko-Gake'], gokyo: 'Gokyo' },
      ] as VideoItem[]
    },
    {
      title: 'Shinmeisho-no-Waza (Técnicas Adicionais)',
      gokyo: 'Shinmeisho',
      videos: [
        { name: 'Obi-otoshi', id: 'ff8U2TVZIYI', gokyo: 'Shinmeisho' },
        { name: 'Obi-tori-gaeshi', id: 'bpc82SrunUU', gokyo: 'Shinmeisho' },
        { name: 'Morote-gari', id: 'BHLQS4K85bs', gokyo: 'Shinmeisho' },
        { name: 'Kuchiki-taoshi', id: 'ZNL47q1aJNY', gokyo: 'Shinmeisho' },
        { name: 'Kibisu-gaeshi', id: 'SqI12aHF1P8', gokyo: 'Shinmeisho' },
        { name: 'Uchi-mata-sukashi', id: 'y5v1kU6E01I', gokyo: 'Shinmeisho' },
        { name: 'Ko-uchi-gaeshi', id: '8v7S_76IHBE', gokyo: 'Shinmeisho' },
        { name: 'Sode-tsurikomi-goshi', id: 'WhQg2YMoW9o', gokyo: 'Shinmeisho' },
        { name: 'O-soto-gaeshi', id: '8ZjM3X_EANo', gokyo: 'Shinmeisho' },
        { name: 'O-uchi-gaeshi', id: 'dCyZTXyjIXE', gokyo: 'Shinmeisho' },
        { name: 'Hane-goshi-gaeshi', id: '9bZAZSBtnGs', gokyo: 'Shinmeisho' },
        { name: 'Harai-goshi-gaeshi', id: '4U3It-7PPsc', gokyo: 'Shinmeisho' },
        { name: 'Uchi-mata-gaeshi', id: 'Sy6sLWxkWYw', gokyo: 'Shinmeisho' },
        { name: 'Tsubame-gaeshi', id: 'GwweWqqFB5g', gokyo: 'Shinmeisho' },
        { name: 'Hikikomi-gaeshi', id: '92zUYWBp5N8', gokyo: 'Shinmeisho' },
        { name: 'Tawara-gaeshi', id: 'TmTWgrmViZc', gokyo: 'Shinmeisho' },
        { name: 'Daki-wakare', id: 'Hr0cOMGBDYo', gokyo: 'Shinmeisho' },
        { name: 'O-soto-makikomi', id: 'DGDv2oMwmas', gokyo: 'Shinmeisho' },
        { name: 'Uchi-mata-makikomi', id: 'jZXENTLpJCI', gokyo: 'Shinmeisho' },
        { name: 'Harai-makikomi', id: 'VBaHzKaCXss', gokyo: 'Shinmeisho' },
        { name: 'Ko-uchi-makikomi', id: '_1eygIXLD_w', gokyo: 'Shinmeisho' },
      ] as VideoItem[]
    },
    {
      title: 'Kinshi-Waza (Técnicas Proibidas)',
      gokyo: 'Kinshi',
      videos: [
        { name: 'Kani-basami', id: 'OR-HGHnarYc', gokyo: 'Kinshi' },
        { name: 'Kawazu-gake', id: 'w6G57bWACi0', gokyo: 'Kinshi' },
      ] as VideoItem[]
    },
    {
      title: 'Ukemi (Técnicas de Queda)',
      gokyo: undefined,
      videos: [
        { name: 'Ushiro-Ukemi', id: 'u4oHFVznIVY' },
        { name: 'Yoko-Ukemi', id: 'KJFr5FINMIM' },
        { name: 'Mae-Ukemi', id: 'ukSj8JM8cvI' },
        { name: 'Zenpo-Kaiten-Ukemi', id: 'BvFpMr1Insw' },
        { name: 'Ukemi Completo', id: 'VoktcQAxEPg' },
      ] as VideoItem[]
    },
  ];

  return (
    <div className="animate-fade-in">
      <h2 className="section-title">
        <span className="section-title-icon">映</span>
        Vídeos - Demonstrações Técnicas
      </h2>

      {/* Belt Color Legend */}
      <div className="card-judo mb-6 p-4">
        <h3 className="text-sm font-semibold text-primary mb-3">🎨 Sistema de Cores por Faixa (Gokyo)</h3>
        <div className="grid grid-cols-2 sm:grid-cols-5 gap-3">
          {Object.entries(gokyoInfo).slice(0, 5).map(([key, info]) => (
            <div key={key} className="flex items-center gap-2">
              <div className={`w-6 h-6 rounded-full ${info.color}`} />
              <div>
                <p className="text-xs font-medium text-white">{key}</p>
                <p className="text-[10px] text-foreground/60">{info.kyu}</p>
              </div>
            </div>
          ))}
        </div>
      </div>

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

      {videoCategories.map((category, catIndex) => {
        const info = category.gokyo ? gokyoInfo[category.gokyo as keyof typeof gokyoInfo] : null;
        return (
        <div key={catIndex} className="mb-10">
          <h3 className="text-lg font-semibold flex items-center gap-3 mb-4">
            {info ? (
              <>
                <span className={`w-6 h-6 rounded ${info.color}`} />
                <span className="text-primary">{category.title}</span>
              </>
            ) : (
              <>
                <span>🎬</span>
                <span className="text-primary">{category.title}</span>
              </>
            )}
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
                  <VideoThumbnail videoId={video.id} videoName={video.name} />
                  <div className="absolute inset-0 flex items-center justify-center">
                    <div className="w-10 h-10 rounded-full bg-red-600 flex items-center justify-center group-hover:scale-110 transition-transform">
                      <span className="text-white text-sm ml-0.5">▶</span>
                    </div>
                  </div>
                  {video.gokyo && (
                    <Badge 
                      variant={video.gokyo === 'Kinshi' ? 'destructive' : 'secondary'}
                      className={`absolute top-1 right-1 text-[10px] px-1.5 py-0.5 ${
                        video.gokyo === 'Ikkyo' ? 'bg-yellow-500 hover:bg-yellow-600 text-black' :
                        video.gokyo === 'Nikyo' ? 'bg-orange-500 hover:bg-orange-600' :
                        video.gokyo === 'Sankyo' ? 'bg-green-600 hover:bg-green-700' :
                        video.gokyo === 'Yonkyo' ? 'bg-blue-600 hover:bg-blue-700' :
                        video.gokyo === 'Gokyo' ? 'bg-amber-800 hover:bg-amber-900' :
                        video.gokyo === 'Shinmeisho' ? 'bg-gray-600 hover:bg-gray-700' :
                        video.gokyo === 'Kinshi' ? 'bg-red-700 hover:bg-red-800' : ''
                      }`}
                    >
                      {video.gokyo}
                    </Badge>
                  )}
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
        );
      })}

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

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

  const videoCategories = [
    {
      title: 'Ikkyo - 1º Grupo (5º Kyu - Faixa Amarela)',
      gokyo: 'Ikkyo',
      videos: [
        { name: 'De-ashi-harai', id: '4BUUvqxi_Kk', gokyo: 'Ikkyo' },
        { name: 'Hiza-guruma', id: 'TlODJyQE57g', gokyo: 'Ikkyo' },
        { name: 'Sasae-tsurikomi-ashi', id: 'z3bP4l4Ofhg', gokyo: 'Ikkyo' },
        { name: 'Uki-goshi', id: 'bPKwtB4lyOQ', gokyo: 'Ikkyo' },
        { name: 'O-soto-gari', id: 'c-A_nP7mKAc', gokyo: 'Ikkyo' },
        { name: 'O-goshi', id: 'yhu1mfy2vJ4', gokyo: 'Ikkyo' },
        { name: 'Seoi-nage', id: 'zIq0xI0ogxk', gokyo: 'Ikkyo' },
        { name: 'Uki-otoshi', id: '6H5tmncOY4Q', gokyo: 'Ikkyo' },
      ] as VideoItem[]
    },
    {
      title: 'Nikyo - 2º Grupo (4º Kyu - Faixa Laranja)',
      gokyo: 'Nikyo',
      videos: [
        { name: 'Ko-soto-gari', id: 'jeQ541ScLB4', gokyo: 'Nikyo' },
        { name: 'Koshi-guruma', id: 'SU7Id6uVJ44', gokyo: 'Nikyo' },
        { name: 'Tsurikomi-goshi', id: 'McfzA0yRVt4', gokyo: 'Nikyo' },
        { name: 'Okuri-ashi-harai', id: 'kNhJKQE5aLY', gokyo: 'Nikyo' },
        { name: 'Tai-otoshi', id: '4x6S3Q-Ktv8', gokyo: 'Nikyo' },
        { name: 'Harai-goshi', id: 'qTo8HlAAkOo', gokyo: 'Nikyo' },
        { name: 'Hane-goshi', id: 'M9_7De6A1kk', gokyo: 'Nikyo' },
        { name: 'Harai-tsurikomi-ashi', id: 'pjbUb1lpmxc', gokyo: 'Nikyo' },
        { name: 'Sumi-otoshi', id: 'lLU9wv52ni0', gokyo: 'Nikyo' },
      ] as VideoItem[]
    },
    {
      title: 'Sankyo - 3º Grupo (3º Kyu - Faixa Verde)',
      gokyo: 'Sankyo',
      videos: [
        { name: 'Ko-uchi-gari', id: '3Jb3tZvr9Ng', gokyo: 'Sankyo' },
        { name: 'Tsuri-goshi', id: 'IKRsNEnHJKg', gokyo: 'Sankyo' },
        { name: 'Ashi-guruma', id: 'N3aNe7Ufpfs', gokyo: 'Sankyo' },
        { name: 'Uchi-mata', id: 'iUpSu5J-bgw', gokyo: 'Sankyo' },
        { name: 'Ippon-seoi-nage', id: 'FQnOlCxo4oI', gokyo: 'Sankyo' },
        { name: 'Seoi-otoshi', id: 'vu1TMVNnq34', gokyo: 'Sankyo' },
        { name: 'Kata-guruma', id: 'cnHRhSy8yi4', gokyo: 'Sankyo' },
        { name: 'Tomoe-nage', id: '880WbHvHv6A', gokyo: 'Sankyo' },
      ] as VideoItem[]
    },
    {
      title: 'Yonkyo - 4º Grupo (2º Kyu - Faixa Azul)',
      gokyo: 'Yonkyo',
      videos: [
        { name: 'Ko-soto-gake', id: 'ORaD7hUVR80', gokyo: 'Yonkyo' },
        { name: 'Sumi-gaeshi', id: '5VhduA5xkbA', gokyo: 'Yonkyo' },
        { name: 'Tani-otoshi', id: '3b9Me3Fohpk', gokyo: 'Yonkyo' },
        { name: 'Hane-makikomi', id: '6CRBGLGz9j8', gokyo: 'Yonkyo' },
        { name: 'Sukui-nage', id: 'vU6aJ2kFxoI', gokyo: 'Yonkyo' },
        { name: 'Utsuri-goshi', id: 'GKl0pUKGWMg', gokyo: 'Yonkyo' },
        { name: 'Soto-makikomi', id: 'bWG9O1BVKtQ', gokyo: 'Yonkyo' },
        { name: 'Uki-waza', id: 'weVOpJ63gII', gokyo: 'Yonkyo' },
        { name: 'Uchi-makikomi', id: '5BowcjduxVc', gokyo: 'Yonkyo' },
        { name: 'Ushiro-goshi', id: 'C7OXB3wQ9Ds', gokyo: 'Yonkyo' },
      ] as VideoItem[]
    },
    {
      title: 'Gokyo - 5º Grupo (1º Kyu - Faixa Marrom)',
      gokyo: 'Gokyo',
      videos: [
        { name: 'O-soto-guruma', id: 'Dt5LfUyPqVA', gokyo: 'Gokyo' },
        { name: 'O-uchi-gari', id: '0itJFhV9pDQ', gokyo: 'Gokyo' },
        { name: 'O-soto-otoshi', id: '4CjxN5zqHEs', gokyo: 'Gokyo' },
        { name: 'Yoko-otoshi', id: 'MnNG67pF_a0', gokyo: 'Gokyo' },
        { name: 'Yoko-wakare', id: 'bp1tscHlePI', gokyo: 'Gokyo' },
        { name: 'Yoko-guruma', id: 'MehP6I5cY2c', gokyo: 'Gokyo' },
        { name: 'Yoko-gake', id: 'tP1Sj1uDfSo', gokyo: 'Gokyo' },
        { name: 'Ura-nage', id: 'Fgi9b8DJ5sQ', gokyo: 'Gokyo' },
        { name: 'O-guruma', id: 'k3l_v7rPSVg', gokyo: 'Gokyo' },
        { name: 'Yama-arashi', id: 'MGlyKmSuzdc', gokyo: 'Gokyo' },
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

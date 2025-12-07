import React, { useMemo, useState } from 'react';
import { BUSINESS_INFO, SOCIAL_LINKS } from './constants';
import { LinkButton } from './components/LinkButton';
import { Cake, PartyPopper } from 'lucide-react';

const App: React.FC = () => {
  // Estado para gerenciar a fonte da imagem
  // IMPORTANTE: A barra '/' no início indica que a imagem está na pasta public
  const [imgSrc, setImgSrc] = useState("/logo.png");
  // Estado para saber se todas as tentativas falharam
  const [imgError, setImgError] = useState(false);
  
  // Geração de elementos de fundo (apenas bolos flutuantes)
  const backgroundItems = useMemo(() => {
    // Lista restrita apenas a bolos conforme solicitado
    const emojis = ['🎂', '🍰', '🧁'];
    const items = [];
    // Criar 15 itens flutuantes
    for (let i = 0; i < 15; i++) {
      items.push({
        id: i,
        emoji: emojis[Math.floor(Math.random() * emojis.length)],
        left: `${Math.random() * 100}%`,
        duration: `${15 + Math.random() * 20}s`, // Entre 15 e 35 segundos
        delay: `${Math.random() * -30}s`, // Começar em momentos diferentes
        size: `${1.5 + Math.random() * 2}rem`, // Tamanhos variados
      });
    }
    return items;
  }, []);

  // Lógica inteligente para tentar encontrar a imagem correta
  const handleImageError = () => {
    // Ordem de tentativa: /logo.png -> /logo.jpg -> /logo.jpeg -> /Logo.png -> Fallback
    if (imgSrc === "/logo.png") {
      setImgSrc("/logo.jpg");
    } else if (imgSrc === "/logo.jpg") {
      setImgSrc("/logo.jpeg");
    } else if (imgSrc === "/logo.jpeg") {
      setImgSrc("/Logo.png"); // Tenta maiúsculo
    } else {
      setImgError(true); // Desiste e mostra o ícone
    }
  };

  return (
    <div className="min-h-screen relative overflow-hidden flex flex-col items-center">
      
      {/* Camada de Fundo Animada */}
      {backgroundItems.map((item) => (
        <div
          key={item.id}
          className="floating-bg-item opacity-40 hover:opacity-100 transition-opacity"
          style={{
            left: item.left,
            animationDuration: item.duration,
            animationDelay: item.delay,
            fontSize: item.size,
          }}
        >
          {item.emoji}
        </div>
      ))}

      {/* Camada Principal de Conteúdo (z-10 para ficar acima do fundo) */}
      <div className="relative z-10 w-full max-w-md px-4 sm:px-6 py-12 flex flex-col items-center">
        
        {/* Header / Profile Section */}
        <header className="text-center mb-10 animate-fade-in-down w-full">
          <div className="relative w-40 h-40 mx-auto mb-6 group">
            <div className="absolute inset-0 rounded-full bg-brand-300 animate-pulse blur-xl opacity-60 group-hover:opacity-80 transition-opacity"></div>
            
            {/* Círculo da Imagem */}
            <div className="relative w-full h-full rounded-full border-4 border-white shadow-2xl overflow-hidden bg-white flex items-center justify-center transform group-hover:scale-105 transition-transform duration-300">
               {!imgError ? (
                 <img 
                   src={imgSrc}
                   alt="Logo Festa dos Doces" 
                   className="w-full h-full object-cover"
                   onError={handleImageError}
                 />
               ) : (
                 // Fallback caso a imagem não seja encontrada
                 <div className="flex flex-col items-center justify-center text-brand-300 w-full h-full bg-brand-50">
                   <Cake size={48} className="mb-1 opacity-50" />
                   <span className="text-xs font-sans text-brand-400 font-bold">Festa dos Doces</span>
                 </div>
               )}
            </div>
            
            <div className="absolute -bottom-2 -right-2 bg-brand-500 text-white p-3 rounded-full border-4 border-brand-50 shadow-lg animate-bounce-slow">
              <PartyPopper size={20} />
            </div>
          </div>
          
          <h1 className="font-serif text-5xl font-bold text-brand-900 mb-2 tracking-tight drop-shadow-sm">
            {BUSINESS_INFO.name}
          </h1>
          <p className="font-sans text-brand-800 text-lg mb-3 font-semibold">
            {BUSINESS_INFO.tagline}
          </p>
          <div className="w-24 h-1 bg-brand-400 mx-auto rounded-full mb-4"></div>
          <p className="font-sans text-chocolate-800/80 text-sm max-w-xs mx-auto leading-relaxed">
            {BUSINESS_INFO.description}
          </p>
        </header>

        {/* Main Links Section - Com fundo translúcido para leitura */}
        <main className="w-full backdrop-blur-sm bg-white/30 p-6 rounded-3xl border border-white/50 shadow-xl mb-8">
          <div className="space-y-4">
            {SOCIAL_LINKS.map((link) => (
              <LinkButton key={link.id} link={link} />
            ))}
          </div>
        </main>

        {/* Footer */}
        <footer className="mt-12 text-center text-brand-900/70 font-sans text-sm font-medium">
          <p>desenvolvido pela Cactustechs</p>
          <p className="mt-2 flex items-center justify-center gap-1">
            <Cake size={14} className="text-brand-500"/>
            O melhor sabor da festa
            <Cake size={14} className="text-brand-500"/>
          </p>
        </footer>

      </div>
    </div>
  );
};

export default App;

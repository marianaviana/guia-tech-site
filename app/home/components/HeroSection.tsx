import React from 'react';

export default function HeroSection() {
  return (
    <section className="relative w-full min-h-screen flex flex-col items-center justify-center text-center px-4 py-20 bg-black border-b border-gray-900 overflow-hidden">
      {/* Luz azul de fundo (Efeito Glow) */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-cyan-500/10 rounded-full blur-[120px] pointer-events-none"></div>

      <div className="relative z-10 max-w-5xl mx-auto flex flex-col items-center">
        
        {/* Logo Base Tech */}
        <div className="flex items-center gap-2 mb-10 text-xl font-bold tracking-wide">
          <span className="text-[#00BFFF] text-2xl">&lt;/&gt;</span>
          <span className="text-white">Base <span className="text-[#00BFFF]">Tech</span></span>
        </div>

        {/* Título Principal (Headline) */}
        <h1 className="text-4xl sm:text-5xl md:text-6xl font-extrabold text-white tracking-tight leading-tight max-w-4xl">
          O mercado de TI não precisa de mais curiosos. <br />
          <span className="text-[#00BFFF] drop-shadow-[0_0_20px_rgba(0,191,255,0.4)]">
            Ele precisa de profissionais direcionados.
          </span>
        </h1>

        {/* Subtítulo */}
        <p className="mt-8 text-base sm:text-lg text-gray-400 max-w-2xl leading-relaxed">
          Descubra os erros que 90% dos iniciantes cometem e aprenda a estratégia certa para se destacar no mercado de tecnologia.
        </p>

        {/* Botão de Chamada Principal com Brilho */}
        <div className="mt-10 relative group">
          <a 
            href="https://pay.kiwify.com.br/4AlTZa1" 
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-3 bg-[#00BFFF] text-black font-bold px-8 py-4 rounded-xl text-base tracking-wide hover:bg-[#0099cc] transition-all duration-300 shadow-[0_0_40px_rgba(0,191,255,0.3)]"
          >
            <svg className="w-5 h-5" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"></path>
            </svg>
            Garantir meu Guia por R$ 9,90
          </a>
        </div>

        {/* Seta para baixo */}
        <div className="mt-16 animate-bounce text-[#00BFFF]">
          <svg className="w-6 h-6" fill="none" stroke="currentColor" stroke-width="2.5" viewBox="0 0 24 24">
            <path stroke-linecap="round" stroke-linejoin="round" d="M19 14l-7 7-7-7m7-7v14"></path>
          </svg>
        </div>

      </div>
    </section>
  );
}
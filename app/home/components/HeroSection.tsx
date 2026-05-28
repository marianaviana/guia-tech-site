import React from 'react';

export default function HeroSection() {
  return (
    <section className="relative w-full min-h-screen flex flex-col items-center justify-center text-center px-4 py-20 bg-gradient-to-b from-black via-[#030712] to-black border-b border-gray-900/50 overflow-hidden">
      
      {/* Efeito de Iluminação Premium (Glow Sutil) */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-cyan-600/10 rounded-full blur-[150px] pointer-events-none"></div>

      <div className="relative z-10 max-w-4xl mx-auto flex flex-col items-center">
        
        {/* Logo Base Tech */}
        <div className="flex items-center gap-2 mb-8 px-4 py-1.5 rounded-full bg-cyan-950/30 border border-cyan-900/50 text-sm md:text-base font-semibold tracking-wide backdrop-blur-sm">
          <span className="text-[#00BFFF]">&lt;/&gt;</span>
          <span className="text-white">Base <span className="text-[#00BFFF]">Tech</span></span>
        </div>

        {/* Headline Estratégica (Tamanho ajustado para elegância) */}
        <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold text-white tracking-tight leading-[1.1] max-w-4xl">
          O mercado de TI não precisa de mais curiosos. <br className="hidden md:block" />
          <span className="text-[#00BFFF] drop-shadow-[0_0_15px_rgba(0,191,255,0.3)]">
             Ele precisa de profissionais direcionados.
          </span>
        </h1>

        {/* Subheadline Focada */}
        <p className="mt-6 text-base md:text-lg text-gray-400 max-w-2xl leading-relaxed font-medium">
          Descubra os erros que 90% dos iniciantes cometem e aprenda a estratégia certa para se destacar no mercado de tecnologia.
        </p>

        {/* Indicador de rolagem discreto (Incentiva a ler o resto) */}
        <div className="mt-20 animate-bounce text-gray-600">
          <svg className="w-6 h-6" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" d="M19 14l-7 7-7-7m7-7v14"></path>
          </svg>
        </div>

      </div>
    </section>
  );
}
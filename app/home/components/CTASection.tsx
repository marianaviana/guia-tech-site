import React from 'react';

export default function CTASection() {
  return (
    <section className="w-full py-24 px-4 bg-black border-t border-gray-900 relative flex flex-col items-center text-center overflow-hidden">
      {/* Luz azul sutil de fundo */}
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[400px] h-[300px] bg-cyan-500/5 rounded-full blur-[100px] pointer-events-none"></div>

      <div className="relative z-10 max-w-4xl mx-auto flex flex-col items-center">
        
        {/* Ícone de raio/foguete superior */}
        <div className="bg-cyan-950/30 p-4 rounded-full text-[#00BFFF] border border-cyan-900/40 mb-8">
          <svg className="w-6 h-6" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24">
            <path stroke-linecap="round" stroke-linejoin="round" d="M13 10V3L4 14h7v7l9-11h-7z"></path>
          </svg>
        </div>

        {/* Título de Fechamento */}
        <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-white tracking-tight leading-tight">
          Pronto para deixar de ser mais <br className="hidden sm:inline" /> um <span className="text-[#00BFFF] drop-shadow-[0_0_20px_rgba(0,191,255,0.4)]">curioso</span>?
        </h2>
        
        {/* Subtítulo */}
        <p className="mt-6 text-gray-400 text-base max-w-xl leading-relaxed">
          Comece agora mesmo sua jornada rumo a uma carreira sólida e direcionada em tecnologia.
        </p>

        {/* Botão de Chamada Final com Brilho */}
        <div className="mt-8 relative group">
          <a 
            href="#" 
            className="inline-flex items-center gap-3 bg-[#00BFFF] text-black font-bold px-8 py-4 rounded-xl text-base tracking-wide hover:bg-[#0099cc] transition-all duration-300 shadow-[0_0_40px_rgba(0,191,255,0.3)]"
          >
            <svg className="w-5 h-5" fill="none" stroke="currentColor" stroke-width="2.5" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" d="M14.752 11.168l-3.197-2.132A1 1 0 0010 9.87v4.263a1 1 0 001.555.832l3.197-2.132a1 1 0 000-1.664z"></path>
              <path stroke-linecap="round" stroke-linejoin="round" d="M21 12a9 9 0 11-18 0 9 9 0 0118 0z"></path>
            </svg>
            Começar minha jornada na TI hoje
          </a>
        </div>

        {/* Informações de Segurança */}
        <div className="flex flex-wrap justify-center gap-6 mt-8 text-xs text-gray-500 font-medium">
          <span className="flex items-center gap-1.5">🛡️ Pagamento seguro</span>
          <span className="flex items-center gap-1.5">⚡ Acesso imediato</span>
          <span className="flex items-center gap-1.5">📆 Garantia de 7 dias</span>
        </div>

      </div>
    </section>
  );
}
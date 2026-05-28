import React from 'react';

export default function HighlightsSection() {
  return (
    <section className="w-full py-16 px-4 bg-black relative">
      <div className="max-w-6xl mx-auto">
        
        {/* Título da Seção */}
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-extrabold text-white tracking-tight">
            Destaques do <span className="text-[#00BFFF]">Guia</span>
          </h2>
          <p className="text-gray-500 mt-3 max-w-xl mx-auto text-sm md:text-base">
            Três pilares fundamentais para transformar seu início na TI em uma jornada de sucesso
          </p>
        </div>

        {/* Grid dos Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          
          {/* Card 1: Labirinto */}
          <div className="bg-[#050b14]/60 border border-gray-900 rounded-2xl p-8 flex flex-col items-start hover:border-gray-800 transition-all duration-300">
            <div className="bg-cyan-950/40 p-3 rounded-xl border border-cyan-900/30 text-[#00BFFF] mb-6">
              <svg className="w-6 h-6" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" d="M9 20l-5.447-2.724A1 1 0 013 16.382V5.618a1 1 0 011.447-.894L9 7m0 13l6-3m-6 3V7m6 10l4.553 2.276A1 1 0 0021 18.382V7.618a1 1 0 00-.553-.894L15 4m0 13V4m0 0L9 7"></path>
              </svg>
            </div>
            <h3 className="text-white font-bold text-lg mb-3">Labirinto do Estudo Desfocado</h3>
            <p className="text-gray-400 text-sm leading-relaxed">
              Como escolher uma trilha única. Pare de se perder entre milhares de cursos e tutoriais. Descubra como definir um caminho claro e seguir até os resultados.
            </p>
          </div>

          {/* Card 2: Networking */}
          <div className="bg-[#050b14]/60 border border-gray-900 rounded-2xl p-8 flex flex-col items-start hover:border-gray-800 transition-all duration-300">
            <div className="bg-cyan-950/40 p-3 rounded-xl border border-cyan-900/30 text-[#00BFFF] mb-6">
              <svg className="w-6 h-6" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z"></path>
              </svg>
            </div>
            <h3 className="text-white font-bold text-lg mb-3">Networking Estratégico</h3>
            <p className="text-gray-400 text-sm leading-relaxed">
              Como construir pontes, não apenas código. Aprenda a criar conexões valiosas que abrem portas no mercado de trabalho e aceleram sua carreira.
            </p>
          </div>

          {/* Card 3: Posicionamento */}
          <div className="bg-[#050b14]/60 border border-gray-900 rounded-2xl p-8 flex flex-col items-start hover:border-gray-800 transition-all duration-300">
            <div className="bg-cyan-950/40 p-3 rounded-xl border border-cyan-900/30 text-[#00BFFF] mb-6">
              <svg className="w-6 h-6" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 002 2h2a2 2 0 002-2"></path>
              </svg>
            </div>
            <h3 className="text-white font-bold text-lg mb-3">Posicionamento de Mercado</h3>
            <p className="text-gray-400 text-sm leading-relaxed">
              Como estruturar um perfil de autoridade. Transforme sua presença online em um ímã de oportunidades e seja reconhecido como referência.
            </p>
          </div>

        </div>
      </div>
    </section>
  );
}
``
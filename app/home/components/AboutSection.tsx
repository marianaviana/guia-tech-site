import React from 'react';

export default function AboutSection() {
  return (
    <section className="w-full py-20 px-4 bg-black relative flex flex-col items-center text-center">
      <div className="flex items-center gap-2 mb-4 text-base md:text-lg font-bold text-white">
        <span className="text-[#00BFFF]">&lt;/&gt;</span> Sobre a <span className="text-[#00BFFF]">Base Tech</span>
      </div>
      
      <div className="bg-[#050b14] border border-gray-900 rounded-2xl p-8 max-w-3xl w-full">
        <p className="text-gray-300 text-base md:text-lg leading-relaxed">
          Simplificamos o seu início na TI. Transformamos a sobrecarga de informação em um <span className="text-[#00BFFF] font-semibold">caminho estratégico de carreira</span> para quem busca resultados reais.
        </p>
        
        {/* Checkmarks de Benefícios */}
        <div className="flex flex-wrap justify-center gap-6 mt-6 text-xs text-gray-400 font-medium">
          <span className="flex items-center gap-1.5">
            <span className="text-[#00BFFF]">✓✓</span> Conteúdo prático
          </span>
          <span className="flex items-center gap-1.5">
            <span className="text-[#00BFFF]">✓✓</span> Sem enrolação
          </span>
          <span className="flex items-center gap-1.5">
            <span className="text-[#00BFFF]">✓✓</span> Resultados rápidos
          </span>
        </div>
      </div>
    </section>
  );
}
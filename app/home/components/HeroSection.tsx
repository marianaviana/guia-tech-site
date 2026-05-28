'use client'

import AnimatedElement from './AnimatedElement'

export default function HeroSection() {

  const scrollToCTA = () => {
    const el = document.getElementById('cta-final')
    if (el) el.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <section className="relative min-h-screen flex items-center justify-center text-center bg-black px-6 overflow-hidden">

      {/* GLOW FUNDO */}
      <div className="absolute inset-0 bg-gradient-to-b from-cyan-500/10 to-transparent" />
      <div className="absolute w-[600px] h-[600px] bg-cyan-400/20 blur-[120px] rounded-full top-1/3 left-1/2 -translate-x-1/2" />

      <div className="relative z-10 max-w-4xl">

        <AnimatedElement>
          <h1 className="text-4xl md:text-6xl font-extrabold text-white leading-tight">
            Você não está perdido na TI.
            <br />
            <span className="text-cyan-400">
              Está apenas seguindo a estratégia errada.
            </span>
          </h1>
        </AnimatedElement>

        <AnimatedElement delay={300}>
          <p className="mt-6 text-white/70 text-lg">
             Descubra os erros que fazem iniciantes perderem anos 
             e veja o caminho claro para entrar no mercado mais rápido.

          </p>
        </AnimatedElement>

        <AnimatedElement delay={600}>
          <button
            onClick={() => window.open('https://pay.kiwify.com.br/4AlTZa1', '_blank')}
            className="mt-10 px-8 py-4 bg-cyan-400 text-black font-bold rounded-lg shadow-lg hover:scale-105 hover:shadow-cyan-400/50 transition-all duration-300"
          >
            Garantir meu Guia por apenas R$ 9,90
          </button>
        </AnimatedElement>

      </div>

    </section>
  )
}
``

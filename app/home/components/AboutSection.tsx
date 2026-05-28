import AnimatedElement from './AnimatedElement'

export default function AboutSection() {
  return (
    <section className="py-24 px-6 bg-black relative">

      <div className="absolute inset-0 bg-gradient-to-b from-black via-cyan-500/5 to-black" />

      <div className="relative z-10 max-w-4xl mx-auto text-center">

        <AnimatedElement>
          <h2 className="text-4xl font-bold text-white mb-8">
            Sobre a <span className="text-cyan-400">Base Tech</span>
          </h2>
        </AnimatedElement>

        <AnimatedElement delay={200}>
          <div className="bg-white/5 border border-cyan-400/20 rounded-xl p-8">
            <p className="text-white/80 text-lg">
              Simplificamos seu início na TI e criamos um caminho estratégico
              para quem busca resultados reais.
            </p>
          </div>
        </AnimatedElement>

      </div>

    </section>
  )
}
``
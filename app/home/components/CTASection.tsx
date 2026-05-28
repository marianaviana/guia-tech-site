import AnimatedElement from './AnimatedElement'

export default function CTASection() {
  return (
    <section id="cta-final" className="py-28 text-center bg-black">

      <AnimatedElement>
        <h2 className="text-4xl font-bold text-white">
          Comece sua jornada agora
        </h2>
      </AnimatedElement>

      <AnimatedElement delay={200}>
        <button className="mt-8 px-10 py-4 bg-cyan-400 text-black font-bold rounded-lg shadow-xl hover:scale-110 transition-all">
          Comprar por R$ 9,90
        </button>
      </AnimatedElement>

    </section>
  )
}
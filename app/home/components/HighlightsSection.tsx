import AnimatedElement from './AnimatedElement'

const items = [
  {
    title: 'Estudo Direcionado',
    desc: 'Pare de perder tempo e foque no que gera resultado.',
  },
  {
    title: 'Networking',
    desc: 'Conexões certas abrem portas.',
  },
  {
    title: 'Posicionamento',
    desc: 'Se torne referência no mercado.',
  },
]

export default function HighlightsSection() {
  return (
    <section className="py-24 px-6 bg-black">

      <div className="max-w-6xl mx-auto grid md:grid-cols-3 gap-6">

        {items.map((item, i) => (
          <AnimatedElement key={i} delay={i * 200}>
            <div className="bg-white/5 border border-cyan-400/20 p-8 rounded-xl hover:border-cyan-400 transition-all">
              <h3 className="text-white font-bold mb-3">
                {item.title}
              </h3>
              <p className="text-white/60">
                {item.desc}
              </p>
            </div>
          </AnimatedElement>
        ))}

      </div>

    </section>
  )
}
``
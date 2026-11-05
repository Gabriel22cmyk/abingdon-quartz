'use client'

export default function ProcessSection() {
  const steps = [
    {
      number: '1',
      title: 'On-Site Template Visit',
      description: 'Our expert team visits your home to take precise measurements and discuss your design preferences.',
      icon: '📏',
    },
    {
      number: '2',
      title: 'Design Selection',
      description: 'Browse our premium quartz collections and choose the perfect finish for your space.',
      icon: '✨',
    },
    {
      number: '3',
      title: 'Professional Fitting',
      description: 'Our skilled installers fit your new worktops with precision and care.',
      icon: '🔨',
    },
    {
      number: '4',
      title: 'Complete in 5 Days',
      description: 'From template visit to finished installation, we work efficiently to minimize disruption.',
      icon: '⚡',
    },
  ]

  return (
    <section id="process" className="py-20 bg-white relative">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-5xl font-bold text-light-brown mb-4">
            Our
            <span className="text-gold block">Process</span>
          </h2>
          <p className="text-lg text-gray-600">
            Simple, professional, and efficient from start to finish.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {steps.map((step, index) => (
            <div key={index} className="relative">
              {/* Connector line */}
              {index < steps.length - 1 && (
                <div className="hidden lg:block absolute top-24 left-[calc(100%+1rem)] w-8 h-1 bg-gradient-to-r from-gold to-transparent" />
              )}

              {/* Card */}
              <div className="bg-gradient-to-br from-cream to-white p-8 rounded-2xl shadow-md hover:shadow-xl transition-all duration-300 border border-gold/10 relative z-10">
                {/* Step Number */}
                <div className="w-16 h-16 bg-gradient-to-br from-gold to-light-brown rounded-full flex items-center justify-center mb-6 mx-auto">
                  <span className="text-2xl font-bold text-white">{step.number}</span>
                </div>

                {/* Icon */}
                <div className="text-5xl text-center mb-4">{step.icon}</div>

                {/* Title */}
                <h3 className="text-xl font-bold text-light-brown text-center mb-3">
                  {step.title}
                </h3>

                {/* Description */}
                <p className="text-gray-600 text-center text-sm">
                  {step.description}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* Timeline Mobile */}
        <div className="lg:hidden mt-12">
          <div className="space-y-4">
            {steps.map((step, index) => (
              <div key={index} className="flex gap-4">
                <div className="flex flex-col items-center">
                  <div className="w-12 h-12 bg-gold text-white rounded-full flex items-center justify-center font-bold">
                    {step.number}
                  </div>
                  {index < steps.length - 1 && <div className="w-1 h-12 bg-gold/30 mt-2" />}
                </div>
                <div className="pb-8">
                  <h4 className="font-bold text-light-brown">{step.title}</h4>
                  <p className="text-sm text-gray-600">{step.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

'use client'

export default function ProcessSection() {
  const steps = [
    {
      number: '1',
      title: 'On-Site Template Visit',
      description: 'Our expert team visits your home to take precise measurements and discuss your design preferences.',
    },
    {
      number: '2',
      title: 'Design Selection',
      description: 'Browse our premium quartz collections and choose the perfect finish for your space.',
    },
    {
      number: '3',
      title: 'Professional Fitting',
      description: 'Our skilled installers fit your new worktops with precision and care.',
    },
    {
      number: '4',
      title: 'Complete in 5 Days',
      description: 'From template visit to finished installation, we work efficiently to minimize disruption.',
    },
  ]

  return (
    <section id="process" className="py-20 bg-white relative">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-5xl font-bold text-gray-800 mb-4">
            Our
            <span className="text-gold block">Process</span>
          </h2>
          <p className="text-lg text-gray-600">
            Simple, professional, and efficient from start to finish.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {steps.map((step, index) => (
            <div key={index} className="flex flex-col">
              {/* Card - Fixed height */}
              <div className="bg-gradient-to-br from-white via-white to-gold/15 p-8 rounded-2xl shadow-md hover:shadow-xl transition-all duration-300 border border-gold/20 relative z-10 flex flex-col h-full">
                {/* Step Number */}
                <div className="w-16 h-16 bg-gold rounded-full flex items-center justify-center mb-6 mx-auto flex-shrink-0">
                  <span className="text-2xl font-bold text-white">{step.number}</span>
                </div>

                {/* Title */}
                <h3 className="text-lg font-bold text-gray-800 text-center mb-4 flex-grow-0">
                  {step.title}
                </h3>

                {/* Description */}
                <p className="text-gray-600 text-center text-sm flex-grow">
                  {step.description}
                </p>
              </div>
            </div>
          ))}
        </div>


      </div>
    </section>
  )
}

'use client'

import { useState } from 'react'
import Image from 'next/image'
import InquiryModal from '@/components/InquiryModal'
import ProcessSection from '@/components/ProcessSection'
import QuartzGrid from '@/components/QuartzGrid'
import Header from '@/components/Header'
import Footer from '@/components/Footer'

export default function Home() {
  const [selectedQuartz, setSelectedQuartz] = useState<any>(null)
  const [isModalOpen, setIsModalOpen] = useState(false)

  const handleQuartzSelect = (quartz: any) => {
    setSelectedQuartz(quartz)
    setIsModalOpen(true)
  }

  return (
    <main className="bg-cream relative z-10">
      <Header onInquire={() => setIsModalOpen(true)} />
      
      {/* Hero Section - with real installation photo */}
      <section className="relative min-h-screen flex items-center justify-center pt-20 pb-20 overflow-hidden">
        <div className="absolute inset-0 z-0">
          <Image
            src="/images/kitchen-white.jpg"
            alt="Beautiful white quartz worktop installation"
            fill
            className="object-cover"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-b from-white/80 via-white/60 to-white/80" />
        </div>
        <div className="max-w-4xl mx-auto px-6 text-center z-10">
          <h1 className="text-6xl md:text-7xl font-bold text-gray-800 mb-6">
            Exquisite Quartz
            <span className="text-gold block">Worktops</span>
          </h1>
          <p className="text-xl md:text-2xl text-gray-600 mb-4">
            Premium quality finishes. Expert installation.
          </p>
          <p className="text-lg text-gray-500 mb-8">
            On-site template visit • Professional fitting • 5-day turnaround
          </p>
          <button 
            onClick={() => document.getElementById('designs')?.scrollIntoView({ behavior: 'smooth' })}
            className="btn-gold"
          >
            View Our Designs
          </button>
        </div>
      </section>

      {/* Showcase - Real Installation */}
      <section className="py-16 bg-white">
        <div className="max-w-6xl mx-auto px-6">
          <div className="grid md:grid-cols-2 gap-8 items-center">
            <div className="relative h-80 md:h-96 rounded-2xl overflow-hidden shadow-lg">
              <Image
                src="/images/kitchen-luxury.jpg"
                alt="Luxury marble quartz worktop with dark island and gold hardware"
                fill
                className="object-cover"
              />
            </div>
            <div className="text-center md:text-left">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">
                Real Installations,
                <span className="text-gold block">Real Quality</span>
              </h2>
              <p className="text-gray-600 mb-6">
                Every worktop is precision-cut and expertly fitted by our team. From contemporary islands to classic L-shaped kitchens, we deliver a flawless finish every time.
              </p>
              <button
                onClick={() => setIsModalOpen(true)}
                className="btn-outline-gold"
              >
                Get a Free Quote
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Process Section */}
      <ProcessSection />

      {/* Quartz Designs Grid */}
      <section id="designs" className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-5xl font-bold text-gray-800 mb-4">
              Our Quartz
              <span className="text-gold block">Collections</span>
            </h2>
            <p className="text-lg text-gray-600">
              Handpicked designs from Fugue Stone. Premium quality, stunning finishes.
            </p>
          </div>
          <QuartzGrid onSelect={handleQuartzSelect} />
        </div>
      </section>

      {/* CTA Section - with real installation photo */}
      <section className="relative py-20 overflow-hidden">
        <div className="absolute inset-0 z-0">
          <Image
            src="/images/kitchen-green.jpg"
            alt="Sage green kitchen with veined quartz worktop"
            fill
            className="object-cover"
          />
          <div className="absolute inset-0 bg-white/85" />
        </div>
        <div className="max-w-4xl mx-auto px-6 text-center relative z-10">
          <h2 className="text-4xl font-bold text-gray-800 mb-6">
            Ready for Your New Worktops?
          </h2>
          <p className="text-lg text-gray-600 mb-8">
            Get started with a free on-site template visit.
          </p>
          <button 
            onClick={() => setIsModalOpen(true)}
            className="btn-gold"
          >
            Inquire Now
          </button>
        </div>
      </section>

      <Footer />

      {/* Inquiry Modal */}
      {isModalOpen && (
        <InquiryModal
          quartz={selectedQuartz}
          onClose={() => {
            setIsModalOpen(false)
            setSelectedQuartz(null)
          }}
        />
      )}
    </main>
  )
}

'use client'

import { useState, useEffect } from 'react'
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
    <main className="bg-cream">
      <Header />
      
      {/* Hero Section */}
      <section className="marble-bg min-h-screen flex items-center justify-center pt-20 pb-20 relative overflow-hidden">
        <div className="absolute inset-0 z-0" />
        <div className="max-w-4xl mx-auto px-6 text-center z-10">
          <h1 className="text-6xl md:text-7xl font-bold text-light-brown mb-6">
            Exquisite Quartz
            <span className="text-gold block">Worktops</span>
          </h1>
          <p className="text-xl md:text-2xl text-light-brown/80 mb-4">
            Premium quality finishes. Expert installation.
          </p>
          <p className="text-lg text-light-brown/70 mb-8">
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

      {/* Process Section */}
      <ProcessSection />

      {/* Quartz Designs Grid */}
      <section id="designs" className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-5xl font-bold text-light-brown mb-4">
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

      {/* CTA Section */}
      <section className="marble-bg py-20">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <h2 className="text-4xl font-bold text-light-brown mb-6">
            Ready for Your New Worktops?
          </h2>
          <p className="text-lg text-light-brown/80 mb-8">
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

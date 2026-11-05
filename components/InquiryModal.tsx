'use client'

import { useState } from 'react'
import { FormEvent } from 'react'

interface InquiryModalProps {
  quartz?: {
    name: string
    image: string
  } | null
  onClose: () => void
}

export default function InquiryModal({ quartz, onClose }: InquiryModalProps) {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    message: '',
  })
  const [submitted, setSubmitted] = useState(false)
  const [loading, setLoading] = useState(false)

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target
    setFormData(prev => ({
      ...prev,
      [name]: value,
    }))
  }

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    setLoading(true)

    try {
      // Send email via API route
      const response = await fetch('/api/inquiry', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          ...formData,
          quartzName: quartz?.name || 'General Inquiry',
        }),
      })

      if (response.ok) {
        setSubmitted(true)
        setTimeout(() => {
          onClose()
          setSubmitted(false)
          setFormData({ name: '', email: '', phone: '', message: '' })
        }, 3000)
      }
    } catch (error) {
      console.error('Error submitting form:', error)
    } finally {
      setLoading(false)
    }
  }

  return (
    <div className="fixed inset-0 modal-backdrop z-50 flex items-center justify-center p-4">
      <div className="bg-white rounded-2xl shadow-2xl max-w-2xl w-full max-h-[90vh] overflow-y-auto">
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-6 right-6 text-gray-400 hover:text-gray-600 text-2xl"
        >
          ×
        </button>

        {/* Content */}
        <div className="p-8 md:p-12">
          {submitted ? (
            // Success Message
            <div className="text-center py-12">
              <div className="text-6xl mb-4">✓</div>
              <h2 className="text-3xl font-bold text-gold mb-4">Thank You!</h2>
              <p className="text-gray-600 mb-2">
                Your inquiry has been sent successfully.
              </p>
              <p className="text-gray-600">
                We&apos;ll be in touch soon at {formData.email}
              </p>
              <p className="text-sm text-gray-500 mt-6">
                This window will close automatically...
              </p>
            </div>
          ) : (
            <>
              {/* Header */}
              <div className="mb-8">
                <h2 className="text-3xl font-bold text-light-brown mb-2">
                  Get Your Inquiry In
                </h2>
                <p className="text-gray-600">
                  Tell us about your project. We&apos;ll get back to you within 24 hours.
                </p>
              </div>

              {/* Selected Quartz */}
              {quartz && (
                <div className="bg-cream rounded-xl p-4 mb-8 border-l-4 border-gold">
                  <p className="text-sm text-gray-600 mb-2">Selected Design:</p>
                  <p className="text-lg font-bold text-light-brown">{quartz.name}</p>
                </div>
              )}

              {/* Form */}
              <form onSubmit={handleSubmit} className="space-y-6">
                {/* Name */}
                <div>
                  <label className="block text-sm font-semibold text-light-brown mb-2">
                    Full Name *
                  </label>
                  <input
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    placeholder="John Smith"
                    className="w-full px-4 py-3 border-2 border-gray-200 rounded-lg focus:border-gold focus:outline-none transition-colors"
                  />
                </div>

                {/* Email */}
                <div>
                  <label className="block text-sm font-semibold text-light-brown mb-2">
                    Email Address *
                  </label>
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    placeholder="john@example.com"
                    className="w-full px-4 py-3 border-2 border-gray-200 rounded-lg focus:border-gold focus:outline-none transition-colors"
                  />
                </div>

                {/* Phone */}
                <div>
                  <label className="block text-sm font-semibold text-light-brown mb-2">
                    Phone Number *
                  </label>
                  <input
                    type="tel"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    required
                    placeholder="07840 429841"
                    className="w-full px-4 py-3 border-2 border-gray-200 rounded-lg focus:border-gold focus:outline-none transition-colors"
                  />
                </div>

                {/* Message */}
                <div>
                  <label className="block text-sm font-semibold text-light-brown mb-2">
                    Project Details
                  </label>
                  <textarea
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    placeholder="Tell us about your kitchen, timeline, any questions..."
                    rows={4}
                    className="w-full px-4 py-3 border-2 border-gray-200 rounded-lg focus:border-gold focus:outline-none transition-colors resize-none"
                  />
                </div>

                {/* Contact Info */}
                <div className="bg-gray-50 rounded-xl p-4 text-sm text-gray-600">
                  <p className="font-semibold text-light-brown mb-2">Or call us directly:</p>
                  <a href="tel:07840429841" className="text-gold font-bold text-lg hover:underline">
                    07840 429841
                  </a>
                </div>

                {/* Submit Button */}
                <button
                  type="submit"
                  disabled={loading}
                  className="w-full btn-gold disabled:opacity-70 disabled:cursor-not-allowed"
                >
                  {loading ? 'Sending...' : 'Send Inquiry'}
                </button>
              </form>

              {/* Footer Text */}
              <p className="text-xs text-gray-500 text-center mt-6">
                We&apos;ll use your information to contact you about your inquiry. See our privacy policy for details.
              </p>
            </>
          )}
        </div>
      </div>
    </div>
  )
}

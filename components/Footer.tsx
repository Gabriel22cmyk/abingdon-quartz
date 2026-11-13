'use client'

import Image from 'next/image'

export default function Footer() {
  const currentYear = new Date().getFullYear()

  return (
    <footer id="contact" className="bg-gray-900 text-white py-12">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid md:grid-cols-3 gap-12 mb-12">
          {/* Company Info */}
          <div>
            <div className="mb-4">
              <Image
                src="/images/logo.png"
                alt="Abingdon on Thames Quartz Worktops"
                width={200}
                height={55}
                className="h-12 w-auto brightness-0 invert"
              />
            </div>
            <p className="text-gray-400 text-sm">
              Premium quartz worktops with expert installation and exceptional quality.
            </p>
          </div>

          {/* Contact */}
          <div>
            <h3 className="font-bold text-lg mb-4 text-gold">Contact</h3>
            <div className="space-y-3 text-sm">
              <p>
                <span className="text-gold font-semibold">Phone:</span>
                <br />
                <a href="tel:07877822519" className="hover:text-gold transition-colors">
                  07877 822519
                </a>
              </p>
              <p>
                <span className="text-gold font-semibold">Email:</span>
                <br />
                <a href="mailto:abingdon.quartzworktops@gmail.com" className="hover:text-gold transition-colors">
                  abingdon.quartzworktops@gmail.com
                </a>
              </p>
            </div>
          </div>

          {/* Services */}
          <div>
            <h3 className="font-bold text-lg mb-4 text-gold">Services</h3>
            <ul className="space-y-2 text-sm">
              <li className="flex gap-2">
                <span className="text-gold">✓</span> On-site Template Visit
              </li>
              <li className="flex gap-2">
                <span className="text-gold">✓</span> Professional Fitting
              </li>
              <li className="flex gap-2">
                <span className="text-gold">✓</span> 5-Day Turnaround
              </li>
              <li className="flex gap-2">
                <span className="text-gold">✓</span> Expert Consultation
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-700 pt-8 text-center text-sm text-gray-500">
          <p>&copy; {currentYear} Abingdon on Thames Quartz Worktops. All rights reserved.</p>
          <p className="text-xs mt-2">Premium designs supplied by Fugue Stone.</p>
        </div>
      </div>
    </footer>
  )
}

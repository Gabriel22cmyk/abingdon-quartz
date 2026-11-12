'use client'

import Image from 'next/image'

export default function Header({ onInquire }: { onInquire?: () => void }) {
  return (
    <header className="fixed top-0 left-0 right-0 bg-white/95 backdrop-blur-md shadow-sm z-50">
      <div className="max-w-7xl mx-auto px-6 py-3 flex justify-between items-center">
        <a href="#" className="flex-shrink-0">
          <Image
            src="/images/logo.png"
            alt="Abingdon on Thames Quartz Worktops"
            width={220}
            height={60}
            className="h-12 w-auto"
            priority
          />
        </a>
        
        <nav className="hidden md:flex gap-8">
          <a href="#designs" className="text-gray-700 hover:text-gold transition-colors">
            Collections
          </a>
          <a href="#process" className="text-gray-700 hover:text-gold transition-colors">
            Process
          </a>
          <a href="#contact" className="text-gray-700 hover:text-gold transition-colors">
            Contact
          </a>
        </nav>

        <div className="flex items-center gap-4">
          <a href="tel:07877822519" className="hidden sm:block text-gold font-semibold hover:underline">
            07877 822519
          </a>
          <button onClick={onInquire} className="btn-gold text-sm">
            Inquire
          </button>
        </div>
      </div>
    </header>
  )
}

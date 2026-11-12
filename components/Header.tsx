'use client'

export default function Header({ onInquire }: { onInquire?: () => void }) {
  return (
    <header className="fixed top-0 left-0 right-0 bg-white/95 backdrop-blur-md shadow-sm z-50">
      <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">
        <div className="flex items-center gap-2">
          <div className="w-10 h-10 bg-gold rounded-lg flex items-center justify-center">
            <span className="text-white font-bold text-lg">Q</span>
          </div>
          <div className="flex flex-col">
            <span className="font-bold text-gray-800 text-sm">Abingdon on Thames</span>
            <span className="text-xs text-gold font-semibold">Quartz Worktops</span>
          </div>
        </div>
        
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

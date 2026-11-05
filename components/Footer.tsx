'use client'

export default function Footer() {
  const currentYear = new Date().getFullYear()

  return (
    <footer id="contact" className="bg-light-brown text-cream py-12">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid md:grid-cols-3 gap-12 mb-12">
          {/* Company Info */}
          <div>
            <div className="flex items-center gap-2 mb-4">
              <div className="w-8 h-8 bg-gold rounded-lg flex items-center justify-center">
                <span className="text-light-brown font-bold text-sm">Q</span>
              </div>
              <span className="font-bold text-lg">Abingdon on Thames Quartz</span>
            </div>
            <p className="text-cream/80 text-sm">
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
                <a href="tel:07840429841" className="hover:text-gold transition-colors">
                  07840 429841
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

        <div className="border-t border-cream/20 pt-8 text-center text-sm text-cream/70">
          <p>&copy; {currentYear} Abingdon on Thames Quartz Worktops. All rights reserved.</p>
          <p className="text-xs mt-2">Premium designs supplied by Fugue Stone.</p>
        </div>
      </div>
    </footer>
  )
}

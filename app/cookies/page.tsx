'use client'

import Header from '@/components/Header'
import Footer from '@/components/Footer'

export default function CookiesPolicy() {
  return (
    <main className="bg-cream relative z-10">
      <Header />
      <div className="pt-28 pb-20 max-w-4xl mx-auto px-6">
        <h1 className="text-4xl font-bold text-gray-800 mb-2">Cookie Policy</h1>
        <p className="text-gray-500 mb-10">Last updated: November 2026</p>

        <div className="space-y-8 text-gray-700 leading-relaxed">
          <section>
            <h2 className="text-2xl font-bold text-gray-800 mb-3">What Are Cookies</h2>
            <p>
              Cookies are small text files that are stored on your computer or mobile device when you visit a website.
              They are widely used to make websites work more efficiently and to provide information to the website owners.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-gray-800 mb-3">How We Use Cookies</h2>
            <p className="mb-3">Abingdon on Thames Quartz Worktops uses cookies for the following purposes:</p>
            <ul className="list-disc pl-6 space-y-2">
              <li><strong>Essential cookies:</strong> These are necessary for the website to function properly. They enable basic features such as page navigation and access to secure areas of the website.</li>
              <li><strong>Analytics cookies:</strong> We may use analytics cookies to understand how visitors interact with our website. This helps us improve our website and your experience.</li>
              <li><strong>Preference cookies:</strong> These cookies remember your choices and preferences, such as whether you have accepted our cookie policy.</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-gray-800 mb-3">Cookies We Use</h2>
            <div className="overflow-x-auto">
              <table className="w-full border-collapse text-sm">
                <thead>
                  <tr className="border-b-2 border-gold/30">
                    <th className="text-left py-3 pr-4 font-bold text-gray-800">Cookie</th>
                    <th className="text-left py-3 pr-4 font-bold text-gray-800">Purpose</th>
                    <th className="text-left py-3 font-bold text-gray-800">Duration</th>
                  </tr>
                </thead>
                <tbody>
                  <tr className="border-b border-gray-200">
                    <td className="py-3 pr-4">cookie_consent</td>
                    <td className="py-3 pr-4">Remembers your cookie preference</td>
                    <td className="py-3">1 year</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-gray-800 mb-3">Third-Party Cookies</h2>
            <p>
              We may use third-party services such as Vercel Analytics that set their own cookies. We have no direct
              control over the cookies set by third parties. Please refer to the respective privacy policies of these
              providers for more information.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-gray-800 mb-3">Managing Cookies</h2>
            <p className="mb-3">
              You can control and manage cookies in your browser settings. Please note that removing or blocking cookies
              may impact your experience on our website.
            </p>
            <p>
              Most browsers allow you to refuse cookies or to alert you when cookies are being sent. Consult your
              browser&apos;s help section for instructions on changing your cookie settings.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-gray-800 mb-3">Contact Us</h2>
            <p>
              If you have any questions about our use of cookies, please contact us at{' '}
              <a href="mailto:abingdon.quartzworktops@gmail.com" className="text-gold hover:underline">
                abingdon.quartzworktops@gmail.com
              </a>{' '}
              or call us on{' '}
              <a href="tel:07877822519" className="text-gold hover:underline">
                07877 822519
              </a>.
            </p>
          </section>
        </div>
      </div>
      <Footer />
    </main>
  )
}

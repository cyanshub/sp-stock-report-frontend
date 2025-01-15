import Link from 'next/link'

type HeaderProps = {
  currentPage: 'home' | 'disclaimer'
}

export default function Header({ currentPage }: HeaderProps) {
  return (
    <header className="bg-gray-800 shadow-md">
      <nav className="container mx-auto px-6 py-4">
        <ul className="flex justify-between items-center">
          <li>
            <Link href="/" className="text-xl font-bold">
              Stock Analysis Site
            </Link>
          </li>
          <li>
            <ul className="flex space-x-4">
              {currentPage === 'home' ? (
                <>
                  <li>
                    <Link href="/about" className="hover:text-gray-300">
                      About
                    </Link>
                  </li>
                  <li>
                    <Link href="/services" className="hover:text-gray-300">
                      Services
                    </Link>
                  </li>
                  <li>
                    <Link href="/contact" className="hover:text-gray-300">
                      Contact
                    </Link>
                  </li>
                  <li>
                    <Link href="/disclaimer" className="hover:text-gray-300">
                      Disclaimer
                    </Link>
                  </li>
                </>
              ) : (
                <>
                  <li>
                    <Link href="/" className="hover:text-gray-300">
                      Home
                    </Link>
                  </li>
                  <li>
                    <Link href="/about" className="hover:text-gray-300">
                      About
                    </Link>
                  </li>
                  <li>
                    <Link href="/analysis" className="hover:text-gray-300">
                      Analysis
                    </Link>
                  </li>
                  <li>
                    <Link href="/disclaimer" className="hover:text-gray-300">
                      Disclaimer
                    </Link>
                  </li>
                </>
              )}
            </ul>
          </li>
        </ul>
      </nav>
    </header>
  )
}

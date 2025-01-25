'use client'

import Link from 'next/link'

type HeaderProps = {
  currentPage?: 'home' | 'disclaimer'
}

export default function Header({ currentPage }: HeaderProps) {
  return (
    <header className="bg-gray-800 shadow-md">
      <nav className="container mx-auto px-6 py-4">
        <ul className="flex justify-between items-center">
          <li>
            <Link href="/" className="text-xl font-bold">
              回到首頁
            </Link>
          </li>
          <li>
            <ul className="flex space-x-4">
              {currentPage === 'home' ? (
                <>
                  <li>
                    <Link href="/construction" className="hover:text-gray-300">
                      關於本站
                    </Link>
                  </li>
                  <li>
                    <Link href="/construction" className="hover:text-gray-300">
                      系統服務
                    </Link>
                  </li>
                  <li>
                    <Link href="/construction" className="hover:text-gray-300">
                      聯絡我們
                    </Link>
                  </li>
                  <li>
                    <Link href="/construction" className="hover:text-gray-300">
                      免責聲明
                    </Link>
                  </li>
                </>
              ) : (
                <>
                  <li>
                    <Link href="/" className="hover:text-gray-300">
                      回到首頁
                    </Link>
                  </li>
                  <li>
                    <Link href="/construction" className="hover:text-gray-300">
                      關於本站
                    </Link>
                  </li>
                  <li>
                    <Link href="/construction" className="hover:text-gray-300">
                      資訊分析
                    </Link>
                  </li>
                  <li>
                    <Link href="/construction" className="hover:text-gray-300">
                      免責聲明
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

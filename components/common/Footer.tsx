'use client'

import Link from 'next/link'

export default function Footer() {
  return (
    <footer className="bg-gray-800 text-center py-2 text-sm text-gray-400">
      <div className="container">
        <p>
          &copy; 2025 Stock Analysis Site. All rights reserved.{' '}
          <Link href="/disclaimer" className="underline hover:text-white">
            Disclaimer
          </Link>
        </p>
      </div>
    </footer>
  )
}

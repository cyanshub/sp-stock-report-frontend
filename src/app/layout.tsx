import localFont from 'next/font/local'
import './globals.css'
import Head from 'next/head'
import Link from 'next/link'
import 'bootstrap/dist/css/bootstrap.min.css'

const geistSans = localFont({
  src: './fonts/GeistVF.woff',
  variable: '--font-geist-sans',
  weight: '100 900'
})
const geistMono = localFont({
  src: './fonts/GeistMonoVF.woff',
  variable: '--font-geist-mono',
  weight: '100 900'
})

export default function RootLayout({
  children
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <Head>
        <title>股市訊號分析網</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <body className={`${geistSans.variable} ${geistMono.variable} antialiased`}>
        <main className="flex-grow">{children}</main>
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
      </body>
    </html>
  )
}

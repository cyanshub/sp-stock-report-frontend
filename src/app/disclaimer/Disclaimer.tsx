'use client'

import Link from 'next/link'
import Header from '@/src/components/Header'

export default function Disclaimer() {
  return (
    <div className="min-h-screen bg-gray-900 text-white">
      <Header currentPage="disclaimer" />

      <main className="container mx-auto px-6 py-16">
        <h1 className="text-4xl font-bold mb-8">免責聲明</h1>
        <div className="space-y-6 text-gray-300">
          <p>
            本網站所提供的資訊僅供一般資訊用途，不應視為財務建議或任何證券的買賣建議。
          </p>
          <p>
            投資股市存在風險，包括本金可能的損失。過去的表現並不保證未來的結果。本網站所提供的股市信號與分析基於歷史數據及各種算法，這些可能無法準確預測未來的市場走勢。
          </p>
          <p>使用本網站的用戶應知悉：</p>
          <ul className="list-disc list-inside pl-4 space-y-2">
            <li>股市本質上是無法預測且波動性高的。</li>
            <li>我們的分析與信號無法保證未來的表現。</li>
            <li>
              所有的投資決策應在諮詢合格的財務顧問並進行自行研究後做出。
            </li>
            <li>我們不對使用本網站所提供資訊而導致的任何損失負責。</li>
          </ul>
          <p>
            使用本網站即表示您已閱讀並理解本免責聲明，並同意自行承擔使用本資訊的風險。
          </p>
          <p>如果您不同意或無法接受本免責聲明，請勿使用本網站或其服務。</p>
        </div>
        <div className="mt-8">
          <Link href="/" className="btn btn-outline-secondary">
            返回首頁
          </Link>
        </div>
      </main>
    </div>
  )
}

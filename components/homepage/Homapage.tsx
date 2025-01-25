'use client'

import { useState } from 'react'
import Header from '@/components/common/Header'

export default function HomePage() {
  const [inputText, setInputText] = useState('')
  const [submittedText, setSubmittedText] = useState('')

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    setSubmittedText(inputText)
    setInputText('')
  }

  return (
    <div className="min-h-screen bg-gray-900 text-white">
      <Header currentPage="home" />
      <main>
        <section className="container py-16 text-left">
          <h1 className="title">股票資訊分析</h1>
          <ul className="list-disc list-inside pl-4 space-y-2">
            <li key="yahoo-data">我們幫你整理了 Yahoo Finance 提供的數據, 讓你可以輕鬆查看即時的交易資訊, 還有過去一年的財務數據</li>
            <li key="year-analyses">根據歷史收盤價, 我們計算了 10 日平均線、50 日平均線, 相對強弱指數 (RSI) 等指標, 更加清楚股價位於高檔還是低檔</li>
            <li key="report-download">如果有需要, 你也可以把這些整理好的報表直接下載回去，方便又實用！</li>
          </ul>
        </section>
        <section className="bg-gray-800 py-16">
          <div className="container">
            <h2 className="title text-center">
              <label htmlFor="stock-search" className="cursor-pointer">
                查看股票資料
              </label>
            </h2>
            <form onSubmit={handleSubmit} className="max-w-md mx-auto">
              <div className="relative">
                <input
                  id="stock-search"
                  type="text"
                  value={inputText}
                  onChange={(e) => setInputText(e.target.value)}
                  className="input pr-20 rounded-full"
                  placeholder="請輸入股票代號（例如：0050）"
                />
                <button type="submit" className="btn btn-primary absolute right-0 top-0 bottom-0 rounded-full">
                  分析
                </button>
              </div>
            </form>
            {submittedText && (
              <div className="card mt-8">
                <h3 className="subtitle">Submitted Stock Code:</h3>
                <p className="text-gray-300">{submittedText}</p>
              </div>
            )}
          </div>
        </section>
      </main>
    </div>
  )
}

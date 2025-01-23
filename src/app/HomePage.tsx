'use client'

import { useState } from 'react'
import Header from '@/src/components/Header'
import styled from 'styled-components'

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
          <Title>股票資訊分析</Title>
          <StyledList>
            <ListItem>我們幫你整理了 Yahoo Finance 提供的數據, 讓你可以輕鬆查看即時的交易資訊, 還有過去一年的財務數據</ListItem>
            <ListItem>
              根據歷史收盤價, 我們計算了 10 日平均線、50 日平均線, 相對強弱指數 (RSI) 等指標, 更加清楚股價位於高檔還是低檔
            </ListItem>
            <ListItem>如果有需要, 你也可以把這些整理好的報表直接下載回去，方便又實用！</ListItem>
          </StyledList>
        </section>

        <section className="bg-gray-800 py-16">
          <div className="container">
            <Subtitle>
              <label htmlFor="stock-search" className="cursor-pointer">
                查看股票資料
              </label>
            </Subtitle>
            <form onSubmit={handleSubmit} className="max-w-md mx-auto">
              <div className="relative">
                <input
                  id="stock-search"
                  type="text"
                  value={inputText}
                  onChange={(e) => setInputText(e.target.value)}
                  className="input pr-20 rounded-full"
                  placeholder="請輸入股票代號（例如：2330）"
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

const Title = styled.h1`
  font-size: 1.8rem;
  margin-bottom: 1.2rem;
`;

const Subtitle = styled.h2`
  font-size: 1.5rem;
  text-align: center;
  margin-bottom: 1.5rem;
`;

const StyledList = styled.ul`
  list-style: disc; /* 保留項目符號 */
  padding-left: 1.5rem; /* 增加左邊距與符號分開 */
  margin-top: 1rem;
  line-height: 1.5;
`

const ListItem = styled.li`
  margin-bottom: 0.75rem;
  font-size: 0.8rem;
`

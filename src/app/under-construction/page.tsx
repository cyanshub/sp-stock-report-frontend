"use client"

import Header from "@/src/components/Header"
import { OutlineButton } from "@/src/styles/commomStyles"
import styled from "styled-components"



const Container = styled.div`
  min-height: 100vh;
  background-color: #1a202c;
  color: #ffffff;
`

const Main = styled.main`
  max-width: 1200px;
  margin: 0 auto;
  padding: 4rem 1rem;
`

const Title = styled.h1`
  font-size: 2.5rem;
  font-weight: bold;
  margin-bottom: 2rem;
`

const Paragraph = styled.p`
  font-size: 1.25rem;
  margin-bottom: 2rem;
`

// Removed StyledLink component

export default function UnderConstruction() {
  return (
    <Container>
      <Header currentPage="under-construction" />
      <Main>
        <Title>🚧 開發中 🚧</Title>
        <Paragraph>很抱歉，這個頁面正在開發中。我們正在努力為您帶來更好的體驗。</Paragraph>
        <Paragraph>請稍後再回來查看，或者返回首頁瀏覽其他內容。</Paragraph>
        <OutlineButton href="/">返回首頁</OutlineButton>
      </Main>
    </Container>
  )
}


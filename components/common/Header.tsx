'use client'

import { useState, useEffect } from 'react'
import Link from 'next/link'
import styled from 'styled-components'

type HeaderProps = {
  currentPage?: 'home' | 'others'
}

const links = {
  home: [
    { label: '關於本站', href: '/construction' },
    { label: '本站服務', href: '/construction' },
    { label: '聯絡我們', href: '/construction' },
    { label: '免責聲明', href: '/disclaimer' },
  ],
  others: [
    { label: '平臺首頁', href: '/' },
    { label: '關於本站', href: '/construction' },
    { label: '資訊分析', href: '/construction' },
    { label: '免責聲明', href: '/disclaimer' },
  ],
}

export default function Header({ currentPage }: HeaderProps) {
  const [isBoxOpen, setIsBoxOpen] = useState(false)
  const [isMobile, setIsMobile] = useState(false)

  useEffect(() => {
    const mediaQuery = window.matchMedia('(max-width: 768px)')

    const handleMediaChange = () => {
      setIsMobile(mediaQuery.matches)
    }

    handleMediaChange()
    mediaQuery.addEventListener('change', handleMediaChange)

    return () => {
      mediaQuery.removeEventListener('change', handleMediaChange)
    }
  }, [])

  const toggleBox = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.stopPropagation()
    setIsBoxOpen(!isBoxOpen)
  }

  // 讓 Header 瞭解目前頁面是不是位於首頁
  const currentLinks = currentPage === 'home' ? links.home : links.others

  return (
    // 根據當前 isMobile 調整樣式
    <StyledHeader isMobile={isMobile}>
      <Nav>
        <NavLogo>
          <StyledLink href="/">平台首頁</StyledLink>
        </NavLogo>
        {isMobile ? (
          <>
            <HamburgerButton onClick={toggleBox}>
              <span></span>
              <span></span>
              <span></span>
            </HamburgerButton>
            {isBoxOpen && (
              <Box>
                {currentLinks.map((link) => (
                  <BoxItem key={link.href}>
                    <StyledLink href={link.href}>{link.label}</StyledLink>
                  </BoxItem>
                ))}
              </Box>
            )}
          </>
        ) : (
          <DesktopMenu>
            <NavList>
              {currentLinks.map((link) => (
                <NavItem key={link.href}>
                  <StyledLink href={link.href}>{link.label}</StyledLink>
                </NavItem>
              ))}
            </NavList>
          </DesktopMenu>
        )}
      </Nav>
    </StyledHeader>
  )
}

// .attrs() 是 styled-components 提供的用來設定靜態或動態屬性的工具
// attrs(() => ({})) 並未實際設定任何屬性，只是一個空物件
// TypeScript 的型別註解，表示 StyledHeader 元件會接受一個名為 isMobile 的屬性
// const StyledHeader = styled.header.attrs(() => ({}))<{ isMobile: boolean }>`
const StyledHeader = styled.header.attrs(() => ({}))<{ isMobile: boolean }>`
  font-size: 1rem;
  background-color: #2d3748;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  padding: ${({ isMobile }) => (isMobile ? '0.6rem 1rem' : '0.6rem 3rem')};
  position: relative;
`

const Nav = styled.nav`
  display: flex;
  justify-content: space-between;
  align-items: center;
`

const NavLogo = styled.li`
  list-style: none;
  margin: 0 2rem;
`

const HamburgerButton = styled.button`
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  width: 2rem;
  height: 2rem;
  background: transparent;
  border: none;
  cursor: pointer;

  span {
    width: 2rem;
    height: 0.25rem;
    background: #ffffff;
    border-radius: 10px;
    transition: all 0.3s linear;
  }
`

const Box = styled.div`
  position: absolute;
  top: 60px;
  right: 10px;
  background-color: #1f2937e6;
  border: 1px solid #e2e8f0;
  box-shadow: 0 4px 10px rgba(0, 0, 0, 0.2);
  border-radius: 8px;
  padding: 1rem;
  z-index: 1000;

  & > div:not(:last-child) {
    border-bottom: 1px solid #4a5568;
    margin-bottom: 0.5rem;
    padding-bottom: 0.5rem;
  }
`

const BoxItem = styled.div`
  margin-bottom: 1rem;

  &:last-child {
    margin-bottom: 0;
  }
`

const DesktopMenu = styled.div`
  display: flex;
`

const NavList = styled.ul`
  display: flex;
  gap: 1rem;
  list-style: none;
  padding: 0;
  margin: 0;
`

const NavItem = styled.li`
  list-style: none;
`

const StyledLink = styled(Link)`
  font-size: 1rem;
  font-weight: bold;
  text-decoration: none;
  color: #ffffff;

  &:hover {
    color: #cbd5e0;
  }
`

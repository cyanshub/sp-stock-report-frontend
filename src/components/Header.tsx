'use client';

import Link from 'next/link';
import styled from 'styled-components';


type HeaderProps = {
  currentPage: 'home' | 'disclaimer';
};

export default function Header({ currentPage }: HeaderProps) {
  return (
    <StyledHeader>
      <Nav>
        <NavList>
          <NavItem>
            <StyledLink href="/">平台首頁</StyledLink>
          </NavItem>
          <NavItem>
            <SubNavList>
              {currentPage === 'home' ? (
                <>
                  <SubNavItem>
                    <StyledLink href="/about">關於平台</StyledLink>
                  </SubNavItem>
                  <SubNavItem>
                    <StyledLink href="/services">本站服務</StyledLink>
                  </SubNavItem>
                  <SubNavItem>
                    <StyledLink href="/contact">聯絡我們</StyledLink>
                  </SubNavItem>
                  <SubNavItem>
                    <StyledLink href="/disclaimer">免責聲明</StyledLink>
                  </SubNavItem>
                </>
              ) : (
                <>
                  <SubNavItem>
                    <StyledLink href="/">平台首頁</StyledLink>
                  </SubNavItem>
                  <SubNavItem>
                    <StyledLink href="/about">關於平台</StyledLink>
                  </SubNavItem>
                  <SubNavItem>
                    <StyledLink href="/analysis">資訊分析</StyledLink>
                  </SubNavItem>
                  <SubNavItem>
                    <StyledLink href="/disclaimer">免責聲明</StyledLink>
                  </SubNavItem>
                </>
              )}
            </SubNavList>
          </NavItem>
        </NavList>
      </Nav>
    </StyledHeader>
  );
}

const StyledHeader = styled.header`
  font-size: 1rem;
  background-color: #2d3748; /* gray-800 */
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  padding: 0.6rem 0;
`;

const Nav = styled.nav`
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 3rem;
`;

const NavList = styled.ul`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin: 0;
  padding: 0;
`;

const NavItem = styled.li`
  list-style: none;
`;

const SubNavList = styled.ul`
  display: flex;
  gap: 0.75rem;
  margin: 0;
  padding: 0;
`;

const SubNavItem = styled.li`
  list-style: none;
`;

const StyledLink = styled(Link)`
  font-size: 1rem;
  font-weight: bold;
  text-decoration: none;
  color: #ffffff; /* white */

  &:hover {
    color: #cbd5e0; /* gray-300 */
  }
`;
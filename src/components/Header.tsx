import { useState, useEffect } from "react";
import Link from "next/link";
import styled from "styled-components";

type HeaderProps = {
  currentPage: "home" | "disclaimer" | "under-construction";
};

export default function Header({ currentPage }: HeaderProps) {
  const [isBoxOpen, setIsBoxOpen] = useState(false);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const mediaQuery = window.matchMedia("(max-width: 768px)");

    const handleMediaChange = () => {
      setIsMobile(mediaQuery.matches);
    };

    handleMediaChange(); // 初始化時判斷
    mediaQuery.addEventListener("change", handleMediaChange);

    return () => {
      mediaQuery.removeEventListener("change", handleMediaChange);
    };
  }, []);

  const toggleBox = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.stopPropagation();
    setIsBoxOpen(!isBoxOpen);
  };

  return (
    <StyledHeader>
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
                {currentPage === "home" ? (
                  <>
                    <BoxItem>
                      <StyledLink href="/under-construction">關於平台</StyledLink>
                    </BoxItem>
                    <BoxItem>
                      <StyledLink href="/under-construction">本站服務</StyledLink>
                    </BoxItem>
                    <BoxItem>
                      <StyledLink href="/under-construction">聯絡我們</StyledLink>
                    </BoxItem>
                    <BoxItem>
                      <StyledLink href="/disclaimer">免責聲明</StyledLink>
                    </BoxItem>
                  </>
                ) : (
                  <>
                    <BoxItem>
                      <StyledLink href="/">平台首頁</StyledLink>
                    </BoxItem>
                    <BoxItem>
                      <StyledLink href="/under-construction">關於平台</StyledLink>
                    </BoxItem>
                    <BoxItem>
                      <StyledLink href="/under-construction">資訊分析</StyledLink>
                    </BoxItem>
                    <BoxItem>
                      <StyledLink href="/disclaimer">免責聲明</StyledLink>
                    </BoxItem>
                  </>
                )}
              </Box>
            )}
          </>
        ) : (
          <DesktopMenu>
            <NavList>
              {currentPage === "home" ? (
                <>
                  <NavItem>
                    <StyledLink href="/under-construction">關於平台</StyledLink>
                  </NavItem>
                  <NavItem>
                    <StyledLink href="/under-construction">本站服務</StyledLink>
                  </NavItem>
                  <NavItem>
                    <StyledLink href="/under-construction">聯絡我們</StyledLink>
                  </NavItem>
                  <NavItem>
                    <StyledLink href="/disclaimer">免責聲明</StyledLink>
                  </NavItem>
                </>
              ) : (
                <>
                  <NavItem>
                    <StyledLink href="/">平台首頁</StyledLink>
                  </NavItem>
                  <NavItem>
                    <StyledLink href="/under-construction">關於平台</StyledLink>
                  </NavItem>
                  <NavItem>
                    <StyledLink href="/under-construction">資訊分析</StyledLink>
                  </NavItem>
                  <NavItem>
                    <StyledLink href="/disclaimer">免責聲明</StyledLink>
                  </NavItem>
                </>
              )}
            </NavList>
          </DesktopMenu>
        )}
      </Nav>
    </StyledHeader>
  );
}

const StyledHeader = styled.header`
  font-size: 1rem;
  background-color: #2d3748;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  padding: 0.6rem 1rem;
  position: relative;
`;

const Nav = styled.nav`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const NavLogo = styled.li`
  list-style: none;
  margin: 0 2rem;
`;

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
`;

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
`;

const BoxItem = styled.div`
  margin-bottom: 1rem;

  &:last-child {
    margin-bottom: 0;
  }
`;

const DesktopMenu = styled.div`
  display: flex;
`;

const NavList = styled.ul`
  display: flex;
  gap: 1rem;
  list-style: none;
  padding: 0;
  margin: 0;
`;

const NavItem = styled.li`
  list-style: none;
`;

const StyledLink = styled(Link)`
  font-size: 1rem;
  font-weight: bold;
  text-decoration: none;
  color: #ffffff;

  &:hover {
    color: #cbd5e0;
  }
`;

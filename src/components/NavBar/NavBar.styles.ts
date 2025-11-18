import { motion } from "framer-motion";
import styled from "styled-components";

export const NavContainer = styled.nav<{ scrolled: boolean }>`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  padding: 18px 40px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  z-index: 1000;
  transition: background-color 0.3s ease, backdrop-filter 0.3s ease;

  background-color: ${({ scrolled }) =>
    scrolled ? "rgba(10, 26, 47, 0.6)" : "transparent"};
  backdrop-filter: ${({ scrolled }) => (scrolled ? "blur(6px)" : "none")};
`;

export const Logo = styled(motion.img)`
  width: 50px;
  margin-bottom: 1rem;
  user-select: none;
`;

export const NavLinks = styled.ul<{ rtl: boolean }>`
  display: flex;
  flex-direction: ${({ rtl }) => (rtl ? "row-reverse" : "row")};
  gap: 24px;
`;

export const NavLink = styled.li`
  a {
    color: white;
    font-size: 20px;
    cursor: pointer;
    transition: 0.2s ease;

    &:hover {
      color: #4e5755ff;
      background-color: #14e3c4;
    }
  }
`;

export const MobileMenuIcon = styled.div`
  display: none;
  font-size: 1.8rem;
  color: white;
  cursor: pointer;

  @media (max-width: 768px) {
    display: block;
  }
`;

export const MobileMenu = styled.div<{ open: boolean; rtl?: boolean }>`
  position: fixed;
  top: 0;
  ${({ open, rtl }) =>
    rtl ? `left: ${open ? "0" : "-100%"};` : `right: ${open ? "0" : "-100%"};`}
  width: 60%;
  height: 100vh;
  background-color: #0a1a2f;
  padding: 70px 30px;
  transition: ${({ rtl }) => (rtl ? "left" : "right")} 0.3s ease;
  display: flex;
  flex-direction: column;
  gap: 25px;
  z-index: 999;

  a {
    color: white;
    font-size: 1.4rem;

    &:hover {
      color: #14e3c4;
    }
  }
`;

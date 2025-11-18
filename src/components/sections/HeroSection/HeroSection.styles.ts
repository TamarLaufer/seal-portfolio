import { motion } from "framer-motion";
import styled, { keyframes } from "styled-components";

export const floatBg = keyframes`
  0% { transform: translate(0, 0) scale(1); }
  100% { transform: translate(20px, 20px) scale(1.05); }
`;

export const HeroWrapper = styled.section`
  position: relative;
  width: 100%;
  min-height: 100vh;
  height: auto;
  overflow: visible;
  background: #0a1a2f;
  display: flex;
  justify-content: center;
  align-items: center;
  color: white;
`;

export const BackgroundLayer = styled.div`
  position: absolute;
  inset: 0;
  background: radial-gradient(circle at top left, #14e3c4 0%, transparent 60%),
    radial-gradient(circle at bottom right, #04384fff 0%, transparent 70%),
    linear-gradient(to bottom, #0a1a2f 0%, #ffffff 100%);
  opacity: 0.35;
`;
export const Content = styled(motion.div)`
  position: relative;
  z-index: 2;
  text-align: center;
`;

export const Title = styled.h1`
  font-size: 4rem;
  margin-bottom: 0.5rem;
  letter-spacing: 2px;
`;

export const Subtitle = styled.p`
  font-size: 1.4rem;
  opacity: 0.8;
  margin-bottom: 2rem;
`;

export const CTAButton = styled(motion.a)`
  padding: 12px 28px;
  background: #14e3c4;
  color: #0a1a2f;
  font-weight: bold;
  border-radius: 10px;
  text-decoration: none;
  font-size: 1.1rem;
  display: inline-block;
  cursor: pointer;

  &:hover {
    background: linear-gradient(135deg, #14e3c4 0%, #0ff2d2 45%, #33f7ff 100%);
    box-shadow: 0px 4px 18px rgba(20, 227, 196, 0.4);
  }
`;

export const Arrow = styled(motion.div)`
  position: absolute;
  bottom: 25px;
  left: 50%;
  transform: translateX(-50%);
  font-size: 3rem;
  opacity: 0.7;
`;

export const Logo = styled(motion.img)`
  width: 190px;
  margin-bottom: 1rem;
  user-select: none;
`;

import styled from "styled-components";
import { motion } from "framer-motion";

export const SectionWrapper = styled.section`
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
  background: #c4f0eaff;
  color: #0a1a2f;
  justify-content: center;
  height: 100vh;
`;

export const SectionTitle = styled(motion.h2)`
  font-size: 2.8rem;
  margin-bottom: 20px;
  color: #0a1a2f;
`;

export const SectionParagraph = styled(motion.p)`
  font-size: 1.3rem;
  max-width: 800px;
  line-height: 1.6;
  opacity: 0.85;
`;

export const PortfolioList = styled.ul`
  margin-top: 30px;
  padding: 0;
  list-style: none;
  max-width: 800px;
  text-align: left;

  li {
    font-size: 1.2rem;
    margin-bottom: 15px;
    padding-left: 25px;
    position: relative;

    &::before {
      content: "•";
      position: absolute;
      left: 0;
      color: #14e3c4;
      font-size: 1.5rem;
    }
  }
`;

import { motion } from "framer-motion";
import styled from "styled-components";

export const SectionWrapper = styled.section<{ rtl: boolean }>`
  display: flex;
  flex-direction: ${({ rtl }) => (rtl ? "row-reverse" : "row")};
  align-items: center;
  height: 100vh;
  justify-content: center;
  background: #04384fff;
  color: rgb(255, 255, 255);
  gap: 20px;
  direction: ${({ rtl }) => (rtl ? "rtl" : "ltr")};
`;

export const AboutHeadline = styled.h3<{ rtl: boolean }>`
  font-size: 2rem;
  margin-bottom: 20px;
  color: rgb(255, 255, 255);
  text-align: ${({ rtl }) => (rtl ? "right" : "left")};
  direction: ${({ rtl }) => (rtl ? "rtl" : "ltr")};
`;

export const Content = styled(motion.div)`
  display: flex;
  flex-direction: column;
`;

export const Img = styled.img`
  width: 350px;
  height: 350px;
  object-fit: contain;
`;

export const SectionTitle = styled(motion.h2)<{ rtl: boolean }>`
  font-size: 2.8rem;
  text-align: ${({ rtl }) => (rtl ? "right" : "left")};
  margin-bottom: 20px;
  color: rgb(255, 255, 255);
  direction: ${({ rtl }) => (rtl ? "rtl" : "ltr")};
`;

export const SectionParagraph = styled(motion.p)<{ rtl: boolean }>`
  font-size: 1.3rem;
  max-width: 800px;
  line-height: 1.6;
  opacity: 0.85;
  text-align: ${({ rtl }) => (rtl ? "right" : "left")};
  line-height: 1.5;
  white-space: pre-line;
  direction: ${({ rtl }) => (rtl ? "rtl" : "ltr")};
`;

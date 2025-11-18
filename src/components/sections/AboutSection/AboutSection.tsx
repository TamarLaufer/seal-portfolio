import { useTranslation } from "react-i18next";
import i18n from "../../../i18n/index.ts";
import {
  AboutHeadline,
  Content,
  Img,
  SectionParagraph,
  SectionTitle,
  SectionWrapper,
} from "./AboutSection.styles";
import aboutImage from "../../../assets/images/tamar.jfif";

const AboutSection = () => {
  const { t } = useTranslation();
  const isRTL = i18n.language === "he";

  return (
    <SectionWrapper id="about" rtl={isRTL}>
      <Content>
        <SectionTitle rtl={isRTL}>{t("about.title")}</SectionTitle>
        <AboutHeadline rtl={isRTL}>{t("about.headline")}</AboutHeadline>
        <SectionParagraph rtl={isRTL}>{t("about.paragraph1")}</SectionParagraph>
        <SectionParagraph rtl={isRTL}>{t("about.paragraph2")}</SectionParagraph>
        <SectionParagraph rtl={isRTL}>{t("about.paragraph3")}</SectionParagraph>
      </Content>
      <Img src={aboutImage} alt="About" />
    </SectionWrapper>
  );
};

export default AboutSection;

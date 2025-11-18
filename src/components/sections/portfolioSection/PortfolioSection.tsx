import { useTranslation } from "react-i18next";
import { SectionFadeIn } from "../../SectionFadeIn";
import {
  PortfolioList,
  SectionParagraph,
  SectionTitle,
  SectionWrapper,
} from "./PortfolioSection.styles";

export default function PortfolioSection() {
  const { t } = useTranslation();

  return (
    <SectionWrapper id="portfolio">
      <SectionFadeIn>
        <SectionTitle>{t("portfolio.title")}</SectionTitle>
        <SectionParagraph>{t("portfolio.subtitle")}</SectionParagraph>
      </SectionFadeIn>

      <SectionFadeIn>
        <PortfolioList>
          <li>{t("portfolio.point1")}</li>
          <li>{t("portfolio.point2")}</li>
          <li>{t("portfolio.point3")}</li>
          <li>{t("portfolio.point4")}</li>
        </PortfolioList>
      </SectionFadeIn>
    </SectionWrapper>
  );
}

import {
  Arrow,
  BackgroundLayer,
  Content,
  CTAButton,
  HeroWrapper,
  Subtitle,
  Logo,
  // Title,
} from "./HeroSection.styles";
import sealLogo from "../../../assets/images/SEAL_logo_white_croped.png";
import { useTranslation } from "react-i18next";

export default function HeroSection() {
  const { t } = useTranslation();

  const onLogoPress = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <HeroWrapper id="home">
      <BackgroundLayer />
      <Content
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
      >
        {/* <Title>SEAL Studio</Title> */}
        <Logo
          onClick={onLogoPress}
          src={sealLogo}
          alt="SEAL Studio Logo"
          initial={{ scale: 0.8, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 0.8 }}
        />

        <Subtitle>{t("hero.caption")}</Subtitle>
        <CTAButton whileHover={{ scale: 1.08 }} whileTap={{ scale: 0.95 }}>
          {t("hero.button")}
        </CTAButton>
      </Content>
      <Arrow
        animate={{ y: [0, 8, 0] }}
        transition={{ duration: 1.8, repeat: Infinity }}
      >
        ↓
      </Arrow>
    </HeroWrapper>
  );
}

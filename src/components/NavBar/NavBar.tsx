import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import {
  NavContainer,
  Logo,
  NavLinks,
  NavLink,
  MobileMenuIcon,
  MobileMenu,
} from "./NavBar.styles.ts";
import sealLogo from "../../assets/images/SEAL_logo_white_no_name.png";
import LangButton from "../langChanger/LangButton.tsx";
import { useTranslation } from "react-i18next";
import i18n from "../../i18n/index.ts";

type TextType = {
  name: string;
  linkScroll: string;
};

export default function NavBar() {
  const [scrolled, setScrolled] = useState(false);
  const [openMenu, setOpenMenu] = useState(false);
  const { t } = useTranslation();

  const currentLang = i18n.language;
  const isRTL = currentLang === "he";

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 10);
    };

    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const linkScroll = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
    setOpenMenu(false);
  };

  const sectionsText: TextType[] = [
    { name: t("navBar.about"), linkScroll: "about" },
    { name: t("navBar.portfolio"), linkScroll: "portfolio" },
    { name: t("navBar.services"), linkScroll: "services" },
    { name: t("navBar.contact"), linkScroll: "contact" },
  ];

  const renderLinks = sectionsText.map((text) => {
    return (
      <NavLink key={text.linkScroll}>
        <a onClick={() => linkScroll(text.linkScroll)}>{text.name}</a>
      </NavLink>
    );
  });

  const renderLinksMobile = sectionsText.map((text) => {
    return (
      <a key={text.linkScroll} onClick={() => linkScroll(text.linkScroll)}>
        {text.name}
      </a>
    );
  });

  const onLogoPress = () => {
    linkScroll("home");
  };

  const onMobileMenuClick = () => setOpenMenu(!openMenu);

  return (
    <>
      <NavContainer
        scrolled={scrolled}
        as={motion.nav}
        initial={{ y: -40, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.6 }}
      >
        <Logo
          onClick={onLogoPress}
          src={sealLogo}
          alt="SEAL Studio Logo"
          initial={{ scale: 0.8, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 0.8 }}
        />
        <NavLinks rtl={isRTL}>{renderLinks}</NavLinks>
        <LangButton />

        <MobileMenuIcon onClick={onMobileMenuClick}>☰</MobileMenuIcon>
      </NavContainer>

      <MobileMenu open={openMenu} rtl={isRTL}>
        {renderLinksMobile}
      </MobileMenu>
    </>
  );
}

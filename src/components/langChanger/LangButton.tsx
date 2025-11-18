import { useTranslation } from "react-i18next";
import { Lang } from "./LangButton.styles";

function LangButton() {
  const { i18n } = useTranslation();

  const toggleLanguage = () => {
    const newLang = i18n.language === "he" ? "en" : "he";
    i18n.changeLanguage(newLang);
  };

  return (
    <Lang onClick={toggleLanguage}>
      {i18n.language === "he" ? "EN" : "עִב"}
    </Lang>
  );
}

export default LangButton;

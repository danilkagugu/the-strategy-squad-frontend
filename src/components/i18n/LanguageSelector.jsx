import { useTranslation } from "react-i18next";
import css from "./LanguageSelector.module.css";
import { useState } from "react";

const LanguageSelector = () => {
  const { i18n } = useTranslation();
  const [activeLanguage, setActiveLanguage] = useState(i18n.language);

  const changeLanguage = (language, e) => {
    e.stopPropagation();
    i18n.changeLanguage(language);
    setActiveLanguage(language);
  };
  return (
    <div className={css.languageBox}>
      <div
        className={`${css.languageBtn} ${
          activeLanguage === "en" ? css.active : ""
        }`}
        onClick={(e) => changeLanguage("en", e)}
      >
        En
      </div>
      <div
        className={`${css.languageBtn} ${
          activeLanguage === "uk" ? css.active : ""
        }`}
        onClick={(e) => changeLanguage("uk", e)}
      >
        Ua
      </div>
    </div>
  );
};

export default LanguageSelector;

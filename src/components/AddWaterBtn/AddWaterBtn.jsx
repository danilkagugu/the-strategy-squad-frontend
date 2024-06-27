import { useTranslation } from "react-i18next";
import sprite from "../../assets/icons.svg";

export default function AddWaterBtn({
  buttonStyle,
  svgStyle,
  textStyle,
  iconName,
  hoverIconName,
  svg_plus_hover,
  openModal,
}) {
  const { t } = useTranslation();
  return (
    <>
      <button className={`${buttonStyle}`} onClick={openModal}>
        <svg className={`${svgStyle}`}>
          <use href={`${sprite}#${iconName}`}></use>
        </svg>
        {hoverIconName && (
          <svg className={`${svgStyle} ${svg_plus_hover}`}>
            <use href={`${sprite}#${hoverIconName}`}></use>
          </svg>
        )}
        <p className={`${textStyle}`}>{t("add_water")}</p>
      </button>
    </>
  );
}

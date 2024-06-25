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
        <p className={`${textStyle}`}>Add water</p>
      </button>
    </>
  );
}

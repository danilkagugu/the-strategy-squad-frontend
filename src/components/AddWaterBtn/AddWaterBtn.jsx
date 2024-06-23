import sprite from "../../assets/icons.svg";
export default function AddWaterBtn({
  buttonStyle,
  svgStyle,
  textStyle,
  iconName,
}) {
  return (
    <button className={buttonStyle}>
      <svg className={svgStyle}>
        <use href={`${sprite}#${iconName}`}></use>
      </svg>
      <p className={textStyle}>Add water</p>
    </button>
  );
}

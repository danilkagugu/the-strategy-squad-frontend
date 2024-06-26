import style from "./ChooseDate.module.css";
export default function ChooseDate({ choosenData }) {
  return <p className={style.text}>{choosenData}</p>;
}

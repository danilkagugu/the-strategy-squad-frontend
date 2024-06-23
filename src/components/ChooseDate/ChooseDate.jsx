import { useState } from "react";
import style from "./ChooseDate.module.css";
export default function ChooseDate() {
  const [date, setDate] = useState("Black Friday");
  return <p className={style.text}>{date}</p>;
}

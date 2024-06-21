import { useState } from "react";
import style from "./WaterProgressBar.module.css";

export default function WaterProgressBar() {
  const [progress, setProgress] = useState(87);
  return (
    <div className={style.main_box}>
      <p className={style.text}>Today</p>
      <div className={style.current_progress}>{progress}%</div>
      <div className={style.progress_container}>
        <div
          className={style.progress_bar}
          style={{ width: `${progress}%` }}
        ></div>
        <div className={style.scale}>
          <div className={style.scale_value}>0%</div>
          <div className={style.scale_value}>50%</div>
          <div className={style.scale_value}>100%</div>
        </div>
      </div>
    </div>
  );
}

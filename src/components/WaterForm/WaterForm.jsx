import { useForm } from "react-hook-form";
import { useState } from "react";
import clsx from "clsx";

import sprite from "../../assets/icons.svg";
import css from "./WaterForm.module.css";

const WaterForm = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const [counter, setCounter] = useState(50);

  const minusValue = () => {
    if (counter <= 0) {
      return;
    }
    setCounter((prev) => prev - 50);
  };

  const plusValue = () => {
    if (counter >= 5000) {
      return;
    }
    setCounter((prev) => prev + 50);
  };

  const onSubmit = (data) => console.log(data);

  return (
    <form className={css.form} onSubmit={handleSubmit(onSubmit)}>
      <p className={css.text}>Amount of water:</p>
      <div className={css.counterContainer}>
        <button className={css.btn} onClick={minusValue} type="button">
          <svg
            className={clsx("btnIcon", counter <= 0 ? css.disable : css.enable)}
            width="40"
            height="40"
          >
            <use href={`${sprite}#icon-minus`}></use>
          </svg>
        </button>
        <div className={css.valueContainer}>
          <span>{counter} ml</span>
        </div>
        <button className={css.btn} onClick={plusValue} type="button">
          <svg
            className={clsx(
              "btnIcon",
              counter >= 5000 ? css.disable : css.enable
            )}
            width="40"
            height="40"
          >
            <use href={`${sprite}#icon-plus`}></use>
          </svg>
        </button>
      </div>
      <label className={css.label}>
        <span className={css.text}>Recording time</span>:
        <input
          className={css.input}
          type="text"
          {...register("time", { required: true })}
        />
        {errors.time && <span>This field is required</span>}
      </label>
      <label>
        <span className={css.title}>Enter the value of the water used:</span>
        <input
          className={css.input}
          type="text"
          defaultValue="50"
          {...register("water")}
        />
      </label>
      <button className={css.saveBtn} type="submit">
        Save
      </button>
    </form>
  );
};

export default WaterForm;

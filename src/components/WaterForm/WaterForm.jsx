import { useForm } from "react-hook-form";
import { useState } from "react";
import clsx from "clsx";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import { currentTime } from "../../services/currentDay";

import sprite from "../../assets/icons.svg";
import css from "./WaterForm.module.css";
import { useTranslation } from "react-i18next";

// let data = new Date();
// let hours = String(data.getHours()).padStart(2, "0");
// let minutes = String(data.getMinutes()).padStart(2, "0");
// let currentTime = `${hours}:${minutes}`;

const schema = (t) =>
  yup
    .object({
      time: yup
        .string()
        .required(t("validation.time_format_2"))
        .matches(
          /^\d(0?[0-9]|1[0-9]|2[0-3]):[0-5][0-9]$/,
          t("validation.time_format")
        ),
      amount: yup
        .number()
        .positive()
        .integer()
        .required(t("validation.required_field")),
    })
    .required();

const WaterForm = ({
  onSubmitData,
  initialState = { amount: 50, time: currentTime() },
}) => {
  const { t } = useTranslation();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(schema(t)),
  });

  const { amount, time } = initialState;

  const [counter, setCounter] = useState(amount);
  const [inputTime, setInputTime] = useState(time);

  const minusValue = () => {
    if (counter <= 50) {
      return;
    }
    setCounter((prev) => prev - 50);
  };

  const plusValue = () => {
    if (counter >= 4951) {
      return;
    }
    setCounter((prev) => prev + 50);
  };

  const handleChangeAmount = (ev) => {
    const inputValue = Number(ev.target.value);
    if (inputValue < 0 || inputValue > 5000) {
      return;
    }
    setCounter(inputValue);
  };

  const handleChangeTime = (ev) => {
    setInputTime(ev.target.value);
  };

  // const onSubmit = (data) => console.log({ ...data, amount: counter });
  const onSubmit = (data) => onSubmitData(data, counter, inputTime);

  return (
    <form className={css.form} onSubmit={handleSubmit(onSubmit)}>
      <p className={css.text}>{t("amount_water")}:</p>
      <div className={css.counterContainer}>
        <button className={css.btn} onClick={minusValue} type="button">
          <svg
            className={clsx(
              "btnIcon",
              counter <= 50 ? css.disable : css.enable
            )}
            width="40"
            height="40"
          >
            <use href={`${sprite}#icon-minus`}></use>
          </svg>
        </button>
        <div className={css.valueContainer}>
          <span>
            {counter} {t("ml")}
          </span>
        </div>
        <button className={css.btn} onClick={plusValue} type="button">
          <svg
            className={clsx(
              "btnIcon",
              counter >= 4951 ? css.disable : css.enable
            )}
            width="40"
            height="40"
          >
            <use href={`${sprite}#icon-plus`}></use>
          </svg>
        </button>
      </div>
      <label className={css.label}>
        <span className={css.text}>{t("record_time")}</span>:
        <input
          className={css.input}
          name="time"
          type="text"
          defaultValue={inputTime}
          onInput={handleChangeTime}
          {...register("time", { required: true })}
        />
        {errors.time && (
          <span className={css.errorMessage}>{errors.time.message}</span>
        )}
      </label>
      <label>
        <span className={css.title}>{t("amount_water_used")}:</span>
        <input
          className={css.input}
          name="amount"
          type="number"
          value={counter}
          onInput={handleChangeAmount}
          {...register("amount", { required: true, min: 50, max: 5000 })}
        />
        {errors.amount && (
          <span className={css.errorMessage}>{errors.amount.message}</span>
        )}
      </label>
      <button className={css.saveBtn} type="submit">
        {t("save")}
      </button>
    </form>
  );
};

export default WaterForm;

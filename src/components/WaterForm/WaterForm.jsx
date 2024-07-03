import { useForm } from "react-hook-form";
import { useState } from "react";
import clsx from "clsx";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import { currentTime } from "../../services/currentDay";

import sprite from "../../assets/icons.svg";
import css from "./WaterForm.module.css";
import { convertTimeToAMPM } from "../../services/currentDay";
import { useTranslation } from "react-i18next";

const schema = yup
  .object({
    time: yup
      .string()
      .required("This field is required. Add time in hh:mm format.")
      .matches(
        /^(0?[1-9]|1[012])(:[0-5]\d) [AP][M]$/,
        "Add time in hh:mm AM/PM format."
      ),
    amount: yup
      .number()
      .positive()
      .integer()
      .required("This field is required"),
  })
  .required();

const WaterForm = ({
  onSubmitData,
  initialState = { amount: 50, time: convertTimeToAMPM(currentTime()) },
}) => {
  const { t } = useTranslation();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(schema),
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
          className={errors.time ? css.errorInput : css.input}
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
          className={errors.amount ? css.errorInput : css.input}
          name="amount"
          type="number"
          value={counter}
          onInput={handleChangeAmount}
          {...register("amount", { required: true, min: 50, max: 5000 })}
        />
        {errors.amount && (
          <span className={css.errorMessage}>{t("positive_number")}.</span>
        )}
      </label>
      <button className={css.saveBtn} type="submit">
        {t("save")}
      </button>
    </form>
  );
};

export default WaterForm;

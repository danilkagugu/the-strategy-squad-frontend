import { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import { useDispatch, useSelector } from "react-redux";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import { selectUserData } from "../../redux/auth/selectors";
import { apiUpdateUser, getUserInfo } from "../../redux/auth/operations";
import { getWaterNorm } from "../../helpers/getWaterNorm";
import css from "./UserSettingsForm.module.css";
import sprite from "../../assets/icons.svg";
import { useTranslation } from "react-i18next";

const schema = yup.object().shape({
  avatar: yup.mixed(),

  gender: yup
    .string()
    .nullable()
    .oneOf(["Woman", "Man"], "Please select your gender"),

  name: yup
    .string()
    .min(2, "Name must be greater than or equal to 2 characters long")
    .max(40, "Name must be less than or equal to 40 characters long"),

  email: yup.string().email("Please enter a valid email address"),

  weight: yup
    .number()
    .nullable()
    .min(40, "Weight must be greater than or equal to 40")
    .max(120, "Weight must be less than or equal to 120")
    .transform((value, originalValue) => {
      if (originalValue === "") return null;
      return value;
    }),

  timeActive: yup
    .number()
    .nullable()
    .min(0)
    .max(12, "Time must be less than or equal to 12")
    .transform((value, originalValue) => {
      if (originalValue === "") return null;
      return value;
    }),

  waterNorm: yup
    .string()
    .nullable()
    .transform((value, originalValue) => {
      if (originalValue === "") return null;
      return value;
    })
    .test("is-decimal", "Please enter a valid number", (value) => {
      if (value === undefined || value === null || value === "") return true;
      return !isNaN(parseFloat(value)) && isFinite(value);
    })
    .test(
      "min-value",
      "Value must be greater than or equal to 0.05",
      (value) => {
        if (value === undefined || value === null || value === "") return true;
        return parseFloat(value) >= 0.1;
      }
    )
    .test("max-value", "Value must be less than or equal to 5", (value) => {
      if (value === undefined || value === null || value === "") return true;
      return parseFloat(value) <= 5;
    }),
});

const UserSettingsForm = ({ onClose }) => {
  const { t } = useTranslation();
  const user = useSelector(selectUserData);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getUserInfo()), [dispatch];
  });

  const [avatarUrl, setAvatarUrl] = useState(null);

  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(schema),
    defaultValues: {
      gender: user.gender,
      name: user.name,
      email: user.email,
      weight: user.weight,
      timeActive: user.timeActive,
      waterNorm: user.waterNorm / 1000,
    },
  });

  const onSubmit = async (data) => {
    if (Object.keys(errors).length > 0) {
      return;
    }

    data.waterNorm = data.waterNorm * 1000;
    const formData = new FormData();

    Object.entries(data).forEach(([key, value]) => {
      if (key === "avatar") {
        if (value[0] !== undefined) {
          formData.append(key, value[0]);
        }
        return;
      }

      if (value === "" || value === undefined || value === null) {
        return;
      }

      formData.append(key, value);
    });

    const response = await dispatch(apiUpdateUser(formData));
    response.meta.requestStatus === "fulfilled" && onClose();
  };

  const { avatar, gender, name, email, weight, timeActive, waterNorm } =
    watch();

  const isAnyFieldFilled =
    avatar || gender || name || email || weight || timeActive || waterNorm;

  const handleAvatarUpload = (event) => {
    const file = event.target.files[0];

    if (file) {
      const url = URL.createObjectURL(file);
      setAvatarUrl(url);
    }
  };

  const recommendedWaterNorm = getWaterNorm(gender, weight, timeActive);

  return (
    <form className={css.form} onSubmit={handleSubmit(onSubmit)}>
      <div className={css.avatarContainer}>
        {avatarUrl ? (
          <img src={avatarUrl} alt="Avatar" className={css.avatar} />
        ) : (
          <img src="placeholder.jpg" alt="Avatar" className={css.avatar} />
        )}
        <label className={css.avatarUpload}>
          <svg className={css.uploadIcon}>
            <use href={`${sprite}#icon-upload-avatar`}></use>
          </svg>
          {t("add_photo")}
          <input
            type="file"
            accept="image/*"
            onChange={handleAvatarUpload}
            className={css.avatarInput}
          />
        </label>
      </div>

      <div className={css.settingsContainer}>
        <div>
          <label className={css.optionTitle}>{t("gender_choose")}</label>
          <div className={css.genderOptions}>
            <label className={css.radioBox}>
              <input
                className={css.radio}
                type="radio"
                name="gender"
                value="woman"
                {...register("gender", { required: true })}
              />
              {t("woman")}
            </label>
            <label className={css.radioBox}>
              <input
                className={css.radio}
                type="radio"
                name="gender"
                value="man"
                {...register("gender", { required: true })}
              />
              {t("man")}
            </label>
            {errors.gender && (
              <span className={css.error}>{t("required_field")}</span>
            )}
          </div>
        </div>

        <div className={css.userInfo}>
          <div className={css.formGroup}>
            <div className={css.fieldsGroup}>
              <div className={css.inputGroup}>
                <label className={css.optionTitle}>{t("your_name")}</label>
                <input
                  className={css.textInput}
                  type="text"
                  {...register("name", { required: true })}
                />
                {errors.name && (
                  <span className={css.error}>{t("required_field")}</span>
                )}
              </div>

              <div className={css.inputGroup}>
                <label className={css.optionTitle}>{t("email")}</label>
                <input
                  className={css.textInput}
                  type="email"
                  {...register("email", { required: true })}
                />
                {errors.email && (
                  <span className={css.error}>{t("required_field")}</span>
                )}
              </div>
            </div>
            <div className={css.fieldsGroup}>
              <label className={css.optionTitle}> {t("daily_norm")} </label>
              <ul className={css.formulaGroup}>
                <li className={css.formulaContainer}>
                  <p>{t("for_woman")}:</p>
                  <p className={css.formula}>V=(M*0,03) + (T*0,4)</p>
                </li>
                <li className={css.formulaContainer}>
                  <p>{t("for_man")}:</p>
                  <p className={css.formula}>V=(M*0,04) + (T*0,6)</p>
                </li>
              </ul>
              <div className={css.normaInfo}>
                <p className={css.normaInfoText}>
                  <span className={css.formula}>*</span>
                  {t("formula_text")}
                </p>
              </div>
              <p>
                <span className={css.formula}>!</span>
                {t("active_time")}
              </p>
            </div>
          </div>

          <div className={css.formGroup}>
            <div className={css.fieldsGroup}>
              <div className={css.inputGroup}>
                <label>{t("weight_in_kilograms")}</label>
                <input
                  className={css.textInput}
                  type="text"
                  {...register("weight", { required: true })}
                />
                {errors.weight && (
                  <span className={css.error}>{t("required_field")}</span>
                )}
              </div>
              <div className={css.inputGroup}>
                <label>{t("time_of_participation")}</label>
                <input
                  className={css.textInput}
                  type="text"
                  {...register("timeActive", { required: true })}
                />
                {errors.timeActive && (
                  <span className={css.error}>{t("required_field")}</span>
                )}
              </div>
            </div>
            <div className={css.fieldsGroup}>
              <div className={css.requiredWaterGroup}>
                <label>{t("required_amount")}</label>
                <p className={css.formula}> `${recommendedWaterNorm}` L</p>
              </div>

              <div className={css.inputGroup}>
                <label className={css.optionTitle}>{t("water_much")}</label>
                <input
                  className={css.textInput}
                  type="text"
                  {...register("waterNorm", { required: true })}
                />
                {errors.waterNorm && (
                  <span className={css.error}>{t("required_field")}</span>
                )}
              </div>
            </div>
          </div>
        </div>

        <button
          className={css.button}
          type="submit"
          disabled={!isAnyFieldFilled}
        >
          {t("save")}
        </button>
      </div>
    </form>
  );
};

export default UserSettingsForm;

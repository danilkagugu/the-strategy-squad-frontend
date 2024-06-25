import { useState } from "react";
import css from "./UserSettingsForm.module.css";
import sprite from "../../assets/icons.svg";

const UserSettingsForm = () => {
  const [avatarUrl, setAvatarUrl] = useState(null);

  const handleAvatarUpload = (event) => {
    const file = event.target.files[0];
    if (file) {
      const url = URL.createObjectURL(file);
      setAvatarUrl(url);
    }
  };

  return (
    // <div className={css.formContainer}>
    <form className={css.form}>
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
          Upload a photo
          <input
            type="file"
            accept="avatar/*"
            onChange={handleAvatarUpload}
            className={css.avatarInput}
          />
        </label>
      </div>

      <div className={css.settingsContainer}>
        <div>
          <label className={css.optionTitle}>Your gender identity</label>
          <div className={css.genderOptions}>
            <label className={css.radioBox}>
              <input className={css.radio} type="radio" value="woman" />
              Woman
            </label>
            <label className={css.radioBox}>
              <input className={css.radio} type="radio" value="man" />
              Man
            </label>
          </div>
        </div>

        <div className={css.userInfo}>
          <div className={css.formGroup}>
            <div className={css.fieldsGroup}>
              <div className={css.inputGroup}>
                <label className={css.optionTitle}>Your name</label>
                <input className={css.textInput} type="text" />
              </div>

              <div className={css.inputGroup}>
                <label className={css.optionTitle}>Email</label>
                <input className={css.textInput} type="email" />
              </div>
            </div>
            <div className={css.fieldsGroup}>
              <label className={css.optionTitle}>My daily norma</label>
              <ul className={css.formulaGroup}>
                <li className={css.formulaContainer}>
                  <p>For woman:</p>
                  <p className={css.formula}>V=(M*0,03) + (T*0,4)</p>
                </li>
                <li className={css.formulaContainer}>
                  <p>For man:</p>
                  <p className={css.formula}>V=(M*0,04) + (T*0,6)</p>
                </li>
              </ul>
              <div className={css.normaInfo}>
                <p className={css.normaInfoText}>
                  <span className={css.formula}>*</span> V is the volume of the
                  water norm in liters per day, M is your body weight, T is the
                  time of active sports, or another type of activity
                  commensurate in terms of loads (in the absence of these, you
                  must set 0)
                </p>
              </div>
              <p>
                {" "}
                <span className={css.formula}>!</span> Active time in hours
              </p>
            </div>
          </div>

          <div className={css.formGroup}>
            <div className={css.fieldsGroup}>
              <div className={css.inputGroup}>
                <label>Your weight in kilograms:</label>
                <input className={css.textInput} type="text" />
              </div>
              <div className={css.inputGroup}>
                <label>The time of active participation in sports:</label>
                <input className={css.textInput} type="text" />
              </div>
            </div>
            <div className={css.fieldsGroup}>
              <div className={css.requiredWaterGroup}>
                <label>The required amount of water in liters per day:</label>
                <p className={css.formula}>1.8 L</p>
              </div>

              <div className={css.inputGroup}>
                <label className={css.optionTitle}>
                  Write down how much water you will drink:
                </label>
                <input className={css.textInput} type="text" />
              </div>
            </div>
          </div>
        </div>

        <button className={css.button} type="submit">
          Save
        </button>
      </div>
    </form>
    // </div>
  );
};

export default UserSettingsForm;

import { useForm } from "react-hook-form";

import css from "./WaterForm.module.css";

const WaterForm = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => console.log(data);

  // console.log(register);

  return (
    <form className={css.form} onSubmit={handleSubmit(onSubmit)}>
      <h2 className={css.mainTitle}>Add water</h2>
      <h3 className={css.title}>Choose a value</h3>
      <p className={css.text}>Amount of water:</p>
      <div className={css.counterContainer}>
        <button className={css.btn} type="button">
          +
        </button>
        <div className={css.valueContainer}>
          <span>50 ml</span>
        </div>
        <button className={css.btn} type="button">
          -
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

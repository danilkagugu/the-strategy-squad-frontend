import { useForm } from "react-hook-form";

// import css from './WaterForm.module.css'

const WaterForm = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => console.log(data);

  // console.log(register);

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <h2>Add water</h2>
      <h3>Choose a value</h3>
      <p>Amount of water:</p>
      <div>
        <button type="button">+</button>
        <div>
          <span>50 ml</span>
        </div>
        <button type="button">-</button>
      </div>
      <label>
        Recording time:
        <input type="text" {...register("time", { required: true })} />
        {errors.time && <span>This field is required</span>}
      </label>
      <label>
        <span>Enter the value of the water used:</span>
        <input type="text" defaultValue="50" {...register("water")} />
      </label>
      <button type="submit">Save</button>
    </form>
  );
};

export default WaterForm;

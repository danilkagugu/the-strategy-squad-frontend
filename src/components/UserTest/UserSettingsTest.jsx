import { useDispatch } from "react-redux";
import { apiUpdateUser } from "../../redux/auth/operations";

const UserSettingsTest = () => {
  const objectFromForm = {
    name: "Patrick",
    weight: 120,
    waterNorm: 4000,
    gender: "Man",
  };
  const dispatch = useDispatch();
  return (
    <div>
      <button onClick={() => dispatch(apiUpdateUser(objectFromForm))}>
        Update
      </button>
    </div>
  );
};

export default UserSettingsTest;

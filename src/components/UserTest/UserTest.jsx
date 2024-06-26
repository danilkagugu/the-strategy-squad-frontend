import { useDispatch, useSelector } from "react-redux";
import { selectUserData } from "../../redux/auth/selectors";
import { getUserInfo } from "../../redux/auth/operations";
import { useEffect } from "react";
import UserSettingsTest from "./UserSettingsTest";

const UserTest = () => {
  const user = useSelector(selectUserData);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getUserInfo()), [dispatch];
  });
  return (
    <div>
      <p>
        name - <strong>{user.name}</strong> <br />
        waterNorm - <strong>{user.waterNorm}</strong> <br />
        weight - <strong>{user.weight}</strong> <br />
        timeActive - <strong>{user.timeActive}</strong> <br />
        avatarURL - <strong>{user.avatarURL}</strong> <br />
        gender - <strong>{user.gender}</strong>
      </p>

      <UserSettingsTest />
    </div>
  );
};

export default UserTest;

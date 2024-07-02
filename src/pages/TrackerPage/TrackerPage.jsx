import { useDispatch, useSelector } from "react-redux";
import WaterDetailedInfo from "../../components/WaterDetailedInfo/WaterDetailedInfo";
import WaterMainInfo from "../../components/WaterMainInfo/WaterMainInfo";
import { useEffect, useState } from "react";
import { getUserInfo } from "../../redux/auth/operations";
import { getWaterPerDay } from "../../redux/water/operations";
import DocumentTitle from "../../components/DocumentTitle/DocumentTitle";
import { currentDay } from "../../services/currentDay";
import { selectError } from "../../redux/water/selectors";

const TrackerPage = () => {
  const error = useSelector(selectError);

  const [selectDay, setSelectDay] = useState(currentDay());
  const onSelectDay = (day) => {
    setSelectDay(day);
  };

  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getUserInfo());
    dispatch(getWaterPerDay());
  }, [dispatch]);

  return (
    <>
      {error && (
        <b>
          There is a problem with the connection to the server, please try again
          later
        </b>
      )}
      <DocumentTitle>Tracker</DocumentTitle>
      <WaterMainInfo setSelectDay={onSelectDay} />
      <WaterDetailedInfo selectDay={selectDay} setSelectDay={onSelectDay} />
    </>
  );
};

export default TrackerPage;

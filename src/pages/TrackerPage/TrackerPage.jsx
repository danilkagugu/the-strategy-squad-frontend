import { useDispatch } from "react-redux";
import WaterDetailedInfo from "../../components/WaterDetailedInfo/WaterDetailedInfo";
import WaterMainInfo from "../../components/WaterMainInfo/WaterMainInfo";
import { useEffect, useState } from "react";
import { getUserInfo } from "../../redux/auth/operations";
import { getWaterPerDay } from "../../redux/water/operations";
import DocumentTitle from "../../components/DocumentTitle/DocumentTitle";
import { currentDay } from "../../services/currentDay";

const TrackerPage = () => {
  const [selectDay, setSelectDay] = useState(currentDay());
  const onSelectDay = (day) => {
    setSelectDay(day);
  };
  const dispatch = useDispatch();
  useEffect(() => {
    // eslint-disable-next-line no-debugger

    dispatch(getUserInfo());
    dispatch(getWaterPerDay());
  }, [dispatch]);

  return (
    <>
      <DocumentTitle>Tracker</DocumentTitle>
      <WaterMainInfo setSelectDay={onSelectDay} />
      <WaterDetailedInfo selectDay={selectDay} setSelectDay={onSelectDay} />
    </>
  );
};

export default TrackerPage;

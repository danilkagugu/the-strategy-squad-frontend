import WaterItem from "../WaterItem/WaterItem";

import { useDispatch, useSelector } from "react-redux";
import { selectWaterPerDay } from "../../redux/water/selectors";
import { useEffect } from "react";
import { getWaterPerDay } from "../../redux/water/operations";

export default function WaterList() {
  const dispatch = useDispatch();
  const data = useSelector(selectWaterPerDay);
  useEffect(() => {
    dispatch(getWaterPerDay("18"));
  }, [dispatch]);
  console.log(data);
  return <WaterItem />;
}

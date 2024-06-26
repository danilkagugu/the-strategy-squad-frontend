import axios from "axios";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { selectWaterPerDay } from "../../redux/water/selectors";
import { getWaterPerDay } from "../../redux/water/operations";

const CalendarAxios = () => {
  const [waterOfDay, setWaterOfDay] = useState(null);
  const userWaterOfDay = useSelector(selectWaterPerDay);
  const dispatch = useDispatch();
  const { data } = userWaterOfDay;
  console.log(data);
  const token =
    "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjY2NzllYWFhYTFhMGE3MDc5ZjIzM2FjNyIsImlhdCI6MTcxOTI2OTE3MiwiZXhwIjoxNzE5MzUxOTcyfQ.KhMJ1UBAwIvJOR3rl__7MvXb7FyQA7RCZnjS3SsTkSU";
  console.log(waterOfDay);
  useEffect(() => {
    const query = "2024-06-25";
    dispatch(getWaterPerDay(query));
    const userWaterOfDay = async () => {
      try {
        const response = await axios.get(
          "http://localhost:3030/api/water/day",
          {
            headers: {
              Authorization: `Bearer ${token}`,
            },
          }
        );

        const data = response.data;
        setWaterOfDay(data);
      } catch (error) {
        console.log(error);
      }
    };
    userWaterOfDay();
  }, [dispatch]);
  return <div>CalendarAxios</div>;
};

export default CalendarAxios;

import { useSelector } from "react-redux";
import {
  selectWaterPerDay,
  selectWaterPerMonth,
  selectError,
  selectIsLoading,
} from "../redux/water/selectors";

export const useWater = () => {
  const error = useSelector(selectError);
  const isLoading = useSelector(selectIsLoading);
  const waterPerDay = useSelector(selectWaterPerDay);
  const waterPerMonth = useSelector(selectWaterPerMonth);

  return {
    error,
    isLoading,
    waterPerDay,
    waterPerMonth,
  };
};
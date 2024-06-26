import { useDispatch, useSelector } from "react-redux";
import {
  selectWaterPerDay,
  selectWaterPerMonth,
} from "../../redux/water/selectors";
import { useEffect } from "react";
import {
  addWaterRecord,
  deleteWaterRecord,
  editWaterRecord,
  getWaterPerDay,
  getWaterPerMonth,
} from "../../redux/water/operations";
import { selectIsLoggedIn, selectIsRefresh } from "../../redux/auth/selectors";

const WaterRequestTest = () => {
  const dispatch = useDispatch();

  const waterPerDay = useSelector(selectWaterPerDay);
  const waterPerMonth = useSelector(selectWaterPerMonth);

  const isLoggedIn = useSelector(selectIsLoggedIn);
  const isRefresh = useSelector(selectIsRefresh);

  useEffect(() => {
    dispatch(getWaterPerDay());
    dispatch(getWaterPerMonth());
  }, [dispatch]);

  return (
    !isRefresh &&
    isLoggedIn && (
      <div>
        <h2>day</h2>
        <ul>
          {waterPerDay.data !== undefined &&
            waterPerDay.data !== null &&
            waterPerDay.data.length !== 0 &&
            waterPerDay.data.map((el, i) => {
              return (
                <li key={el._id}>
                  <strong>{i + 1}. amount</strong>
                  {el.amount} <br />
                  <strong>date</strong>
                  {el.time}
                  {/* Delete water record */}
                  <button onClick={() => dispatch(deleteWaterRecord(el._id))}>
                    DELETE
                  </button>
                  <span>_____</span>
                  {/* Update water record */}
                  <button
                    onClick={() =>
                      dispatch(
                        editWaterRecord({
                          id: el._id,
                          body: {
                            time: "2024-06-25-02:00",
                            amount: 400,
                          },
                        })
                      )
                    }
                  >
                    EDIT
                  </button>
                </li>
              );
            })}
        </ul>

        <h3>{waterPerDay.waterAmount}</h3>
        <h2>month</h2>
        <ul>
          {waterPerMonth !== undefined &&
            waterPerMonth !== null &&
            waterPerMonth.length !== 0 &&
            waterPerMonth.map((el, i) => {
              return (
                <li key={el._id}>
                  <strong>{i + 1}.amount </strong>
                  {el.amount} <br />
                  <strong>date </strong>
                  {el.time}
                </li>
              );
            })}
        </ul>

        <button
          onClick={() => {
            dispatch(
              addWaterRecord({
                time: "2024-06-25-11:00",
                amount: Math.floor(Math.random() * 1001),
              })
            );
          }}
        >
          ADD
        </button>
      </div>
    )
  );
};

export default WaterRequestTest;

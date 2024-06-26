import { useSelector } from "react-redux";
import ExampleWaterModal from "./ExampleWaterModal";
import { selectWaterPerDay } from "../../redux/water/selectors";

const ExampleWaterList = () => {
  const items = useSelector(selectWaterPerDay).data;
  console.log(items);
  return (
    <>
      <ul>
        {items.map((item) => {
          return (
            <li key={item._id}>
              <ExampleWaterModal
                id={item._id}
                amount={item.amount}
                time={item.time}
                // handleDelete={handleDeleteContact}
              />
            </li>
          );
        })}
      </ul>
    </>
  );
};

export default ExampleWaterList;

import WaterDetailedInfo from "../../components/WaterDetailedInfo/WaterDetailedInfo";
import WaterMainInfo from "../../components/WaterMainInfo/WaterMainInfo";
import Container from "../../components/Container/Container";
import style from "./TrackerPage.module.css";
const TrackerPage = () => {
  return (
    <>
      <Container>
        <div className={style.page_box}>
          <WaterMainInfo />
          <WaterDetailedInfo />
        </div>
      </Container>
    </>
  );
};

export default TrackerPage;

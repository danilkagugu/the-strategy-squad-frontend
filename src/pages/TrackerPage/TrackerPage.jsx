import Container from "../../components/Container/Container";
import WaterDetailedInfo from "../../components/WaterDetailedInfo/WaterDetailedInfo";
import WaterMainInfo from "../../components/WaterMainInfo/WaterMainInfo";

const TrackerPage = () => {
  return (
    <Container>
      <WaterMainInfo />
      <WaterDetailedInfo />
    </Container>
  );
};

export default TrackerPage;

import Nav from "../components/navigation/Nav";
import HistoryBox from "../components/historyBox/HistoryBox";
import Wrapper from "../components/UI/Wrapper";


const FactView = (props) => {
  return (
    <Wrapper>
      <Nav focus={0}/>
      <HistoryBox />
    </Wrapper>
  );
};

export default FactView

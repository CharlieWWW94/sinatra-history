import Nav from "../components/navigation/Nav";
import HistoryBox from "../components/historyBox/HistoryBox";
import Wrapper from "../components/UI/Wrapper";


const FactView = (props) => {
  console.log(props);
  return (
    <Wrapper>
      <Nav focus={0}/>
      <HistoryBox onClick={props.passClick} fact={props.passFact} />
    </Wrapper>
  );
};

export default FactView;

import Nav from "../components/navigation/Nav";
import HistoryBox from "../components/historyBox/HistoryBox";
import Wrapper from "../components/UI/Wrapper";


const SearchView = (props) => {
    return (
      <Wrapper>
        <Nav focus={2}/>
        <HistoryBox />
      </Wrapper>
    );
  };
  
  export default SearchView
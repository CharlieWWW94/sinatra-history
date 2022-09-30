import Nav from "../components/navigation/Nav";
import HistoryBox from "../components/historyBox/HistoryBox";
import Wrapper from "../components/UI/Wrapper";
import Card from "../components/UI/Card";
import Button from "../components/UI/Button";
import searchStyle from "../components/search/Form.module.css";
import boxStyles from "../components/historyBox/hBStyling/HistoryBox.module.css";
import { useState } from "react";
const SearchView = (props) => {
  const [year, setYear] = useState("")

  const submitHandler = (event) => {
    event.preventDefault()
    props.passSubmit(year)
  }
    return (
      <Wrapper>
        <Nav focus={2}/>
        <Card addClassName={boxStyles.historycard}>
          <h2>Enter Year</h2>
          <form className={searchStyle.searchForm} onSubmit={submitHandler}>
            <input id="year" name="year" value={year} onChange={event => setYear(event.target.value)} className={searchStyle.searchBar} type="text"></input>
            <Button message={"Submit"}/>
          </form>
        </Card>
      </Wrapper>
    );
  };
  
  export default SearchView
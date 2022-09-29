import Nav from "../components/navigation/Nav";
import HistoryBox from "../components/historyBox/HistoryBox";
import Wrapper from "../components/UI/Wrapper";
import Card from "../components/UI/Card";
import Button from "../components/UI/Button";
import Neutral from "../components/UI/Neutralise.module.css"
import ButtonStyle from "../components/UI/Button.module.css"
import { Link } from "react-router-dom"
const ExploreView = (props) => {

    const title = "List of shortest-reigning monarchs"
    const snippet = "...of these monarchs acceded to the throne as a result of being first in an order of succession, while other monarchs claimed the throne as a result of conflict..."
    const wiki_link = "https://en.wikipedia.org/wiki/List_of_shortest-reigning_monarchs"
    return (
      <Wrapper>
        <Nav focus={1}/>
        <h2 style={{color: "white"}}>{title}</h2>
        <Card>
            <div style={{padding: "20px"}}>
            <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/5/55/Al-Farabi.jpg/379px-Al-Farabi.jpg"></img>
            <p style={{padding: "10px"}}>{snippet}</p>
            </div>
            <a className={ButtonStyle.button} href={wiki_link} target="_blank">Read more on Wikipedia</a>
        </Card>
      </Wrapper>
    );
  };
  
  export default ExploreView;
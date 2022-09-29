import Nav from "../components/navigation/Nav";
import HistoryBox from "../components/historyBox/HistoryBox";
import Wrapper from "../components/UI/Wrapper";
import Card from "../components/UI/Card";
import Button from "../components/UI/Button";
import Neutral from "../components/UI/Neutralise.module.css"
import ButtonStyle from "../components/UI/Button.module.css"
import { Link } from "react-router-dom"
const ExploreView = (props) => {
  console.log("here is wiki:")
    console.log(props.wikiFact)
    const title = props.wikiFact.wiki.title;
    const snippet = props.wikiFact.wiki.snippet;
    const wiki_link = props.wikiFact.wiki.link;
    const wiki_image = props.wikiFact.wiki.image
    return (
      <Wrapper>
        <Nav focus={1}/>
        <h2 style={{color: "white"}}>{title}</h2>
        <Card>
            <div style={{padding: "20px"}}>
            <img src={wiki_image}></img>
            <p style={{padding: "10px"}}>{snippet}...</p>
            </div>
            <a className={ButtonStyle.button} href={wiki_link} target="_blank">Read more on Wikipedia</a>
        </Card>
      </Wrapper>
    );
  };
  
  export default ExploreView;
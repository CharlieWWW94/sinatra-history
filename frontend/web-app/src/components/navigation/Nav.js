import navStyle from "./Nav.module.css";
import {Link} from "react-router-dom";
import LinkStyle from "../UI/Neutralise.module.css"

const Nav = (props) => {

  return (
    <div className={navStyle.nav}>
      <div>
        <Link className={LinkStyle.link} to="/explore"><h3 className={props.focus === 1 && navStyle.main}>Explore</h3></Link>
      </div>
      <div>
      <Link className={LinkStyle.link} to="/"><h3 className={props.focus === 0 && navStyle.main}>New Fact</h3></Link>
      </div>
      <div>
      <Link className={LinkStyle.link} to="/search"><h3 className={props.focus === 2 && navStyle.main}>Search</h3></Link>
      </div>
    </div>
  );
};

export default Nav;

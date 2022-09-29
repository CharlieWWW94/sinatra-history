import WrapperStyle from "./Wrapper.module.css"

const Wrapper = (props) => { return (
    <div className={WrapperStyle.wrapper}>
        {props.children}
    </div>)
};

export default Wrapper
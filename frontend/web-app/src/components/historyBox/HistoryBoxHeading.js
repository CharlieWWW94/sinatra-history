import headingStyles from "./hBStyling/HistoryBoxHeading.module.css";

const HistoryBoxHeading = (props) => {
  return (
    <div className={headingStyles.headingDiv}>
      <div>
        <h1 className={headingStyles.text}>Glimpse</h1>
      </div>
      <div>
        <h2  className={headingStyles.subHeading}>
          into the past
        </h2>
      </div>
    </div>
  );
};

export default HistoryBoxHeading;

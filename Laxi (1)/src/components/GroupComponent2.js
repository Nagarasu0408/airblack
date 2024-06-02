import PropTypes from "prop-types";
import "./GroupComponent2.css";

const GroupComponent2 = ({ className = "" }) => {
  return (
    <div className={`group-parent ${className}`}>
      <div className="svg-parent">
        <img className="svg-icon" alt="" src="/svg.svg" />
        <div className="rated-4855">Rated 4.85/5</div>
      </div>
      <div className="professional-online-makeup">
        Professional online Makeup Course
      </div>
      <div className="svg-group">
        <img className="svg-icon1" alt="" src="/svg1.svg" />
        <div className="indias-no1-online">
          India’s No.1 Online Makeup Course
        </div>
        <img className="svg-icon2" alt="" src="/svg1.svg" />
        <img className="svg-icon3" alt="" src="/svg1.svg" />
        <div className="learn-by-live">
          Learn by LIVE Di-it-Together Classes
        </div>
        <div className="unlimited-practice-session">
          Unlimited Practice Session To Master skills
        </div>
      </div>
      <div className="rectangle-group">
        <div className="group-item" />
        <div className="svg-container">
          <img className="svg-icon4" alt="" src="/svg2.svg" />
          <div className="certification-program">Certification Program</div>
        </div>
      </div>
    </div>
  );
};

GroupComponent2.propTypes = {
  className: PropTypes.string,
};

export default GroupComponent2;

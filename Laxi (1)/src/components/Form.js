import PropTypes from "prop-types";
import "./Form.css";

const Form = ({ className = "" }) => {
  return (
    <div className={`form ${className}`}>
      <div className="enter-your-name">*Enter your name</div>
      <div className="input">
        <div className="eg-aneesha-mehra">Eg. Aneesha Mehra</div>
      </div>
      <div className="enter-your-whatsapp">*Enter your WhatsApp Number</div>
      <div className="input-parent">
        <div className="input1">
          <div className="div">+91</div>
          <img className="vector-icon2" alt="" src="/vector.svg" />
        </div>
        <div className="input2">
          <div className="divplaceholder">
            <div className="eg-0000000000">Eg. 0000000000</div>
          </div>
        </div>
      </div>
      <div className="select-your-profession">*Select your profession</div>
      <div className="input3">
        <div className="choose-the-most">Choose the most relevant option</div>
        <img className="svg-icon5" alt="" src="/svg3.svg" />
      </div>
      <div className="select-your-profession">*Select your goal</div>
      <div className="input4">
        <div className="choose-the-most1">Choose the most relevant option</div>
        <img className="svg-icon5" alt="" src="/svg3.svg" />
      </div>
      <div className="select-your-profession">*Select your city</div>
      <div className="input5">
        <div className="choose-the-most2">Choose the most relevant option</div>
        <img className="svg-icon5" alt="" src="/svg3.svg" />
      </div>
      <div className="divframer-zlvey9">
        <div className="divframer-923v64">
          <div className="p">
            <b className="submit">Submit</b>
          </div>
        </div>
      </div>
    </div>
  );
};

Form.propTypes = {
  className: PropTypes.string,
};

export default Form;

import PropTypes from 'prop-types';
import './FeedbackOptions.css';

const Feedback = ({ options, onLeaveFeedback }) => {
  return (
    <div className="btn">
      {options.map(option => {
        return (
          <button
            className="feedbackBtn"
            type="button"
            key={option}
            onClick={() => {
              onLeaveFeedback(option);
            }}
          >
            {option}
          </button>
        );
      })}
    </div>
  );
};

export default Feedback;

Feedback.propTypes = {
  options: PropTypes.arrayOf(PropTypes.string.isRequired),
  onLeaveFeedback: PropTypes.func.isRequired,
};

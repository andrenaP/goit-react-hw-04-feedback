import { useState, useEffect } from 'react';
import Feedback from './FeedbackOptions';
import Statistics from './Statistics';
import Section from './Section';
import Notification from './Notification';
export const App = () => {
  const [good, setgood] = useState(0);
  const [neutral, setneutral] = useState(0);
  const [bad, setbad] = useState(0);

  const useStateArray = { good: setgood, neutral: setneutral, bad: setbad };
  const countTotalFeedback = () => {
    return good + neutral + bad;
  };

  const countPositiveFeedbackPercentage = () => {
    const totalFeedback = countTotalFeedback();
    const PositiveFeedbackPercentage = Math.round((good * 100) / totalFeedback);
    if (totalFeedback === 0) {
      return 0;
    }
    return PositiveFeedbackPercentage;
  };
  const leaveFeedback = feedbackType => {
    useStateArray[feedbackType](prevState => prevState + 1);
  };

  return (
    <div>
      <Section title="Please leave feedback">
        <Feedback
          options={['good', 'neutral', 'bad']}
          onLeaveFeedback={leaveFeedback}
        />
      </Section>
      {countTotalFeedback() === 0 ? (
        <Notification message="There is no feedback" />
      ) : (
        <Section title="Statistics">
          <Statistics
            good={good}
            neutral={neutral}
            bad={bad}
            TotalFeedback={countTotalFeedback()}
            PositiveFeedbackPercentage={countPositiveFeedbackPercentage()}
          />
        </Section>
      )}
    </div>
  );
};

export default App;

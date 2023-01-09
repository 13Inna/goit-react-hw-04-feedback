import { useState } from 'react';

import Statistics from './Statistics/Statistics';
import FeedbackOptions from './FeedbackOptions/FeedbackOptions';
import Section from './Section/Section';
import Notification from './Notification/Notification';


function App() {
  const [good, setGood] = useState(0);
  const [neutral, setNeutral] = useState(0);
  const [bad, setBad] = useState(0);

  const updateState = (typeBtn) => {
     return typeBtn === "good" ? setGood(good + 1) : typeBtn === "neutral" ? setNeutral(neutral + 1) : setBad(bad + 1);
  }
 const buttons = ['good', 'neutral', 'bad'];
 const countTotalFeedback = () => {
    return good + neutral + bad;
  };

  const countPositiveFeedbackPercentage = () => {
    return Math.round((good / countTotalFeedback()) * 100) || 0;
  };
  return (
    <>
      <Section title="Please leave feedback">
        <FeedbackOptions
          options={buttons}
          onLeaveFeedback={updateState}
        />
      </Section>
      <Section title="Statistics">
        {countTotalFeedback() ? (
          <Statistics
            good={good}
            neutral={neutral}
            bad={bad}
            total={countTotalFeedback()}
            positivePercentage={countPositiveFeedbackPercentage()}
          ></Statistics>
        ) : (
          <Notification message="No feedback given" />
        )}
      </Section>
    </>
  );
}
export default App;
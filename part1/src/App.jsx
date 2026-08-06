import { useState } from "react";

const Button = ({ onClick, text }) => {
  return <button onClick={onClick}>{text}</button>;
};

const Statistic = ({ text, value }) => {
  return (
    <p>
      {text} : {value}
    </p>
  );
};

const Statistics = ({ good, neutral, bad, total, average, positive }) => {
  if (total === 0) {
    return <p>No feedback given</p>;
  }
  return (
    <>
      <Statistic text={"Good"} value={good} />
      <Statistic text={"Neutral"} value={neutral} />
      <Statistic text={"Bad"} value={bad} />
      <Statistic text={"All"} value={total} />
      <Statistic text={"Average"} value={average} />
      <Statistic text={"Positive"} value={`${positive} %`} />
    </>
  );
};

const App = () => {
  const [good, setGood] = useState(0);
  const [neutral, setNeutral] = useState(0);
  const [bad, setBad] = useState(0);
  const total = good + neutral + bad;
  const average = (good - bad) / total;
  const positive = (good / total) * 100;

  const handleGoodFeedback = () => {
    const newGoodClick = good + 1;
    setGood(newGoodClick);
  };

  const handleNeutralFeedback = () => {
    const newNeutralClick = neutral + 1;
    setNeutral(newNeutralClick);
  };

  const handleBadFeedback = () => {
    const newBadClick = bad + 1;
    setBad(newBadClick);
  };

  return (
    <div>
      <h1>Give feedback</h1>
      <Button onClick={handleGoodFeedback} text={"Good"} />
      <Button onClick={handleNeutralFeedback} text={"Neutral"} />
      <Button onClick={handleBadFeedback} text={"bad"} />
      <br />
      <h1>Statistics</h1>
      <Statistics
        good={good}
        neutral={neutral}
        bad={bad}
        total={total}
        average={average}
        positive={positive}
      />
    </div>
  );
};

export default App;

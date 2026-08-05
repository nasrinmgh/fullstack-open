import { useState } from "react";

const Button = ({ onClick, text }) => {
  return <button onClick={onClick}>{text}</button>;
};

const Statistics = ({ text, stats }) => {
  return (
    <div>
      {text}:{stats}
    </div>
  );
};

const App = () => {
  // save clicks of each button to its own state
  const [good, setGood] = useState(0);
  const [neutral, setNeutral] = useState(0);
  const [bad, setBad] = useState(0);
  const total = good + neutral + bad;
  const average = (good - bad) / total;
  const positive = (good / total) * 100;

  const handleGoodFeedback = () => {
    const newGoodClick = good + 1;
    setGood(newGoodClick);
    /* setTotal(newGoodClick + neutral + bad);*/
  };

  const handleNeutralFeedback = () => {
    const newNeutralClick = neutral + 1;
    setNeutral(newNeutralClick);
    /* setTotal(good + newNeutralClick + bad);*/
  };

  const handleBadFeedback = () => {
    const newBadClick = bad + 1;
    setBad(newBadClick);
    /* setTotal(good + neutral + newBadClick);*/
  };

  return (
    <div>
      <h1>Give feedback</h1>
      <Button onClick={handleGoodFeedback} text={"Good"} />
      <Button onClick={handleNeutralFeedback} text={"Neutral"} />
      <Button onClick={handleBadFeedback} text={"bad"} />
      <br />
      <h1>Statistics</h1>
      <Statistics text={"Good"} stats={good} />
      <Statistics text="Neutral" stats={neutral} />
      <Statistics text="Bad" stats={bad} />
      <Statistics text="All" stats={total} />
      <Statistics text="Average" stats={average} />
      <Statistics text={"Positive"} stats={`${positive} %`} />
    </div>
  );
};

export default App;

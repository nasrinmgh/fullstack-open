import { useState } from "react";

const Button = ({ onClick, text }) => {
  return <button onClick={onClick}>{text}</button>;
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
    setTotal(newGoodClick + neutral + bad);
    handleAverage();
  };

  const handleNeutralFeedback = () => {
    const newNeutralClick = neutral + 1;
    setNeutral(newNeutralClick);
    setTotal(good + newNeutralClick + bad);
    handleAverage();
  };

  const handleBadFeedback = () => {
    const newBadClick = bad + 1;
    setBad(newBadClick);
    setTotal(good + neutral + newBadClick);
    handleAverage();
  };

  return (
    <div>
      <h1>Give feedback</h1>
      <Button onClick={handleGoodFeedback} text={"Good"} />
      <Button onClick={handleNeutralFeedback} text={"Neutral"} />
      <Button onClick={handleBadFeedback} text={"bad"} />
      <br />
      <h1>Statistics</h1>
      <div>Good: {good}</div>
      <div>Neutral: {neutral}</div>
      <div>Bad: {bad}</div>
      <div>all: {total}</div>
      <div>average: {average}</div>
      <div>positive: {positive} %</div>
    </div>
  );
};

export default App;

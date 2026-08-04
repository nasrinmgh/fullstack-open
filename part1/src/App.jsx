import { useState } from "react";

const Button = ({ onClick, text }) => {
  return <button onClick={onClick}>{text}</button>;
};

const App = () => {
  // save clicks of each button to its own state
  const [good, setGood] = useState(0);
  const [neutral, setNeutral] = useState(0);
  const [bad, setBad] = useState(0);

  const handleGoodFeedback = () => {
    setGood(good + 1);
  };

  const handleNeutralFeedback = () => {
    setNeutral(neutral + 1);
  };

  const handleBadFeedback = () => {
    setBad(bad + 1);
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
    </div>
  );
};

export default App;

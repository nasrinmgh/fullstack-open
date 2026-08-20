import Number from "./Number";
import Person from "./Person";

const Infos = ({ person }) => {
  return (
    <>
      <Person name={person.name} />
      <Number number={person.number} />
    </>
  );
};

export default Infos;

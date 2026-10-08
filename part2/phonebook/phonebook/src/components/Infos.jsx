import Number from "./Number";
import Person from "./Person";

const Infos = ({ person, handleDelete }) => {
  return (
    <>
      <Person name={person.name} />
      <Number number={person.number} />
      <button onClick={() => handleDelete(person.id)}>delete</button>
    </>
  );
};

export default Infos;

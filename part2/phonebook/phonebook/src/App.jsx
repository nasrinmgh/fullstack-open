import { useState } from "react";
import Person from "./components/Person";

const App = () => {
  const [persons, setPersons] = useState([{ name: "Arto Hellas", id: "Arto" }]);
  const [newName, setNewName] = useState("");

  const handleAddPerson = (event) => {
    event.preventDefault();
    const person = {
      name: newName,
      id: crypto.randomUUID(),
    };
    setPersons(persons.concat(person));
    setNewName("");
  };

  const handleNewPerson = (event) => {
    setNewName(event.target.value);
  };

  return (
    <div>
      <h2>Phonebook</h2>
      <form onSubmit={handleAddPerson}>
        <div>
          name: <input onChange={handleNewPerson} value={newName} />
        </div>
        <div>
          <button type="submit">add</button>
        </div>
      </form>
      <h2>Numbers</h2>
      <div>
        {persons.map((person) => (
          <Person key={person.id} person={person} />
        ))}
      </div>
    </div>
  );
};

export default App;

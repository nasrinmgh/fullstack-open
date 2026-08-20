import { useState } from "react";
import Infos from "./components/Infos";

const App = () => {
  const [persons, setPersons] = useState([
    { name: "Arto Hellas", id: "Arto", number: "00- 12345" },
  ]);
  const [newName, setNewName] = useState("");
  const [newNumber, setNewNumber] = useState("");

  const handleAddPerson = (event) => {
    event.preventDefault();

    const nameExists = persons.some((person) => person.name === newName);
    if (nameExists) {
      alert(`${newName} already exists`);
      return;
    }

    const person = {
      name: newName,
      id: crypto.randomUUID(),
      number: newNumber,
    };

    setPersons(persons.concat(person));
    setNewName("");
    setNewNumber("");
  };

  const handleNewPerson = (event) => {
    setNewName(event.target.value);
  };

  const handleNewNumber = (event) => {
    setNewNumber(event.target.value);
  };

  return (
    <div>
      <h2>Phonebook</h2>
      <form onSubmit={handleAddPerson}>
        <div>
          name: <input onChange={handleNewPerson} value={newName} />
        </div>
        <div>
          number: <input onChange={handleNewNumber} value={newNumber} />
        </div>
        <div>
          <button type="submit">add</button>
        </div>
      </form>
      <h2>Numbers</h2>
      <div>
        {persons.map((person) => (
          <Infos person={person} key={person.id} />
        ))}
      </div>
    </div>
  );
};

export default App;

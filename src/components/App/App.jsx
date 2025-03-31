import { useState, useEffect } from "react";
import ContactForm from "../ContactForm/ContactForm";
import SearchBox from "../SearchBox/SearchBox";
import ContactList from "../ContactList/ContactList";
import contactList from "../../assets/contactList.json";
import styles from "./App.module.css";



const App = () => {
  const [contacts, setContacts] = useState(() => {
    try {
      const savedContacts = localStorage.getItem("saved-contacts");
      return savedContacts ? JSON.parse(savedContacts) : contactList;
    } catch (error) {
      console.error("Error loading contacts:", error);
      return contactList;
    }
  });

  const [filter, setFilter] = useState("");

  useEffect(() => {
    localStorage.setItem("saved-contacts", JSON.stringify(contacts));
  }, [contacts]);

  const addContact = (newContact) => {
    setContacts((prevContacts) => [...prevContacts, newContact]);
  };

  const deleteContact = (id) => {
    setContacts((prevContacts) => prevContacts.filter((contact) => contact.id !== id));
  };

  const searchContacts = contacts.filter((contact) =>
    contact.name.toLowerCase().includes(filter.toLowerCase())
  );

  return (
    <div className={styles.div}>
      <h1 className={styles.title}>Phonebook</h1>
      <ContactForm onAddContact={addContact} />
      <SearchBox value={filter} onChange={setFilter} />
      <ContactList contactList={searchContacts} onDeleteContact={deleteContact} />
    </div>
  );
};

export default App;









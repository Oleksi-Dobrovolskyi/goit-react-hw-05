import styles from './ContactList.module.css';
import Contact from '../Contact/Contact';

export default function ContactList({ contactList, onDeleteContact }) {
  return (
    <ul className={styles.list}>
      {contactList.map(contact => (
        <li key={contact.id}>
          <Contact info={contact} deleteContact={onDeleteContact} />
        </li>
      ))}
    </ul>
  );
}
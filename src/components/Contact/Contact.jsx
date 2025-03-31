import styles from './Contact.module.css';
export default function Contact({ info, deleteContact }) {
  return (
    <div className={styles.wrap}>
      <ul className={styles.list}>
        <li>{info.name}</li>
        <li>{info.number}</li>
      </ul>
      <button className={styles.button} onClick={() => deleteContact(info.id)}>
        Delete
      </button>
    </div>
  );
}
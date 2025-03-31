import styles from './SearchBox.module.css';

export default function SearchBox({ value, onChange }) {
  return (
    <input
      className={styles.input}
      type='text'
      value={value}
      onChange={evt => onChange(evt.target.value)}
      placeholder="Search contacts..."
    />
  );
}

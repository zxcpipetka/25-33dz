import { useState } from 'react';
import { UserRound, Phone, UserPlus } from 'lucide-react';
import { useDispatch, useSelector } from 'react-redux';
import { addContact, selectContacts } from '../../redux/contactsSlice';
import styles from './ContactForm.module.css';

export const ContactForm = () => {
  const dispatch = useDispatch();
  const contacts = useSelector(selectContacts);
  const [name, setName] = useState('');
  const [number, setNumber] = useState('');
  const [error, setError] = useState('');

  function handleSubmit(event) {
    event.preventDefault();
    const normalizedName = name.trim();
    const normalizedNumber = number.trim();
    const exists = contacts.some((contact) => contact.name.toLocaleLowerCase() === normalizedName.toLocaleLowerCase());

    if (exists) {
      setError(`${normalizedName} вже є у вашій книзі.`);
      return;
    }

    dispatch(addContact({ name: normalizedName, number: normalizedNumber }));
    setName('');
    setNumber('');
    setError('');
  }

  return (
    <form className={styles.form} onSubmit={handleSubmit}>
      <label className={styles.label} htmlFor="contact-name">Ім’я</label>
      <div className={styles.inputWrap}>
        <UserRound size={16} aria-hidden="true" />
        <input id="contact-name" name="name" type="text" autoComplete="name" placeholder="Наприклад, Марія Коваль" value={name} onChange={(event) => { setName(event.target.value); setError(''); }} required />
      </div>
      <label className={styles.label} htmlFor="contact-number">Номер телефону</label>
      <div className={styles.inputWrap}>
        <Phone size={16} aria-hidden="true" />
        <input id="contact-number" name="number" type="tel" autoComplete="tel" placeholder="+380 00 000 00 00" value={number} onChange={(event) => { setNumber(event.target.value); setError(''); }} required />
      </div>
      {error && <p className={styles.error} role="alert">{error}</p>}
      <button className={styles.submit} type="submit"><UserPlus size={16} /> Додати контакт</button>
    </form>
  );
};

ContactForm.propTypes = {};
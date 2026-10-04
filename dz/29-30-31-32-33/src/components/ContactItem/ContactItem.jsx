import PropTypes from 'prop-types';
import { useDispatch } from 'react-redux';
import { ContactRound, Phone, Trash2 } from 'lucide-react';
import { deleteContact } from '../../redux/contactsSlice';
import styles from './ContactItem.module.css';

export const ContactItem = ({ contact }) => {
  const dispatch = useDispatch();
  const initials = contact.name.trim().split(/\s+/).slice(0, 2).map((part) => part[0]).join('').toLocaleUpperCase();

  return (
    <li className={styles.item}>
      <span className={styles.avatar} aria-hidden="true">{initials || <ContactRound size={17} />}</span>
      <div className={styles.details}>
        <span className={styles.name}>{contact.name}</span>
        <a className={styles.number} href={`tel:${contact.number.replace(/[^+\d]/g, '')}`}><Phone size={12} />{contact.number}</a>
      </div>
      <button className={styles.delete} type="button" onClick={() => dispatch(deleteContact(contact.id))} aria-label={`Видалити контакт ${contact.name}`} title="Видалити контакт">
        <Trash2 size={16} />
      </button>
    </li>
  );
};

ContactItem.propTypes = {
  contact: PropTypes.shape({
    id: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    number: PropTypes.string.isRequired,
  }).isRequired,
};
import PropTypes from 'prop-types';
import { useSelector } from 'react-redux';
import { selectFilter } from '../../redux/contactsSlice';
import { ContactItem } from '../ContactItem/ContactItem';
import styles from './ContactList.module.css';

export const ContactList = ({ contacts, totalContacts }) => {
  const filter = useSelector(selectFilter);

  if (contacts.length === 0) {
    return (
      <div className={styles.empty}>
        <span className={styles.emptyMark}>{filter ? '⌕' : '○'}</span>
        <h3>{filter ? 'Нічого не знайдено' : 'Ваша книга починається тут'}</h3>
        <p>{filter ? 'Спробуйте інше ім’я або номер телефону.' : 'Додайте перший контакт, щоб він завжди був під рукою.'}</p>
      </div>
    );
  }

  return (
    <>
      <div className={styles.resultLine}>
        <span>{filter ? `ЗНАЙДЕНО: ${contacts.length}` : 'УСІ КОНТАКТИ'}</span>
        {filter && <span>З {totalContacts}</span>}
      </div>
      <ul className={styles.list}>
        {contacts.map((contact) => <ContactItem key={contact.id} contact={contact} />)}
      </ul>
    </>
  );
};

ContactList.propTypes = {
  contacts: PropTypes.arrayOf(PropTypes.shape({
    id: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    number: PropTypes.string.isRequired,
  })).isRequired,
  totalContacts: PropTypes.number.isRequired,
};
import { Search, X } from 'lucide-react';
import { useDispatch, useSelector } from 'react-redux';
import { selectFilter, updateFilter } from '../../redux/contactsSlice';
import styles from './SearchBox.module.css';

export const SearchBox = () => {
  const dispatch = useDispatch();
  const filter = useSelector(selectFilter);

  return (
    <label className={styles.search}>
      <Search size={17} aria-hidden="true" />
      <input type="search" value={filter} onChange={(event) => dispatch(updateFilter(event.target.value))} placeholder="Пошук за ім’ям або номером" aria-label="Знайти контакт" />
      {filter && <button type="button" onClick={() => dispatch(updateFilter(''))} aria-label="Очистити пошук"><X size={15} /></button>}
    </label>
  );
};

SearchBox.propTypes = {};
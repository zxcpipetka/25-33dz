import { BookUser, ContactRound, Sparkles } from 'lucide-react';
import { useSelector } from 'react-redux';
import { ContactForm } from '../ContactForm/ContactForm';
import { ContactList } from '../ContactList/ContactList';
import { SearchBox } from '../SearchBox/SearchBox';
import { selectFilteredContacts, selectTotalContacts } from '../../redux/contactsSlice';
import styles from './App.module.css';

export const App = () => {
  const contacts = useSelector(selectFilteredContacts);
  const totalContacts = useSelector(selectTotalContacts);

  return (
    <div className={styles.page}>
      <header className={styles.topbar}>
        <a className={styles.brand} href="/" aria-label="Контактно, на головну">
          <span className={styles.brandIcon}><BookUser size={19} strokeWidth={2} /></span>
          <span>контактно<span className={styles.brandDot}>.</span></span>
        </a>
        <span className={styles.topNote}><span className={styles.statusDot} /> ВАША ОСОБИСТА КНИГА КОНТАКТІВ</span>
        <span className={styles.topCount}>{String(totalContacts).padStart(2, '0')} ЗАПИСІВ</span>
      </header>

      <main className={styles.main}>
        <section className={styles.intro}>
          <div className={styles.introText}>
            <p className={styles.eyebrow}><Sparkles size={13} /> ПРОСТІШЕ БУТИ НА ЗВ’ЯЗКУ</p>
            <h1>Люди, які<br /><em>мають значення.</em></h1>
            <p className={styles.lead}>Усі важливі контакти в одному місці. Додайте ім’я та номер, щоб не загубити зв’язок.</p>
          </div>
          <div className={styles.introAside} aria-hidden="true">
            <span className={styles.asideNumber}>01</span>
            <span className={styles.asideRule} />
            <span className={styles.asideCaption}>ЛЮДИ<br />ПОРУЧ</span>
            <ContactRound className={styles.asideIcon} size={25} strokeWidth={1.3} />
          </div>
        </section>

        <div className={styles.workspace}>
          <section className={styles.formPanel} aria-labelledby="form-title">
            <div className={styles.panelHeading}>
              <span className={styles.step}>01 / ДОДАТИ</span>
              <span className={styles.headingMark}>+</span>
            </div>
            <h2 id="form-title">Новий контакт</h2>
            <p className={styles.formIntro}>Збережіть дані людини у своїй книзі.</p>
            <ContactForm />
            <p className={styles.privacyNote}><span /> Дані зберігаються на вашому пристрої</p>
          </section>

          <section className={styles.listPanel} aria-labelledby="contacts-title">
            <div className={styles.listHeader}>
              <div>
                <p className={styles.step}>02 / ВАШ СПИСОК</p>
                <h2 id="contacts-title">Контакти <span>{String(totalContacts).padStart(2, '0')}</span></h2>
              </div>
              <span className={styles.listIcon}><ContactRound size={17} /></span>
            </div>
            <SearchBox />
            <ContactList contacts={contacts} totalContacts={totalContacts} />
          </section>
        </div>

        <footer className={styles.footer}>
          <span>КОНТАКТНО. ВАШЕ КОЛО ЗВ’ЯЗКУ.</span>
          <span>ЗРОБЛЕНО ДЛЯ ВАЖЛИВИХ РОЗМОВ <span className={styles.footerMark}>✳</span></span>
        </footer>
      </main>
    </div>
  );
};

App.propTypes = {};
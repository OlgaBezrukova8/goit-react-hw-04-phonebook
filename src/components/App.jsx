import { useState, useEffect, useCallback } from 'react';
import { Notify } from 'notiflix/build/notiflix-notify-aio';

import { Title } from './Title/Title';
import { ContactForm } from './ContactForm/ContactForm';
import { ContactList } from './ContactList/ContactList';
import { Filter } from './Filter/Filter';

export const App = () => {
  const [contacts, setContacts] = useState(
    () => JSON.parse(window.localStorage.getItem('contacts')) ?? []
  );
  const [filter, setFilter] = useState('');

  useEffect(() => {
    window.localStorage.setItem('contacts', JSON.stringify(contacts));
  }, [contacts]);

  const handleFilter = event => {
    setFilter(event.target.value);
  };

  const isExists = contactName => {
    const arrayFilter = contacts.filter(
      contact => contact.name === contactName
    );
    return arrayFilter.length !== 0;
  };

  const handleSubmit = event => {
    event.preventDefault();
    const { name, number } = event.target;

    if (isExists(name.value)) {
      Notify.warning(`${name.value} is already in contacts`);
      return false;
    } else {
      setContacts(prevState => [
        ...prevState,
        {
          id: name.value,
          name: name.value,
          number: number.value,
        },
      ]);
      return true;
    }
  };

  const getFilterName = () => {
    const normalizedFilter = filter.toLowerCase();

    return contacts.filter(el =>
      el.name.toLowerCase().includes(normalizedFilter)
    );
  };

  const deleteContact = useCallback(
    contactId => {
      setContacts(prevState => prevState.filter(({ id }) => id !== contactId));
    },
    [setContacts]
  );

  const visibleName = getFilterName();

  return (
    <div>
      <Title title="Phonebook" />
      <ContactForm onSubmit={handleSubmit} />

      <Title title="Contacts" />
      <Filter value={filter} onChange={handleFilter} />
      <ContactList contacts={visibleName} onDeleteContact={deleteContact} />
    </div>
  );
};

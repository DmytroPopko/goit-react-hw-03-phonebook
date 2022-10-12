import React from 'react';
import './ContactcList.scss';
import PropTypes from 'prop-types';

const ContactList = ({ contacts, onDeleteContact }) => (
  <ul className="ContactList">
    {contacts.map(({ id, name, number }) => (
      <li key={id}>
        {name}: {number}
        <button
          onClick={() => onDeleteContact(id)}
          className="ContactsList__btn"
        >
          Удалить
        </button>
      </li>
    ))}
  </ul>
);

ContactList.propTypes = {
  id: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  number: PropTypes.number.isRequired,
};

export default ContactList;

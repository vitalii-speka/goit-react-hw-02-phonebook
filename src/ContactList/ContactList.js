import React from 'react';

import PropTypes from 'prop-types';

const ContactList = ({ contacts, onRemoveContact }) => (
  <ul>
    {contacts.map(contact => (
      <li key={contact.id}>
        {contact.name + ' : ' + contact.number}
        {
          <button
            type="button"
            name="delte"
            onClick={() => onRemoveContact(contact.id)}
          >
            delete
          </button>
        }
      </li>
    ))}
  </ul>
);

ContactList.prototype = {
  onRemoveContact: PropTypes.func.isRequired,
  contacts: PropTypes.arrayOf(
    PropTypes.shape({
      name: PropTypes.string.isRequired,
      number: PropTypes.number.isRequired,
    }),
  ),
};

export default ContactList;

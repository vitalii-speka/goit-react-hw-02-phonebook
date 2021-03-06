import React from 'react';

import PropTypes from 'prop-types';

import styles from './ContactList.module.css';

const ContactList = ({ contacts, onRemoveContact }) => (
  <ul className={styles.TaskList}>
    {contacts.map(contact => (
      <li className={styles.TaskList_item} key={contact.id}>
        {contact.name + ' : ' + contact.number}
        {
          <div className={styles.divRelativeButton}>
            <button
              className={styles.TaskList_button}
              type="button"
              name="delte"
              onClick={() => onRemoveContact(contact.id)}
            >
              delete
            </button>
          </div>
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

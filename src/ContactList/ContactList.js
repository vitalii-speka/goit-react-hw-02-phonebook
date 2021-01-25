import PropTypes from 'prop-types';

const ContactList = ({ contacts }) => (
  <ul>
    {contacts.map(contact => (
      <li key={contact.id}>{contact.name + ' : ' + contact.number}</li>
    ))}
  </ul>
);

// const ContactList = ({ contacts, onRemoveContact }) => (
//   <ul className={styles.TaskList}>
//     {contacts.map((contact) => (
//       <li className = {styles.TaskList_item}key={contact.id}>
//         {contact.name + ":" + contact.number}
//         {
//           <button
//             className={styles.TaskList_button}
//             type="button"
//             name="delte"
//             onClick={() => onRemoveContact(contact.id)}
//           >
//             delete
//           </button>
//         }
//       </li>
//     ))}
//   </ul>
// );

ContactList.prototype = {
  contacts: PropTypes.arrayOf(
    PropTypes.shape({
      name: PropTypes.string.isRequired,
      number: PropTypes.number.isRequired,
    }),
  ),
};

export default ContactList;

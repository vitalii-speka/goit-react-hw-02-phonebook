import PropTypes from 'prop-types';

const Phonebook = ({ name, id }) => {
  return (
    <>
      <li key={id}>{name}</li>
    </>
  );
};

Phonebook.prototype = {
  title: PropTypes.string.isRequired,
  children: PropTypes.string.isRequired,
};

export default Phonebook;

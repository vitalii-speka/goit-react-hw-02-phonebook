import PropTypes from 'prop-types';

const Filter = ({ value, onChangeFilter }) => (
  <label>
    Find contacts by neme
    <input
      type="text"
      value={value}
      onChange={e => onChangeFilter(e.target.value)}
    />
  </label>
);

Filter.prototype = {
  value: PropTypes.string.isRequired,
  onChangeFilter: PropTypes.func.isRequired,
};

export default Filter;

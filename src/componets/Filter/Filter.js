import styles from './Filter.module.css';
import PropTypes from 'prop-types';

const Filter = ({ value, onChangeFilter }) => (
  <label className={styles.TaskList_item}>
    Find contacts by neme
    <input
      className={styles.TaskEditor_input}
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

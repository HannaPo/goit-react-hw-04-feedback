import PropTypes from 'prop-types';
import { List, FeedbackBtn } from './FeedbackOptions.styled';

const FeedbackOptions = ({ options, onLeaveFeedback }) => {
  return (
    <List>
      {options.map(option => (
          <li key={option}>
             <FeedbackBtn  type="button" onClick = {() => onLeaveFeedback(option)}>
          {option}
          </FeedbackBtn>
        </li>
      ))}
    </List>
  );
};

export default FeedbackOptions;

FeedbackOptions.propTypes = {
  options: PropTypes.arrayOf(PropTypes.string).isRequired,
  onLeaveFeedback: PropTypes.func.isRequired,
};
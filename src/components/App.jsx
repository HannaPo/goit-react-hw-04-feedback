import { Component } from 'react';
import Statistics from './Statistics/Statistics';
import Section from './Section/Section';
import FeedbackOptions from './FeedbackOptions/FeedbackOptions';
import Notification from './Notification/Notification';
import { Container } from './App.styled';

class App extends Component {
  state = {
    good: 0,
    neutral: 0,
    bad: 0,
  };

  handleLeaveFeedback = (feedback) => {
    this.setState(prevState => ({
      [feedback]: prevState[feedback] + 1
    }));
  }

  countTotalFeedback = () => {
       return Object.values(this.state).reduce((acc, value) => acc + value, 0);
  }

  countPositiveFeedbackPercentage = () => {
  const { good } = this.state;
    const total = this.countTotalFeedback();
    return total > 0 ? Math.round((good / total) * 100) : 0;
  }
  
  render() {
    const { good, neutral, bad } = this.state;
    const total = this.countTotalFeedback();
    const positivePercentage = this.countPositiveFeedbackPercentage();

    return (
  <Container>
        <Section title="Please leave feedback">
         <FeedbackOptions
            options={['good', 'neutral', 'bad']}
            onLeaveFeedback={this.handleLeaveFeedback}
          />
        </Section>

        <Section title="Statistics">
          {total === 0 ? <Notification message="There is no feedback"/> :
          <Statistics
            good={good}
            neutral={neutral}
            bad={bad}
            total={total}
            positivePercentage={positivePercentage}
          > </Statistics>}
        </Section>
     </Container>
    );
  }
}

export default App;

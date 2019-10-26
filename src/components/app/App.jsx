import React, {Component} from 'react';
import PropTypes from 'prop-types';

import Greeting from '../greeting/Greeting';
import GuessArtist from '../questions/GuessArtist';
import GuessGenre from '../questions/GuessGenre';

const screenTypes = {
  welcomeScreen: `welcomeScreen`,
  guessArtist: `guessArtist`,
  guessGenre: `guessGenre`
};

const initialState = {
  screen: screenTypes.welcomeScreen,
  questionsCount: -1
};

export class App extends Component {
  constructor(props) {
    super(props);

    this.state = Object.assign({}, initialState);

    this.onStart = this.onStart.bind(this);
  }

  onStart() {
    return () => {
      const {questions} = this.props.data;
      const newQuestionsCount = this.state.questionsCount + 1;

      if (questions.length === newQuestionsCount) {
        return this.setState(Object.assign({}, initialState));
      }

      return this.setState({
        screen: questions[newQuestionsCount].question,
        questionsCount: newQuestionsCount
      });
    };
  }

  render() {
    const {time, mistakes, questions} = this.props.data;
    const question = questions[this.state.questionsCount];

    const screens = {
      welcomeScreen: <Greeting
        time={time}
        errorsQuantity={mistakes}
        onStart={this.onStart}
      />,
      guessArtist: <GuessArtist
        question={question}
        onAnswer={this.onStart}
      />,
      guessGenre: <GuessGenre
        question={question}
        onAnswer={this.onStart}
      />
    };

    return (screens[this.state.screen] ? screens[this.state.screen] : screens[screenTypes.welcomeScreen]);
  }
}

App.propTypes = {
  data: PropTypes.exact({
    time: PropTypes.number.isRequired,
    mistakes: PropTypes.number.isRequired,
    questions: PropTypes.arrayOf(PropTypes.exact({
      question: PropTypes.string.isRequired,
      answer: PropTypes.string.isRequired,
      variants: PropTypes.arrayOf(PropTypes.shape({
        src: PropTypes.string,
        artist: PropTypes.string,
        picture: PropTypes.string,
        genre: PropTypes.string
      }))
    }))
  }),
};

export default App;

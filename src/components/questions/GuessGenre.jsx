import React, {Component} from 'react';
import PropTypes from 'prop-types';

import Track from './Track';

export class GuessGenre extends Component {
  constructor(props) {
    super(props);

    this.state = {
      chosenTracks: []
    };
  }

  onChoose(id) {
    if (this.state.chosenTracks.includes(id)) {
      const newTracks = this.state.chosenTracks.filter((item) => item !== id);
      this.setState({
        chosenTracks: newTracks
      });
    } else {
      const newTracks = [...this.state.chosenTracks, id];
      this.setState({
        chosenTracks: newTracks
      });
    }
  }

  render() {
    const {variants} = this.props.question;
    const {onAnswer} = this.props;

    return (
      <section className='game game--genre'>
        <header className='game__header'>
          <a className='game__back' href='#'>
            <span className='visually-hidden'>Сыграть ещё раз</span>
            <img className='game__logo' src='img/melody-logo-ginger.png' alt='Угадай мелодию' />
          </a>

          <svg xmlns='http://www.w3.org/2000/svg' className='timer' viewBox='0 0 780 780'>
            <circle
              className='timer__line'
              cx='390'
              cy='390'
              r='370'
              style={{filter: `url(#blur)`, transform: `rotate(-90deg) scaleY(-1)`, transformOrigin: `center`}}
            />
          </svg>

          <div className='timer__value' xmlns='http://www.w3.org/1999/xhtml'>
            <span className='timer__mins'>05</span>
            <span className='timer__dots'>:</span>
            <span className='timer__secs'>00</span>
          </div>

          <div className='game__mistakes'>
            <div className='wrong'/>
            <div className='wrong'/>
            <div className='wrong'/>
          </div>
        </header>

        <section className='game__screen'>
          <h2 className='game__title'>Выберите инди-рок треки</h2>
          <form className='game__tracks'>
            {variants.map((song, index) => <Track key={index} id={song.id} onChoose={() => this.onChoose(song.id)}/>)}

            <button className='game__submit button' type='submit' onClick={onAnswer(this.state.chosenTracks)}>Ответить</button>
          </form>
        </section>
      </section>
    );
  }
}

GuessGenre.propTypes = {
  onAnswer: PropTypes.func.isRequired,
  question: PropTypes.shape({
    variants: PropTypes.arrayOf(PropTypes.shape({
      src: PropTypes.string,
      genre: PropTypes.string,
      id: PropTypes.number
    }))
  })
};

export default GuessGenre;

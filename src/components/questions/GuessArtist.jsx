import React, {Component} from 'react';
import PropTypes from 'prop-types';

import Artist from './Artist';
import AudioPlayer from '../AudioPlayer/AudioPlayer';

export class GuessArtist extends Component {
  constructor(props) {
    super(props);

    this.state = {
      chosenArtist: 0,
      isPlaying: false
    };
  }

  onChoose(id) {
    return () => {
      this.setState({
        chosenArtist: id
      });

      this.props.onAnswer(id)();
    };
  }

  renderArtists() {
    return this.props.question.variants.map((artist) =>
      <Artist
        key={artist.id}
        name={artist.artist}
        id={artist.id}
        value={artist.id}
        picture={artist.picture}
        checked={this.state.chosenArtist === artist.id}
        onChange={this.onChoose(artist.id)}
      />);
  }

  onChangePlayingStatus() {
    return () => this.setState({isPlaying: !this.state.isPlaying});
  }

  render() {
    return (
      <section className='game game--artist'>
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
              style={{filter: `url(#blur)%`, transform: `rotate(-90deg) scaleY(-1)`, transformOrigin: `center`}}
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
          <h2 className='game__title'>Кто исполняет эту песню?</h2>
          <div className='game__track'>
            <div className='track'>
              <AudioPlayer
                src={this.props.question.src}
                onPlayButtonClick={this.onChangePlayingStatus()}
                isPlaying={this.state.isPlaying}
              />
            </div>
          </div>

          <form className='game__artist'>
            {this.renderArtists()}
          </form>
        </section>
      </section>
    );
  }
}

GuessArtist.propTypes = {
  onAnswer: PropTypes.func.isRequired,
  question: PropTypes.shape({
    src: PropTypes.string,
    variants: PropTypes.arrayOf(PropTypes.shape({
      artist: PropTypes.string,
      picture: PropTypes.string,
      id: PropTypes.number
    }))
  })
};

export default GuessArtist;

import React from 'react';
import PropTypes from 'prop-types';

export const GuessArtist = (props) => {
  const {variants} = props.question;
  const {onAnswer} = props;

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
            <button className='track__button track__button--play' type='button' />
            <div className='track__status'>
              <audio />
            </div>
          </div>
        </div>

        <form className='game__artist'>
          <div className='artist'>
            <input className='artist__input visually-hidden' type='radio' name='answer' value='artist-1' id='answer-1' />
            <label className='artist__name' htmlFor='answer-1' onClick={onAnswer(variants[0].artist)}>
              <img className='artist__picture' src='http://placehold.it/134x134' alt='Пелагея' />
              {variants[0].artist}
            </label>
          </div>

          <div className='artist'>
            <input className='artist__input visually-hidden' type='radio' name='answer' value='artist-2' id='answer-2' />
            <label className='artist__name' htmlFor='answer-2' onClick={onAnswer(variants[1].artist)}>
              <img className='artist__picture' src='http://placehold.it/134x134' alt='Пелагея' />
              {variants[1].artist}
            </label>
          </div>

          <div className='artist'>
            <input className='artist__input visually-hidden' type='radio' name='answer' value='artist-3' id='answer-3' />
            <label className='artist__name' htmlFor='answer-3' onClick={onAnswer(variants[2].artist)}>
              <img className='artist__picture' src='http://placehold.it/134x134' alt='Пелагея' />
              {variants[2].artist}
            </label>
          </div>
        </form>
      </section>
    </section>
  );
};

GuessArtist.propTypes = {
  onAnswer: PropTypes.func.isRequired,
  question: PropTypes.shape({
    variants: PropTypes.arrayOf(PropTypes.shape({
      artist: PropTypes.string,
      picture: PropTypes.string
    }))
  })
};

export default GuessArtist;
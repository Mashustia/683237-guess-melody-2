import React from 'react';
import PropTypes from 'prop-types';

export const Greeting = (props) => {
  const {errorsQuantity, time, onStart} = props;

  return (
    <div id='welcome'>
      <section className='welcome'>
        <div className='welcome__logo'>
          <img src='img/melody-logo.png' alt='Угадай мелодию' width='186' height='83'/>
        </div>
        <button className='welcome__button' onClick={onStart()}><span className='visually-hidden'>Начать игру</span></button>
        <h2 className='welcome__rules-title'>Правила игры</h2>
        <p className='welcome__text'>Правила просты:</p>
        <ul className='welcome__rules-list'>
          <li>За {time} минут нужно ответить на все вопросы.</li>
          <li>Можно допустить {errorsQuantity} ошибки.</li>
        </ul>
        <p className='welcome__text'>Удачи!</p>
      </section>
    </div>
  );
};

Greeting.propTypes = {
  errorsQuantity: PropTypes.number.isRequired,
  time: PropTypes.number.isRequired,
  onStart: PropTypes.func.isRequired
};

export default Greeting;

import React from 'react';
import PropTypes from 'prop-types';

export const Track = (props) => {
  const {id, checked, value, onChoose} = props;

  return (
    <div className='track'>
      <button className='track__button track__button--play' type='button'/>
      <div className='track__status'>
        <audio/>
      </div>
      <div className='game__answer'>
        <input
          className='game__input visually-hidden'
          type='checkbox'
          name='answer'
          value={value}
          checked={checked}
          id={`answer-${id}`}
          onChange={onChoose}
        />
        <label className='game__check' htmlFor={`answer-${id}`}>Отметить</label>
      </div>
    </div>
  );
};

Track.propTypes = {
  onChoose: PropTypes.func.isRequired,
  id: PropTypes.number.isRequired,
  value: PropTypes.number.isRequired,
  checked: PropTypes.bool.isRequired
};

export default Track;

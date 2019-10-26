import React from 'react';
import PropTypes from 'prop-types';

export const Track = (props) => {
  const {onChoose, id} = props;

  return (
    <div className='track'>
      <button className='track__button track__button--play' type='button'/>
      <div className='track__status'>
        <audio/>
      </div>
      <div className='game__answer'>
        <input className='game__input visually-hidden' type='checkbox' name='answer' value={`answer-${id}`} id={`answer-${id}`} />
        <label className='game__check' htmlFor={`answer-${id}`} onClick={onChoose}>Отметить</label>
      </div>
    </div>
  );
};

Track.propTypes = {
  onChoose: PropTypes.func.isRequired,
  id: PropTypes.number.isRequired
};

export default Track;

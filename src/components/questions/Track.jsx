import React from 'react';
import PropTypes from 'prop-types';

import AudioPlayer from '../AudioPlayer/AudioPlayer';

export const Track = (props) => {
  const {id, checked, value, src, isPlaying, onChoose, onPlayButtonClick} = props;

  return (
    <div className='track'>
      <AudioPlayer src={src} isPlaying={isPlaying} onPlayButtonClick={onPlayButtonClick}/>

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
  src: PropTypes.string.isRequired,
  value: PropTypes.number.isRequired,
  checked: PropTypes.bool.isRequired,
  isPlaying: PropTypes.bool.isRequired,
  onPlayButtonClick: PropTypes.func.isRequired
};

export default Track;

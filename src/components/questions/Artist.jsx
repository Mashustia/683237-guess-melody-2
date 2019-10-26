import React from 'react';
import PropTypes from 'prop-types';

export const Artist = (props) => {
  const {name, picture, onChoose} = props;

  return (
    <div className='artist'>
      <input className='artist__input visually-hidden' type='radio' name='answer' value='artist-2' id='answer-2'/>
      <label className='artist__name' htmlFor='answer-2' onClick={onChoose(name)}>
        <img className='artist__picture' src={picture} alt='Пелагея'/>
        {name}
      </label>
    </div>
  );
};

Artist.propTypes = {
  name: PropTypes.string,
  picture: PropTypes.string,
  onChoose: PropTypes.func.isRequired,
};

export default Artist;

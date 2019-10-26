import React from 'react';
import PropTypes from 'prop-types';

export const Artist = (props) => {
  const {name, picture, onChoose, id} = props;

  return (
    <div className='artist'>
      <input className='artist__input visually-hidden' type='radio' name='answer' value={`artist-${id}`} id={`artist-${id}`}/>
      <label className='artist__name' htmlFor={`artist-${id}`} onClick={onChoose(name)}>
        <img className='artist__picture' src={picture} alt={name}/>
        {name}
      </label>
    </div>
  );
};

Artist.propTypes = {
  name: PropTypes.string,
  picture: PropTypes.string,
  id: PropTypes.number,
  onChoose: PropTypes.func.isRequired,
};

export default Artist;

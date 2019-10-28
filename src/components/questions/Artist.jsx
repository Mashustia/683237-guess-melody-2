import React from 'react';
import PropTypes from 'prop-types';

export const Artist = (props) => {
  const {name, picture, onChange, id, checked} = props;

  return (
    <div className='artist'>
      <input
        className='artist__input visually-hidden'
        type='radio'
        name='answer'
        value={id}
        id={`artist-${id}`}
        checked={checked}
        onChange={onChange}
      />
      <label className='artist__name' htmlFor={`artist-${id}`}>
        <img className='artist__picture' src={picture} alt={name}/>
        {name}
      </label>
    </div>
  );
};

Artist.propTypes = {
  name: PropTypes.string.isRequired,
  picture: PropTypes.string.isRequired,
  id: PropTypes.number.isRequired,
  checked: PropTypes.bool.isRequired,
  onChange: PropTypes.func.isRequired,
};

export default Artist;

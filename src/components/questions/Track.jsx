import React, {Component} from 'react';
import PropTypes from 'prop-types';

export class Track extends Component {
  constructor(props) {
    super(props);

    this.state = {
      checked: false
    };

    this.onChangeValue = this.onChangeValue.bind(this);
  }

  onChangeValue() {
    this.setState({
      checked: !this.state.checked
    }, () => this.props.onChoose(this.props.id));
  }

  render() {
    const {id} = this.props;

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
            checked={this.state.checked}
            id={`answer-${id}`}
            onChange={this.onChangeValue}
          />
          <label className='game__check' htmlFor={`answer-${id}`}>Отметить</label>
        </div>
      </div>
    );
  }
}

Track.propTypes = {
  onChoose: PropTypes.func.isRequired,
  id: PropTypes.number.isRequired
};

export default Track;

import React  from 'react';
import PropTypes from 'prop-types';

class NameInput extends React.Component {
  render() {
    const { value, changes } = this.props;
    return (
      <label>
        Name:
        <input 
        name='nome' 
        type='text' 
        value={value}
        onChange={changes}></input>
      </label>
    )
  }
}

NameInput.protoType = {
  handleChange: PropTypes.func.isRequired,
  value: PropTypes.string.isRequired,
}

export default NameInput;
import React  from 'react';
import PropTypes from 'prop-types';

class EmailInput extends React.Component {
  render() {
    const { value, changes } = this.props;
    return (
      <label>
        Email:
        <input 
        name='email' 
        type='email' 
        value={value}
        onChange={changes}></input>
      </label>
    )
  }
}

EmailInput.protoType = {
  handleChange: PropTypes.func.isRequired,
  value: PropTypes.string.isRequired,
}

export default EmailInput;
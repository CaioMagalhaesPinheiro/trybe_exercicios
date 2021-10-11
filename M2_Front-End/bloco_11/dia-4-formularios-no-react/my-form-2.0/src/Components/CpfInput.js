import React  from 'react';
import PropTypes from 'prop-types';

class CpfInput extends React.Component {
  render() {
    const { value, changes } = this.props;
    return (
      <label>
        CPF:
        <input 
        name='cpf' 
        type='text' 
        value={value}
        onChange={changes}></input>
      </label>
    )
  }
}

CpfInput.protoType = {
  handleChange: PropTypes.func.isRequired,
  value: PropTypes.number.isRequired,
}

export default CpfInput;
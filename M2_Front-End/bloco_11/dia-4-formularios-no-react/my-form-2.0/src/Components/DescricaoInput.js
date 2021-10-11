import React  from 'react';
import PropTypes from 'prop-types';

class DescricaoInput extends React.Component {
  render() {
    const { value, changes } = this.props;
    return (
      <label>
        Descrição:
        <input 
        name='descricao' 
        type='textarea' 
        value={value}
        onChange={changes}></input>
      </label>
    )
  }
}

DescricaoInput.protoType = {
  handleChange: PropTypes.func.isRequired,
}

export default DescricaoInput;
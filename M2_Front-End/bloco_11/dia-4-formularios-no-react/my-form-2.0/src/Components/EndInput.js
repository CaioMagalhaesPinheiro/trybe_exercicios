import React  from 'react';
import PropTypes from 'prop-types';

class EndInput extends React.Component {
  render() {
    const { value, changes } = this.props;
    return (
      <>
        <label>
          Endereço:
          <input 
          name='endereco' 
          type='text' 
          value={value.endereco}
          onChange={changes}></input>
        </label>
        <label>
          Cidade:
          <input 
          name='cidade' 
          type='text' 
          value={value.cidade}
          onChange={changes}></input>
        </label>
        <label>
          Estado:
          <input 
          name='estado' 
          type='text' 
          value={value.estado}
          onChange={changes}></input>
        </label>
    </>
    )
  }
}

EndInput.protoType = {
  handleChange: PropTypes.func.isRequired,
}

export default EndInput;
import React  from 'react';
import PropTypes from 'prop-types';

class ResumoInput extends React.Component {
  render() {
    const { value, changes } = this.props;
    return (
      <label>
        Resumo:
        <input 
        name='resumo' 
        type='textarea' 
        value={value}
        onChange={changes}></input>
      </label>
    )
  }
}

ResumoInput.protoType = {
  handleChange: PropTypes.func.isRequired,
}

export default ResumoInput;
import React  from 'react';
import PropTypes from 'prop-types';

class CargoInput extends React.Component {
  render() {
    const { value, changes } = this.props;
    return (
      <label>
        Cargo:
        <input 
        name='cargo' 
        type='text' 
        value={value}
        onChange={changes}></input>
      </label>
    )
  }
}

CargoInput.protoType = {
  handleChange: PropTypes.func.isRequired,
}

export default CargoInput;
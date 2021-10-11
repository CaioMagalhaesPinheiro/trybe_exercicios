import React  from 'react';
import NameInput from './NameInput';
import EmailInput from './EmailInput';
import CpfInput from './CpfInput';
import EndInput from './EndInput';
import PropTypes from 'prop-types';

class PersonalData extends React.Component {
  render() {
    const { value, changes } = this.props;
    return (
      <fieldset>
        <NameInput value={value.nome} changes={changes}/>
        <EmailInput value={value.email} changes={changes}/>
        <CpfInput value={value.cpf} changes={changes}/>
        <EndInput value={value} changes={changes}/>
      </fieldset>
    )
  }
}

PersonalData.protoType = {
  handleChange: PropTypes.func.isRequired,
}

export default PersonalData;
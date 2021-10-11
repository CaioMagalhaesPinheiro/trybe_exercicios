import React  from 'react';
import ResumoInput from './ResumoInput';
import CargoInput from './CargoInput';
import DescricaoInput from './DescricaoInput';
import PropTypes from 'prop-types';

class JobData extends React.Component {
  render() {
    const { value, changes } = this.props;
    return (
      <fieldset>
        <ResumoInput value={value.resumo} changes={changes}/>
        <CargoInput value={value.cargo} changes={changes}/>
        <DescricaoInput value={value.descricao} changes={changes}/>
      </fieldset>
    )
  }
}

JobData.protoType = {
  handleChange: PropTypes.func.isRequired,
}

export default JobData;
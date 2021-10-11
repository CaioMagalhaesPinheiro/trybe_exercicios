import React from 'react';
import PersonalData from './PersonalData';
import JobData from './JobData';

class Form extends React.Component {
  constructor() {
    super();

    this.handleChange = this.handleChange.bind(this);

    this.state = {
      nome: '',
      email: '',
      cpf: 0,
      endereco: '',
      cidade: '',
      estado: '',
      tipo: '',
      resumo: '',
      cargo: '',
      descricao: '',
    }; 
  }

  handleChange({ target }) {
    const { name } = target
    const value = (target.type === 'checkbox' ? target.checked : target.value);
    this.setState({
      [name]: value,
    });
  }


  render() {
    return (
      <form>
        <PersonalData value={this.state} changes={this.handleChange}/>
        <JobData value={this.state} changes={this.handleChange}/>
      </form>
    )
  }
}

export default Form;
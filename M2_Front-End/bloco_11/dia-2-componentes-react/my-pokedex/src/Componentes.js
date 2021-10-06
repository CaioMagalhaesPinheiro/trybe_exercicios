import React from "react";
import pokemons from "./data";
import PropTypes from 'prop-types';

class ListOfPokemons extends React.Component {
    render() {
      return (
        pokemons.map(({ id, name, type, averageWeight, image }) => <li key={id}>
          <article>
          <h2>{name}</h2>
          <h3>{type}</h3>
          <h3>{averageWeight.value}{averageWeight.measurementUnit}</h3>
          </article>
          <img src={image} alt={name}></img>          
        </li>)
      )
    }
}

ListOfPokemons.propTypes = {
  id: PropTypes.number.isRequired,
  name: PropTypes.string.isRequired,
  type: PropTypes.string.isRequired,
  averageWeight: PropTypes.shape({
    value: PropTypes.number.isRequired,
    measurementUnit: PropTypes.string.isRequired,
  }),
  image: PropTypes.string.isRequired,
};

export default ListOfPokemons;
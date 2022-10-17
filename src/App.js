import React, {useState} from 'react'
import styled, {createGlobalStyle} from 'styled-components'
import PokemonCard from './Components/PokemonCard/PokemonCard';

const GlobalStyles = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }
`
const FlexContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
`
export default function App() {
  
  const [pokemon1, setPokemon1] = useState(
    {
    name: "Pichu",
    type: "Electric",
    evolved: false,
    weight: 2,
    color: 'yellow',
    image: 'https://archives.bulbagarden.net/media/upload/thumb/b/b9/172Pichu.png/250px-172Pichu.png',
    id: 172
  })
  
  const [pokemon2, setPokemon2] = useState({
    name: "Gastly",
    type: "Ghost and Poison",
    evolved: false,
    weight: 0.1,
    color: 'purple',
    image: 'https://archives.bulbagarden.net/media/upload/archive/c/ca/20110622052418%21092Gastly.png',
    id: 92
  })
  
  const evoluirPokemon1 = () => {
    const pokemonEvoluido = {
      ...pokemon1,
      name: "Pikachu",
      evolved: true,
      weight: 6,
      image: "https://archives.bulbagarden.net/media/upload/thumb/0/0d/025Pikachu.png/240px-025Pikachu.png",
      id: 25
    }
    // console.log("Cliquei no botão de evoluir")
    setPokemon1(pokemonEvoluido)
  }
  const evoluirPokemon2 = () => {
    const pokemonEvoluido = {
      ...pokemon2,
      name: "Haunter",
      evolved: true,
      image: "https://archives.bulbagarden.net/media/upload/archive/6/62/20130501065900%21093Haunter.png",
      id: 93
    }
    // console.log("Cliquei no botão de evoluir")
    setPokemon2(pokemonEvoluido)
  }

  // Para fazer seus próximos pokemons, crie novos estados!

  return ( 
  <>
  <GlobalStyles/>
    <FlexContainer>
      {/* Aqui neste componente, passe as props. Lembre-se que também é possivel passar a função de setState via props! */}
      <PokemonCard
      name={pokemon1.name} 
      type={pokemon1.type} 
      evolved={pokemon1.evolved} 
      weight={pokemon1.weight}
      color={pokemon1.color} 
      image={pokemon1.image}
      id={pokemon1.id}
      evoluirPokemon={evoluirPokemon1}
      />
      <PokemonCard
      name={pokemon2.name} 
      type={pokemon2.type} 
      evolved={pokemon2.evolved} 
      weight={pokemon2.weight}
      color={pokemon2.color} 
      image={pokemon2.image}
      id={pokemon2.id}
      evoluirPokemon={evoluirPokemon2}
      />
      {/* Crie aqui seus próximos pokemons! */}
    </FlexContainer>
  </>
    
  );
}

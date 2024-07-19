import React, { useState } from 'react';
import { useLazyQuery } from '@apollo/client';
import { GET_RANDOM_POKEMON } from './query/getPokemonApi.graphql';
import UsersList from './components/UserList'; 
import SelectedUser from './components/SelectedUser'; 
import SelectedPokemon from './components/selectedPokemon'; 
import { Container, Row, Col } from 'react-bootstrap';

function App() {
  const users = [
    { id: 1, name: "Anyelo", country: "Venezuela" },
    { id: 2, name: "Gorge", country: "USA" },
    { id: 3, name: "Luca", country: "Italy" },
    { id: 4, name: "Sofia", country: "Spain" },
    { id: 5, name: "Endreina", country: "South Korea" },
    { id: 6, name: "Alfredo", country: "Egypt" },
    { id: 7, name: "Elias", country: "India" },
    { id: 8, name: "Enderson", country: "Australia" },
    { id: 9, name: "Johel", country: "Morocco" },
    { id: 10, name: "Fernando", country: "Canada" },
    { id: 11, name: "Diana", country: "Mexico" },
    { id: 12, name: "Fria", country: "Sweden" },
  ];

  const [selectedUser, setSelectedUser] = useState(null);
  const [selectedPokemons, setSelectedPokemons] = useState({});
  const [getPokemon, { loading, error, data, refetch }] = useLazyQuery(GET_RANDOM_POKEMON);

  const handleSelectUser = (user) => {
    setSelectedUser(user);
    setSelectedPokemons(prevSelectedPokemons => ({
      ...prevSelectedPokemons,
      [user.id]: prevSelectedPokemons[user.id] || []
    }));
  };

  const handleSelectPokemon = () => {
    if (selectedUser) {
      const userId = selectedUser.id;
      const currentPokemons = selectedPokemons[userId] || [];

      if (currentPokemons.length < 3) {
        if (refetch) {
          refetch()
            .then(response => {
              if (response.data && response.data.getARandomPokemon) {
                const newPokemon = response.data.getARandomPokemon;
                setSelectedPokemons(prevSelectedPokemons => ({
                  ...prevSelectedPokemons,
                  [userId]: [...currentPokemons, newPokemon]
                }));
              }
            })
            .catch(error => {
              console.error('Error fetching Pokemon:', error);
            });
        } else {
          getPokemon();
        }
      } else {
        alert("You can only select up to 3 Pokémon!");
      }
    } else {
      alert("Please select a user first!");
    }
  };

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error: {error.message}</p>;

  return (
    <Container>
      <Row>
        <Col>
          <UsersList users={users} selectedUser={selectedUser} handleSelectUser={handleSelectUser} />
        </Col>
        <Col>
          <SelectedUser selectedUser={selectedUser} handleSelectPokemon={handleSelectPokemon} />
        </Col>
        <Col>
          <SelectedPokemon selectedUser={selectedUser} selectedPokemons={selectedPokemons} />
        </Col>
      </Row>
    </Container>
  );
}

export default App;

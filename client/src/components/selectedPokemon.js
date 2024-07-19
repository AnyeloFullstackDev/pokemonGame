import React from 'react';
import { Card, Table, Badge, Image, Container, Row, Col } from 'react-bootstrap';

const SelectedPokemon = ({ selectedUser, selectedPokemons }) => (
  <Container>
    <Row className="justify-content-center">
      <Col md={12}>
        <Card className="my-3">
          <Card.Body>
            <Card.Title className="text-center">Pokemon Selected</Card.Title>
            {selectedUser && selectedPokemons[selectedUser.id] && selectedPokemons[selectedUser.id].length > 0 && (
              <>
                {(() => {
                  const lastPokemon = selectedPokemons[selectedUser.id][selectedPokemons[selectedUser.id].length - 1];
                  return (
                    <React.Fragment key={lastPokemon.id}>
                      <Table bordered hover size="sm" className="text-center mb-4">
                        <tbody>
                          <tr>
                            <td colSpan={2} className="text-center">
                              <Image 
                                src={lastPokemon.frontImage} 
                                alt={lastPokemon.name} 
                                style={{ width: '150px', height: 'auto' }} 
                                className="mb-4"
                              />
                            </td>
                          </tr>
                          <tr>
                            <th>Name</th>
                            <td>{lastPokemon.name}</td>
                          </tr>
                          <tr>
                            <th>Height</th>
                            <td>{lastPokemon.height}</td>
                          </tr>
                          <tr>
                            <th>Weight</th>
                            <td>{lastPokemon.weight}</td>
                          </tr>
                          <tr>
                            <th>Power</th>
                            <td>{lastPokemon.power}</td>
                          </tr>
                        </tbody>
                      </Table>
                    </React.Fragment>
                  );
                })()}
                <div className="text-center">
                  <h2 className="mb-4">Opponent:</h2>
                  {(() => {
                    const lastPokemon = selectedPokemons[selectedUser.id][selectedPokemons[selectedUser.id].length - 1];
                    return (
                      <Table bordered hover size="sm" className="text-center">
                        <tbody>
                          <tr>
                            <td colSpan={2} className="text-center">
                              <Image 
                                src={lastPokemon.frontImage} 
                                alt={lastPokemon.name} 
                                style={{ width: '150px', height: 'auto' }} 
                                className="mb-4"
                              />
                            </td>
                          </tr>
                          <tr>
                            <th>Name</th>
                            <td>{lastPokemon.name}</td>
                          </tr>
                          <tr>
                            <th>Height</th>
                            <td>{lastPokemon.height}</td>
                          </tr>
                          <tr>
                            <th>Weight</th>
                            <td>{lastPokemon.weight}</td>
                          </tr>
                          <tr>
                            <th>Power</th>
                            <td>{lastPokemon.power}</td>
                          </tr>
                        </tbody>
                      </Table>
                    );
                  })()}
                </div>
              </>
            )}
          </Card.Body>
        </Card>
      </Col>
    </Row>
  </Container>
);

export default SelectedPokemon;

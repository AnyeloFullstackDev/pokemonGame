import React from 'react';
import { Badge, Button, Card, Container, Row, Col, Table } from 'react-bootstrap';

const SelectedUser = ({ selectedUser, handleSelectPokemon }) => (
  <Container>
    <Row className="justify-content-center">
      <Col md={12}>
        <Card className="my-3">
          <Card.Body>
            <Card.Title className="text-center">User Selected</Card.Title>
            {selectedUser && (
              <div className="text-center mb-4">
                <Badge pill variant="success" className="d-block mb-3">
                  <h3>{selectedUser.name}</h3>
                  <p>Country: {selectedUser.country}</p>
                </Badge>
                <div className="d-flex justify-content-center mt-4">
                  <Button 
                    onClick={handleSelectPokemon} 
                    variant="success" 
                    className="mx-2"
                  >
                    Select Pokemon
                  </Button>
                  <Button 
                    variant="danger" 
                    className="mx-2"
                  >
                    Attack
                  </Button>
                </div>
              </div>
            )}
          </Card.Body>
        </Card>
      </Col>
    </Row>
    <Row className="justify-content-center">
        <Col md={12}>
            <Card className="my-3">
                <Card.Body>
                    <Card.Title className="text-center">Battle Table </Card.Title>
                    <Table bordered size="sm" className="text-center mb-4">
                        <tbody>
                          <tr>
                            <td colSpan={2} className="text-center">
                              
                            </td>
                          </tr>
                          <tr>
                            <th>Win</th>
                            <th>Lose</th>
                            <th>Current Life</th>
                          </tr>
                          <tr>
                            <td>{}</td>
                            <td>{}</td>
                            <td>{}</td>
                          </tr>
                          
                        </tbody>
                      </Table>
                </Card.Body>
            </Card>
        </Col>
    </Row>
  </Container>
);

export default SelectedUser;

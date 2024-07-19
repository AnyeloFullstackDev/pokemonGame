import React from 'react';
import { Table, Button, Container, Row, Col, Card } from 'react-bootstrap';

const UsersList = ({ users, selectedUser, handleSelectUser }) => (
  <Container>
    <Row className="justify-content-center">
      <Col md={12}>
        <Card className="my-3">
          <Card.Body>
            <Card.Title className="text-center">Users List</Card.Title>
            <Table striped bordered hover size="sm" className="text-center">
              <thead>
                <tr>
                  <th>Name</th>
                  <th>Country</th>
                  <th>Select</th>
                </tr>
              </thead>
              <tbody>
                {users.map(item => (
                  <tr key={item.id}>
                    <td>{item.name}</td>
                    <td>{item.country}</td>
                    <td>
                      <Button
                        onClick={() => handleSelectUser(item)}
                        variant={selectedUser?.id === item.id ? 'primary' : 'secondary'}
                      >
                        {selectedUser?.id === item.id ? '✔️' : 'Select'}
                      </Button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </Table>
          </Card.Body>
        </Card>
      </Col>
    </Row>
  </Container>
);

export default UsersList;

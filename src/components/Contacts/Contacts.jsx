import React from "react";
import { Card, Button } from "react-bootstrap";

const Contacts = ({contacts, handleDelete, handleEdit}) => {
  console.log(Array.isArray(contacts))
  console.log(contacts)
  return <div className="d-flex justify-content-between container mt-5">
    {contacts.map((item,index) =>(
      <Card style={{ width: '18rem' }} key={item.id}>
      <Card.Img variant="top" src={item.img} />
      <Card.Body>
        <Card.Title>{item.name}</Card.Title>
        <Card.Text>
          {item.number}
        </Card.Text>
        <Card.Text>
          {item.email}
        </Card.Text>
        <Button onClick={() => handleDelete(item.id)} variant="danger" className="me-1">DELETE</Button>
        <Button onClick={() => handleEdit(index)} variant="primary" className="me-1">EDIT</Button>
        <Button variant="success">CALL</Button>
      </Card.Body>
    </Card>
      ))}
  </div>;
};

export default Contacts;

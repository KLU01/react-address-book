import React from 'react';
import ListGroup from 'react-bootstrap/ListGroup';
import Card from 'react-bootstrap/Card';

function ListAddresses (props) {
  let address = [...props.address];
  let items = address.map((item) =>
    <ListGroup.Item key={item.key}>
      <Card className="bg-light border rounded">
        <Card.Body className="text-left">
          <h5>{item.FirstName} {item.LastName}</h5>
          {item.Birthday === undefined ? <p>Birthday: N/A</p> : <p>Birthday: {item.Birthday}</p>}
          {item.Telephone === undefined ? <p>Telephone: N/A</p> : <p>Telephone: {item.Telephone}</p>}
        </Card.Body>
      </Card>
    </ListGroup.Item>)
  return items;
}
export default ListAddresses;

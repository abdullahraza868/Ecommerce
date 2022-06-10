import React from "react";
import { Card } from "react-bootstrap";

const Items = (props) => {
  let { imgsrc, title, price } = props;
  return (
    <div>
      <Card>
        <Card.Img variant="top" src={imgsrc} />
        <Card.Body>
          <Card.Title>{title}</Card.Title>
          <Card.Text>Price : RS: {price}</Card.Text>
        </Card.Body>
      </Card>
    </div>
  );
};

export default Items;

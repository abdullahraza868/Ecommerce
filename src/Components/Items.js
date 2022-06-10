import React from "react";
import { Card, Button } from "react-bootstrap";

const Items = (props) => {
  let { imgsrc, title, price } = props;
  return (
    <div>
      <Card style={{height: "400px", marginTop: "50px"}}>
        <Card.Img style={{height: "250px"}} variant="top" src={imgsrc} />
        <Card.Body>
          <Card.Title>{title}</Card.Title>
          <Card.Text>Price : RS: {price}</Card.Text>
          <div className="d-grid gap-2">
          <Button variant="primary" size="sm">
            Add to Cart
          </Button>
          </div>
        </Card.Body>
      </Card>
    </div>
  );
};

export default Items;

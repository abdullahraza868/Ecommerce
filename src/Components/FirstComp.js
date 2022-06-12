import React from "react";
import { Card, Button } from "react-bootstrap";
import { useDispatch } from "react-redux";
import { ADD } from "../Redux/Action/action";


const FirstComp = () => {

  const cards = [
    {
      title: "Chicken Fajita",
      imgsrc: "fajita.jpg",
      price: "7"

    },
    {
      title: "Chicken Tikka",
      imgsrc: "tikka.jpg",
      price: "9"

    },
    {
      title: "Cheese Lover",
      imgsrc: "cheese.jpg",
      price: "11"

    },
    {
      title: "Big Bang Burger",
      imgsrc: "bigbang.jpg",
      price: "6"

    },
    {
      title: "Ranchers Burger",
      imgsrc: "rancher.jpg",
      price: "7"

    },
    {
      title: "Stinger Burger",
      imgsrc: "stinger.jpg",
      price: "9"

    },
    {
      title: "BBQ Tikka",
      imgsrc: "tikkaboti.jpg",
      price: "3 / 6pcs"

    },
    {
      title: "Malai Boti",
      imgsrc: "malaiboti.jpg",
      price: "4 / 6pcs"

    },
    {
      title: "Chicken Kabab",
      imgsrc: "kabab.jpg",
      price: "2 / 1pc"

    },

  ];
  const dispatch = useDispatch();

  const send = (e) => {
    dispatch(ADD(e));
  }
  return (
    <>
      <div>
        <h2 style={{ marginTop: "40px" }}>MENU</h2>
        <div className="container">
          <div className="row my-4">
            {
            cards.map((cards, index) => {
              return (

                <div key={index} className="col-md-4">
                  <Card style={{ height: "400px", marginTop: "50px" }}>
                    <Card.Img style={{ height: "250px" }} variant="top" src={cards.imgsrc} />
                    <Card.Body className="text-start">
                      <Card.Title>{cards.title}</Card.Title>
                      <Card.Text>Price : <strong>$ {cards.price}</strong></Card.Text>
                      <div className="d-grid gap-2">
                        <Button onClick={() => send(cards)} variant="primary" size="sm">
                          Add to Cart
                        </Button>
                      </div>
                    </Card.Body>
                  </Card>

                </div>
              );
            })}
          </div>
        </div>
      </div>
    </>
  );
};

export default FirstComp;

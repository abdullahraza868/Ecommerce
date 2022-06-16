import React from "react";
import { Card, Button } from "react-bootstrap";
import { useDispatch } from "react-redux";
import { ADD } from "../Redux/Action/action";
import { useState } from "react";
import Alert from "./Alert";


export const FirstComp = (props) => {

  const cards = [
    {
      id: 1,
      title: "Chicken Fajita",
      imgsrc: "fajita.jpg",
      price: 7,
      quantity: 1,
      restaurant: "Pizza Lounge"

    },
    {
      id: 2,
      title: "Chicken Tikka",
      imgsrc: "tikka.jpg",
      price: 9,
      quantity: 1,
      restaurant: "Papa Jons"

    },
    {
      id: 3,
      title: "Cheese Lover",
      imgsrc: "cheese.jpg",
      price: 11,
      quantity: 1,
      restaurant: "Pizza Junction"

    },
    {
      id: 4,
      title: "Big Bang Burger",
      imgsrc: "bigbang.jpg",
      price: 6,
      quantity: 1,
      restaurant: "Burger Lab"

    },
    {
      id: 5,
      title: "Ranchers Burger",
      imgsrc: "rancher.jpg",
      price: 7,
      quantity: 1,
      restaurant: "Ranchers"

    },
    {
      id: 6,
      title: "Stinger Burger",
      imgsrc: "stinger.jpg",
      price: 9,
      quantity: 1,
      restaurant: "Howdy"

    },
    {
      id: 7,
      title: "BBQ Tikka",
      imgsrc: "tikkaboti.jpg",
      price: 3,
      quantity: 1,
      restaurant: "Bundu Khan"

    },
    {
      id: 8,
      title: "Malai Boti",
      imgsrc: "malaiboti.jpg",
      price: 4,
      quantity: 1,
      restaurant: "Banera"

    },
    {
      id: 9,
      title: "Chicken Kabab",
      imgsrc: "kabab.jpg",
      price: 2,
      quantity: 1,
      restaurant: "Zee Grill"

    },

  ];
  const dispatch = useDispatch();

  const [showAlert, setShowAlert] = useState(false);

  const show = () => {
    setShowAlert(true);
    setTimeout(() => {
      setShowAlert(false);
    }, 1500);
  }

  const send = (e) => {
    show()
    dispatch(ADD(e));
  }



  return (
    <>
      <div>
        <div>
          {showAlert &&
            <Alert title= "Item added to Cart"/>
          }
        </div>

        <h2 style={{ marginTop: "40px" }}>MENU</h2>
        <div className="container">
          <div className="row my-4">
            {
              cards.map((cards, id) => {
                return (

                  <div key={id} className="col-md-4">
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

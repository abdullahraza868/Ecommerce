import React from "react";
import Items from "./Items";

const FirstComp = (props) => {
  const cards = [
    {
      title: "Chicken Fajita",
      imgsrc: "fajita.jpg",
      price: "1000"

    },
    {
      title: "Chicken Tikka",
      imgsrc: "tikka.jpg",
      price: "1200"

    },
    {
      title: "Cheese Lover",
      imgsrc: "cheese.jpg",
      price: "1300"

    },
    {
      title: "Big Bang Burger",
      imgsrc: "bigbang.jpg",
      price: "600"

    },
    {
      title: "Ranchers Burger",
      imgsrc: "rancher.jpg",
      price: "800"

    },
    {
      title: "Stinger Burger",
      imgsrc: "stinger.jpg",
      price: "700"

    },
    {
      title: "BBQ Tikka",
      imgsrc: "tikkaboti.jpg",
      price: "500 / 6pcs"

    },
    {
      title: "Malai Boti",
      imgsrc: "malaiboti.jpg",
      price: "700 / 6pcs"

    },
    {
      title: "Chicken Kabab",
      imgsrc: "kabab.jpg",
      price: "200 / 1pc"

    },

  ];
  return (
    <>
      <div>
        <div className="container">
          <div className="row my-4">
            {cards.map((cards) => {
              return (
                <div className="col-md-4">
                  <Items title = {cards.title} imgsrc = {cards.imgsrc} price = {cards.price}/>
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

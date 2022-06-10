import React from "react";
import Items from "./Items";

const FirstComp = (props) => {
  const cards = [1, 2, 3, 4, 5, 6, 7, 8, 9];
  return (
    <>
      <div>
        <div className="container">
          <div className="row my-4">
            {cards.map((cards) => {
              return (
                <div className="col-md-4">
                  <Items title="Chiken tikka" />
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

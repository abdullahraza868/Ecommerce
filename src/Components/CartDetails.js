import React from 'react'
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Container from "react-bootstrap/Container";
import { useSelector } from "react-redux";
import { useParams } from 'react-router-dom';
import { useEffect, useState } from "react";


export const CartDetails = () => {

  const [data, setData] = useState([])
  const { id } = useParams();

  const fetchData = useSelector((state) => state.cartred.carts);
  
  const totalPrice = data.reduce((acc, item) => acc + item.price, 0)

  const comp = () => {
    let compData = fetchData.filter((e) => {
      return e.id == id
    });
    setData(compData);
  }

  const remove = (index) => {
    setData((compData) => compData.filter((item) => item.id !== index));
  }

  useEffect(() => {
    comp();
  }, [id])


  return (
    <div>
      {
        fetchData.length ?
          <div>
            <h3>Items Details In Cart</h3>
            {
              data.map((el) => {

                return (
                  <>
                    <Container className="container mt-3 mt-5 p-3 shadow p-3 mb-5 bg-body rounded">
                      <Row md={4} className="cart-details align-items-center">
                        <Col className="img-container">
                          <img height="200px" width="300px" src={`/${el.imgsrc}`} alt="img of food" />
                        </Col>

                        <Col className="restu-details" style={{ marginLeft: "120px" }}>

                          <p><b>Restaurant: </b>{el.restaurant}</p>
                          <p><b>Price: </b> ₹{el.price}</p>
                          <p><b>Dishes: </b>{el.title}</p>
                          <p><b>Total: </b>₹ {totalPrice}</p>
                        </Col>
                        <Col>

                          <p><b>Rating : </b> <span style={{ backgroundColor: "green", color: "#fff", padding: "2px 5px", borderRadius: "5px" }}>3.5 ★</span></p>
                          <p><b>Order review : </b> <span>1175 + order<br /> placed from here recently</span></p>
                          <p><b>Remove : </b> <button onClick={() => remove(el.id)} style={{ border: "none", background: "none" }}><img src="/trash.png" alt="trash" style={{ cursor: "pointer", height: "4vh", width: "3vh" }} /></button></p>
                        </Col>

                      </Row>
                    </Container>
                  </>
                )
              })
            }
          </div> :


          <Container>
            <div className="container text-center">
              <h1>Your cart is Empty</h1>
              <img height="40%" width="40%" src="/cartgif.gif" alt="cart" />
            </div>
          </Container>

      }
    </div >
  )
}
export default CartDetails
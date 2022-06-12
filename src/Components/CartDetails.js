import React from 'react'
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Container from "react-bootstrap/Container";
import { useSelector } from "react-redux";
import { useParams } from 'react-router-dom';
import { useEffect, useState } from "react";

export const CartDetails = () => {

  const [data, setData] = useState([])
  const {id} = useParams();

  const fetchData = useSelector((state) => state.cartred.carts);

  const compare= ()=>{
      let compareData = fetchData.filter((e)=>{
        return e.id === id;
      });
      setData(compareData);
  }

  useEffect(() => {
    compare()
  }, [id])

  return (
    <div>
      <h3>Items Details In Cart</h3>



      {
        data.map((el) => {
    
          return (
            
            <Container className="container mt-3 mt-5 p-3 shadow p-3 mb-5 bg-body rounded">
              <Row md={4} className="cart-details align-items-center">
                <Col className="img-container">
                  <img height="200px" width="300px" src="tikka.jpg" alt="img of food" />
                </Col>

                <Col className="restu-details" style={{ marginLeft: "120px" }}>

                  <p><b>Restaurant: </b></p>
                  <p><b>Price: </b> ₹350</p>
                  <p><b>Dishes: </b>North Indian, Biryani, Mughlai</p>
                  <p><b>Total: </b>₹ 350</p>
                </Col>
                <Col>

                  <p><b>Rating : </b> <span style={{ backgroundColor: "green", color: "#fff", padding: "2px 5px", borderRadius: "5px" }}>3.5 ★</span></p>
                  <p><b>Order review : </b> <span>1175 + order<br /> placed from here recently</span></p>
                  <p><b>Remove : </b> <span><img src="trash.svg" alt="trash" style={{ cursor: "pointer" }} /></span></p>
                </Col>

              </Row>
            </Container>
          )
        })
      }
    
    </div >
  )
}
export default CartDetails
import React, { useEffect, useState } from "react";
import { Navbar, Nav, Container, Dropdown, Row, Col, Badge } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import { useSelector } from "react-redux";
import { Link } from 'react-router-dom'


const NavBar = (props) => {

  const fetchData = useSelector((state) => state.cartred.carts);
  const [data, setData] = useState(fetchData)
  const totalPrice = data.reduce((acc, item) => acc + item.price, 0)

  const remove = (index) => {
    setData((fetchData) => fetchData.filter((item) => item.id !== index));
  }

  useEffect(() => {
    setData(fetchData)
  }, [fetchData])
  // console.log(data)


  return (
    <div>
      <Navbar bg="dark" variant="dark">
        <Container>
          <Navbar.Brand ><Link style={{ textDecoration: "none", color: "#fff" }} to="/">Banera</Link></Navbar.Brand>
          <Nav className="me-auto d-flex align-items-center">
            <Link style={{ textDecoration: "none", color: "#fff" }} to="/">Home</Link>

          </Nav>
        </Container>

        <Dropdown align="end">
          <div className="container">
            <Dropdown.Toggle variant="white" id="dropdown-basic">
              <img src="cart.png" width="45vh" height="45vh" alt="cart logo"/><Badge pill bg="success">{data.length}</Badge>
            </Dropdown.Toggle>

            <Dropdown.Menu style={{width: "65vh", borderRadius: "10px", boxShadow: "0 3px 10px 3px rgb(0 0 0 / 0.2)" }}>
              {
                data.length ?
                  <Container style={{height: "70vh", width: "60vh" ,overflow: "auto", paddingTop: "2vh"}}>
                    <Row style={{ borderBottom: "2px solid black", paddingBottom: "2vh" }}>
                      <Col><strong style={{paddingLeft: "3vh"}}>Photo</strong></Col>
                      <Col><strong>Items Name</strong></Col>
                    </Row>
                    {
                      data.map((e) => {
                        return (
                          <>
                            <Row className="pb-5 pt-2 mb-2 shadow bg-body rounded">
                              <Col><Link to={`/cart/${e.id}`}><img width="100px" height="100px" src={e.imgsrc} /></Link></Col>
                              <Col>
                                <Row>{e.title}</Row>
                                <Row className="mt-3">Price: ${e.price}</Row>
                                <Row className="mt-3">Quantity: {e.quantity}</Row>

                              </Col>
                              <Col xs lg="2"><button onClick={() => remove(e.id)} style={{ border: "none", background: "none" }}><img src="trash.png" alt="trash" style={{ cursor: "pointer", height: "4vh", width: "3vh" }} /></button></Col>
                            </Row>
                          </>
                        )
                      })

                    }

                    <div style={{ paddingTop: "15px" }}>
                      <h4 style={{ borderTop: "2px solid #D3D3D3" }} className="p-3">Total: $ {totalPrice}</h4>
                    </div>

                  </Container> :



                  <Container>
                    <div className="container text-center">
                      <h3>Your cart is Empty</h3>
                      <img height="40%" width="40%" src="cartgif.gif" alt="cart" />
                    </div>
                  </Container>


              }

            </Dropdown.Menu>
          </div>
        </Dropdown>



      </Navbar>
    </div>
  );
};

export default NavBar;

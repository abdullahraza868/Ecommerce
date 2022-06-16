import React, {useEffect, useState} from "react";
import { Navbar, Nav, Container, Dropdown, Row, Col, NavLink } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import { useSelector } from "react-redux";
import { ADD } from "../Redux/Action/action";


const NavBar = (props) => {

  const fetchData = useSelector((state) => state.cartred.carts);
  const [data, setData] = useState(fetchData)
  const totalPrice = data.reduce((acc,item)=> acc + item.price,0)
  const remove = (index) =>{
    console.log(fetchData)
    setData((fetchData) => fetchData.filter((item) => item.id !== index));

    console.log(data)
  }

 useEffect(()=>{
  setData(fetchData)
 },[fetchData])

 
  
  return (
    <div>
      <Navbar bg="dark" variant="dark">
        <Container>
          <Navbar.Brand href="/">Banera</Navbar.Brand>
          <Nav className="me-auto d-flex align-items-center">
            <Nav.Link href="/">Home</Nav.Link>

          </Nav>
        </Container>

        <Dropdown align="end">
          <div className="container">
            <Dropdown.Toggle variant="white" id="dropdown-basic">
              <img src="cart.png" width="30" height="30" alt="cart logo" />{<span className="position-absolute top-0 start-90 translate-middle badge rounded-pill bg-dark">{data.length}</span>}
            </Dropdown.Toggle>

            <Dropdown.Menu style={{ width: "400px", borderRadius: "10px" }}>
              {
                data.length ?
                  <Container className="p-3">
                    <Row style={{ borderBottom: "2px solid black" }}>
                      <Col><p><strong>Photo</strong></p></Col>
                      <Col xs={12} md={8}><p><strong>Items Name</strong></p></Col>
                    </Row>
                    {
                      data.map((e) => {
                        return (
                          <>
                            <Row className="pb-5 pt-2 mb-2 shadow bg-body rounded" >
                              <Col><NavLink href={`/cart/${e.id}`}><img width="100px" height="100px" src={e.imgsrc} /></NavLink></Col>
                              <Col>
                                <Row>{e.title}</Row>
                                <Row className="mt-3">Price: ${e.price}</Row>
                                <Row className="mt-3">Quantity: {e.quantity}</Row>

                              </Col>
                              <Col xs lg="2"><button  onClick={()=> remove(e.id)}  style={{border: "none"}}><img src="trash.svg" alt="trash" style={{ cursor: "pointer" }} /></button></Col>
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

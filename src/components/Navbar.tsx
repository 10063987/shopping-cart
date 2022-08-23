import React from "react";
import { Button, Container, Nav, Navbar as NavbarBs } from "react-bootstrap";
import { NavLink } from "react-router-dom";
import { useShoppingCart } from "../context/shoppingContext";



export function Navbar() {
    const { cartQuantity, openCart } = useShoppingCart()

    return (
        <>
            <NavbarBs sticky="top" className='bg-white shadow-sm mb-3'>
                <Container>
                    <Nav className='me-auto'>
                        <Nav.Link as={NavLink} to={'/'}>
                            Home
                        </Nav.Link>
                        <Nav.Link as={NavLink} to={'/store'}>
                            Store
                        </Nav.Link>
                        <Nav.Link as={NavLink} to={'/about'}>
                            About
                        </Nav.Link>
                    </Nav>

                    {cartQuantity > 0 && (
                        <Button onClick={() => openCart()} style={{ width: "3rem", height: "3rem", position: "relative" }} variant="outline-primary" className={'rounded-circle'}>
                            <svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 576 512'>
                                <path d='M0 24C0 10.75 10.75 0 24 0H96C107.5 0 117.4 8.19 119.6 19.51L121.1 32H312V134.1L288.1 111C279.6 101.7 264.4 101.7 255 111C245.7 120.4 245.7 135.6 255 144.1L319 208.1C328.4 218.3 343.6 218.3 352.1 208.1L416.1 144.1C426.3 135.6 426.3 120.4 416.1 111C407.6 101.7 392.4 101.7 383 111L360 134.1V32H541.8C562.1 32 578.3 52.25 572.6 72.66L518.6 264.7C514.7 278.5 502.1 288 487.8 288H170.7L179.9 336H488C501.3 336 512 346.7 512 360C512 373.3 501.3 384 488 384H159.1C148.5 384 138.6 375.8 136.4 364.5L76.14 48H24C10.75 48 0 37.25 0 24V24zM224 464C224 490.5 202.5 512 176 512C149.5 512 128 490.5 128 464C128 437.5 149.5 416 176 416C202.5 416 224 437.5 224 464zM416 464C416 437.5 437.5 416 464 416C490.5 416 512 437.5 512 464C512 490.5 490.5 512 464 512C437.5 512 416 490.5 416 464z' />
                            </svg>
                            <div className="rounded-circle bg-danger d-flex justify-content-center align-items-center" style={{ color: "white", width: "1.5rem", height: "1.5rem", position: "absolute", bottom: 0, right: 0, transform: "translate(25%, 25%" }} >
                                {cartQuantity}
                            </div>
                        </Button>
                    )}
                </Container>
            </NavbarBs>
        </>
    )
}
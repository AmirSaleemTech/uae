"use client"
import Head from 'next/head';
import Link from 'next/link';
import { Container, Nav, Navbar, NavDropdown } from 'react-bootstrap';
import styles from '@/app/styles/mainnav.module.css';

export default function MainNav() {
  return (
    <>
      <Head>
        <title>Navbar Example</title>
      </Head>

      <Navbar collapseOnSelect expand="lg" bg="light" variant="light">
        <Container>
          <Link href=" " passHref>
            <Navbar.Brand><img src='/logo.png' width='100px' height='70px' /></Navbar.Brand>
          </Link>

          <Navbar.Toggle aria-controls="responsive-navbar-nav" />
          <Navbar.Collapse id="responsive-navbar-nav">
            <Nav className="me-auto">
              
                <Nav.Link><Link href=" " passHref>Home</Link></Nav.Link>
              
              <Link href="#" passHref>
                <Nav.Link>Musandam Trip</Nav.Link>
              </Link>
              <NavDropdown title="VIP DESERT ADVENTURE" id="collasible-nav-dropdown">
                <Link href="#" passHref>
                  <NavDropdown.Item>Package1</NavDropdown.Item>
                </Link>
                <Link href="" passHref>
                  <NavDropdown.Item>Package1</NavDropdown.Item>
                </Link>
                <Link href="" passHref>
                  <NavDropdown.Item>Package1</NavDropdown.Item>
                </Link>
                <Link href="" passHref>
                  <NavDropdown.Item>Package1</NavDropdown.Item>
                </Link>
                
                <Link href="" passHref>
                  <NavDropdown.Item>Package1</NavDropdown.Item>
                </Link>
                <Link href="" passHref>
                  <NavDropdown.Item>Package1</NavDropdown.Item>
                </Link><Link href="" passHref>
                  <NavDropdown.Item>Package1</NavDropdown.Item>
                </Link><Link href="" passHref>
                  <NavDropdown.Item>Package1</NavDropdown.Item>
                </Link><Link href="" passHref>
                  <NavDropdown.Item>Package1</NavDropdown.Item>
                </Link><Link href="" passHref>
                  <NavDropdown.Item>Package1</NavDropdown.Item>
                </Link>
              </NavDropdown>
              <NavDropdown title="CITY TOUR" id="collasible-nav-dropdown">
                <Link href="#" passHref>
                  <NavDropdown.Item>Package1</NavDropdown.Item>
                </Link>
                <Link href="" passHref>
                  <NavDropdown.Item>Package1</NavDropdown.Item>
                </Link>
                <Link href="" passHref>
                  <NavDropdown.Item>Package1</NavDropdown.Item>
                </Link>
                <Link href="" passHref>
                  <NavDropdown.Item>Package1</NavDropdown.Item>
                </Link>
                
                
              </NavDropdown>
            </Nav>
            <Nav>
              
                <Nav.Link eventKey={2}> <Link href="gallary" passHref> Gallary </Link> </Nav.Link>
              
              
                <Nav.Link eventKey={2}> <Link href="" passHref>Dhow Cruise Dubai</Link></Nav.Link>
              
              
                <Nav.Link eventKey={2}><Link href="/AboutUs" passHref>About us</Link></Nav.Link>
              
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
      
    </>
  );
}

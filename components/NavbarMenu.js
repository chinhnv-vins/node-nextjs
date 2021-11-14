import Navbar from 'react-bootstrap/Navbar'
import Nav from 'react-bootstrap/Nav'

const NavbarMenu = () => (
    <Navbar bg='dark' variant='dark'>
        <Navbar.Brand>Hello World</Navbar.Brand>
        <Nav>
            <Nav.Link href="/">Home</Nav.Link>
            <Nav.Link href="/about">About Us</Nav.Link>
            <Nav.Link href="/posts">Posts</Nav.Link>
            <Nav.Link href="/products">Product</Nav.Link>
            <Nav.Link href="/contact">Contact Us</Nav.Link>
        </Nav>
    </Navbar>
)
export default NavbarMenu
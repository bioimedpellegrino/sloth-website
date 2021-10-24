import { ReactComponent as DiscordLogo } from '../../static/discord.svg';
import { ReactComponent as TwitterLogo } from '../../static/twitter.svg';
import { ReactComponent as OpenseaLogo } from '../../static/opensea.svg';

import { Nav, Navbar, Container } from 'react-bootstrap';

import './navbar.css';

function Menu(){
    return(
        <Navbar collapseOnSelect expand="lg" bg="white" variant="light">
        <Container>
        <Navbar.Brand href="#home" className="text-black">SLOFF</Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav"  className="justify-content-center">
            <Nav>
                <Nav.Link href="#features">LEARN</Nav.Link>
                <Nav.Link href="#pricing">RARITY</Nav.Link>
                <Nav.Link href="#pricing">ROADMAP</Nav.Link>
                <Nav.Link href="#pricing">FAQ</Nav.Link>
                <Nav.Link href="#pricing">HOW TO MINT</Nav.Link>
                <Nav.Link href="#pricing">COLLECTION</Nav.Link>
            </Nav>
        </Navbar.Collapse>
        <Nav>
            <Nav.Link href="#deets"><DiscordLogo/></Nav.Link>
            <Nav.Link href="#deets"><TwitterLogo/></Nav.Link>
            <Nav.Link href="#deets"><OpenseaLogo/></Nav.Link>
        </Nav>
        </Container>
        </Navbar>
    );
}

export default Menu;
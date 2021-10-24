import { ReactComponent as DiscordLogo } from '../../static/discord.svg';
import { ReactComponent as TwitterLogo } from '../../static/twitter.svg';
import { ReactComponent as OpenseaLogo } from '../../static/opensea.svg';
import { ReactComponent as SlothLogo } from '../../static/Logo_Sloff.svg';


import { Nav, Navbar, Container } from 'react-bootstrap';

import './navbar.css';

function Menu(){
    return(
        <Navbar collapseOnSelect expand="lg" bg="white" variant="light">
        <Container>
        <Navbar.Brand href="#home" className="text-black"><SlothLogo/></Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav"  className="justify-content-center">
            <Nav style={{fontWeight: 'bold'}}>
                <Nav.Link href="#learn">LEARN</Nav.Link>
                <Nav.Link href="#rarity">RARITY</Nav.Link>
                <Nav.Link href="#roadmap ">ROADMAP</Nav.Link>
                <Nav.Link href="#faq">FAQ</Nav.Link>
                <Nav.Link href="#howtomint">HOW TO MINT</Nav.Link>
                <Nav.Link href="#collection">COLLECTION</Nav.Link>
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
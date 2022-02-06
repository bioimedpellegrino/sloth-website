import { ReactComponent as DiscordLogo } from '../../static/discord.svg';
import { ReactComponent as TwitterLogo } from '../../static/twitter.svg';
import { ReactComponent as OpenseaLogo } from '../../static/opensea.svg';
import { ReactComponent as SlothLogo } from '../../static/Logo_Sloff.svg';

import MetaMaskConnectButton from '../metamask_button/metamask_button';

import { Nav, Navbar, Container } from 'react-bootstrap';

import './navbar.css';

function Menu(){
    return(
        <Navbar collapseOnSelect expand="lg" bg="white" variant="light">
        <Container>
        <Navbar.Brand href="https://slophy.tech" target="_blank" className="text-black"><SlothLogo/></Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav"  className="justify-content-center">
            <Nav style={{fontWeight: 'bold'}}>
                <Nav.Link><MetaMaskConnectButton /></Nav.Link>
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
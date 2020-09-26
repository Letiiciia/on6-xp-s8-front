import React from 'react';
import { Navbar, Nav, NavbarBrand, NavLink} from 'react-bootstrap';

const Header = () => {
    
    return(
        <Navbar bg="dark" variant="dark"  className="justify-content-between">
            <NavbarBrand  className="text-sucess" href="/"> Reprogramafy</NavbarBrand>
            <Nav className="row justify-content-end mr-5" activeKey="/">
                <NavLink href="/">Home</NavLink>
                <NavLink href="/musicas">Músicas</NavLink>
                <NavLink href="/artistas">Artistas</NavLink>
                <NavLink href="/albuns">Albuns</NavLink>
            </Nav>
        </Navbar>
    )
}

export default Header

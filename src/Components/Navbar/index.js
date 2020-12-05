import { Nav, NavLink, Bars, NavMenu, NavBtn, NavBtnLink } from './NavbarElements'


const Navbar = () => {
    return (
        <>
            <Nav>
                <NavLink to="/">
                    <h1>Logo</h1>
                </NavLink>
                <Bars />
                <NavMenu>
                    <NavLink to="/about" activeStyle>About</NavLink>
                    <NavLink to="/foldertree" activeStyle>FolderTree</NavLink>
                    <NavLink to="/users" activeStyle>Users</NavLink>
                </NavMenu>
                <NavBtn>
                    <NavBtnLink to="login">Log In</NavBtnLink>
                </NavBtn>
            </Nav>
        </>
    )
}

export default Navbar;
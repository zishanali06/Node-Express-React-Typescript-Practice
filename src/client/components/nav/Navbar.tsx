import * as React from 'react';
import { NavLink } from 'react-router-dom';

export interface NavbarProps {

}

export interface NavbarState {

}

class Navbar extends React.Component<NavbarProps, NavbarState> {
    constructor(props: NavbarProps) {
        super(props);

    }
    render() {
        return (
            <nav className="navbar navbar-light bg-primary">
                <NavLink to="/" className="navbar-brand mb-0 h1">Book Store</NavLink>
                <NavLink to="/new" className="navbar-brand mb-0 h1">Add New Blog</NavLink>
            </nav>
        );
    }
}

export default Navbar;
import * as React from 'react';
import { NavLink, Redirect, withRouter, RouteComponentProps } from 'react-router-dom';
import { Logout } from '../../utils/api';

export interface NavbarProps extends RouteComponentProps {

}

export interface NavbarState {

}

class Navbar extends React.Component<NavbarProps, NavbarState> {
    constructor(props: NavbarProps) {
        super(props);
    }

    handleLogout = (e: React.MouseEvent<HTMLButtonElement>) => {
        e.preventDefault();
        Logout();
        this.props.history.push('/');
    }

    render() {
        return (
            <nav className="navbar navbar-light bg-primary">
                <NavLink to="/" className="navbar-brand mb-0 h1">Book Store</NavLink>
                <NavLink to="/new" className="navbar-brand mb-0 h1">Add New Book</NavLink>
                <button className="btn btn-danger" onClick={this.handleLogout}>Logout</button>
            </nav>
        );
    }
}

export default withRouter(Navbar);
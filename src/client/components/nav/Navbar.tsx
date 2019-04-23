import * as React from 'react';

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
                <span className="navbar-brand mb-0 h1">Book Store</span>
            </nav>
        );
    }
}

export default Navbar;
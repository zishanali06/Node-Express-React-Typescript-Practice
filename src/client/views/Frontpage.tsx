import * as React from 'react';
import { Link } from 'react-router-dom';

export interface FrontpageProps {
    
}

export interface FrontpageState {
    
}

class Frontpage extends React.Component<FrontpageProps, FrontpageState> {
    constructor(props: FrontpageProps) {
        super(props);
        
    }
    render() { 
        return ( 
            <section className="row d-flex justify-content-between mt-3">
                <Link to="/books" className="btn btn-primary">View Books</Link>
                <Link to="/login" className="btn btn-primary">Login</Link>
                <Link to="/register" className="btn btn-primary">Register</Link>
            </section>
        );
    }
}

export default Frontpage;
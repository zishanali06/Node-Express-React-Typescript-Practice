import * as React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

import './scss/app';
import Navbar from './components/nav/Navbar';
import Booklist from './components/views/Booklist';

export default class App extends React.Component<IAppProps, IAppState> {

    constructor(props: IAppProps) {
        super(props);

        this.state = { name: null };
    }

    async componentWillMount() {
        let r = await fetch('/api/hello');
        let name = await r.json();
        this.setState({ name })
    }

    render () {
        return (
                <Router>   
                    <Navbar />
                    <Switch>
                        <Route exact path="/" component={Booklist} />
                    </Switch>
                </Router>
        )
    }
}

interface IAppProps {

}

interface IAppState {
    name: string;
}
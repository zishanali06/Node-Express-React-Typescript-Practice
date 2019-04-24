import * as React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

import './scss/app';
import Navbar from './components/nav/Navbar';
import Booklist from './views/Booklist';
import Frontpage from './views/Frontpage';

export default class App extends React.Component<IAppProps, IAppState> {

    constructor(props: IAppProps) {
        super(props);

        this.state = { name: null };
    }

    async componentWillMount() {

    }

    render() {
        return (
            <Router>
                <Navbar />
                <main className="container">
                    <Switch>
                        <Route exact path="/" component={Frontpage} />
                        <Route exact path="/books" component={Booklist} />
                        {/* <Route exact path="/books/:id" component={Bookcard} /> */}
                    </Switch>
                </main>
            </Router>
        )
    }
}

interface IAppProps {

}

interface IAppState {
    name: string;
}
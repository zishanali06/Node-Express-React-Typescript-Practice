import * as React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

import './scss/app';
import Navbar from './components/nav/Navbar';
import Booklist from './views/Booklist';
import Frontpage from './views/Frontpage';
import Singlebook from './views/Singlebook';
import Editbook from './views/Editbook';
import Addbook from './views/Addbook';

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
                        <Route exact path="/books/:id" component={Singlebook} />
                        <Route exact path="/edit/:id" component={Editbook} />
                        <Route exact path="/new" component={Addbook} />
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
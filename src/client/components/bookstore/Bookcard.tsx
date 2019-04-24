import * as React from 'react';
import { RouteComponentProps } from 'react-router';

export interface BookcardProps{
    book: {
        id: number,
        category: string,
        title: string,
        author: string,
        price: any
    }

}

export interface BookcardState {

}

class Bookcard extends React.Component<BookcardProps, BookcardState> {
    constructor(props: BookcardProps) {
        super(props);

    }

    render() {
        return (<>
            <section className="card">
                <section className="card-body">
                    <h5 className="card-title">{this.props.book.title}</h5>
                    <h6 className="card-subtitle mb-2 text-muted">{this.props.book.category}</h6>
                    <p className="card-text">{this.props.book.author}</p>
                    <a href="#" className="card-link">Card link</a>
                    <a href="#" className="card-link">Another link</a>
                </section>
            </section>
        </>);
    }
}

export default Bookcard;
import * as React from 'react';
import {json} from '../utils/api';
import Bookcard from '../components/bookstore/Bookcard';

export interface BooklistProps {
    
}

export interface BooklistState {
    books: [{
        id: number,
        category: string,
        title: string,
        author: string,
        price: any
    }];
}

class Booklist extends React.Component<BooklistProps, BooklistState> {
    constructor(props: BooklistProps) {
        super(props);
        this.state = {
            books: [{
                id: null,
                category: null,
                title: null,
                author: null,
                price: null
            }]
        }
    }

    async componentDidMount(){
        let books = await json('/api/books');
        this.setState({ books });
    }

    render() { 
        return ( 
            <>
            <section className="row d-flex justify-content-between mt-3">
                <h1>Book Page</h1>
            </section>
            <section className="row d-flex justify-content-between mt-3">
            {this.state.books.map((book) => {
                return <Bookcard book={book} key={book.id} />
            })}
        </section>
        </>
        );
    }
}

export default Booklist;
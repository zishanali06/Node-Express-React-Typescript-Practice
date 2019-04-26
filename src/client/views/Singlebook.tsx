import * as React from 'react';
import { useState, useEffect } from 'react';
import { RouteComponentProps } from 'react-router';
import { json } from '../utils/api';
import { Link } from 'react-router-dom';

export interface SinglebookProps extends RouteComponentProps<{ id: string }> { }

export interface Book {
    id: number;
    category: string;
    title: string;
    author: string;
    price: any;
}

const Singlebook: React.SFC<SinglebookProps> = props => {

    const [book, setBook] = useState<Book>({
        id: null,
        category: null,
        title: null,
        author: null,
        price: null
    });

    const getBook = async () => {
        try {
            let book = await json(`/api/books/${props.match.params.id}`);
            setBook(book);
        } catch (error) {
            console.log(error);
        }
    };

    useEffect(() => {
        getBook();
    }, [props.match.params.id]);


    const handleDelete = async (e: React.MouseEvent<HTMLButtonElement>) => {
        e.preventDefault();
        try {
            await json(`/api/books/delete/${book.id}`, 'DELETE');
        } catch (error) {
            throw error;
        } finally {
            props.history.push('/');
        }
    }

    return (
        <>
            <section className="row d-flex flex-column">
                <h3>Book Title: {book.title}</h3>
                <h3>Book Author: {book.author}</h3>
                <h3>Book Price:  ${book.price}</h3>
                <h3>Category: {book.category}</h3>
            </section>
            <section className="row d-flex justify-content-center">
                <Link to={`/edit/${book.id}`} className="btn btn-secondary">Edit Book</Link>
                <button className="btn btn-danger" onClick={e => handleDelete(e)}>Delete Book</button>
            </section>
        </>
    );
}

export default Singlebook;




// export interface SinglebookProps extends RouteComponentProps<{ id: string }> {}

// export interface SinglebookState {
//     book: {
//         id: number,
//         category: string,
//         title: string,
//         author: string,
//         price: any
//     }
// }

// class Singlebook extends React.Component<SinglebookProps, SinglebookState> {
//     constructor(props: SinglebookProps) {
//         super(props);
//         this.state = { 
//             book: {
//             id: null,
//             category: null,
//             title: null,
//             author: null,
//             price: null
//             }
//         };
//     }

//     async componentDidMount() {
//         let book = await json(`/api/books/${this.props.match.params.id}`);
//         console.log(book);
//         this.setState({ book });
//     }

//     handleDelete = async (e: React.MouseEvent<HTMLButtonElement>) => {
//         e.preventDefault();
//         try {
//             await json(`/api/books/delete/${this.state.book.id}`, 'DELETE');
//         } catch (error) {
//             throw error;
//         } finally {
//             this.props.history.push('/');
//         }
//     }

//     render() { 
//         return ( 
//             <>
//             <section className="row d-flex flex-column">
//                 <h3>Book Title: {this.state.book.title}</h3>
//                 <h3>Book Author: {this.state.book.author}</h3>
//                 <h3>Book Price:  ${this.state.book.price}</h3>
//                 <h3>Category: {this.state.book.category}</h3>
//             </section>
//             <section className="row d-flex justify-content-center">
//                 <Link to={`/edit/${this.state.book.id}`} className="btn btn-secondary">Edit Book</Link>
//                 <button className="btn btn-danger" onClick={this.handleDelete}>Delete Book</button>
//             </section>
//             </>
//         );
//     }
// }

// export default Singlebook;
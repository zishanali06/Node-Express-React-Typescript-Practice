import * as React from 'react';
import { json } from '../utils/api';
import { RouteComponentProps } from 'react-router';

export interface EditbookProps extends RouteComponentProps<{ id: string }> {

}

export interface EditbookState {
    book: {
        id: number,
        category: string,
        title: string,
        author: string,
        price: any
    },
    newcategory: any,
    newprice: any,
    catarray: []
}

class Editbook extends React.Component<EditbookProps, EditbookState> {
    constructor(props: EditbookProps) {
        super(props);
        this.state = {
            book: {
                id: null,
                category: null,
                title: "",
                author: "",
                price: ''
            },
            newcategory: "",
            newprice: "",
            catarray: []
        };
    }

    async componentDidMount() {
        try {
            let book = await json(`/api/books/${this.props.match.params.id}`);
            let catarray = await json('/api/categories');
            let cat = await json(`/api/categories/${this.props.match.params.id}`);
            console.log(cat);
            this.setState({ book, catarray, newcategory: cat });
        } catch (e) {
            throw e;
        }
    }

    handleTag = (e: React.ChangeEvent<HTMLSelectElement>) => {
        this.setState({ newcategory: e.target.value })
    }

    handleTitle = (e: React.ChangeEvent<HTMLInputElement>) => {
        this.setState({ ...this.state, book: { ...this.state.book, title: e.target.value }});
    }

    handleAuthor = (e: React.ChangeEvent<HTMLInputElement>) => {
        this.setState({ ...this.state, book: { ...this.state.book, author: e.target.value }});
    }

    handlePrice = (e: React.ChangeEvent<HTMLInputElement>) => {
        this.setState({ ...this.state, book: { ...this.state.book, price: e.target.value }});
    }

    handleAdd = async (e: React.MouseEvent<HTMLButtonElement>) => {
        e.preventDefault();
        let newbook = {
            category: this.state.newcategory,
            title: this.state.book.title,
            author: this.state.book.author,
            price: this.state.book.price
        };
        try {
            await json(`/api/books/edit/${this.props.match.params.id}`, 'PUT', newbook);
        } catch (error) {
            throw error;
        } finally {
            this.props.history.push('/');
        }
    }

    render() {
        return (
            <>
                <form>
                    <section className="form-group">
                        <label>Title</label>
                        <input 
                        type="text" 
                        className="form-control" 
                        id="exampleFormControlInput1" 
                        value={this.state.book.title}
                        onChange={this.handleTitle}
                        />
                    </section>
                    <section className="form-group">
                        <label>Category</label>
                        <select className="form-control" id="exampleFormControlSelect1" value={this.state.newcategory} onChange={this.handleTag}>
                            {this.state.catarray.map((cat: {category: string}, index) => {
                                return <option value={index + 1} key={index}>{cat.category}</option>
                            })}
                        </select>
                    </section>
                    <section className="form-group">
                        <label>Author</label>
                        <input 
                        type="text" 
                        className="form-control" 
                        id="exampleFormControlInput1" 
                        value={this.state.book.author}
                        onChange={this.handleAuthor}
                        />
                    </section>
                    <section className="form-group">
                        <label>Price: USD</label>
                        <input 
                        type="text" 
                        className="form-control" 
                        id="exampleFormControlInput1" 
                        value={this.state.book.price}
                        onChange={this.handlePrice}
                        />
                    </section>
                    <button className="btn btn-primary" onClick={this.handleAdd}>Save Changes</button>
                </form>
            </>
        );
    }
}

export default Editbook;
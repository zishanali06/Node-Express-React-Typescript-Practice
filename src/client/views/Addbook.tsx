import * as React from 'react';
import { json } from '../utils/api';
import { RouteComponentProps } from 'react-router';

export interface AddbookProps extends RouteComponentProps<{ id: string }> {

}

export interface AddbookState {
    title: string,
    author: string,
    price: any
    category: any,
    catarray: []
}

class Addbook extends React.Component<AddbookProps, AddbookState> {
    constructor(props: AddbookProps) {
        super(props);
        this.state = {
            title: "",
            author: "",
            price: '',
            category: "",
            catarray: []
        };
    }

    async componentDidMount() {
        try {
            let catarray = await json('/api/categories');
            this.setState({ catarray });
        } catch (e) {
            throw e;
        }
    }

    handleTag = (e: React.ChangeEvent<HTMLSelectElement>) => {
        this.setState({ category: e.target.value })
    }

    handleTitle = (e: React.ChangeEvent<HTMLInputElement>) => {
        this.setState({ title: e.target.value });
    }

    handleAuthor = (e: React.ChangeEvent<HTMLInputElement>) => {
        this.setState({ author: e.target.value });
    }

    handlePrice = (e: React.ChangeEvent<HTMLInputElement>) => {
        this.setState({ price: e.target.value });
    }

    handleAdd = async (e: React.MouseEvent<HTMLButtonElement>) => {
        e.preventDefault();
        let newbook = {
            categoryid: this.state.category,
            title: this.state.title,
            author: this.state.author,
            price: this.state.price
        };
        try {
            await json(`/api/books/add`, 'POST', newbook);
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
                        value={this.state.title}
                        onChange={this.handleTitle}
                        />
                    </section>
                    <section className="form-group">
                        <label>Category</label>
                        <select className="form-control" id="exampleFormControlSelect1" value={this.state.category} onChange={this.handleTag}>
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
                        value={this.state.author}
                        onChange={this.handleAuthor}
                        />
                    </section>
                    <section className="form-group">
                        <label>Price: USD</label>
                        <input 
                        type="text" 
                        className="form-control" 
                        id="exampleFormControlInput1" 
                        value={this.state.price}
                        onChange={this.handlePrice}
                        />
                    </section>
                    <button className="btn btn-primary" onClick={this.handleAdd}>Add New</button>
                </form>
            </>
        );
    }
}

export default Addbook;
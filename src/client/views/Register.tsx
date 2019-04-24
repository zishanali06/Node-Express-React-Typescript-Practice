import * as React from 'react';
import { json, SetAccessToken } from '../utils/api';
import { RouteComponentProps } from 'react-router-dom';

export default class Register extends React.Component<RegisterProps, RegisterState>{
    constructor(props: RegisterProps) {
        super(props)
        this.state = {
            email: "",
            password: "",
            name: ""
        }
    }

    async componentDidMount() {

    }

    handleEmail = (e: React.ChangeEvent<HTMLInputElement>) => {
        this.setState({ email: e.target.value })
    }

    handlePassword = (e: React.ChangeEvent<HTMLInputElement>) => {
        this.setState({ password: e.target.value })
    }

    handleName = (e: React.ChangeEvent<HTMLInputElement>) => {
        this.setState({ name: e.target.value });
    }

    handleClick = async (e: React.MouseEvent) => {
        e.preventDefault();
        try{
            let result = await json ('/auth/register', 'POST', {
                email: this.state.email,
                password: this.state.password,
                name: this.state.name
            });
            if(result) {
                SetAccessToken(result.token, { userid: result.userid, role: result.role });
                if(result.role === 'admin') {
                    this.props.history.push('/new');
                } else {
                    this.props.history.push('/');
                }
            } else {
                this.props.history.push('/register');
            }
        } catch (e) {
            throw e;
        };
    };

    render() {
        return (
            <section className="row">
                <section className="col-12"><h1>Register</h1>
                </section>
                <section className="col-4"></section>
                <section className="col-4">
                    <form>
                    <section className="form-group">
                            <label htmlFor="exampleFormControlInput3">Name</label>
                            <input type="text" className="form-control shadow-sm" id="exampleFormControlInput3" placeholder="Name" value={this.state.name} onChange={this.handleName} />
                        </section>
                        <section className="form-group">
                            <label htmlFor="exampleFormControlInput1">Email</label>
                            <input type="email" className="form-control shadow-sm" id="exampleFormControlInput1" placeholder="Email" value={this.state.email} onChange={this.handleEmail} />
                        </section>
                        <section className="form-group">
                            <label htmlFor="exampleFormControlInput2">Password</label>
                            <input type="password" className="form-control shadow-sm" id="exampleFormControlInput2" placeholder="Password" value={this.state.password} onChange={this.handlePassword} />
                        </section>
                        <button type="submit" className="btn btn-primary mt-3 shadow-lg" onClick={this.handleClick}>Register</button>
                    </form>
                </section>
                <section className="col-4"></section>
            </section>
        )
    }
}

interface RegisterProps extends RouteComponentProps {

}

interface RegisterState {
    email: string,
    password: string,
    name: string
}
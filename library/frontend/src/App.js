import React from 'react'
// import logo from './logo.svg';
import './App.css';
import AuthorList from "./componets/Authors";
import axios from "axios";
import Menu from "./componets/menu/Menu";
import Footer from "./componets/footer/Footer";
import UserList from "./componets/user/UserList";

class App extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            'authors': []
        }
    }
    componentDidMount() {
        axios.get("http://127.0.0.1:8000/api/authors")
            .then(response => {
                const authors = response.data
                this.setState(
                {
                    'authors': authors
                }
            )
        }).catch(error=> console.log(error))
        axios.get("http://127.0.0.1:8000/api/users")
            .then(response => {
                const users = response.data
                this.setState(
                {
                    'users': users
                }
            )
        }).catch(error=> console.log(error))
    }


    render() {
        return (
            <div className="App-screen">
                <Menu/>
                <div className="main-content">
                    <AuthorList authors={this.state.authors} />
                    <UserList users={this.state.users}/>
                </div>
                <Footer/>
            </div>
        )
    }
}

export default App

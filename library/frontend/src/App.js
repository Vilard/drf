import React from 'react'
import './App.css';
import Footer from "./componets/footer/Footer";
import ToDo from './componets/ToDo/ToDo';
import Project from './componets/Project/Project';
import Users from './componets/Users/Users'
import { Route } from 'react-router-dom'
import Menu from './componets/menu/Menu'

function App() {
    return (
        <div className="App-screen">
            <Menu />
            <div className="main-content">
                <Route exact path="/" component={ToDo} />
                <Route path="/project" component={Project} />
                <Route path="/users" component={Users} />
            </div>
            <Footer />
        </div>
    )
}

export default App

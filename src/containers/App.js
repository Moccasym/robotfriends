//App is our main conponent that puts together the Cardlist and the searchbox as well as the header
//This way you can integrate coponents together to form molecules 

import React, { Component } from "react";
import CardList from "../components/CardList";
//import { robots } from "./robots";
import Searchbox from "../components/Searchbox";
import './App.css';
import Scroll from '../components/Scroll'


//Using Class to be able to create a constructor function
class App extends Component {
    // the constructor method is for creating and initializing an object
    constructor() {
        super()
        // State is something that can change => here you search for robot names, so the robots change that are displayed and the searchfield content
        this.state = {
            robots: [],
            searchfield: ''
        }
    }

    //when the App mounted the site do this 
    componentDidMount() {
        fetch('https://jsonplaceholder.typicode.com/users')
            .then(response=> {
                return response.json();
            })
            .then(users => {
                this.setState({robots: users})
            })
        //this.setState({ robots: robots})
    }

    // Creates an event everytime someone writes into the searchbox and saves the value typed
    onSearchChange = (event) => {
        this.setState({ searchfield: event.target.value });
    }

    render() {
        const { robots, searchfield } = this.state; 
        const filteredRobots = robots.filter(robots => {
            return robots.name.toLowerCase().includes(searchfield.toLowerCase())
        })
        console.log(filteredRobots);
        return (
            // The component returns a set of components -> the heading, the dynamic searchbox with it's function and the cardlist, which includes the cards
            <div className='tc'>
            <h1 className="f1">RobotFriends</h1>
            <Searchbox searchChange={this.onSearchChange}/>
            <Scroll>
                <CardList robots = {filteredRobots}/>
            </Scroll>
            </div>
    )
}
}

export default App;
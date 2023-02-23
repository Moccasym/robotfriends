//App is our main conponent that puts together the Cardlist and the searchbox as well as the header
//This way you can integrate coponents together to form molecules 

import React, { Component } from "react";
import CardList from "./CardList";
import robots from "./robots";
import Searchbox from "./Searchbox";


class App extends Component {
    // the constructor method is for creating and initializing an object
    constructor() {
        super()
        // State is something that can change => here you search for robot names, so the robots change that are displayed and the searchfield content
        this.state = {
            robots: robots,
            searchfield: ''
        }
    }
    // Creates an event everytime someone writes into the searchbox and saves the value typed
    onSearchChange = (event) => {
        this.setState({ searchfield: event.target.value });
    }

    render() {
        const filteredRobots = this.state.robots.filter(robots => {
            return robots.name.toLowerCase().includes(this.state.searchfield.toLowerCase())
        })
        console.log(filteredRobots);
        return (
            // The component returns a set of components -> the heading, the dynamic searchbox with it's function and the cardlist, which includes the cards
            <div className='tc'>
            <h1>Robotfriends</h1>
            <Searchbox searchChange={this.onSearchChange}/>
            <CardList robots = {filteredRobots}/>
            </div>
    )
}
}

export default App;
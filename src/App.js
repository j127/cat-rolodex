import React, { Component } from "react";
import { CardList } from "./components/card-list/card-list.component";
import "./App.css";

class App extends Component {
    constructor() {
        super();

        this.state = {
            cats: [],
        };
    }

    componentDidMount() {
        fetch("https://jsonplaceholder.typicode.com/users")
            .then(res => res.json())
            .then(json => this.setState({ cats: json }));
    }

    render() {
        return (
            <section className="App">
                <CardList cats={this.state.cats} />
            </section>
        );
    }
}

export default App;

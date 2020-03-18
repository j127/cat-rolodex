import React, { Component } from "react";
import { CardList } from "./components/card-list/card-list.component";
import "./App.css";

class App extends Component {
    constructor() {
        super();

        this.state = {
            monsters: [
                {
                    name: "Frankenstein",
                    id: "1",
                },
                {
                    name: "Dracula",
                    id: "2",
                },
                {
                    name: "Zombie",
                    id: "3",
                },
            ],
        };
    }

    componentDidMount() {
        fetch("https://jsonplaceholder.typicode.com/users")
            .then(res => res.json())
            .then(json => this.setState({ monsters: json }));
    }

    render() {
        return (
            <section className="App">
                <CardList>
                    {this.state.monsters.map(m => (
                        <h2 key={m.id}>{m.name}</h2>
                    ))}
                </CardList>
            </section>
        );
    }
}

export default App;

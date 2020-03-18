import React, { Component } from "react";
import { CardList } from "./components/card-list/card-list.component";
import "./App.css";

class App extends Component {
    constructor() {
        super();

        this.state = {
            cats: [],
            searchField: "",
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
                <input
                    type="search"
                    placeholder="search cats"
                    onChange={e =>
                        this.setState({ searchField: e.target.value }, () =>
                            console.log(this.state)
                        )
                    }
                />{" "}
                <CardList cats={this.state.cats} />
            </section>
        );
    }
}

export default App;

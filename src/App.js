import React, { Component } from "react";
import CardList from "./components/card-list/card-list.component";
import SearchBox from "./components/search-box/search-box.component";
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

    handleChange = e => {
        this.setState({ searchField: e.target.value }, () =>
            console.log(this.state)
        );
    };

    render() {
        const { cats, searchField } = this.state;
        const filteredCats = cats.filter(cat =>
            cat.name.toLowerCase().includes(searchField.toLowerCase())
        );

        return (
            <section className="App">
                <h1>Cat Rolodex</h1>
                <SearchBox handleChange={this.handleChange} />
                <CardList cats={filteredCats} />
            </section>
        );
    }
}

export default App;

import React, { Component } from "react";
import axios from "axios";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import "./App.css";

import Home from "./pages/Home";

class App extends Component {
    constructor(props) {
        super(props);

        this.state = { animals: [], categoryAmts: [], isLoading: true };
    }

    async componentDidMount() {
        await axios({
            method: "get",
            url: "/api/app/animals"
        })
            .then((res) => {
                this.setState({ animals: res.data });
            })
            .catch((err) => {
                console.log(err);
            });

        await axios({ method: "get", url: "/api/app/category_amts" })
            .then((res) => {
                this.setState({ categoryAmts: res.data, isLoading: false });
            })
            .catch((err) => {
                console.log(err);
            });
    }

    render() {
        const { animals, categoryAmts, isLoading } = this.state;

        return (
            <div className="App">
                <BrowserRouter>
                    <Switch>
                        <Route
                            exact
                            path="/"
                            render={() => (
                                <Home
                                    animals={animals}
                                    categoryAmts={categoryAmts}
                                    isLoading={isLoading}
                                />
                            )}
                        />
                    </Switch>
                </BrowserRouter>
            </div>
        );
    }
}

export default App;

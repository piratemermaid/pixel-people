import React, { Component } from "react";
import axios from "axios";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import "./App.css";

import Home from "./pages/Home";

class App extends Component {
    constructor(props) {
        super(props);

        this.state = {};
    }

    async componentDidMount() {
        await axios({
            method: "get",
            url: "/api/app/animals"
        })
            .then((res) => {
                console.log(res.data);
                this.setState({ data: res.data });
            })
            .catch((err) => {
                console.log(err);
            });
    }

    render() {
        return (
            <div className="App">
                <BrowserRouter>
                    <Switch>
                        <Route exact path="/" render={() => <Home />} />
                    </Switch>
                </BrowserRouter>
            </div>
        );
    }
}

export default App;

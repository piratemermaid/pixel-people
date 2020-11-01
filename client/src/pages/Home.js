import _ from "lodash";
import React, { Component } from "react";
import Select from "react-select";

class Home extends Component {
    constructor(props) {
        super(props);

        this.state = {
            selected: null,
            displaySplices: [],
            highlightedAnimal: null,
            viewCategories: true
        };
    }

    handleSelectChange = (e) => {
        const name = e.value;
        const animalInfo = _.find(this.props.animals, { name });
        this.setState({
            selected: name,
            displaySplices: [
                {
                    name,
                    splice1: animalInfo.splice[0],
                    splice2: animalInfo.splice[1]
                }
            ],
            highlightedAnimal: name
        });
    };

    addDisplaySplice(name) {
        let { displaySplices } = this.state;
        if (!_.find(displaySplices, { name })) {
            const animalInfo = _.find(this.props.animals, { name });
            displaySplices.push({
                name,
                splice1: animalInfo.splice[0],
                splice2: animalInfo.splice[1]
            });
            this.setState({ displaySplices, highlightedAnimal: name });
        } else {
            this.setState({ highlightedAnimal: name });
        }
    }

    getCategory(name) {
        const { animals, categoryAmts } = this.props;
        const animalInfo = _.find(animals, { name });
        if (animalInfo) {
            const categoriesSorted = animalInfo.categories.sort((a, b) => {
                const catA = _.find(categoryAmts, { name: a });
                const catB = _.find(categoryAmts, { name: b });
                return catA.amt - catB.amt;
            });
            return ` (${categoriesSorted[0]}) `;
        } else {
            return null;
        }
    }

    render() {
        const { animals, isLoading } = this.props;
        const {
            displaySplices,
            highlightedAnimal,
            viewCategories
        } = this.state;

        if (!isLoading) {
            const selectOptions = animals.map(({ name }) => {
                return { value: name, label: name };
            });

            return (
                <div>
                    <div className="row" style={{ marginBottom: 0 }}>
                        <p className="right" style={{ marginBottom: 0 }}>
                            View Categories:{" "}
                            <span
                                className="hover-cursor"
                                onClick={() =>
                                    this.setState({
                                        viewCategories: !viewCategories
                                    })
                                }
                            >
                                {viewCategories ? "ON" : "OFF"}
                            </span>
                        </p>
                    </div>
                    <div className="row">
                        <h1>Animal Splicing</h1>
                    </div>
                    <div className="row">
                        <div className="col s6 offset-s3 left">
                            <Select
                                options={selectOptions}
                                onChange={(e) => this.handleSelectChange(e)}
                                placeholder="Select animal"
                            />
                        </div>
                    </div>
                    <div id="results">
                        {displaySplices.map(({ name, splice1, splice2 }) => {
                            return (
                                <div
                                    className={`row ${
                                        highlightedAnimal === name
                                            ? "highlighted"
                                            : ""
                                    }`}
                                    key={name}
                                >
                                    <span
                                        className="hover-cursor"
                                        onClick={() =>
                                            this.setState({
                                                highlightedAnimal: name
                                            })
                                        }
                                    >
                                        {name}
                                    </span>{" "}
                                    ={" "}
                                    <span
                                        className="hover-cursor"
                                        onClick={() =>
                                            this.addDisplaySplice(splice1)
                                        }
                                    >
                                        {splice1 || "?"}
                                    </span>{" "}
                                    {viewCategories
                                        ? this.getCategory(splice1)
                                        : null}
                                    +{" "}
                                    <span
                                        className="hover-cursor"
                                        onClick={() =>
                                            this.addDisplaySplice(splice2)
                                        }
                                    >
                                        {splice2 || "?"}
                                    </span>
                                    {viewCategories
                                        ? this.getCategory(splice2)
                                        : null}
                                </div>
                            );
                        })}
                    </div>
                </div>
            );
        } else {
            return (
                <div>
                    <h1>Animal Splicing</h1>
                    <p className="loading">Loading...</p>
                </div>
            );
        }
    }
}

export default Home;

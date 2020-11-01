import _ from "lodash";
import React, { Component } from "react";
import Select from "react-select";

class Home extends Component {
    constructor(props) {
        super(props);

        this.state = { selected: null, displaySplices: [] };
    }

    handleSelectChange = (e) => {
        const name = e.value;
        const animalInfo = _.find(this.props.animals, { name });
        console.log(animalInfo.splice);
        this.setState({
            selected: name,
            displaySplices: [
                {
                    name,
                    splice1: animalInfo.splice[0],
                    splice2: animalInfo.splice[1]
                }
            ]
        });
    };

    render() {
        const { animals, isLoading } = this.props;
        const { displaySplices } = this.state;

        if (!isLoading) {
            const selectOptions = animals.map(({ name }) => {
                return { value: name, label: name };
            });

            return (
                <div>
                    <h1>Animal Splicing</h1>
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
                                <div className="row" key={name}>
                                    {name} = {splice1 || "?"} + {splice2 || "?"}
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

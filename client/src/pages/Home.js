import React from "react";
import Select from "react-select";

const Home = (props) => {
    const { animals, isLoading } = props;

    if (!isLoading) {
        const selectOptions = animals.map(({ name }) => {
            return { value: name, label: name };
        });

        return (
            <div>
                <h1>Animal Splicing</h1>
                <div className="row">
                    <div className="col s6 offset-s3 left">
                        <Select options={selectOptions} />
                    </div>
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
};

export default Home;

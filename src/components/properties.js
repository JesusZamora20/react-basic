import React from 'react';
import PropTypes from 'prop-types';

function Properties(props){

    return(
        <div>
            <h2>The props</h2>
            <h3>{props.byDefault}</h3>
            <ul>
                <li>{props.string}</li>
                <li>{props.boolean ? "true" :"false"}</li>
                <li>{props.number}</li>
                <li>{props.array.join(', ')}</li>
                <li>{props.object.name}</li>
                <li>{props.array.map(props.func).join(', ')}</li>
                <li>{props.reactElement}</li>
                <li>{props.reactComponent}</li>
            </ul>
        </div>
    );
}

Properties.defaultProps = {
    byDefault: "The Default Prop",
}

Properties.propTypes = {
    number: PropTypes.number,
};

export default Properties;
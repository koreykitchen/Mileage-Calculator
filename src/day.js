import React from 'react';

import Location from './location.js';

class Day extends React.Component 
{
    constructor(props) 
    {
        super(props);

        this.state = {  locations: [] };
    }

    render() 
    {
        return (
            <div class="bordered-div">
                <p>Location Div</p>
                <Location />
            </div>
        );
    }
}

export default Day;
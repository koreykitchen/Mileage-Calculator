import React from 'react';

import Location from './location.js';

class Day extends React.Component 
{
    constructor(props) 
    {
        super(props);

        this.state = {  numberOfStops: 3 };
    }

    render() 
    {
        return (
            <div class="bordered-div">

                <p>{this.state.numberOfStops} stop(s) added to the day...</p>

                {this.populateLocationsHtml()}

            </div>
        );
    }

    populateLocationsHtml()
    {
        if (this.state.numberOfStops === 0)
        {
            return;
        }

        else
        {
            return Array(this.state.numberOfStops).fill(null).map((_) => (<Location />));
        }
    }
}

export default Day;
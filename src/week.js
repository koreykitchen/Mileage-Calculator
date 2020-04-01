import React from 'react';

import LocationSelect from './locationSelect.js';
import Day from './day.js';

class Week extends React.Component 
{
    constructor(props) 
    {
        super(props);

        this.state = {  days: [] };
    }

    render() 
    {
        return (
            <div class="bordered-div">
                <div class="bordered-div">
                <p>Location Select Div</p>
                <LocationSelect />
                </div>

                <div class="bordered-div">
                <p>Day Div</p>
                <Day />
                </div>
            </div>
        );
    }
}

export default Week;
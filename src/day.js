import React from 'react';

import Location from './location.js';

class Day extends React.Component 
{
    constructor(props) 
    {
        super(props);

        this.state = { };
    }

    render() 
    {
        return (
            <div className="bordered-div">

                <p>{this.props.currentDaysData.length} store(s) added to the day...</p>

                {this.populateLocationsHtml([...this.props.currentDaysData])}

            </div>
        );
    }

    populateLocationsHtml(daysData)
    {
        if (daysData.length === 0)
        {
            return;
        }

        else
        {
            return Array(daysData.length)
                    .fill(null)
                    .map((_, index) => 
                            (<Location  key={index} 
                                        storeData={daysData[index]}
                                        removeStore={() => 
                                            (this.props.removeLocationFunctions[this.props.currentDayIndex]
                                                [index]())} />));
        }
    }
}

export default Day;


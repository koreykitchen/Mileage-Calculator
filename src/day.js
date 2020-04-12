import React from 'react';

import Location from './location.js';

class Day extends React.Component 
{
    constructor(props) 
    {
        super(props);

        var numberOfStores = this.props.weekDataObject.state.currentDaysData.length;

        this.state = {  numberOfStores: numberOfStores };
    }

    componentDidUpdate()
    {
        var numberOfStores = this.props.weekDataObject.state.currentDaysData.length;

        if(this.state.numberOfStores !== numberOfStores)
        {
            this.setState({ numberOfStores: numberOfStores });
        }
    }

    render() 
    {
        var currentDaysData = [...this.props.weekDataObject.state.currentDaysData];

        return (
            <div className="bordered-div">

                <p>{this.state.numberOfStores} store(s) added to the day...</p>

                {this.populateLocationsHtml(currentDaysData)}

            </div>
        );
    }

    populateLocationsHtml(daysData)
    {
        if (daysData.length === 0)
        {
            return [];
        }

        else
        {
            return Array(daysData.length)
                    .fill(null)
                    .map((_, index) => 
                            (<Location  key={index} 
                                        storeData={daysData[index]}
                                        removeStore={() => (this.removeStore(index))} />));
        }
    }

    removeStore(index)
    {
        var currentDaysData = [...this.props.weekDataObject.state.currentDaysData];

        currentDaysData.splice(index, 1);

        this.props.weekDataObject.setDaysData(currentDaysData, this.props.weekDataObject.state.currentDay);
    }
}

export default Day;


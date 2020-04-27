import React from 'react';

import DayDistance from './dayDistance.js';

class WeekDistance extends React.Component
{
    constructor(props)
    {
        super(props);

        this.state = {  loaded: false, arrayOfResults: new Array(7).fill(null),
                        callbacksToStoreResults: this.generateCallbacksToStoreResults(),
                        daysMilesArray: new Array(7).fill(0),
                        callbacksToStoreDaysMiles: this.generateCallbacksToStoreDaysMiles() }; 

        this.callbackToSetAsLoaded = this.callbackToSetAsLoaded.bind(this);
    }

    componentDidMount()
    {
        if(!document.getElementById("googleMapsScriptElement"))
        {
            var scriptElement = document.createElement('script');

            scriptElement.id = "googleMapsScriptElement";

            scriptElement.src = "https://maps.googleapis.com/maps/api/js?" + 
                                "key=AIzaSyASFAgyRK86Z88JTF_LlbtUsLTmw0_eNdI";

            scriptElement.onload = this.callbackToSetAsLoaded;

            document.body.appendChild(scriptElement);
        }

        else
        {
            this.setState({ loaded: true });
        }
    }

    callbackToSetAsLoaded()
    {
        this.setState({ loaded: true });
    }

    render()
    {
        return (
        
            <div className="bordered-div">

                <button onClick={() => 
                    (this.props.swapWeekOrDistanceDisplay())}>Go Back</button>

                {this.displayLoadingOrDayDistanceElements()}
                
            </div>
            
        );
    }

    displayLoadingOrDayDistanceElements()
    {
        if(!this.state.loaded)
        {
            return (<p>LOADING...</p>);
        }

        else
        {
            var dayDistanceElementArray = 
                new Array(7).fill(null).map((_, dayIndex) => 
                (
                    <DayDistance    key={dayIndex} dayIndex={dayIndex} 
                                    dayData={this.props.arrayOfDaysData[dayIndex]}
                                    dayResults={this.state.arrayOfResults[dayIndex]}
                                    callbackToStoreResults={this.state.callbacksToStoreResults[dayIndex]}
                                    callbackToStoreDaysMiles={this.state.callbacksToStoreDaysMiles[dayIndex]} />
                ));

            return (

                <div>

                    <p style={{textAlign: 'center', fontWeight: 'bold'}}>
                        {"Total Miles: " + this.calculateWeeksTotalMiles()}</p>

                    {dayDistanceElementArray}

                </div>
            );
        }
    }

    generateCallbacksToStoreResults()
    {
        return new Array(7).fill(null).map((_, dayIndex) => 
        (
            (result, status) => 
            (
                this.storeCalculatedDistance(result, status, dayIndex)
            )
        ));
    }

    storeCalculatedDistance(result, status, index)
    {
        if (status === 'OK') 
        {
            window.distanceElement.storeResults(result, index);
        }
    }

    storeResults(result, index)
    {
        var tempArrayOfResults = [...this.state.arrayOfResults];

        tempArrayOfResults[index] = result;

        this.setState({ arrayOfResults: tempArrayOfResults });
    }

    calculateWeeksTotalMiles()
    {
        var totalMiles = 0;

        for(var daysMiles of this.state.daysMilesArray)
        {
            totalMiles += daysMiles;
        }

        return (Math.round((totalMiles * 10)) / 10);
    }

    storeDaysTotalMiles(numberOfMiles, dayIndex)
    {
        var tempDaysMilesArray = [...this.state.daysMilesArray];

        tempDaysMilesArray[dayIndex] = numberOfMiles;

        this.setState({ daysMilesArray: tempDaysMilesArray });
    }

    generateCallbacksToStoreDaysMiles()
    {
        return new Array(7).fill(null)
            .map((_, dayIndex) => 
                (
                    (numberOfMiles) => this.storeDaysTotalMiles(numberOfMiles, dayIndex)
                )
            );
    }
}

export default WeekDistance;


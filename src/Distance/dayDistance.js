import React from 'react';

import LegDistance from './legDistance.js';

class DayDistance extends React.Component
{
    constructor(props)
    {
        super(props);

        this.state = { content: "LOADING...", loaded: false, totalMiles: 0 }; 

        this.callbackToStoreResults = this.callbackToStoreResults.bind(this);
    }

    componentDidMount()
    {
        if(this.props.dayResults && !this.state.loaded)
        {
            this.storeResults(this.props.dayResults);
        }

        else
        {
            this.requestMileageCalculation();
        }
    }

    componentDidUpdate()
    {
        if(this.props.dayResults && !this.state.loaded)
        {
            this.storeResults(this.props.dayResults);
        }
    }

    render()
    {
        return (

            <div className="bordered-div">

                <p style={{fontWeight: 'bold'}}>{(this.getDayNameFromIndex(this.props.dayIndex) + ": ")}</p>

                {this.state.content}

                <p>{this.getDayNameFromIndex(this.props.dayIndex) + "'s total miles: " + 
                        this.state.totalMiles}</p>

            </div>
        );
    }

    requestMileageCalculation()
    {
        if((this.props.dayData.length >= 2) && ((this.props.dayData.length <= 12))) 
        {
            var directionsService = new window.google.maps.DirectionsService();

            directionsService.route(this.buildUpMileageRequestForDay(), 
                                    this.callbackToStoreResults);
        }

        else
        {
            this.setState({ content:    this.getDayNameFromIndex(this.props.dayIndex) + 
                                        "'s number of stores must be between 2 and 12...",
                            loaded: true });
        }
    }

    buildUpMileageRequestForDay()
    {
        var startLocation = this.props.dayData[0].Address + "," + this.props.dayData[0].City;

        var endLocation =   this.props.dayData[this.props.dayData.length - 1].Address + 
                            "," + this.props.dayData[this.props.dayData.length - 1].City;

        var waypoints = [];

        for(var currentLocationIndex = 1; currentLocationIndex < this.props.dayData.length - 1; 
            currentLocationIndex++)
        {
            waypoints.push({location: (this.props.dayData[currentLocationIndex].Address + "," + 
                            this.props.dayData[currentLocationIndex].City)});
        }

        var mileageRequest = { origin: startLocation, destination: endLocation, waypoints: waypoints, 
                                travelMode: 'DRIVING'};

        return mileageRequest;
    }

    callbackToStoreResults(result, status)
    {
        if (status === 'OK') 
        {
            this.props.callbackToStoreResults(result, this.props.dayIndex);
        }
    }

    storeResults(result)
    {
        var legDistanceElementArray = 
            new Array(result.routes[0].legs.length).fill(null)
                .map((_, legIndex) => 
                    (<LegDistance   legData={result.routes[0].legs[legIndex]} 
                                    key={legIndex}
                                    startVenue={this.props.dayData[legIndex].Name}
                                    endVenue={this.props.dayData[legIndex + 1].Name} />)
                );

        this.setState({ content: legDistanceElementArray, loaded: true,
                        totalMiles: this.calculateDaysTotalMiles(result) });
    }

    calculateDaysTotalMiles(result)
    {
        var totalMeters = 0;

        for(var legResult of result.routes[0].legs)
        {
            totalMeters += legResult.distance.value;
        }

        this.props.storeDaysTotalMiles(this.convertMetersToMiles(totalMeters), this.props.dayIndex);

        return this.convertMetersToMiles(totalMeters);
    }

    convertMetersToMiles(meters)
    {
        return (Math.round((meters * 0.000621371) * 10) / 10);
    }

    getDayNameFromIndex(dayIndex)
    {
        var arrayOfDayNames =  ["Sunday", "Monday", "Tuesday", "Wednesday",
                                "Thursday", "Friday", "Saturday"];

        return arrayOfDayNames[dayIndex];
    }
}

export default DayDistance;


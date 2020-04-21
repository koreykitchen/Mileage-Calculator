import React from 'react';

class DayDistance extends React.Component
{
    constructor(props)
    {
        super(props);

        this.state = { content: "LOADING...", loaded: false }; 
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

            </div>
        );
    }

    requestMileageCalculation()
    {
        if((this.props.dayData.length >= 2) && ((this.props.dayData.length <= 20))) 
        {
            var directionsService = new window.google.maps.DirectionsService();

            directionsService.route(this.buildUpMileageRequestForDay(), 
                                    this.props.callbackToStoreResults);
        }

        else
        {
            this.setState({ content:    this.getDayNameFromIndex(this.props.dayIndex) + 
                                        "'s number of stores must be between 2 and 20...",
                            loaded: true });
        }
    }

    buildUpMileageRequestForDay()
    {
        var startLocation = this.props.dayData[0].Address + "," + this.props.dayData[0].City;

        var endLocation =   this.props.dayData[1].Address + "," + this.props.dayData[1].City;

        var mileageRequest = { origin: startLocation, destination: endLocation, travelMode: 'DRIVING'};

        return mileageRequest;
    }

    storeResults(result)
    {
        this.setState({ content: ("Distance between " + this.getDayNameFromIndex(this.props.dayIndex) + 
                        "'s first two stops: " + 
                        this.convertMetersToMiles(result.routes[0].legs[0].distance.value) + 
                        " miles..."),
                        loaded: true });
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


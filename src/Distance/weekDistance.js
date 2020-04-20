import React from 'react';

class WeekDistance extends React.Component
{
    constructor(props)
    {
        super(props);

        this.state = { content: "LOADING..." }; 
    }

    componentDidMount()
    {
        if(!document.getElementById("googleMapsScriptElement"))
        {
            var scriptElement = document.createElement('script');

            scriptElement.id = "googleMapsScriptElement";

            scriptElement.src = "https://maps.googleapis.com/maps/api/js?" + 
                                "key=AIzaSyASFAgyRK86Z88JTF_LlbtUsLTmw0_eNdI";

            scriptElement.onload = this.callbackToRequestMileageCalculation;

            document.body.appendChild(scriptElement);
        }

        else
        {
            this.requestMileageCalculation();
        }
    }

    callbackToRequestMileageCalculation()
    {
        window.distanceElement.requestMileageCalculation();
    }

    render()
    {
        return (
        
            <div className="bordered-div">

                <button onClick={() => 
                    (this.props.swapWeekOrDistanceDisplay())}>Go Back</button>
                
                <p>{this.state.content}</p>
                
            </div>
            
        );
    }

    requestMileageCalculation()
    {
        var dayIndex = 0;

        if((this.props.arrayOfDaysData[dayIndex].length >= 2) && 
                ((this.props.arrayOfDaysData[dayIndex].length <= 20))) 
        {
            var directionsService = new window.google.maps.DirectionsService();

            directionsService.route(this.buildUpMileageRequestForDay(dayIndex), 
                                    this.callbackToStoreCalculatedDistance);
        }

        else
        {
            this.setState({ content: "Sunday's number of stores must be between 2 and 20..." });
        }
    }

    buildUpMileageRequestForDay(dayIndex)
    {
        var startLocation = this.props.arrayOfDaysData[dayIndex][0].Address + "," +
                            this.props.arrayOfDaysData[dayIndex][0].City;

        var endLocation =   this.props.arrayOfDaysData[dayIndex][1].Address + "," +
                            this.props.arrayOfDaysData[dayIndex][1].City;

        var mileageRequest = { origin: startLocation, destination: endLocation, travelMode: 'DRIVING'};

        return mileageRequest;
    }

    callbackToStoreCalculatedDistance(result, status)
    {
        if (status === 'OK') 
        {
            window.distanceElement.storeCalculatedDistance(result);
        }
    }

    storeCalculatedDistance(result)
    {
        this.setState({ content: ("Distance between Sunday's first two stops: " + 
            this.convertMetersToMiles(result.routes[0].legs[0].distance.value) + 
            " miles...") });
    }

    convertMetersToMiles(meters)
    {
        return (Math.round((meters * 0.000621371) * 10) / 10);
    }
}

export default WeekDistance;


import React from 'react';

class Distance extends React.Component
{
    constructor(props)
    {
        super(props);

        this.state = { googleMapsHandle: null, loaded: true, status: "LOADING..." }; 
    }

    componentDidMount()
    {
        this.getGoogleMapsHandle();
    }

    render()
    {
        if(!this.state.googleMapsHandle)
        {
            return (<p>{this.state.status}</p>);
        }

        else
        {
            if(!this.state.loaded)
            {
                var directionsService = new this.state.googleMapsHandle.maps.DirectionsService();

                var start = "Binghamton,NY";

                var end = "Conklin,NY";

                var request = { origin: start, destination: end, travelMode: 'DRIVING'};

                directionsService.route(request, this.callback);
            }

            return (<p>{this.state.status}</p>);
        }
    }

    callback(result, status)
    {
        if (status === 'OK') 
        {
            window.distanceElement.storeDistance(result);
        }
    }

    storeDistance(result)
    {
        this.setState({ status: ((Math.round((result.routes[0].legs[0].distance.value * 0.000621371) * 10) / 10) +
                                    " miles..."), loaded: true });
    }

    loadGoogleMapsAPI()
    {
        return new Promise(function (resolve, reject) 
        {
            resolve(window.google);

            reject("Error loading Google Maps API...");

            if(!document.getElementById("googleMapsScriptElement"))
            {
                var scriptElement = document.createElement('script');

                scriptElement.id = "googleMapsScriptElement";

                scriptElement.src = "https://maps.googleapis.com/maps/api/js?" + 
                                    "key=AIzaSyASFAgyRK86Z88JTF_LlbtUsLTmw0_eNdI";

                document.body.appendChild(scriptElement);
            }
        });
    }

    async getGoogleMapsHandle()
    {
        var googleMapsHandle = await this.loadGoogleMapsAPI();

        this.setState({ googleMapsHandle: googleMapsHandle});
    }
}

export default Distance;


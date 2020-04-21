import React from 'react';

class LegDistance extends React.Component 
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

                <p>{"Start Address: " + this.props.startVenue + ", " + this.props.legData.start_address}</p>
                <p>{"End Address: " + this.props.endVenue + ", " + this.props.legData.end_address}</p>
                <p>{"Distance: " + this.convertMetersToMiles(this.props.legData.distance.value)}</p>

            </div>
        );
    }
  
    convertMetersToMiles(meters)
    {
        return (Math.round((meters * 0.000621371) * 10) / 10);
    }
}

export default LegDistance;


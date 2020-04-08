import React from 'react';

class Location extends React.Component 
{
    constructor(props) 
    {
        super(props);

        this.state = {  venue: "",
                        address: "",
                        city: "",
                        state: "" };
    }

    render() 
    {
        return (
            <div className="bordered-div">
                <p>Test Location</p>
                <button onClick={this.removeStop} style={{color: 'red'}}>Remove</button>
            </div>
        );
    }

    removeStop()
    {

    }
}

export default Location;


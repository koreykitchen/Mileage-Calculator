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
            <div class="bordered-div">
                <p>Test Location</p>
                <button onClick="" style={{color: 'red'}}>Remove</button>
            </div>
        );
    }
}

export default Location;
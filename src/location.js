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
                <p>Inside Location Div</p>
            </div>
        );
    }
}

export default Location;
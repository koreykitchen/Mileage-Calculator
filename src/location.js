import React from 'react';

class Location extends React.Component 
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

                {this.props.storeData.Name + ' - ' + this.props.storeData.Address +
                    ' - ' + this.props.storeData.City}

                <button onClick={this.removeStop} style={{color: 'red', float: 'right'}}>Remove</button>

            </div>
        );
    }

    removeStop()
    {

    }
}

export default Location;


import React from 'react';

class LocationSelect extends React.Component 
{
  constructor(props) 
  {
    super(props);

    this.state = { };
  }

  render() 
  {
    return (
        <div>
                    
          <p>Select a stop to add to your <span style={{fontWeight: 'bold'}}>
              {this.props.day}</span> route: </p>

          <select style={{width:'75vw'}}>

          </select>

          <button onClick="" style={{marginLeft: '25px'}}>Add Stop</button>

        </div>
    );
  }
}

export default LocationSelect;
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

            {this.populateSelect()}

          </select>

          <button onClick={() => (this.addStop(this.props.data))} style={{marginLeft: '25px'}}>Add Stop</button>

          <br />

        </div>
    );
  }

  populateSelect()
  {
    return this.props.data.map((_, index) => 
                {
                    if(this.props.data[index].Name)
                    {
                      return (<option key={index} value={index}>
                                {this.props.data[index].Name + ' - ' + 
                                  this.props.data[index].Address +
                                  ' - ' + this.props.data[index].City}</option>);
                    }

                    else
                    {
                      return [];
                    }
                });

  }

  addStop(data)
  {
    console.log(data);
  }
}

export default LocationSelect;


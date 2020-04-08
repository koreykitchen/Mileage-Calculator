import React from 'react';

import Week from './week.js';

class Main extends React.Component 
{
  constructor(props) 
  {
    super(props);

    this.state = { storeData: this.props.data };
  }

  render() 
  {
    return (
      <div>

        <h1>Mileage Calculator</h1>

        <p>A Note Before Using:</p>
          
        <p>Mileage calculator is still in development, and therefore may be prone to bugs and crashes...</p>

        <p>Some functionality may be missing or incomplete...</p>

        <Week data={this.state.storeData}/>

      </div>
    );
  }
}

export default Main;


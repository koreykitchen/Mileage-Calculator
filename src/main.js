import React from 'react';

import Week from './week.js';

import Distance from './distance.js';

class Main extends React.Component 
{
  constructor(props) 
  {
    super(props);

    this.state = { weekDisplayed: true };
  }

  render() 
  {
    return (
      <div>

        <h1>Mileage Calculator</h1>

        <p>A Note Before Using:</p>
          
        <p>Mileage calculator is still in development, and therefore may be prone to bugs and crashes...</p>

        <p>Some functionality may be missing or incomplete...</p>

        {this.renderWeekOrDistance()}

      </div>
    );
  }

  renderWeekOrDistance()
  {
    if(this.state.weekDisplayed)
    {
      return (<Week storeListData={this.props.storeListData} />);
    }

    else
    {
      return (<Distance   mainDataObject={this} 
                          ref={(element) => (window.distanceElement = element)}/>);
    }
  }
}

export default Main;


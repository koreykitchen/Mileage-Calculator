import React from 'react';

import Week from '../Week/week.js';

import WeekDistance from '../Distance/weekDistance.js';

class Main extends React.Component 
{
  constructor(props) 
  {
    super(props);

    this.state = { weekDisplayed: true,  arrayOfDaysData: new Array(7).fill([])};

    this.addStore = this.addStore.bind(this);

    this.removeStore = this.removeStore.bind(this);
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
      return (<Week storeListData={this.props.storeListData}
                    arrayOfDaysData={this.state.arrayOfDaysData}
                    swapWeekOrDistanceDisplay={() => this.swapWeekOrDistanceDisplay()}
                    addStore={this.addStore}
                    removeStore={this.removeStore} />);
    }

    else
    {
      return (<WeekDistance   swapWeekOrDistanceDisplay={() => this.swapWeekOrDistanceDisplay()}
                          arrayOfDaysData={this.state.arrayOfDaysData}
                          ref={(element) => (window.distanceElement = element)}/>);
    }
  }

  swapWeekOrDistanceDisplay()
  {
    this.setState({ weekDisplayed: !this.state.weekDisplayed });
  }

  addStore(dayIndex, storeToAdd)
  {
    var tempArrayOfDaysData = [...this.state.arrayOfDaysData];

    var tempDaysData = [...tempArrayOfDaysData[dayIndex]];
    
    tempDaysData.push(storeToAdd);

    tempArrayOfDaysData[dayIndex] = tempDaysData;

    this.setState({arrayOfDaysData: tempArrayOfDaysData});
  }

  removeStore(dayIndex, storeToRemoveIndex)
  {
    var tempArrayOfDaysData = [...this.state.arrayOfDaysData];

    var tempDaysData = [...tempArrayOfDaysData[dayIndex]];

    tempDaysData.splice(storeToRemoveIndex, 1);

    tempArrayOfDaysData[dayIndex] = tempDaysData;

    this.setState({arrayOfDaysData: tempArrayOfDaysData});
  }
}

export default Main;


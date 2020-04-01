'use strict';

class LocationSelect extends React.Component 
{
  constructor(props) 
  {
    super(props);

    this.state = {  listOfLocations: [] };
  }

  render() 
  {
    return (
        <div class="bordered-div">
          <p>Inside LocationSelect Div</p>
        </div>
    );
  }
}

export default LocationSelect;
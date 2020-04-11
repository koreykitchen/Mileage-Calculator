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
                    
          <p>Select a store to add to your <span style={{fontWeight: 'bold'}}>
              {this.props.currentDay}</span> route: </p>

          <select id='locationSelectElement' style={{width:'75vw'}}>

            {this.populateSelectElement()}

          </select>

          <button onClick={() => this.addSelectedStoreToDay()} 
                  style={{marginLeft: '25px'}}>Add Store</button>

        </div>
    );
  }

  populateSelectElement()
  {
    return this.props.storeListData.map((storeObject, index) => 
                {
                    if(storeObject.Name)
                    {
                      return (<option key={index} value={index}>
                                {storeObject.Name + ' - ' + storeObject.Address +
                                  ' - ' + storeObject.City}
                              </option>);
                    }

                    else
                    {
                      return [];
                    }
                });

  }

  addSelectedStoreToDay()
  {
    var selectElement = document.getElementById("locationSelectElement");

    var storeToAddIndex = selectElement.options[selectElement.selectedIndex].value;
    
    var storeToAdd = this.props.storeListData[storeToAddIndex];

    this.props.addSelectedStoreToCurrentDay(storeToAdd);
  }
}

export default LocationSelect;


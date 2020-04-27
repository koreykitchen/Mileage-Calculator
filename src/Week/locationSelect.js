import React from 'react';

class LocationSelect extends React.Component 
{
  constructor(props) 
  {
    super(props);

    this.state = {  };

    this.selectElementOptions = this.populateSelectElement();
  }

  render() 
  {
    return (
        <div>
                    
          <p>Select a store to add to your <span style={{fontWeight: 'bold'}}>
              {this.props.currentDay}</span> route: </p>

          <select id='locationSelectElement' style={{width:'75vw'}}>

            {this.selectElementOptions}

          </select>

          <button onClick={() => 
                    (this.props.addStore(this.props.currentDayIndex, 
                      this.props.storeListData[this.getSelectedIndex()]))} 
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

  getSelectedIndex()
  {
    var selectElement = document.getElementById("locationSelectElement");

    if(selectElement)
    {
      return selectElement.options[selectElement.selectedIndex].value;
    }

    else
    {
      return 0;
    }
  }
}

export default LocationSelect;


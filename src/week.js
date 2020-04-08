import React from 'react';

import LocationSelect from './locationSelect.js';

import Day from './day.js';

class Week extends React.Component 
{
    constructor(props) 
    {
        super(props);

        this.state = {  currentDay: "Sunday"  };
    }

    render() 
    {
        return (
            <div className="bordered-div">

                {this.setupWeekdayTabs()}

                <button onClick={this.totalMiles}  
                        style={{marginLeft:'25px'}}>Total Mileage</button>

                <LocationSelect day={this.state.currentDay} data={this.props.data}/>

                <Day />

            </div>
        );
    }

    setupWeekdayTabs()
    {
        var days = ["Sunday", "Monday", "Tuesday", "Wednesday",
                    "Thursday", "Friday", "Saturday"];

        return days.map((day, index) => (<button key={day}
                                                onClick={() => this.setCurrentDayTab(index)} 
                                                style={{margin:'1px'}}>{day}</button>));
    }

    setCurrentDayTab(index)
    {
        var days = ["Sunday", "Monday", "Tuesday", "Wednesday",
                    "Thursday", "Friday", "Saturday"];

        this.setState({ currentDay: days[index] });
    }

    totalMiles()
    {

    }
}

export default Week;


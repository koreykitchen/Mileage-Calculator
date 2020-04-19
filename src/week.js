import React from 'react';

import LocationSelect from './locationSelect.js';

import Day from './day.js';

class Week extends React.Component 
{
    constructor(props) 
    {
        super(props);

        this.state = { currentDay: "Sunday" };

        this.arrayOfDayNames =  ["Sunday", "Monday", "Tuesday", "Wednesday",
                                 "Thursday", "Friday", "Saturday"];
    }

    render() 
    {
        return (
            <div className="bordered-div">

                {this.setupWeekdayTabs()}

                <button onClick={() => (this.props.swapWeekOrDistanceDisplay())}  
                        style={{marginLeft:'25px'}}>Total Mileage</button>

                <LocationSelect currentDay={this.state.currentDay}
                                currentDayIndex={this.arrayOfDayNames.findIndex((day) => 
                                    (day === this.state.currentDay))}
                                storeListData={this.props.storeListData} 
                                addLocationFunctions={this.props.addLocationFunctions}/>

                <Day    currentDayIndex={this.arrayOfDayNames.findIndex((day) => 
                            (day === this.state.currentDay))}
                        currentDaysData={this.getDaysData(this.state.currentDay)} 
                        removeLocationFunctions={this.props.removeLocationFunctions} /> 

            </div>
        );
    }

    getDaysData(dayToGetDataFor)
    {
        var dayIndex = this.arrayOfDayNames.findIndex((day) => (day === dayToGetDataFor));

        return this.props.arrayOfDaysData[dayIndex];
    }

    setupWeekdayTabs()
    {
        return this.arrayOfDayNames.map((day, index) => 
                                            (<button key={day}
                                                onClick={() => (this.setCurrentDay(index))} 
                                                style={{margin:'1px'}}>{day}</button>));
    }

    setCurrentDay(dayIndex)
    {   
        this.setState({ currentDay: this.arrayOfDayNames[dayIndex] });
    }
}

export default Week;


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

        this.weekdayTabs = this.setupWeekdayTabs();
    }

    render() 
    {
        return (
            <div className="bordered-div">

                {this.weekdayTabs}

                <button onClick={() => (this.props.swapWeekOrDistanceDisplay())}  
                        style={{marginLeft:'25px'}}>Total Mileage</button>

                <LocationSelect currentDay={this.state.currentDay}
                                currentDayIndex={this.getDaysIndex(this.state.currentDay)}
                                storeListData={this.props.storeListData} 
                                addStore={this.props.addStore}/>

                <Day    currentDayIndex={this.getDaysIndex(this.state.currentDay)}
                        currentDaysData={this.getDaysData(this.state.currentDay)} 
                        removeStore={this.props.removeStore} /> 

            </div>
        );
    }

    getDaysData(dayToGetDataFor)
    {
        var dayIndex = this.arrayOfDayNames.findIndex((day) => (day === dayToGetDataFor));

        return this.props.arrayOfDaysData[dayIndex];
    }

    getDaysIndex(dayName)
    {
        return this.arrayOfDayNames.findIndex((day) => (day === this.state.currentDay));
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


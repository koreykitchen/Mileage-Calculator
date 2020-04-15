import React from 'react';

import LocationSelect from './locationSelect.js';

import Day from './day.js';

import Distance from './distance.js';

class Week extends React.Component 
{
    constructor(props) 
    {
        super(props);

        this.state = {  currentDay: "Sunday" , arrayOfDaysData: new Array(7).fill([]),
                        currentDaysData:  [], totalClicked: false};

        this.arrayOfDayNames =  ["Sunday", "Monday", "Tuesday", "Wednesday",
                                 "Thursday", "Friday", "Saturday"];
    }

    render() 
    {
        return (
            <div className="bordered-div">

                {this.setupWeekdayTabs()}

                <button onClick={() => (this.calculateTotalMiles())}  
                        style={{marginLeft:'25px'}}>Total Mileage</button>

                {this.testDistance()}  

                <LocationSelect currentDay={this.state.currentDay} 
                                storeListData={this.props.storeListData}
                                addSelectedStoreToCurrentDay={this.addSelectedStoreToCurrentDay}
                                weekDataObject={this} />

                <Day weekDataObject={this} /> 

            </div>
        );
    }

    testDistance()
    {
        if (this.state.totalClicked)
        {
            return (<Distance   weekDataObject={this} 
                                ref={(element) => (window.distanceElement = element)}/>);
        }

        else
        {
            return;
        }
    }

    addSelectedStoreToCurrentDay(storeToAdd, weekDataObject)
    {
        let tempDayData = [...weekDataObject.getDaysData(weekDataObject.state.currentDay)]; 

        tempDayData.push(storeToAdd); 

        weekDataObject.setDaysData(tempDayData, weekDataObject.state.currentDay);
    }

    setDaysData(daysData, dayToSetDataFor)
    {
        var tempArrayOfDaysData = [...this.state.arrayOfDaysData];

        var dayIndex = this.arrayOfDayNames.findIndex((day) => (day === dayToSetDataFor));

        tempArrayOfDaysData[dayIndex] = daysData;

        this.setState({arrayOfDaysData: tempArrayOfDaysData, currentDaysData: daysData});
    }

    getDaysData(dayToGetDataFor)
    {
        var dayIndex = this.arrayOfDayNames.findIndex((day) => (day === dayToGetDataFor));

        return this.state.arrayOfDaysData[dayIndex];
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
        var toSetCurrentDaysData = [...this.getDaysData(this.arrayOfDayNames[dayIndex])];

        this.setState({ currentDay: this.arrayOfDayNames[dayIndex], 
                        currentDaysData: toSetCurrentDaysData});
    }

    //TODO
    calculateTotalMiles()
    {
        this.setState({ totalClicked: !this.state.totalClicked });
    }
}

export default Week;


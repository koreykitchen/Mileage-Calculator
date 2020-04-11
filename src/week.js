import React from 'react';

import LocationSelect from './locationSelect.js';

import Day from './day.js';

class Week extends React.Component 
{
    constructor(props) 
    {
        super(props);

        this.state = {  currentDay: "Sunday" , dayData: new Array(7).fill([]) };
    }

    render() 
    {
        return (
            <div className="bordered-div">

                {this.setupWeekdayTabs()}

                <button onClick={this.totalMiles}  
                        style={{marginLeft:'25px'}}>Total Mileage</button>

                <LocationSelect currentDay={this.state.currentDay} 
                                storeListData={this.props.storeListData}
                                addSelectedStoreToCurrentDay={this.addSelectedStoreToCurrentDay}/>

                <Day data={this.state.dayData[this.getDaysData()]} callback={this.setDayData}/>

            </div>
        );
    }

    addSelectedStoreToCurrentDay(storeToAdd)
    {
        console.log(storeToAdd);
    }

    setDayData(daysData)
    {
        var tempDayData = this.state.dayData;

        tempDayData[this.getDaysData()] = daysData;

        this.setState({dayData: tempDayData});
    }

    getDaysData()
    {
        var days = ["Sunday", "Monday", "Tuesday", "Wednesday",
                    "Thursday", "Friday", "Saturday"];

        return days.findIndex((day) => (day === this.state.currentDay));
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


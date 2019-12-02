import React from 'react';
import moment from 'moment';
//import './calender.css';


class Calender extends React.Component {

    state = {
        dateContext: moment(), //to navigate between months and years
        today: moment(),  // will always point to current date
        showMonthPopup: false,
        showYearPopup: false,
        selectedDay: null
    }

    constructor(props) {
        super(props);
        this.width = props.width || "350px";
        this.style = props.style || {};
        this.style.width = this.width;
        this.onMonthChange = this.onMonthChange.bind(this);
        this.onMonthClick = this.onMonthClick.bind(this);
        this.onShowYearEditor = this.onShowYearEditor.bind(this);
        this.onKeyUp = this.onKeyUp.bind(this);
        this.onYearChange = this.onYearChange.bind(this);
    }


    weekdays = moment.weekdays(); //["Sunday", "Monday", "Tuesday", "Wednessday", "Thursday", "Friday", "Saturday"]
    weekdaysShort = moment.weekdaysShort(); // ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"]
    months = moment.months();



    year = () => {
        return this.state.dateContext.format("Y"); //return current year from selected date context
    }
    month = () => {
        return this.state.dateContext.format("MMMM");
    }
    daysInMonth = () => {
        return this.state.dateContext.daysInMonth();
    }
    currentDate = () => {
        return this.state.dateContext.get("date");
    }
    currentDay = () => {
        return this.state.dateContext.format("D");
    }
    firstDayOfMonth = () => {
        let dateContext = this.state.dateContext;
        let firstDay = moment(dateContext).startOf('month').format("d"); //day of week i.e 0,1,2,..6
        return firstDay;
    }
   
    onMonthChange(e) {
        this.setState({
            showMonthPopup: !this.state.showMonthPopup
        })
    }
    onMonthClick(e, month) {
        let monthNo = this.months.indexOf(month);
        //console.log("no is ",monthNo);
        let dateContext = moment(dateContext).set("month", monthNo);
        this.setState({
            dateContext: dateContext
        })
        this.state.onMonthChange && this.state.onMonthChange();
    }
    onShowYearEditor() {
        this.setState({ showYearEditor: true });
    }

    setYear = (year) => {
        let dateContext = Object.assign({}, this.state.dateContext);
        dateContext = moment(dateContext).set("year", year);
        this.setState({
            dateContext: dateContext
        })
    }
    onYearChange(e) {
        this.setYear(e.target.value);
        this.props.onYearChange && this.props.onYearChange(e, e.target.value);
    }
    onKeyUp() {
        if (e.which === 13 || e.which === 27) {
            this.setYear(e.target.value);
            this.setState({
                showYearEditor: false
            })
        }
    }
    onPrevMonth=() =>{
        let dateContext = Object.assign({}, this.state.dateContext);
        dateContext = moment(dateContext).add(1, "month");
        this.setState({
            dateContext: dateContext
        })
        this.props.onNextMonth && this.props.onNextMonth();
    }
    onNextMonth=() => {
        let dateContext = Object.assign({}, this.state.dateContext);
        dateContext = moment(dateContext).subtract(1, "month");
        this.setState({
            dateContext: dateContext
        })
        this.props.onPrevMonth && this.props.onPrevMonth();
    }
    SelectList = (props) => {
        console.log("datais ", props);
        let monthName = props.data.map((month) => {
            return (
                <div key={month}>
                    <a href="#" onClick={(e) => { this.onMonthClick(e, month) }}>{month}</a>
                </div>
            )
        });
        return (
            <div className="month_name_list">
                {monthName}
            </div>
        );
    }

    monthNav = () => {
        return (
            <span className="label_month" onClick={this.onMonthChange}>
                {this.month()}
                {this.state.showMonthPopup &&
                    < this.SelectList data={this.months} />
                }
            </span>
        );
    }
    yearNav = () => {
        return (
            this.state.showYearEditor ?
                <input defaultValue={this.year()}
                    className="year_editor"
                    refs={(yearInput) => { this.yearInput = yearInput }}
                    onKeyUp={this.onKeyUp}
                    onChange={this.onYearChange}
                    type="number"
                />
                :
                <span className="label_year" onDoubleClick={this.onShowYearEditor}> {this.year()}</span>
        );
    }
    onDayClick=(e,day) => {
        console.log("gfgjhg",e);
        this.props.onDayClick && this.props.onDayClick(e,day);
    }
    render() {
        let weekdays = this.weekdaysShort.map((day) => {
            return <td key={day} className="week_day">{day}</td>
        });

        let blanks = [];
        for (var i = 0; i < this.firstDayOfMonth(); i++) {
            blanks.push(<td key={i*100}>{""}</td>)
        }
        console.log("blanks", blanks);

        let daysInMonth = [];
        for (let d = 1; d <= this.daysInMonth(); d++) {
            let className = (d == this.currentDay() ? "day current_day": "day");
            let selectedClass = (d == this.state.selectedDay ? " selected_day " : "")
            daysInMonth.push(
                <td key={d} className={className + selectedClass} >
                    <span onClick={(e)=>{this.onDayClick(e, d)}}>{d}</span>
                </td>
            );
        }

        console.log("daysInMonth", daysInMonth);

        var totalSlots = [...blanks, ...daysInMonth];
        let rows = [];
        let cells = [];
        totalSlots.forEach((row, i) => {
            if (i % 7 !== 0) {
                cells.push(row);
            } else {
                let insertRow = cells.slice();
                rows.push(insertRow);
                cells = [];
                cells.push(row);
            }
            if (i === totalSlots.length - 1) {
                let insertRow = cells.slice();
                rows.push(insertRow);
            }
        });

        let trElems = rows.map((row, i) => {
            return <tr key={i*80}>{row}</tr>
        })
        return (
            <div className="calender_layout" style={this.style}>

                <table className="calender">
                    <thead>
                        <tr className="calender_row">
                            <td colSpan="5">
                                <this.monthNav />
                                {" "}
                                <this.yearNav />
                            </td>
                            <td colSpan="2" className="nav_month">
                                <i className="prev fa fa-fw fa-chevron-left" onClick={this.onNextMonth}></i>
                                <i className="prev fa fa-fw fa-chevron-right" onClick={this.onPrevMonth}></i>

                            </td>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            {weekdays}
                        </tr>
                        {trElems}
                    </tbody>
                </table>
            </div>
        );

    }
}
export default Calender;
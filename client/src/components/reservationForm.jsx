import React from 'react';
import Guests from './guests.jsx';
import Calender from './calender.jsx';
import Time from './time.jsx';
import { relative } from 'path';

const style = {
    position: "relative",
    margin: "50px auto"
}
class ReservationForm extends React.Component {
    onDayClick = (e, day) => {
        console.log(day);
    }
    render() {
        return (
            <div>
                <div className="border_frame border_color">
                    <h2 className="title">Make a Reservation</h2>


                    <div className="input_date">
                        <span className="date_span">
                        <i class="fa fa-calendar" aria-hidden="true"></i>

                        </span>
                            <input placeholder="YYYY-M-D" value="Sun, Dec 1" className="input"></input>
                       
                    </div>




                    <Guests />
                    <button type="submit" className ="button_layout">Find a Table</button>
                    </div>
                    <Calender style={style} width="310px" onDayClick={(e, day) => { this.onDayClick(e, day) }} />
                    <Time />
                    
                    
                </div>
                );
              }
            }
  export default ReservationForm;
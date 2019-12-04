import React from 'react';
import Guests from './guests.jsx';
import Calender from './calender.jsx';
import Time from './time.jsx';
import { relative } from 'path';
import Styles from './reservationForm.module.css';

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


                    <div className={Styles.date_layout1}>
                        <div className={Styles.date_layout2}>
                            <div className={Styles.date_layout3}>
                                <span cclassName={Styles.date_layout4}>
                                    <i class="fa fa-calendar" aria-hidden="true"></i>
                                </span>
                                <input placeholder="YYYY-M-D" value="Sun, Dec 1" className={Styles.input_layout}></input>

                            </div>
                        </div>
                    </div>

                    <div className={Styles.compo_layout}>
                        <div className={Styles.time}>
                            <Time />
                        </div >
                        <div className={Styles.people}>
                            <Guests />
                        </div>
                    </div>

                    <button type="submit" className="button_layout">Find a Table</button>
                </div>
                <Calender style={style} width="310px" onDayClick={(e, day) => { this.onDayClick(e, day) }} />



            </div>
        );
    }
}
export default ReservationForm;
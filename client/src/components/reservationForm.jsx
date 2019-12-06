import React from 'react';
// import Guests from './guests.jsx';
import Calender from './calender.jsx';
import Time from './time.jsx';
import Styles from './reservationForm.module.css';
import Confirmation from './confirmation.jsx';
import Dialog from './dialog.jsx';
import People from './people.jsx';

const style = {
    position: "relative",
    margin: "50px auto"
}
class ReservationForm extends React.Component {
    constructor(props) {
        super(props);
        this.state={
            isVisible: false,
            isClick:false
        }
        this.calenderShow=this.calenderShow.bind(this);
        this.buttonClick=this.buttonClick.bind(this);
    }
    
    onDayClick = (e, day) => {
        console.log(day);

    }
    calenderShow() {
        this.setState({
            isVisible: !this.state.isVisible
        })
    //    console.log(this.state.isVisible);
    }
    buttonClick() {
        this.setState({
            isClick: !this.state.isClick
        })
    }
    
    render() {
        // let 
        return (
            <div>
                <div className="border_frame border_color">
                    <h2 className="title">Make a Reservation</h2>


                    <div className={Styles.date_layout1} >
                        <div className={Styles.date_layout2}>
                            <div className={Styles.date_layout3}>
                                <span className={Styles.date_layout4}>
                                    <i className="fa fa-calendar" aria-hidden="true"></i>
                                </span>
                                <input placeholder="YYYY-M-D" value="Sun, Dec 1" className={Styles.input_layout} onClick={this.calenderShow}></input>
                                {this.state.isVisible && <Calender style={style} width="310px" onDayClick={(e, day) => { this.onDayClick(e, day) }} />}
                            </div>
                        </div>
                    </div>

                    <div className={Styles.compo_layout}>
                        <div className={Styles.time}>
                            <Time />
                        </div >
                        <div className={Styles.people}>
                        <People/>
                        </div>
                    </div>

                    <button type="submit" className="button_layout" onClick={this.buttonClick}>Find a Table</button>
                    {this.state.isClick && 
                    
                    <Dialog  onClose={(e) => this.setState({ isClick: false })}>
                        <Confirmation />
                    </Dialog>}
                </div>
                {/* <Calender style={style} width="310px" onDayClick={(e, day) => { this.onDayClick(e, day) }} /> */}
                        <div>
                           
                        </div>


            </div>
        );
    }
}
export default ReservationForm;
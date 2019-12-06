import React from 'react';
import ReservationForm from './reservationForm.jsx';
import styles from './reservation.module.css';
import {ajax} from 'jquery';

class Reservation extends React.Component {
  constructor(props) {
    super(props);
    this.state={
      restInfo:[],
      restName:''
    }
  }
  componentDidMount() {
    this.getRestInfo();
  }
  getRestInfo(){
    ajax({
      url: '/seeding/restaurant',
      method: 'GET',
      success: item => {
        console.log(item);
        // this.setState({ items: item });
      }

    });
  }
    render() {
      return (
        <div className={styles.appComponent}>
          <ReservationForm />
        </div>
      );
    }
  }
  export default Reservation;

  //app compo
import React from 'react';
import ReservationForm from './reservationForm.jsx';
import styles from './reservation.module.css';

class Reservation extends React.Component {
    render() {
      return (
        <div className={styles.appComponent}>
          <ReservationForm />
        </div>
      );
    }
  }
  export default Reservation;
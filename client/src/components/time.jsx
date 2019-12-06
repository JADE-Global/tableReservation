import React from 'react';
import Styles from './time.module.css';

const Time = () => {

  return (
    <div className={Styles.time_layout1}>
      <div className={Styles.time_layout2}>
        <div className={Styles.time_layout3}>
          <span className={Styles.time_layout4}>
            <i className="fa fa-clock-o" aria-hidden="true"></i>
          </span>
          <select className={Styles.option_layout}>
            <option>5:00 PM</option>
            <option>6:00 PM</option>
            <option>7:00 PM</option>
          </select>
        </div>
      </div>
    </div>
  );

}
export default Time;
import React from 'react';
import Styles from './restaurantInfo.module.css';
// import Logo from './logo.jpg';
// const logo = require('./logo.jpg'); 

class RestaurantInfo extends React.Component {
    constructor(props) {
        super(props);
        this.state={

        }
    }
    render() {

        return (
            <div className={Styles.restInfo}>
                <div className={Styles.restName}>
                    <img  alt="dish" width="100" height="50"></img>
                RestaurantInfo component<br/>
                gjh <br/>
                hgnkjh
                </div>
            </div>

        );
    }
}

export default RestaurantInfo;
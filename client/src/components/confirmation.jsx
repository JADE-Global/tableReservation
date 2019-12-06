import React from 'react';
import Styles from './confirmation.module.css';
import RestaurantInfo from './restaurantInfo.jsx';

class Confirmation extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            isChecked: false
        }
    }
    handleCheckboxChange() {
        this.setState({
            isChecked: !this.state.isChecked
        })
    }
    render() {
        if (this.state.isChecked) {

        }
        return (
            <div>
                <h2 className={Styles.heading_layout}>Confirm Reservation</h2>
                <RestaurantInfo />
                <form>
                    <div className={Styles.blockOne}>
                        <div className={Styles.textField1}>
                            <label>First Name</label><input type="text" required />
                        </div>
                        <div className={Styles.textField2}>
                            <label>Last Name</label><input type="text" required />
                        </div>
                    </div>
                    <div className={Styles.blockOne}>
                        <div className={Styles.textField1}>
                            <label> Email</label><input type="text" required />
                        </div>
                        <div className={Styles.textField1}>
                            <label>Mobile Number</label><input type="text" required />
                        </div>
                        </div>
                        <div className={Styles.textField1}>
                            <label>Notes (Optional)</label><input type="text" />
                        </div>
                        <div>
                            <p>You’ll receive texts about your restaurant visit. By continuing below, you agree to Yelp’s Terms of Service and Privacy Policy. We’ll send your name, mobile number, and notes to the restaurant.</p>
                        </div>
                        <div className={Styles.checkbox}>
                            <input type="checkbox" data-testid="toggle"
                                onChange={this.handleCheckboxChange} required
                            />
                            <span>Also send my email to this restaurant so I can get updates and promotional material directly from them.</span>
                        </div>
                        <div>
                        <button type="submit" className={Styles.confirmButton}>Confirm Reservation</button>
                      
                        </div>
                        
                </form>
            </div>

                );
            }
        }
        
export default Confirmation;
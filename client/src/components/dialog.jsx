import React from 'react';
import Styles from './dialog.module.css';

class Dialog extends React.Component {
    constructor(props) {
        super(props);
        this.state={

        }
    }
    render() {
        let dialog=(
                <div className={Styles.dialogStyle}>
                <button className={Styles.dialogCloseButtonStyles} onClick={this.props.onClose}>X</button>
                <div>{this.props.children}</div>
            </div>
        );
        if(this.props.isClick) {
            dialog=null;
        }
        return (
         <div>{dialog}</div>   
        )
    }
}

export default Dialog;
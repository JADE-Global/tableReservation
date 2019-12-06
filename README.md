# tableReservation

import React from 'react';
import Styles from './people.module.css';
class People extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            items : this.props.items || [],
            showItems:false,
            selectedItem:this.props.options && this.props.items[0]
        }
        this.dropDown=this.dropDown.bind(this);
    }
    dropDown(){
        this.setState( prevState => ({ 
            showItems: !prevState.showItems
        }) 
        )
    }
    selectItem=(item)=> this.setState({
        selectedItem: item,
        showItems:false

    })

    
    render() {
        return (
            <div>
            <div className="select-box" onClick={this.dropDown}>
                <span className={`${this.state.showItems ? 'select-box--arrow-up' : 'select-box--arrow-down'}`} />
            </div>
            <div style={{display: this.state.showItems ? 'block' : 'none'}}>

            </div>

            <div>
                {this.state.items.map(item => <div key={item.id} onClick={()=> this.selectItem(item)}
                 className={this.state.selectedItem === item  ? 'selected' : ''}
                >
                    {item.value}
                    </div>
                )}
            </div>
            </div>
        )
    }
}

export default People;

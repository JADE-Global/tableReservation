import React from 'react';
import Select from 'react-select';
import Styles from './people.module.css';

const options=[
  { value: '2 people', label: '2 people' },
  { value: '3 people', label: '3 people' },
  { value: '4 people', label: '4 people' },
  { value: '5 people', label: '5 people' },
  { value: '6 people', label: '6 people' },
];

class People extends React.Component {
    state = {
      selectedOption: null,
    };
    handleChange = (selectedOption) => {
      this.setState({ selectedOption });
      console.log(`Option selected:`, selectedOption);
    };
    render() {
      const { selectedOption } = this.state;
   
      return (
        <div className={Styles.guest_layout1}>
        <div className={Styles.guest_layout2}>
          <div className={Styles.guest_layout3}>
            <span className={Styles.guest_layout4}>
              <i className="fa fa-user" aria-hidden="true"></i>
            </span>
          </div>
          <div className={Styles.option_layout}>
        <Select classNamePrefix='list'
          defaultValue={{ value: '1 people', label: '1 people' }}
          onChange={this.handleChange}
          options={options}
        />
        </div>
        </div>
        </div>
      );
    }
  }
  
  export default People;
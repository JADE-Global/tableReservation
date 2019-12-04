import React from 'react';
import { shallow } from 'enzyme';
import Reservation from '../client/src/components/reservation.jsx';

describe('Reservation component', () => {
  
  it('should render reservation component correctly without error', () => {
     const component = shallow(<Reservation />);
    console.log(component.debug());
    const wrapper= component.find('.appComponent');
        expect(wrapper.length).toBe(1);
  });
});
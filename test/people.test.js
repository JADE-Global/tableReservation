import React from 'react';
import { shallow } from 'enzyme';
import People from '../client/src/components/people.jsx';

const wrapper = shallow(<People />);


describe('Reservation component', () => {
  
it('contains an icon with class `fa` and `fa-user` ', () => {
        expect(wrapper.find('span i.fa-user').length).toBe(1);
    });

  it('should render people component correctly without error', () => {
     const component = shallow(<People />);
    console.log(component.debug());
    const wrapper= component.find('.guest_layout1');
        expect(wrapper.length).toBe(1);
  });

  it("should check values in the dropdown list", () => {
  
    expect(wrapper.find({ value: '2 people', label: '2 people' }).length).toBe(1);

    expect(getByText("Number of peoplr are 2")).toBeInTheDocument();
    fireEvent.click(getByText("2 people"));
    fireEvent.click(getByText("3 people"));
    expect(getByText("Number of people are 3")).toBeInTheDocument();
  });
});
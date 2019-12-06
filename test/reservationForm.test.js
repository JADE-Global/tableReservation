import React from 'react';
import { shallow } from 'enzyme';
import ReservationForm from '../client/src/components/reservationForm.jsx';
const wrapper = shallow(<ReservationForm />);

describe('Test Button component', () => {
  it('Test click event', () => {
    const mockCallBack = jest.fn();

    const button = shallow((<button onClick={mockCallBack}>Find Table</button>));
    button.find('button').simulate('click');
    expect(mockCallBack.mock.calls.length).toEqual(1);
  });
});
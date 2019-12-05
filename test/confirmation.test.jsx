import React from 'react';
import { mount } from 'enzyme';
import Confirmation from '../client/src/components/confirmation.jsx';

describe('testing for reservation Confirmation form component', () => {

it('renders text input with label (default type)', () => {
    const wrapper = mount(<Confirmation label="First Name" />);
    const label = wrapper.find('label');
    expect(label).toHaveLength(5);
    expect(label.text()).toEqual('First Name');
});

it('renders form submit button with "confirm Reservation" text', () => {
    const wrapper = mount(<button>Confirm Reservation</button>);
    const button = wrapper.find('button');
    expect(button).toHaveLength(1);
    expect(button.prop('type')).toEqual('submit');
    expect(button.text()).toEqual('Confirm Reservation');
  });

  it(" checkbox should be checked when value is true", () => {
    const isChecked = f => f
    const { getByTestId, debug } = render(
      <Toggle value={true} onChange={isChecked} />
    )
    debug()
    expect(getByTestId("toggle")).toHaveAttribute("checked", "true")
  })
});

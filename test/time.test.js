import React from 'react';
import { shallow } from 'enzyme';
import Time from '../client/src/components/time.jsx';

const wrapper = shallow(<Time />);

describe('testing for time component', () => {
it('contains an icon with class `fa` and `fa-clock-o` inside `.left`', () => {
    expect(wrapper.find('span i.fa-clock-o').length).toBe(1);
  });

  it('option element should contains 3 options', () => {
    expect(wrapper.find('select option').length).toBe(3);
});
})
import React from 'react';
import { shallow } from 'enzyme';
import Dialog from '../client/src/components/dialog.jsx';
const wrapper = shallow(<Dialog />);

describe('Test popup dialogbox closing', () => {
  it('Test click event', () => {
    const mockCallBack = jest.fn();

    const button = shallow((<button onClick={mockCallBack}>Find Table</button>));
    button.find('button').simulate('click');
    expect(mockCallBack.mock.calls.length).toEqual(1);
  });
});
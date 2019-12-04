import React from 'react';
import { shallow } from 'enzyme';
import Guest from '../client/src/components/guests.jsx';

const wrapper = shallow(<Guest />);

describe('Guest Component', () => {
    test('should contains select element', () => {
        expect(wrapper.find('select').length).toBe(1);
    });

    test('option element should contains 6 options', () => {
        expect(wrapper.find('select option').length).toBe(6);
    });
});
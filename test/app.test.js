import React from 'react';
import { shallow } from 'enzyme';
import App from '../client/src/components/app.jsx';

// describe('App component', () => {
//     it('render correctly text component', () => {  
//         const TextInputComponent = renderer.create(<App/>).toJSON();
//         expect(TextInputComponent).toMatchSnapshot();
//     });
//   it('should render correctly without error', () => {
//      const component = shallow(<App />);
//     console.log(component.debug());
//     const wrapper= component.find('.appComponent');
//     //expect(component).toMatchSnapshot();
//         expect(wrapper.length).toBe(1);

//   });
// });
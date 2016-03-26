import React from 'react';
import Note from './Note';
import expect from 'expect';
import { shallow } from 'enzyme';

describe('<Note />', () => {
  it('should be tested with Enzyme', () => {
    const wrapper = shallow(<Note />);
    expect(wrapper.find('h1').length).toBe(1);
  });
});

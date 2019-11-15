
import * as React from 'react'
import { mount } from 'enzyme'
import Home from '../pages/index'

describe('Pages', () => {
  describe('Home', () => {
    it('should render without throwing an error', function () {
      const props = { data: {cmsContent: 'test'}}
      const wrapper = mount(<Home {...props} />)
      console.log(wrapper);
      // expect(wrap.find('div').text()).toBe('test');
      // expect(wrapper.find('.hero')).to.have.lengthOf(2);
    })
  })  
})
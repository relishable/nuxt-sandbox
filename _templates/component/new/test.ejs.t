---
to: '<%= test ? `components/${category}/${name}/${name}.spec.ts` : null %>'
---
import { Wrapper, shallowMount } from '@vue/test-utils'
import <%= name %> from '~/components/<%= category %>/<%= name %>/<%= name %>.vue'

describe('<%= name %>', () => {
  let wrapper: Wrapper<any>

  beforeEach(() => {
    wrapper = shallowMount(<%= name %>, {
      propsData: {}
    })
  })

  describe('initialized', () => {
    it('mountable', () => {
      expect(wrapper.vm).toBeTruthy()
    })
    it('snapshot', () => {
      expect(wrapper.element).toMatchSnapshot()
    })
  })
})

import { Wrapper, shallowMount } from '@vue/test-utils'
import Card from '~/components/atoms/Card/Card.vue'

describe('Card', () => {
  let wrapper: Wrapper<any>

  beforeEach(() => {
    wrapper = shallowMount(Card, {
      propsData: {
        title: 'Test',
        icon: 'github',
        content: '<a href="https://github.com/">Github</a>',
      },
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

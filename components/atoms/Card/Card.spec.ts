import { Wrapper, shallowMount, mount } from '@vue/test-utils'
import Card from '~/components/atoms/Card/Card.vue'

describe('Card', () => {
  let wrapper: Wrapper<any>
  let shallowWrapper: Wrapper<any>

  beforeEach(() => {
    wrapper = mount(Card, {
      propsData: {
        title: 'Test',
        icon: 'github',
        content: '<a href="https://github.com/">Github</a>',
      },
    })
    shallowWrapper = shallowMount(Card, {
      propsData: {
        title: 'Test',
        icon: 'github',
        content: '<a href="https://github.com/">Github</a>',
      },
    })
  })

  describe('initialized', () => {
    it('mountable', () => {
      expect(shallowWrapper.vm).toBeTruthy()
    })
    it('snapshot', () => {
      expect(wrapper.element).toMatchSnapshot()
    })
  })
})

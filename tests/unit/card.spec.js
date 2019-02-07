import { mount  } from '@vue/test-utils'
import PmCard from '@/components/material/Card'

describe('Component', () => {
  it('renders a div', () => {
    const wrapper = mount(PmCard, {
      propsData: {
        imgHeight: 212
      }
    })
    expect(wrapper.props().imgHeight).toBe(300)
  })
  /*
  test('is a Vue instance', () => {
    const wrapper = mount(PmCard)
    expect(wrapper.isVueInstance()).toMatchSnapshot()
  })
  */
})
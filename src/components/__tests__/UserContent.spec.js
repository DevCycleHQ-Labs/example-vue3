import { describe, it, expect } from 'vitest'

import { mount } from '@vue/test-utils'
import UserContent from '../UserContent.vue'

describe('UserContent', () => {
  it('renders message prop', () => {
    const wrapper = mount(UserContent, { props: { msg: 'Hello togglebot' } })
    expect(wrapper.text()).toContain('Hello togglebot')
  })

  it('renders user dropdown', () => {
    const wrapper = mount(UserContent, { props: { msg: 'Hello' } })
    expect(wrapper.text()).toContain('User 1')
  })

  it('renders reset user button', () => {
    const wrapper = mount(UserContent, { props: { msg: 'Hello' } })
    expect(wrapper.text()).toContain('Reset User')
  })
})

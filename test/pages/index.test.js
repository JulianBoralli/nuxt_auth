import { mount } from '@vue/test-utils'
import Index from 'pages/index.vue'

test('it displays title', () => {
  const wrapper = mount(Index)

  expect(wrapper.text()).toContain('Hello Nuxt Auth')
})

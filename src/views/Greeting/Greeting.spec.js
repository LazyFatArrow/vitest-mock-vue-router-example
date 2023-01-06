import { shallowMount } from '@vue/test-utils'
import { beforeEach, describe, test, vi, expect } from 'vitest'
import { useRoute } from 'vue-router'
import Greeting from './Greeting.vue'

vi.mock('vue-router')

describe('Greeting', () => {
  const name = 'John Doe'

  beforeEach(() => {
    useRoute.mockReturnValue({
      query: {
        name,
      },
    })
  })

  test('renders greeting message for the URL query param "name"', () => {
    const wrapper = shallowMount(Greeting, {
      global: {
        stubs: ['RouterLink'],
      },
    })

    expect(wrapper.find('[data-test-id="greeting-message"]').text()).toBe(`Good morning ${name}`)
  })
})

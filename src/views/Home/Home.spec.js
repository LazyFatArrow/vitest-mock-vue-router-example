import { shallowMount } from '@vue/test-utils'
import { beforeEach, describe, test, vi, expect } from 'vitest'
import { useRouter } from 'vue-router'
import { RouteNames } from '../../router/router'
import Home from './Home.vue'

vi.mock('vue-router')

describe('Home', () => {
  useRouter.mockReturnValue({
    push: vi.fn(),
  })

  beforeEach(() => {
    useRouter().push.mockReset()
  })

  test(`navigates to ${RouteNames.GREETING} route and sets query parameter name equal to 'John Doe'`, async () => {
    const wrapper = shallowMount(Home)

    await wrapper.find('button').trigger('click')

    expect(useRouter().push).toHaveBeenCalledWith({
      name: RouteNames.GREETING,
      query: {
        name: 'John Doe',
      },
    })
  })
})

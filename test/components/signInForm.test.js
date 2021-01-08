import SignInForm from 'components/SignInForm.vue'
import { mount } from '@vue/test-utils'

let wrapper

beforeEach(() => {
  wrapper = mount(SignInForm)
})

describe('rendered content', () => {
  test('form renders two required input fields', () => {
    const inputs = wrapper.findAll('input')
    expect(inputs.length).toBe(2)
  })

  test('form renders submit button', () => {
    const button = wrapper.find('button')
    expect(button.exists()).toBe(true)
  })
})

describe('behavior', () => {
  test('calls signIn function with form input data on submit', async () => {
    // const signInSpy = jest.spyOn(wrapper.vm, 'signIn')
    // mock signIn function 
    wrapper.vm.signIn = jest.fn()

    const validInputData = {
      email: 'ncn@codejam.co.uk',
      password: 'nuckChorris'
    }
    const expectedData = expect.objectContaining(validInputData)
    // fill in form data (using element data properties to indicate input types)
    await wrapper
      .findAll('input').wrappers
      .map(input => input.setValue(validInputData[input.element.dataset.fieldType]))
    // trigger submit event
    await wrapper
      .find('form')
      .trigger('submit')
    
    expect(wrapper.vm.signIn).toHaveBeenCalledWith(expectedData)
  })
})


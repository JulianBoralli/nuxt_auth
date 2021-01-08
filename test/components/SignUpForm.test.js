import SignUpForm from 'components/SignUpForm.vue'
import { mount } from '@vue/test-utils'

let wrapper

beforeEach(() => {
  wrapper = mount(SignUpForm)
})

describe('rendered content', () => {

  test('form renders all 4 required input fields', () => {
    const inputs = wrapper.findAll('input')
    expect(inputs.length).toBe(4)
  })

  test('form renders submit button', () => {
    const button = wrapper.find('button')
    expect(button.exists()).toBe(true)
  })
})

describe('behavior', () => {
  test('calls signUp function with form input data on submit', async () => {
    // mock signUp method
    wrapper.vm.signUp = jest.fn()

    const validInputData = {
      username: 'not_chuck_norris',
      email: 'test@ncn.com',
      password: 'password',
      passwordConf: 'password'
    }
    
    const expectedData = expect.objectContaining(validInputData)

    // fill in form data (using element data properties to indicate input types)
    await wrapper
      .findAll('input').wrappers
      .map(input => 
        input.setValue(validInputData[input.element.dataset.fieldType])
      )
    // trigger submit event
    await wrapper
      .find('form')
      .trigger('submit')
    

    expect(wrapper.vm.signUp).toHaveBeenCalledWith(expectedData)
  })  
})

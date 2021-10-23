import React from 'react'
import configureStore from 'redux-mock-store'
import { mount } from 'enzyme'
import { BrowserRouter } from 'react-router-dom'
import { Provider } from 'react-redux'
import '../setupTest'
import AddProduct from '../pages/AddProduct'


const initialState = {}
const mockStore = configureStore()
let wrapper
let store

describe('AddProduct test', () => {
  const mockSubmit = jest.fn()
  window.alert = jest.fn()

  beforeEach(() => {
    store = mockStore(initialState)
    wrapper = mount(
      <Provider store={store}>
        <BrowserRouter>
          <AddProduct />
        </BrowserRouter>
      </Provider>
    )
  })

  it('should be called after input is filled', () => {
    // input name
    wrapper.find('#name').simulate('change', {
      target: {
        name: 'name',
        value: 'laptop'
      }
    })
    // input desc
    wrapper.find('#desc').simulate('change', {
      target: {
        name: 'desc',
        value: 'laptop bekas'
      }
    })
  })

  it('should be action onSubmit form', () => {
    wrapper.find('#form-add').simulate('submit')
    window.alert.mockClear()
  })
})

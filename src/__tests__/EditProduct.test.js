import React from 'react'
import configureStore from 'redux-mock-store'
import { mount } from 'enzyme'
import { BrowserRouter } from 'react-router-dom'
import { Provider } from 'react-redux'
import '../setupTest'
import EditProduct from '../pages/EditProduct'

const initialState = {}
const mockStore = configureStore()
let wrapper
let store

describe('EditProduct test', () => {
  const mockSubmit = jest.fn()
  window.alert = jest.fn()

  beforeEach(() => {
    store = mockStore(initialState)
    wrapper = mount(
      <Provider store={store}>
        <BrowserRouter>
          <EditProduct />
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
        desc: 'desc',
        value: 'laptop bekas'
      }
    })
  })

  it('should be action onSubmit form', () => {
    wrapper.find('#form-edit').simulate('submit')
    window.alert.mockClear()
  })
})

import React from 'react'
import configureStore from 'redux-mock-store'
import { mount } from 'enzyme'
import { BrowserRouter } from 'react-router-dom'
import { Provider } from 'react-redux'
import '../setupTest'
import EditTodo from '../pages/EditTodo'

const initialState = {}
const mockStore = configureStore()
let wrapper
let store

describe('EditTodo test', () => {
  const mockSubmit = jest.fn()
  window.alert = jest.fn()

  beforeEach(() => {
    store = mockStore(initialState)
    wrapper = mount(
      <Provider store={store}>
        <BrowserRouter>
          <EditTodo />
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
    wrapper.find('#status').simulate('change', {
      target: {
        name: 'status',
        value: false
      }
    })
    wrapper.find('#priority').simulate('change',{
      target: {
        name: 'priority',
        value: 0
      }
    })
  })

  it('should be action onSubmit form', () => {
    wrapper.find('#form-edit').simulate('submit')
    window.alert.mockClear()
  })
})

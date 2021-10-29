import React from 'react'
import configureStore from 'redux-mock-store'
import { mount } from 'enzyme'
import { BrowserRouter } from 'react-router-dom'
import { Provider } from 'react-redux'
import '../setupTest'
import AddTodo from '../pages/AddTodo'


const initialState = {}
const mockStore = configureStore()
let wrapper
let store

describe('AddTodo test', () => {
  const mockSubmit = jest.fn()
  window.alert = jest.fn()

  beforeEach(() => {
    store = mockStore(initialState)
    wrapper = mount(
      <Provider store={store}>
        <BrowserRouter>
          <AddTodo />
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
    wrapper.find('#form-add').simulate('submit')
    window.alert.mockClear()
  })
})

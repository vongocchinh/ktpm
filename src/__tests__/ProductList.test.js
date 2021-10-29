import React from 'react'
import { shallow } from 'enzyme'
import configureStore from 'redux-mock-store'
import TodoList from '../pages/TodoList'
import '../setupTest'

let store
describe('TodoList test', () => {
  beforeEach(() => {
    const mockStore = configureStore()

    store = mockStore([
      {
        id:'test id',
        name: 'test name',
        desc: 'test desc',
      }
    ])
  })

  it('should render the component TodoList from store', () => {
    const wrapper = shallow(<TodoList store={store} />)
    expect(wrapper).not.toBe(null)
  })
})
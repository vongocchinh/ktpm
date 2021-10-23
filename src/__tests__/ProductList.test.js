import React from 'react'
import { shallow } from 'enzyme'
import configureStore from 'redux-mock-store'
import ProductList from '../pages/ProductList'
import '../setupTest'

let store
describe('ProductList test', () => {
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

  it('should render the component productlist from store', () => {
    const wrapper = shallow(<ProductList store={store} />)
    expect(wrapper).not.toBe(null)
  })
})
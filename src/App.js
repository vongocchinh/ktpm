import React from 'react'
import './App.css'
import './index.css'
import { BrowserRouter, Route, Switch, Link } from 'react-router-dom'
import AddProduct from './pages/AddProduct'
import EditProduct from './pages/EditProduct'
import ProductList from './pages/ProductList'

import { Provider } from 'react-redux'
import { createStore, compose, applyMiddleware } from 'redux'
import Reducer from './redux/Store'

const composeEnhancer = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
export const store = createStore(Reducer, composeEnhancer(
  applyMiddleware()),
);


class App extends React.Component {
  render() {
    return (
      <Provider store={store}>
        <BrowserRouter>
          <div>
              <div className='main'>
                <Switch>
                  <Route path='/' component={ProductList} exact />
                  <Route path='/add' component={AddProduct} exact />
                  <Route path='/edit/:id' component={EditProduct} exact />
                </Switch>
              </div>
          </div>
        </BrowserRouter>
      </Provider>
    )
  }
}

export default App

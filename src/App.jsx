import React from 'react'
import ProductPage from './Components/ProductPage'
import CartPage from './Components/CartPage'
import { Provider } from 'react-redux'
import { store } from './store'

const App = () => {
  
  return (
    <Provider store={store}>
      <ProductPage/>
      <CartPage/>
    </Provider >
  )
}

export default App
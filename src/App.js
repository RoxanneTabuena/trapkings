import {  Route, 
          RouterProvider, 
          createBrowserRouter, 
          createRoutesFromElements } from 'react-router-dom'
import { useReducer } from 'react';
import { AppContext } from './AppContext';
import { Root }from "./components/root/Root"
import { Landing } from './components/landing/Landing';
import { Menu } from './components/menu/Menu';
import { Add } from './components/item/Add';
import { Remove } from './components/item/Remove';
import { Cart } from './components/cart/Cart';
import { Checkout } from './components/checkout/Checkout';
import { Summary } from './components/summary/Summary';
import './App.css';

const initialState = {
  cart: ['hella moms'],
  address: {
    street: '',
    city: '',
    state: '',
    zip: '',
  },
  orderType: 'Delivery',
  pickup: {}
}

const reducer = (state,action) => {
  switch(action.type) {
    case 'REMOVE_ITEM':
      return {...state, cart: [...state.cart, action.item]}
    default:
      return state
  }
}
const router = 

createBrowserRouter( createRoutesFromElements(
  <Route 
    path="/" 
    element={<Root/>}>
        <Route
          index
          element={<Landing />}
        />
        <Route
          path='/menu/:title'
          element={<Menu />}
        />
        <Route
          path='/add/:id'
          element={<Add />}
        />
        <Route
          path='/remove/:id'
          element={<Remove />}
        />
        <Route
          path='/cart'
          element={<Cart />}
        />
        <Route
          path='/summary'
          element={<Summary />}
        />
        <Route
          path='/checkout'
          element={<Checkout />}
        />
        
  </Route>
))

function App() {
  const [state, dispatch] = useReducer(reducer, initialState)
  return (
    <AppContext.Provider value={[state, dispatch]}>
      <RouterProvider router={router}/>
    </AppContext.Provider>
  );
}

export default App;

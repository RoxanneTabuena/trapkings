import {  Route, 
          RouterProvider, 
          createBrowserRouter, 
          createRoutesFromElements } from 'react-router-dom'
import { useReducer } from 'react';
import { AppContext } from './AppContext';
import { Root }from "./components/root/Root"
import './App.css';

const initialState = {
  cart: ['yo mama']
}

const reducer = (state,action) => {
  switch(action.type) {
    case 'ADD_ITEM':
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
        {/* <Route
          index
          element={<Landing />}
        /> */}
        
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

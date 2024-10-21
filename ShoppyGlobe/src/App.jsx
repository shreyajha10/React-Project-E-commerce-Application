import Header from './components/Header'
import { Outlet } from 'react-router-dom'
import { Provider } from 'react-redux'
import appStore from './utils/appStore'

// import { useState } from 'react'
//import useFetchData from './utils/useFetchData'
function App() {
 
  
  return (
    <>
    <Provider store={appStore}>
     <Header/>
     <Outlet/>
     </Provider>
    </>
  )
}

export default App

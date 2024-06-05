import { useContext, useEffect, useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Routing from './Router'
import { DataContext } from './components/DataProvider/DataProvider'
import { Type } from './Utility/action.type';
import {auth} from './Utility/firebase'


function App() {
  const [{user}, dispatch] = useContext(DataContext)
  useEffect(() => {
    auth.onAuthStateChanged((authUser) => {
      if(authUser){
        console.log(authUser);
        dispatch({
          type:Type.SET_USER,
          user:authUser
        })
      }else{
        dispatch({
          type:Type.SET_USER,
          user: null,
        })
      }
    })



  },[])

  return (
    <>
      <Routing />
    </>
  )
}

export default App

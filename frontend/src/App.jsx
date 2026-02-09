/**
 * Project Name: Portfolio
 * Description: A project displaying my skills and experience
 * Author: Andrelle Thompson
 * ID: 301519338
 */

import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import {BrowserRouter} from 'react-router-dom'
import MainRouter from './MainRouter'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <BrowserRouter>
      <MainRouter />
    </BrowserRouter>
    </>
  )
}

export default App

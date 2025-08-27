import { useState } from 'react'
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
import logo from '/vite.svg'
// import './App.css'
import Greet from './component/Greet.jsx'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
     <Greet/>
    </>
  )
}

export default App

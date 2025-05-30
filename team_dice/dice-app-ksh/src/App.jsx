import { useState } from 'react'
import './App.css'
import { DiceGame } from './components/DiceGame'

function App() {
  const [count, setCount] = useState(0)

  return (
    <DiceGame/>
  )
}

export default App

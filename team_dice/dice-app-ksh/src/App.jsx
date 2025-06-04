import { useState } from 'react'
import './App.css'
// import { DiceGame } from './components/DiceGame'
import { DiceGame2 } from './components2/DiceGame2'

// function App() {
//   return (
//     <DiceGame />
//   )
// }

function App() {
  return (
    <div className="App">
      <h1 style={{ textAlign: 'center' }}>🎲 주사위 게임</h1>
      <DiceGame2 />
    </div>
  );
}


export default App

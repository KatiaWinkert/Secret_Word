// css
import './App.css'
//React
import { useCallback, useEffect, useState } from 'react'

//data
import { wordsList } from './data/word'

//Components
import StartScrem from './components/StartScrem'
import Game from './components/Game'
import GameOver from './components/GameOver'

const stages = [
  { id: 1, name: 'start' },
  { id: 2, name: 'game' },
  { id: 3, name: 'end' },
]

function App() {
  const [gameStage, setGamestage] = useState(stages[0].name)
  const[words] = useState(wordsList)
  console.log(words)
  return (
    <div className="App">
      {gameStage === 'start' && <StartScrem />}
      {gameStage === 'game' && <Game />}
      {gameStage === 'end' && <GameOver />}
    </div>
  )
}

export default App

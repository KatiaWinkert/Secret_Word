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
  const [words] = useState(wordsList)

  const [pickedword, setPickedWord] = useState('')
  const [pickedCategory, setPickedCategory] = useState('')
  const [letters, serLetters] = useState([])
  const [guessedLetters, setGuessedLetters] = useState([])
  const [wrongletters, setWrongLetters] = useState([])
  const [guesses, setGuesses] = useState(3)
  const [score, setScore] = useState(0)

  const pickWordAndPickCategory = () => {
    //pick a random categorie (função para achar a categoria do jogo)
    const categories = Object.keys(words)
    const category =
      categories[Math.floor(Math.random() * Object.keys(categories).length)]

    console.log(category)

    //pick a random word (função para mostrar a palavra aleatoria)
    const word =
      words[category][Math.floor(Math.random() * words[category].length)]
    console.log(word)

    return { word, category }
  }

  //start secret word game
  const startGame = () => {
    // pick word and pick category
    const { word, category } = pickWordAndPickCategory()

    // create en array of letter (criando as letras em arry)
    let wordLetters = word.split('')

    wordLetters = wordLetters.map((a) => a.toLowerCase())

    console.log(word, category)
    console.log(wordLetters)

    //fill states
    setPickedWord(word)
    setPickedCategory(category)
    serLetters(wordLetters)

    setGamestage(stages[1].name)
  }

  //process the letter input
  const verifyLetter = (letter) => {
    console.log(letter)
  }

  //restarts the game
  const retry = () => {
    setGamestage(stages[0].name)
  }

  return (
    <div className="App">
      {gameStage === 'start' && <StartScrem startGame={startGame} />}
      {gameStage === 'game' && (
        <Game
          verifyLetter={verifyLetter}
          pickedword={pickedword}
          pickedCategory={pickedCategory}
          letters={letters} // letras
          guessedLetters={guessedLetters} //letras adivinhadas 
          wrongletters={wrongletters} //letras erradas
          guesses={guesses} // as tentativas 
          score={score} // pontuação
        />
      )}
      {gameStage === 'end' && <GameOver retry={retry} />}
    </div>
  )
}
export default App

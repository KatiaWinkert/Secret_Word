import './GameOver.css'

const GameOver = ({ retry, score }) => {
  return (
    <div className="gamerover">
      <h1>Fim fe jogo!</h1>
      <h2>
        A sua pontuação foi : <span>{score}</span>
      </h2>
      <button onClick={retry}>Reiniciar</button>
    </div>
  )
}

export default GameOver

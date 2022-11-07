import './StartScrem.css'

const StartScrem = ({ startGame }) => {
  return (
    <div className="start">
      <h1>Secret Word</h1>
      <p>clique no botão a baixo para jogar!</p>
      <button onClick={startGame}>Começar o jogo:</button>
    </div>
  )
}

export default StartScrem

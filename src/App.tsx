import ujiIcon from './assets/uji.jpg'
import xIcon from './assets/x.svg'
import './App.css'

function Card() {
  return (
    <div className="card">
      <a href="https://twitter.com/uji_rb" target="_blank">
        <img src={xIcon} className="logo" alt="X logo" />
      </a>
      <a href="https://twitter.com/uji_rb" target="_blank">
        <p>@uji_rb</p>
      </a>
    </div>
  )
}

function App() {
  return (
    <>
      <img src={ujiIcon} className="icon" alt="Uji icon" />
      <h1>uji</h1>
      <p>Software developer @MoneyForward</p>
      <Card />
    </>
  )
}

export default App
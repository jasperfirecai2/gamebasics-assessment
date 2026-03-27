import './App.css'
import Game from './Game'

function App() {


  return (
    <>
      <header className='flex flex-1/12 bg-theme border-b-2 border items-center ps-5'>
        <h1 className='text-white font-outline-1'>Football simulator</h1>
      </header>
      <section id="game" className='w-full flex-11/12'>
        <Game/>
      </section>
    </>
  )
}

export default App

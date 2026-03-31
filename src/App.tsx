import './App.css'
import { StandingProvider } from './context/StandingProvider'
import { allTeams } from './definitions/teams'
import Game from './Game'

function App() {

  //TODO: fetch teams here or in a new component?

  return (
    <>
      <header className='flex flex-1/12 bg-theme border-b-2 border items-center ps-5'>
        <h1 className='text-white font-outline-1'>Football simulator</h1>
      </header>
      <section id="game" className='w-full flex-11/12'>
        <StandingProvider teams={allTeams}>
          <Game/>
        </StandingProvider>
      </section>
    </>
  )
}

export default App

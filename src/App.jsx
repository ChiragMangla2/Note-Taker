import './App.css'
import Forminput from './components/Forminput'
import Notes from './components/Notes'

function App() {

  return (
    <>
      <div className='heading'>
        <h1>Note Taker</h1>
        <Forminput />
        <Notes />
      </div>
    </>
  )
}

export default App


import './Components.css'
import Counter from './counter'
import Timer from './Timer'
import Add from './add'
import Temperatures from './Temperatures'
function App() {
  

  return (
    <div>
      <h1>React Components</h1>
      <span className='counter'><Counter /></span>
      <br />
      <span className='timer'><Timer /></span>
      <br />
      <Add />
      <br />
      <Temperatures/>
      
    </div>
  )
}

export default App

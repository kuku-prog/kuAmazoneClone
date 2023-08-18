import './App.css'
import { Link,Route,Routes } from 'react-router-dom'
//pages
import Login from './pages/login/Login'

function App() {


  return (
    <div className='App'>
      <Routes>
        <Route to='/login' element={ <Login/>} />
      </Routes>
    </div>
  )
}

export default App

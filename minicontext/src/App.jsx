
import './App.css'
import Login from './component/login'
import Profile from './component/Profile'

import UserContextProvider from './context/UserContextProvider'

function App() {

  return (
    <UserContextProvider>
      <h1>Helloooo</h1>
      <Login/>
      <Profile></Profile>
    </UserContextProvider>
  )
}

export default App

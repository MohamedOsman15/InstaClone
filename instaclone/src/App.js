import { Route, Routes } from 'react-router-dom'
import { useState, useEffect } from 'react';
import './App.css';
import Home from './componenents/Home'
import Login from './componenents/Login';
import Register from './componenents/Register';
import Nav from './componenents/Nav';
import Feed from './componenents/Feed'
import { CheckSession } from './services/auth';

function App() {
  const [authenticated, toggleAuthenticated] = useState(false)
  const [user, setUser] = useState(null)

  const handleLogOut = () => {
    setUser(null)
    toggleAuthenticated(false)
    localStorage.clear()
  }
  const checkToken = async () => {
    const user = await CheckSession()
    setUser(user)
    toggleAuthenticated(true)
  }
  useEffect(() => {
    const token = localStorage.getItem('token')
    if (token) {
      checkToken()
    }
  }, [])

  return (
    <div className="App">
      <header>
      <Nav
          authenticated={authenticated}
          user={user}
          handleLogOut={handleLogOut}
        />
      </header>
      <main>
        <Routes>
          <Route path='/' element={<Home 
          authenticated = {authenticated}
          />} />
          <Route path='/register' element={<Register /> } />
          <Route path='/login' element={<Login 
          setUser={setUser}
          toggleAuthenticated={toggleAuthenticated}
          /> } />
          <Route path='/feed' element={<Feed 
          />} />
        </Routes>
      </main>
    </div>
  );
}

export default App;

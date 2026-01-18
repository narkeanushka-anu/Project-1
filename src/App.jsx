import { useState } from 'react'
import Login from './pages/login.jsx'
import Signup from './pages/signup.jsx'

function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false)
  const [showSignup, setShowSignup] = useState(false)

  return (
    <div>
      {isLoggedIn ? (
        <p>Welcome, you are logged in!</p>
      ) : showSignup ? (
        <Signup onSignup={() => setShowSignup(false)} />
      ) : (
        <Login onLogin={() => setIsLoggedIn(true)} onSignupClick={() => setShowSignup(true)} />
      )}
    </div>
  )
}

export default App
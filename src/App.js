import React, { useState } from 'react';
import Entrance from './pages/Entrance'
import Password from './pages/Password'
function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const handleLogin = () => {
    setIsLoggedIn(true);
  };
  return (
    <div className="App">
       {isLoggedIn ? <Entrance/> : <Password onLogin={handleLogin} />}
    </div>
  );
}

export default App;
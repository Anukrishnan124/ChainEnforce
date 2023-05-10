import { Typography } from '@mui/material';
import './App.css';
import Appbar from './components/Appbar';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { useState } from 'react';
import LoginPage from './pages/LoginPage';

function App() {
  const [wallet, setWallet] = useState("");
  return (
    <div className="App">
      <Appbar />
      <Router>
        <Routes>
          <Route path='/login' element={<LoginPage/>}/>
        </Routes>
      </Router>
    </div>
  );
}

export default App;

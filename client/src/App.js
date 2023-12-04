import './App.css';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import HomePage from './Pages/Users/HomePage';
import LoginPage from './Pages/Users/LoginPage';
import RegisterPage from './Pages/Users/RegisterPage';
import UserDetails from './Contexts/UserContext';
import axios from 'axios';
axios.defaults.withCredentials = true;
function App() {
  return (
    <>
      <UserDetails>
        <Router>
          <Routes>
            <Route path='/' element={<HomePage />} />
            <Route path='/login' element={<LoginPage />} />
            <Route path='/register' element={<RegisterPage />} />
          </Routes>
        </Router>
      </UserDetails>
    </>
  );
}

export default App;

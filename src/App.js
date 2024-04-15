import './App.css';
import Login from './pages/login/Login';
import Main from './pages/Main/Main';
import {Routes,Route} from 'react-router-dom'
import Profile from './pages/profile/profile';
import Register from './pages/register/Register'
function App() {
  return (

    <div className='body'>

    <div className="App">
    <Routes>
        <Route path="/" element={<Main />}></Route>
        <Route path="/login" element={<Login />}></Route>
        <Route path="/create" element={<Register />}></Route>
        <Route path="/profile" element={<Profile />}></Route>
        </Routes>
    </div>
    </div>
  );
}

export default App;

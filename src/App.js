import {Route, Routes} from 'react-router-dom';
import Navbar from './components/Navbar';
import ProtectedRouter from './components/ProtectedRouter';
import {AuthContextProvider} from './context/AuthContext';
import Account from './pages/Account';
import Home from './pages/Home';
import LogIn from './pages/LogIn';
import SignUp from './pages/SignUp';

function App() {
  return (
    <AuthContextProvider>
      <Navbar />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/login' element={<LogIn />} />
        <Route path='/signup' element={<SignUp />} />
        <Route
          path='/account'
          element={
            <ProtectedRouter>
              <Account />
            </ProtectedRouter>
          }
        />
      </Routes>
    </AuthContextProvider>
  );
}

export default App;

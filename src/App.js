import {Route, Routes} from 'react-router-dom';
import Main from './components/Main';
import MovieDetail from './components/MovieDetail';
import Navbar from './components/Navbar';

import {AuthContextProvider} from './context/AuthContext';
import {SearchProvider} from './context/SearchContext';
import Account from './pages/Account';
import Home from './pages/Home';

import LogIn from './pages/LogIn';
import SearchResult from './pages/SearchResult';
import SignUp from './pages/SignUp';

function App() {
  return (
    <AuthContextProvider>
      <SearchProvider>
        <Navbar />
        <Main />
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/login' element={<LogIn />} />
          <Route path='/signup' element={<SignUp />} />
          <Route path='/account' element={<Account />} />
          <Route path='/search' element={<SearchResult />} />
        </Routes>
        <MovieDetail />
      </SearchProvider>
    </AuthContextProvider>
  );
}

export default App;

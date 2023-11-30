import './style.scss';
import './App.css';
import SearchPage from './pages/SearchPage/SearchPage';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Header from './components/Header/Header';

function App() {
  return (
    <div className="App">
      <BrowserRouter basename="/yourcomp_test_task">
        <Header />
        <Routes>
          <Route path='/' element={<SearchPage />} />
          
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;

import './style.scss';
import './App.css';
import SearchPage from './pages/SearchPage/SearchPage';
import { BrowserRouter, Route, Routes } from 'react-router-dom';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<SearchPage />} />
        </Routes>
      </BrowserRouter>
      {/* <SearchPage /> */}
    </div>
  );
}

export default App;

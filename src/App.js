import logo from './logo.svg';
import Home from './views/home';
import LoginView from './views/login';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import PerguntasView from './views/perguntas';
import './App.css';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<LoginView />} />
        <Route path="/perguntas" element={<PerguntasView />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;

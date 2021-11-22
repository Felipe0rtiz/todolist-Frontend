import './App.css';
import Header from './components/shared/Header/Header';
import Home from './pages/Home/Home';
import Cadastro from './pages/Cadastro/Cadastro';
import { Routes, Route } from 'react-router-dom';
import View from './pages/View/View';
import Edit from './pages/Edit/Edit';

function App() {
  return (
    <div>
      <Header/>
      <Routes>
        <Route path="/" element={<Home/>} />
        <Route path="/cadastro" element={<Cadastro/>}/>
        <Route path="/view/:id" element={<View/>}/>
        <Route path="/edit/:id" element={<Edit/>}/>
      </Routes>
    </div>
  );
}

export default App;
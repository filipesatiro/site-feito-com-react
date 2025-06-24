import {BrowserRouter as Router, Route, Routes, Link} from 'react-router-dom';
import Home from './components/pages/Home';
import Contatc from './components/pages/Contatc';
import Company from './components/pages/Company';
import Newproject from './components/pages/Newproject';


import Container from './components/layout/Container';
function App() {
  return (
    <Router>
      <div>
      <Link to="/">Home</Link>
      <Link to="/contatos">Contato</Link>
      <Link to="/company">Empresa</Link>
      <Link to="/newproject">Novo Projeto</Link>
      </div>
      
        <Container customClass="min-height">
        <Routes>
        <Route exact path="/" element={<Home/>} />
        <Route path="/contatos" element={<Contatc/>} />
        <Route path="/company" element={<Company/>} />
        <Route path="/newproject" element={<Newproject/>} />
       </Routes>
       </Container >
      <p>Footer</p>
    </Router>
  );
}

export default App;

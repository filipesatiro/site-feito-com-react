import {BrowserRouter as Router, Route, Routes, Link} from 'react-router-dom';
import Home from './components/pages/Home';
import Contatc from './components/pages/Contatc';
import Company from './components/pages/Company';
import Newproject from './components/pages/Newproject';
import Projects from './components/pages/Projects';
import Project from './components/pages/Project';

import Container from './components/layout/Container';
import NavBar from './components/layout/NavBar';
import Footer from './components/layout/Footer';



function App() {
  return (
    <Router>
    <NavBar/>
      
        <Container customClass="min-height">
        <Routes>
        <Route exact path="/" element={<Home/>} />
        <Route path="/projects" element={<Projects/>} />
        <Route path="/contatos" element={<Contatc/>} />
        <Route path="/company" element={<Company/>} />
        <Route path="/newproject" element={<Newproject/>} />
        <Route exact path="/project/:id" element={<Project/>} />
       </Routes>
       </Container >
      <Footer/>
    </Router>
  );
}

export default App;

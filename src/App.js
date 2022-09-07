import './App.css';
import Header from './components/header/Header.component';
import Footer from './components/footer/Footer.components';
import Home from './pages/Home/Home.components';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Article from './components/Article/Article.components';

function App() {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/current" element={<Article />} /> 
      </Routes>
      <Footer />
    </BrowserRouter>
  );
}

export default App;

import './App.css';
import Home from './component/Home';
import NavBar from './component/NavBar';
// import { Route} from 'react-router-dom';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Products from './component/Products';



  function App() {
    return (
      <>
        <NavBar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/products" element={<Products />} />
        </Routes>
      </>
    );
  }

export default App;

import { Route, Routes } from 'react-router-dom';
import './App.css';
import CustomerReview from './components/CustomerReview/CustomerReview';
import DeshBoard from './components/DeshBoard/DeshBoard';
import Header from './components/Header/Header';
import Home from './components/Home/Home';
import NotFound from './components/NotFound/NotFound';

function App() {
  return (
    <div className="App">
      <Header></Header>
      <Routes>
        <Route path='/' element={<Home/>}></Route>
        <Route path='/reviews' element={<CustomerReview/>} ></Route>
        <Route path='/deshboard' element={<DeshBoard/>}></Route>
        <Route path='*' element={<NotFound/>}></Route>
      </Routes>
    </div>
  );
}

export default App;

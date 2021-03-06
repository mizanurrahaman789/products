import { Route, Routes } from 'react-router-dom';
import './App.css';

import Home from './components/Home/Home';
import NotFound from './components/NotFound/NotFound'
import Header from './components/Header/Header';
import Review from './components/Review/Review';
import Dashboard from './components/Dashboard/Dashboard';
import Blogs from './components/Blogs/Blogs';
import About from './components/About/About'
import Chart from './components/Chart/Chart';








function App() {
  return (
    <div >
      <Header></Header>


      <Routes>
        <Route path="/" element={<Home></Home>}></Route>
        <Route path="/home" element={<Home></Home>}></Route>
        <Route path="/review" element={<Review></Review>}></Route>
        <Route path="/dashboard" element={<Dashboard></Dashboard>}></Route>
        <Route path="/blogs" element={<Blogs></Blogs>}></Route>
        <Route path="/about" element={<About></About>}></Route>
        <Route path="/chart" element={<Chart></Chart>}></Route>
        <Route path="*" element={<NotFound></NotFound>}></Route>
      </Routes>

    </div>
  );
}

export default App;

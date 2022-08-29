import React, { Suspense } from 'react'
import './App.css';
import Header from './components/Header';
import Footer from './components/Footer';
// import Home from './pages/Home';
// import History from './pages/History';
// import About from './pages/About';
import Loading from './components/loading';

import {  //导入Routes和Route，Switch及Component功能已在V6版本弃用
  Routes,
  Route
} from 'react-router-dom';

const Home = React.lazy(() => import('./pages/Home'));
const History = React.lazy(() => import('./pages/History'));
const About = React.lazy(() => import('./pages/About'));
const Login = React.lazy(() => import('./pages/Login'));
const Register = React.lazy(() => import('./pages/Register'));


function App() {
  return (
    <>
      <Header />
      <main>
        <Suspense fallback={<Loading />}>
          <Routes>
            <Route path="/" element={<Home />} /> {/* 不需要exact了 */}
            <Route path="/about" element={<About />} />
            <Route path="/history" element={<History />} />
            <Route path="/login" element={<Login />}  />
            <Route path="/register" element={<Register />}  />
          </Routes>
        </Suspense>
      </main> 
      <Footer />
    </>
  );
}

export default App;

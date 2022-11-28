import './App.scss';
import Home from "./component/Home"
import Signup from './component/Signup';
import { Routes, Route } from 'react-router';

function App() {
  return (
   <div>
      <Routes>
        <Route path="/" element={ <Home/> } />
        <Route path="Signup" element={ <Signup/> } />
       
      </Routes>
   </div>
  );
}

export default App;

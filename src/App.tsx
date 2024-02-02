import './App.css';
import { Routes, Route } from 'react-router-dom'
import Welcome from './pages/Welcome';
import Table from './pages/Table';

function App() {
  return (
    <Routes>
      <Route path='*' Component={Welcome}/>
      <Route path='/Table' Component={Table}/>
    </Routes>
  );
}

export default App;

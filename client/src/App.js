import './App.css';
import {BrowserRouter, Routes, Route, link, Link} from 'react-router-dom'
import CreatePet from './components';
import Pets from './components/display';
import Update from './components/update';
import Pet from './components/detailed';


function App() {
  return (
    <div className="App">
      <BrowserRouter>
      <Routes>
        <Route path={'/'} element={<Pets/>}/>
        <Route path={'/create'} element={<CreatePet/>}/>
        <Route path={'/update/:id'} element={<Update/>}/>
        <Route path={'/details/:id'} element = {<Pet/>}/>
      </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;

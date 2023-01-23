import React from 'react'
import '../styles/App.css';
import First from './First';
import { Route, Routes} from 'react-router-dom';
import Third from './Third';
import Help from './Help';
import SignUp from './SignUp';

const App = () => {

  return (
    <Routes>
      <Route path='/' element={<First/>}  ></Route>
      <Route path='/help' element={<Help/>} ></Route>
      <Route path='/third' element={<Third/>} ></Route>
      <Route  path='/signup' element={<SignUp/>} ></Route>
    </Routes>
    // <Third/>
  )
}

export default App;

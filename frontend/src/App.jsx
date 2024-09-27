import {  BrowserRouter,  Routes,  Route} from 'react-router-dom';  

import 'mdb-react-ui-kit/dist/css/mdb.min.css';

import Layout from './Layout';
import Login from './Component/Login';
import Home from './Component/Home';
const App=()=>{
 
 return(
  <>
  
      <BrowserRouter>
          <Routes>
            <Route path='/' element={<Layout/>}>
            <Route index element={<Login/>}/>
             <Route path='/home' element={<Home/>}/>
            
            
            </Route>
          </Routes>

       </BrowserRouter>
  
  
  </>
 )

}

export default App;
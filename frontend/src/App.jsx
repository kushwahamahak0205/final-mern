import {  BrowserRouter,  Routes,  Route} from 'react-router-dom';  
import Layout from './Layout';
import Home from './Component/Home';
import Login from './Component/Login';
import 'mdb-react-ui-kit/dist/css/mdb.min.css';
const App=()=>{
 
 return(
  <>
  
  <BrowserRouter>
         <Routes>
            <Route path='/' element={<Layout/>}  />
         </Routes>
          <Routes>
           <Route path='./login' element={<Login/>}/>
         
          </Routes>
       </BrowserRouter>
  
  
  </>
 )

}

export default App;
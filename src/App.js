import Header from './Header';
import Sale from './Sale'
import Footer from './Footer'
import Slider from './Slider'
import Dienthoai from './Dienthoai';
import TrangSP from './TrangSP';
import ShopCart from './ShopCart'
import './App.css';
import { Routes,Route, Link, BrowserRouter as Router ,useParams} from 'react-router-dom'  

function App() {
  
  return (
<Router>
<div className='main'>
   <Routes>
   <Route path="/cart" element ={<Header/>}>
      <Route path="" element= { <ShopCart/>}/>
   </Route>
     <Route  path="/fpt" element={<Header/>}>
     <Route path="trangsp" element ={<TrangSP/>}/>
     <Route  path="" element= { <Slider/>}>     
     <Route  path="" element= {<Sale/>}/>
     </Route>
     </Route>
    <Route  path="dienthoai" element={<Header/>}>
     <Route path="trangsp" element ={<TrangSP/>}/>

     <Route  path="" element= { <Slider/>}>     
      <Route path="" element= {<Dienthoai/>}>
      </Route>
    </Route>
    </Route>
   </Routes>
   <Footer/>
   </div>
</Router>
  );
}
export default App;

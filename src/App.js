
import './App.css';
import '../node_modules/bootstrap-dark-5/dist/css/bootstrap-dark.min.css';
// import '../node_modules/bootstrap-dark-5/dist/js/darkmode';
import '../node_modules/bootstrap/dist/js/bootstrap.bundle'
// import '../node_modules/bootstrap/dist/js/bootstrap.bundle.min.js';
// import Navbas from './components/Navbas';
import Signup from './screen/Signup';
import Home from './screen/Home';
import Login from './screen/Login';
import Cart from './screen/Cart';
import Courses1 from './screen/courses/Courses1';
import {
  BrowserRouter as Router,
  Routes,
  Route,

} from "react-router-dom";
import { CartProvider } from './components/ContextRuducer';
// import Modal from './Modal';

function App() {



  return (
    <CartProvider>
    <Router>
    <div>
    <Routes>
    <Route exact path="/login" element={<Login/>}/>
    <Route exact path="/" element={<Home/>}/>
    <Route exact path="/createuser" element={<Signup/>}/>
    <Route exact path="/cart" element={
    // <Cart></Cart>
    <Courses1></Courses1>
    
    
    }/>

    </Routes>


    </div>
    
    </Router>
    </CartProvider>

  );
}

export default App;

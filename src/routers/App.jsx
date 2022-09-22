
import '../styles/App.css';

import { BrowserRouter,Routes,Route} from 'react-router-dom'
import Menu from '../components/Menu';

//paginas
import Home from '../pages/Home'
import About from '../pages/About'
import Proyect from '../pages/Proyectos'
import Productos from '../pages/Productos'
import Blogs from '../pages/Blogs';
import Footer from '../containers/Footer';
import Error404 from '../pages/Error404';
import Diseños from '../pages/Diseños'
import CssView from '../pages/CssView/Css_View';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
          <Menu/>
          <Routes>
            <Route exact path='/' element={<Home/>}/>
            <Route exact path='/about' element={<About/>}/>
            <Route exact path='/proyect' element={<Proyect/>}/>
            <Route exact path='/Productos' element={<Productos/>}/>
            <Route exact path='/Blogs' element={<Blogs/>}/>
            <Route exact path='/Dis' element={<Diseños/>}/>
            <Route exact path='/CssView' element={<CssView/>}/>
            <Route exact element={<Error404/>}/>
          </Routes>
          <Footer/>
        </BrowserRouter>
    </div>
  );
}



export default App;

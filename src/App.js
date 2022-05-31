import logo from './logo.svg';
import './App.css';
import './Style/Catalog/CatStyle.css';
import { StateComp } from './Example/StateComp';

import {
  BrowserRouter,
  Routes,
  Route,
  useParams,
} from "react-router-dom";
import Navbar from './Pages/Navbar';
import CategoryProduct from './Pages/Category';
import Detail from './Pages/Detail';
import Home from './Pages/Home';

function App() {
  return (
    <BrowserRouter>
      {/* <header className="App-header">
        <h1>
          Example
        </h1>
      </header>
      <StateComp />
      <div className='content'>
        <h1>Example useEffect</h1>
        <CatalogProduct />
      </div> */}

      {/* example 2 */}
      <Navbar />
      <Routes>
        <Route path='/' element={<Home/>} />
        <Route path='/catalog/:idCategory' element={<CategoryProduct/>} />
        <Route path='/catalog/detail/:idMeal' element={<Detail/>} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;

import Navbar from "./Components/Navbar/Navbar";
import {Outlet} from 'react-router-dom'
import Footer from "./Components/Footer/Footer";
import { ProductProvider } from "./Context/ProductContext";
  function App() {
  return (
    <div>
        <ProductProvider>
          <Navbar/>
          <Outlet/>
          <Footer/>
        </ProductProvider>
    </div>
  );
}

export default App;

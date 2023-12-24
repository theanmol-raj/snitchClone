import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";
import Footer from "./components/Footer";
import Navbar from "./components/Navbar";
import HomeScreen from "./screens/HomeScreen";
import LoginScreen from "./screens/LoginScreen";
import Catalog from "./screens/Catalog";
import ProductScreen from "./screens/ProductScreen";

function App() {
  return (
    <div className="App overflow-x-hidden">
      <Navbar />
      <BrowserRouter basename="/">
          <Routes>
            <Route path="/login" element={<LoginScreen />} />
            <Route path="/" element={<HomeScreen />} />
            <Route path="/collections" element={<Navigate to='/products'/>} />
            <Route path="/products" element={<Catalog />} />
            <Route path="/products/:id" element={<ProductScreen />} />
            
            {/* <Route path="/share/:sharedID" element={user ? <AppScreen /> : <NotFound />} /> */}
          </Routes>
        </BrowserRouter>
      
      
      <Footer />
    </div>
  );
}

export default App;

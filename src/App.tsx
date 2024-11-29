
import {BrowserRouter as Router, Route, Routes} from "react-router-dom"
import Favorite from "./pages/Favorites/Favorite"
import Layout from "./components/Layout/Layout"
import Home from "./pages/Home/Home"
import About from "./pages/About/About"
import Contact from "./pages/Contact/Contact"
import ProductCategory from "./pages/ProductCategory/ProductCategory"
import Shop from "./pages/Shop/Shop"
import Login from "./pages/Auth/Login/Login"
import Cart from "./pages/Cart/Cart"

function App() {
  

  return (
    <>
      <Router>
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route index element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/favorite" element={<Favorite />}></Route>
            <Route path="/Shop" element={<Shop />}></Route>
            <Route path="/Login" element={<Login />}></Route>
            <Route path="/cart" element={<Cart />}></Route>
            <Route path="product-category/:categoryName" element={<ProductCategory />} />
          </Route>
        </Routes>
      </Router>
    </>
  )
}

export default App

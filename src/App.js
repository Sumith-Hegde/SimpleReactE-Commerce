import { React } from "react";
import Header from "./components/HeaderComponent/Header";
import Footer from "./components/FooterComponent/Footer";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import HomePage from "./components/HomePageComponent/HomePage";
import Profile from "./components/ProfileComponent/Profile";
import Cart from "./components/CartComponent/Cart";
import ProductDescription from "./components/ProductDecriptionComponent/ProductDescription";
import { CartProvider } from './CartContext';
import products from "./products.json"
function App() {
  const userProfile = { name: "User1", email: "example@gmail.com", address: "123 Main St, City, Country", profileImageUrl: '/images/product1.jpg' }
  return (
    <>
      <Router>
        <CartProvider>
          <Header></Header>
          <Routes>
            <Route path="/profile" element={<Profile name={userProfile.name}
              email={userProfile.email}
              address={userProfile.address}
              profileImageUrl={userProfile.profileImageUrl}></Profile>} />

            <Route path="/cart" element={<Cart></Cart>} />

            <Route path="/products/:id" element={<ProductDescription></ProductDescription>} />

            {/* <Route path="/products/:id" component={ProductDescription} /> */}
            <Route path="/" element={<HomePage products={products}></HomePage>} />
          </Routes>
          <Footer></Footer>
        </CartProvider>
      </Router>
      {/* <HomePage products={products}></HomePage> */}
      {/* <Profile name={userProfile.name}
        email={userProfile.email}
        address={userProfile.address}
      profileImageUrl={userProfile.profileImageUrl}></Profile> */}
      {/* <Cart></Cart> */}
      {/* <ProductDescription></ProductDescription> */}
    </>
  );
}

export default App;

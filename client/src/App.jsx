
// import axios from "axios";
import Home from "./view/LandingPage.jsx";
import Navbar from "./component/Navbar/Navbar";
import Login from "./view/login.jsx";
import SignUp from "./view/Signup.jsx";
// import Products from "./view/Productcard.jsx";
import ProductDetailPage from "./view/ProductDetailPage.jsx";
import Products from "./component/Productcard.jsx";
import About from "./view/About/About";
import Feedback from "./view/FeedbackPage.jsx";
import Footer from "./component/footer.jsx";
import Logout from "./view/Logout.jsx";
import Cart from "./view/AddToCart.jsx";

function App() {
  
  return (
    <>
      <Navbar />
      <Login />
      <SignUp />
      <Home/>
      <Products />
      <ProductDetailPage />
      <About />
      <Feedback />
      <Footer />
      <Logout />
      <Cart/>
    </>
  );
}

export default App;

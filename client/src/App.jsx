
// import axios from "axios";
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

function App() {
  
  return (
    <>
      <Navbar />
      <Login />
      <SignUp />
      <Products />
      <ProductDetailPage />
      <About />
      <Feedback />
      <Footer />
      <Logout />
    </>
  );
}

export default App;

import { Outlet } from "react-router-dom";
import Navbar from "./Navbar";
import Cards from "./Cards";
import Footer from "./Footer";

function App() {
  return (
    <div className="App">
      <Navbar />

     { /* This element will render either <About/> when the url is "/about",<Contact/> when the url is "/contact" or null if it is "/" */}
      <Outlet />
      <div className="flex justify-around bg-[#EEEEEE] py-10">
        <Cards />
        <Cards />
        <Cards />

      </div>

      <Footer />
    </div>
  );
}

export default App;

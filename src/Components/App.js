import { Outlet } from "react-router-dom";
import Navbar from "./Navbar";
import Cards from "./Cards";
import Footer from "./Footer";

function App() {
  return (
    <div className="App">
      <Navbar />
      <h1 className="text-xl h-[10vh] flex justify-center items-center text-[#5B8FB9] font-semibold">You can navigate through above links.</h1>
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

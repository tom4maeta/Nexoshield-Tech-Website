import {
  BrowserRouter,
  Routes,
  Route,
  useLocation,
} from "react-router-dom";

import Home from "./pages/Home";
import About from "./pages/About";
import Services from "./pages/Services";
import ServiceDetail from "./pages/ServiceDetail";
import Login from "./pages/Login";
import Register from "./pages/Register";
import Dashboard from "./pages/Dashboard";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Booking from "./pages/Booking";
import Contact from "./pages/Contact";

function Layout() {
  const location = useLocation();

  
  const hiddenLayoutRoutes = ["/dashboard"];

  const hideLayout = hiddenLayoutRoutes.includes(
    location.pathname
  );

  return (
    <div className="min-h-screen flex flex-col bg-white">
      
      {!hideLayout && <Navbar />}

      <main className="flex-1">
        <Routes>
       
          <Route path="/" element={<Home />} />

          <Route path="/about" element={<About />} />

          <Route
            path="/services"
            element={<Services />}
          />

          <Route
            path="/services/:serviceId"
            element={<ServiceDetail />}
          />
      

          <Route path="/login" element={<Login />} />

          <Route
            path="/register"
            element={<Register />}
          />
          <Route path="/contact" element={<Contact />} />
         <Route path="/booking" element={<Booking />} />
          <Route
            path="/dashboard"
            element={<Dashboard />}
          />
        </Routes>
      </main>

     
      {!hideLayout && <Footer />}
    </div>
  );
}



function App() {
  return (
    <BrowserRouter>
      <Layout />
    </BrowserRouter>
  );
}

export default App;
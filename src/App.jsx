import {BrowserRouter, Routes, Route} from "react-router-dom";
import {Home} from "./pages/Home";
import {About} from "./pages/About";
import {Contact} from "./pages/Contact";
import {Service} from "./pages/Service";
import {Register} from "./pages/Register";
import {Login} from "./pages/Login";
import {Navbar} from "./components/Navbar";
import { Error } from "./pages/Error";
import { Logout } from "./pages/Logout";
import {Footer} from "./components/Footer";
import { AdminLayout } from "./components/Layout/Admin-Layout";
import { AdminUser } from "./pages/Admin-User";
import { AdminContact } from "./pages/Admin-Contact";
import { AdminUpdate } from "./pages/Admin-Update";




const App = () =>{
  return(
    <>
    <BrowserRouter>
    <Navbar/>
      <Routes>
        <Route path="/" element = {<Home/>}/>
        <Route path="/about" element = {<About/>}/>
        <Route path="/contact" element={<Contact />} />
        <Route path="/service" element={<Service />} />
        <Route path="/Register" element={<Register />} />
        <Route path="/Login" element={<Login />} />
        <Route path="/Logout" element={<Logout />} />
        <Route path="*" element={<Error/>}/>
        <Route path="/admin" element={<AdminLayout/>}>
        <Route path="/admin/user" element={<AdminUser/>}/>
        <Route path="/admin/contacts" element={<AdminContact/>}/>
        <Route path="/admin/users/:id/edit" element={<AdminUpdate/>}/>
        </Route>
      </Routes>
      <Footer/>
      </BrowserRouter>
    </>
  );
};

export default App;
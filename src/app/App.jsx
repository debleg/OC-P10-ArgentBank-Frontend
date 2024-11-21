import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Home from "../pages/homepage/Home.jsx";
import Loginpage from "../pages/login/Loginpage.jsx"
import Userpage from "../pages/userpage/Userpage.jsx"
import Layout from "./Layout.jsx";


function App() {
  return (
<Router>
  <Layout>
  <Routes>
    <Route path="/" element={<Home/>} />
    <Route path="/sign-in" element={<Loginpage/>}/>
    <Route path="/user" element={<Userpage/>}/>
    <Route path="*" element={<Home/>} />
  </Routes>
  </Layout>
</Router>
  );
}

export default App;
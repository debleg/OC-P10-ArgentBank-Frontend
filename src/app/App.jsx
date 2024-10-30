import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Home from "../pages/homepage/Home.jsx";
import Login from "../pages/login/Login.jsx"
import Userpage from "../pages/userpage/Userpage.jsx"
import Layout from "./Layout.jsx";


function App() {
  return (
<Router>
  <Layout>
  <Routes>
    <Route path="/" element={<Home/>} />
    <Route path="/sign-in" element={<Login/>}/>
    <Route path="/user" element={<Userpage/>}/>
  </Routes>
  </Layout>
</Router>
  );
}

export default App;
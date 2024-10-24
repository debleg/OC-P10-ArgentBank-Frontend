import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Home from "../pages/homepage";
import Login from "../pages/login"
import Userpage from "../pages/userpage"
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
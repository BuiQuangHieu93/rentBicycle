// importing components from react-router-dom package
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
} from "react-router-dom";
import Home from "./component/pages/Home";
import Subscribe from "./component/pages/Subscribe";
import MapPage from "./component/pages/MapPage";
import News from "./component/pages/News";
import Contact from "./component/pages/Contact";
import Login from "./component/pages/Login";
import Admin from "./component/pages/Admin";
import { useEffect, useState } from "react";
import Heading from "./component/Heading";

// import Home component

function App() {
  const [user, setUser] = useState(null);

  useEffect(() => {
    const getUser = () => {
      fetch("http://localhost:5000/auth/login/success", {
        method: "GET",
        credentials: "include",
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json",
          "Access-Control-Allow-Credentials": true,
        },
      })
        .then((response) => {
          if (response.status === 200) return response.json();
          throw new Error("authentication has been failed!");
        })
        .then((resObject) => {
          setUser(resObject.user);
        })
        .catch((err) => {
          console.log(err);
        })
        
    };
    getUser();
  }, []);

console.log(user)
  return (
    <Router> 
      <div className="Heading-container-test">
        <div className="Heading-cover">
          <Heading user={user} />
          </div></div>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/subscribe" element={<Subscribe />} />
            <Route path="/map" element={<MapPage />} />
            <Route path="/news" element={<News />} />
            <Route path="/contact" element={<Contact />} />
            <Route
              path="/login"
              element={user ? <Navigate link to="/" /> : <Login />}
            />
            <Route path="/admin" element={<Admin/>}/>
          </Routes>
          
    </Router>
  );
}

export default App;

import React from "react";
import Navbar from "./Components/Navbar";
import Reservation from "./Components/Reservation";
import About from "./Components/About";
import Menuone from "./Components/Menuone";
import Location from "./Components/Location";
import Footer from "./Components/Footer";
import Login from "./Components/Login";
import Error from "./Components/Error";
import { BrowserRouter } from "react-router-dom";
import { useEffect } from "react";
import { useState } from "react";
import {
  BrowserRouter as Router,
  Route,
  Routes,
  Navigate,
} from "react-router-dom";

document.title = "Uncle Sam's Kitchen";

const App = () => {
  const [user, setuser] = useState(null);

  useEffect(() => {
    const getUser = () => {
      fetch("http://localhost:5000/auth/login/success", {
        method: "GET",
        credentials: "include",

        headers: {
          Accept: "applicatin/json",
          "content-Type": "application/json",
          "Access-Control-Allow-Credentials": true,
        },
      })
        .then((response) => {
          if (response.status === 200) return response.json();

          throw new Error("authentication has been  failed!");
        })
        .then((resObject) => {
          setuser(resObject.user);
        })
        .catch((err) => {
          console.log(err);
        });
    };
    getUser();
  }, []);

  console.log(user);

  return (
    <BrowserRouter>
      <>
        <Navbar user={user} />

        <Routes>
          <Route path="/" exact element={user ? <Menuone /> : <Login />} />
          <Route path="/Location" element={<Location />} />
          <Route path="/Reservation" element={<Reservation />} />
          <Route path="/About" element={<About />} />
          <Route
            path="/Login"
            element={user ? <Navigate to="/" /> : <Login />}
          />
          <Route path="*" element={<Error />} />
        </Routes>

        <Footer />
      </>
    </BrowserRouter>
  );
};

export default App;

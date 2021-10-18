import logo from "./logo.svg";
import "./App.css";
import { Button } from "react-bootstrap";
import { Route, Switch } from "react-router";
import { BrowserRouter as Router } from "react-router-dom";
import Header from "./components/shared/header/Header";
import Home from "./components/home/home/Home";
import Doctors from "./components/doctors/doctors/Doctors";
import Appointment from "./components/appointment/Appointment";
import NotFound from "./components/notfound/NotFound";
import Footer from "./components/shared/footer/Footer";
import ServiceDetail from "./components/service-detail/ServiceDetail";
import Login from "./components/login/Login";
import Register from "./components/register/Register";

function App() {
  const appStyle = {
    marginTop: "100px",
  };

  return (
    <div className="App" style={appStyle}>
      <Router>
        <Header />
        <Switch>
          <Route exact path="/">
            <Home />
          </Route>
          <Route path="/home">
            <Home />
          </Route>
          <Route path="/doctors">
            <Doctors />
          </Route>
          <Route path="/appointment">
            <Appointment />
          </Route>
          <Route path="/service/:serviceId">
            <ServiceDetail />
          </Route>
          <Route path="/login">
            <Login />
          </Route>
          <Route path="/register">
            <Register />
          </Route>
          <Route path="*">
            <NotFound />
          </Route>
        </Switch>
        <Footer />
      </Router>
    </div>
  );
}

export default App;

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
import AuthProvider, { AuthContext } from "./context/AuthProvider";
import PrivateRoute from "./components/login/PrivateRoute";

function App() {
  const appStyle = {
    marginTop: "100px",
  };

  return (
    <div className="App d-flex flex-column min-vh-100" style={appStyle}>
      <AuthProvider>
        <Router>
          <Header />
          <Switch>
            <Route exact path="/">
              <Home />
            </Route>
            <Route path="/home">
              <Home />
            </Route>
            <PrivateRoute path="/doctors">
              <Doctors />
            </PrivateRoute>
            <PrivateRoute path="/appointment">
              <Appointment />
            </PrivateRoute>
            <PrivateRoute path="/service/:serviceId">
              <ServiceDetail />
            </PrivateRoute>
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
      </AuthProvider>
    </div>
  );
}

export default App;

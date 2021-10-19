import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import NotFound from "./components/Pages/NotFound/NotFound";
import Login from "./components/Pages/Login/Login";
import Register from "./components/Pages/Register/Register";
import AuthProvider from "./context/AuthProvider";
import AboutPage from "./components/Pages/About/About.js";
import PrivateRoute from "./components/PrivateRoute/PrivateRoute";
import Home from "./components/Pages/Home/Home";
import Header from "./components/Shared/Header/Header";
import Profile from "./components/Pages/Profile/Profile";
import Footer from "./components/Shared/Footer/Footer";
import Contact from "./components/Pages/Contact/Contact";
import Services from "./components/Pages/Home/Services/Services";
import SingleService from "./components/Pages/Service/SingleService";
import Appointment from "./components/Pages/Appointment/Appointment";
function App() {
  return (
    <Router>
      <AuthProvider>
        <Header></Header>
        <Switch>
          <Route exact path="/">
            <Home></Home>
          </Route>
          <Route path="/home">
            <Home></Home>
          </Route>
          <Route path="/about">
            <AboutPage></AboutPage>
          </Route>
          <Route path="/login">
            <Login></Login>
          </Route>
          <Route path="/register">
            <Register></Register>
          </Route>
          <Route path="/contact">
            <Contact></Contact>
          </Route>
          <PrivateRoute exact path="/services">
            <Services></Services>
          </PrivateRoute>
          <PrivateRoute exact path="/appointment">
            <Appointment></Appointment>
          </PrivateRoute>
          <PrivateRoute path="/service/:id">
            <SingleService></SingleService>
          </PrivateRoute>
          <PrivateRoute exact path="/profile">
            <Profile></Profile>
          </PrivateRoute>
          <Route path="*">
            <NotFound></NotFound>
          </Route>
        </Switch>
        <Footer></Footer>
      </AuthProvider>
    </Router>
  );
}

export default App;

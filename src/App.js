import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import "./App.css";
import NotFound from "./components/Pages/NotFound/NotFound";
import Login from "./components/Pages/Login/Login";
import Register from "./components/Pages/Register/Register";
import Services from "./components/Pages/Services/Services";
import AuthProvider from "./context/AuthProvider";
import About from "./components/Pages/About/About";
import PrivateRoute from "./components/PrivateRoute/PrivateRoute";
import Home from "./components/Pages/Home/Home";
import Header from "./components/Shared/Header/Header";
import Profile from "./components/Pages/Profile/Profile";
import ProfileEdit from "./components/Pages/Profile/ProfileEdit/ProfileEdit";
import Footer from "./components/Shared/Footer/Footer";
import Contact from "./components/Pages/Contact/Contact";
import Pricing from "./components/Pages/Pricing/Pricing";

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
            <About></About>
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
          <Route path="/pricing">
            <Pricing></Pricing>
          </Route>
          <PrivateRoute exact path="/services">
            <Services></Services>
          </PrivateRoute>
          <PrivateRoute exact path="/profile">
            <Profile></Profile>
          </PrivateRoute>
          <PrivateRoute exact path="/profile/edit">
            <ProfileEdit></ProfileEdit>
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

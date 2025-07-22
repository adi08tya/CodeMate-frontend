import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Body from "./components/Body";
import { Provider } from "react-redux";
import appStore from "./utils/appStore";
import Login from "./components/Login";
import Landing from "./components/Landing";
import Signup from "./components/Signup";
import Profile from "./components/Profile";
import Feed from "./components/Feed";
import EditProfile from "./components/EditProfile";
import Connections from "./components/Connections";
import Requests from "./components/requests";
import AboutUs from "./components/AboutUs";
import Careers from "./components/Careers";
import Blog from "./components/Blog";
import Press from "./components/Press";
import HelpCenter from "./components/HelpCenter";
import ContactUs from "./components/ContactUs";
import TermsOfService from "./components/TermsOfService";
import PrivacyPolicy from "./components/PrivacyPolicy";

function App() {
  return (
    <>
      <Provider store={appStore}>
        <Router basename="/">
          <Routes>
            <Route path="/" element={<Landing />} />
            <Route path="/signup" element={<Signup />} />
            <Route path="/login" element={<Login />} />
            <Route path="/about" element={<AboutUs />} />
            <Route path="/careers" element={<Careers />} />
            <Route path="/blog" element={<Blog />} />
            <Route path="/press" element={<Press />} />
            <Route path="/help" element={<HelpCenter />} />
            <Route path="/contact" element={<ContactUs />} />
            <Route path="/terms" element={<TermsOfService />} />
            <Route path="/privacy" element={<PrivacyPolicy />} />
            <Route path="/body" element={<Body />}>
              <Route path="feed" element={<Feed />} />
              <Route path="profile" element={<Profile />} />
              <Route path="editprofile" element={<EditProfile />} />
              <Route path="connections" element={<Connections />} />
              <Route path="requests" element={<Requests />} />
            </Route>
          </Routes>
        </Router>
      </Provider>
    </>
  );
}

export default App;

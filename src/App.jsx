import { BrowserRouter, Route, Routes } from "react-router-dom";
import Body from "./components/Body";
import { Provider } from "react-redux";
import appStore from "./utils/appStore";
import Login from "./components/Login";
import Landing from "./components/Landing";
import Signup from "./components/Signup";
import Profile from "./components/Profile";


function App() {

  return (
    <>
      <Provider store={appStore}>
        <BrowserRouter basename="/">
          <Routes>
            <Route path="/" element={<Landing />} />
            <Route path= "/signup" element={<Signup/>}/>
            <Route path="/login" element={<Login />} />
            <Route path="/body" element={<Body/>}/>
            <Route path="/profile" element={<Profile/>}/>
          </Routes>
        </BrowserRouter>
      </Provider>
    </>
  );
}

export default App

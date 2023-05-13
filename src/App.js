import "./styles.css";
import { useState } from "react";
import Login from "./Login";
import Profile from "./Profile";
import { LoginContext } from "./Context/LoginContext";

export default function App() {
  const [toggle, setToggle] = useState(false);
  const [username, setUsername] = useState("");
  return (
    <div className="App">
      <LoginContext.Provider value={{ username, setUsername, setToggle }}>
        {toggle ? <Profile /> : <Login />}
      </LoginContext.Provider>
    </div>
  );
}

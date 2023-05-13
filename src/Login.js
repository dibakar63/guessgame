import "./styles.css";
import { useContext } from "react";
import { LoginContext } from "./Context/LoginContext";

export default function Login() {
  const { setUsername, setToggle } = useContext(LoginContext);

  return (
    <div className="App">
      <input
        type="text"
        onChange={(e) => {
          setUsername(e.target.value);
        }}
        placeholder="..Enter your name"
      />
      <br />
      <button onClick={() => setToggle(true)}>Submit</button>
    </div>
  );
}

import { LoginContext } from "./Context/LoginContext";
import { useContext, useState } from "react";

const Profile = () => {
  let random = Math.floor(Math.random() * 10000);
  const { username } = useContext(LoginContext);
  const [guess, setGuess] = useState("");
  const [value, setValue] = useState([]);
  const [number, setNumber] = useState(random);
  const [msg, setMsg] = useState("");
  const [count, setCount] = useState(0);

  //Match(number);
  // Match(guess);

  const handleChange = (e) => {
    setGuess(e.target.value);
  };
  const handleSubmit = () => {
    let number1 = number.toString().split(" ")[0][0];
    let number2 = number.toString().split(" ")[0][1];
    let number3 = number.toString().split(" ")[0][2];
    let number4 = number.toString().split(" ")[0][3];
    let guess1 = guess.toString().split(" ")[0][0];
    let guess2 = guess.toString().split(" ")[0][1];
    let guess3 = guess.toString().split(" ")[0][2];
    let guess4 = guess.toString().split(" ")[0][3];
    console.log(number1);
    console.log(guess1);

    if (number1 === guess1 && number2 === guess2) {
      setMsg("++");
    } else if (number1 === guess1 && number2 !== guess2) {
      setMsg("+-");
    } else if (number1 !== guess1 && number2 === guess2) {
      setMsg("-+");
    } else if (
      number1 !== guess1 &&
      number2 !== guess2 &&
      number3 !== guess3 &&
      number4 !== guess4
    ) {
      setMsg("*");
    } else if (
      number1 === guess1 &&
      number2 === guess2 &&
      number3 === guess3 &&
      number4 === guess4
    ) {
      setMsg("You have guessed correct number");
    }
    setValue([...value, guess]);
    setCount(count + 1);
  };
  const refresh = () => {
    setGuess("");
    setValue([]);
    setGuess("");
    setCount(0);
    setNumber(Math.floor(Math.random() * 10000) + 1);
  };

  return (
    <>
      <h1>Profile</h1>
      <h3>
        {username} you have playes {count} times
      </h3>

      <p>{number}</p>
      <input
        type="text"
        placeholder="...Guess a four digit number"
        value={guess}
        onChange={handleChange}
      />
      <button onClick={handleSubmit}>Submit</button>
      <button onClick={refresh}>Start again</button>
      <p>msg :{msg}</p>

      <p>
        {value?.map((item, index) => {
          return (
            <span key={index}>
              {item}, {}
            </span>
          );
        })}
      </p>
    </>
  );
};
export default Profile;

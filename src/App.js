import './App.css';
import { useEffect, useState } from "react";

function App() {

  const [loading, setLoading] = useState(true);
  const [user, setUser] = useState();

  async function fetchData() {
    const url = "https://api.randomuser.me/";
    const response = await fetch(url);
    const data = await response.json();
    setUser(data.results[0]);
    setLoading(false);
  }

  useEffect(() => {
    fetchData()
  }, [loading]);

  return (
    <div className="App">
      {loading ? (
        <h1>loading</h1>
      ) : (
        <div>
          <img src={user.picture.large} alt="user" />
          <h1>Hi, I am {user.name.first + " " + user.name.last} from {user.location.country}.</h1>
          <h2>I am {user.dob.age} years old.</h2>
          <h3>My email adress is {user.email}</h3>
          <button className="btn-change" onClick={() => setLoading(true)}>Change User</button>
        </div>
      )}
    </div>
  );
}

export default App;

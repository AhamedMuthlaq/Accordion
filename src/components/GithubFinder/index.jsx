import { useState, useEffect } from "react";
import "./index.css";
import User from "./User";

const GithubFinder = () => {
  const [userName, setUserName] = useState("");
  const [userData, setUserData] = useState(
    JSON.parse(localStorage.getItem("user-data"))
  );
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  function handleSearch() {
    if (!userName) return null;
    fetchUser();
    setUserName("");
  }
  useEffect(() => {
    localStorage.setItem("user-data", JSON.stringify(userData));
  }, [userData]);
  async function fetchUser() {
    try {
      setLoading(true);
      const response = await fetch(`https://api.github.com/users/${userName}`);
      const data = await response.json();
      if (data) {
        setUserData(data);
        setLoading(false);
      }
    } catch (e) {
      setLoading(false);
      setError(e.message);
    }
  }

  if (loading) return <div>Loading data...</div>;

  if (error) return <div>{error}</div>;
  console.log(userData);
  return (
    <div className="github-container">
      <div className="input-container">
        <input
          type="text"
          placeholder="Search for profiles.."
          value={userName}
          onChange={(e) => setUserName(e.target.value)}
        />
        <button onClick={handleSearch}>search</button>
      </div>

      {userData ? <User user={userData} /> : <p>No data available</p>}
    </div>
  );
};

export default GithubFinder;

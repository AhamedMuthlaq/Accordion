import { useState, useEffect } from "react";
import { FaSearch } from "react-icons/fa";
import "./index.css";
import Results from "./Results";

const SearchAuto = () => {
  const [search, setSearch] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [users, setUsers] = useState([]);
  const [searchResults, setSearchResults] = useState([]);
  const [show, setShow] = useState(false);

  async function fetchUsers() {
    try {
      setLoading(true);
      const res = await fetch("http://dummyjson.com/users");
      const data = await res.json();

      if (data && data.users && data.users.length) {
        setUsers(data.users.map((user) => user.firstName));
        setLoading(false);
        setError(null);
      }
    } catch (e) {
      setLoading(false);
      setError(e.message);
    }
  }

  useEffect(() => {
    fetchUsers();
  }, []);

  useEffect(() => {
    setShow(searchResults.length ? true : false);
  }, [searchResults]);

  function handleChange(event) {
    const value = event.target.value.toLowerCase();
    setSearch(value);
    if (value.length > 1) {
      const filteredData =
        users && users.length
          ? users.filter((user) => user.toLowerCase().indexOf(value) !== -1)
          : [];
      setSearchResults(filteredData);
    }
  }

  if (loading) return <div>Loading...</div>;

  if (error) return <div>{error}</div>;

  return (
    <div className="search-container">
      <div className="search-bar">
        <input
          className="search-box"
          name="search-users"
          type="text"
          value={search}
          onChange={handleChange}
          placeholder="search..."
        />
        <FaSearch size={15} className="search-icon" />
      </div>

      {search.length > 1 && show ? (
        <Results
          setSearchResults={setSearchResults}
          setSearch={setSearch}
          setShow={setShow}
          data={searchResults}
        />
      ) : null}
    </div>
  );
};

export default SearchAuto;

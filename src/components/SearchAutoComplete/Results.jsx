const Results = ({ data, setShow, setSearchResults, setSearch }) => {
  function handleSelect(event) {
    setSearch(event.target.innerText);
    setSearchResults([]);
    setShow(false);
  }
  return (
    <ul className="results" style={{ listStyleType: "none" }}>
      {data.map((user, index) => (
        <li className="user-list-item" key={index}>
          <p onClick={handleSelect}>{user}</p>
        </li>
      ))}
    </ul>
  );
};

export default Results;

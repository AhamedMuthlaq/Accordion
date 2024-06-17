const User = ({ user }) => {
  const {
    login,
    name,
    location,
    public_repos,
    followers,
    following,
    avatar_url,
    html_url,
    created_at,
  } = user || "";
  const date = new Date(created_at);
  return (
    <div className="github-content">
      {user ? (
        <div className="wrapper">
          <header>
            <div className="title">
              <img alt={login} src={avatar_url} />
              <h2>
                <a href={html_url}>{name || login}</a>
              </h2>
            </div>
            <p>
              {`Joined on ${date.getDate()}
              ${date.toLocaleString("en-us", { month: "short" })}
              ${date.getFullYear()}`}
            </p>
          </header>
          <div className="details">
            {location ? <p>located at : {location}</p> : null}
            <p>public repos : {public_repos}</p>
            <p> followers : {followers}</p>
            <p> following : {following}</p>
          </div>
        </div>
      ) : (
        <p>No data available</p>
      )}
    </div>
  );
};

export default User;

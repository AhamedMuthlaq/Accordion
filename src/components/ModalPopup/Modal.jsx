const Modal = ({ header, body, footer, handleClick }) => {
  return (
    <div className="popup-container">
      <header className="popup-header">
        <h3>{header ?? "Header"}</h3>
        <span onClick={handleClick}>&times;</span>
      </header>
      <body className="popup-body">
        <p>{body ?? "This is our popup body"}</p>
      </body>
      <footer className="popup-footer">
        <p>{footer ?? "Footer"}</p>
      </footer>
    </div>
  );
};
export default Modal;

import "./index.css";
import useLocalStorage from "./useLocalStorage";

const ThemeToggle = () => {
  const [theme, setTheme] = useLocalStorage("theme", "light");

  function handleToggle() {
    setTheme(theme === "light" ? "dark" : "light");
  }
  return (
    <div className="theme-container" data-theme={theme}>
      <h1>Hello World</h1>
      <button onClick={handleToggle}>change theme</button>
    </div>
  );
};
export default ThemeToggle;

import data from "./data/data";
import DataItem from "./components/DataItem";
import { useState } from "react";

const App = () => {
  const [selected, setSelected] = useState(null);
  const [isChecked, setIsChecked] = useState(false);
  const [idArray, setIdArray] = useState([]);

  const handleChange = () => {
    setIsChecked(!isChecked);
  };

  return (
    <div className="container">
      <div>
        <input
          onChange={() => handleChange()}
          id="multi"
          type="checkbox"
          checked={isChecked}
        />
        <label htmlFor="multi">Enable multi-selection</label>
      </div>
      {data &&
        data.length > 0 &&
        data.map((item) => (
          <DataItem
            key={item.id}
            item={item}
            selected={selected}
            setSelected={setSelected}
            setIdArray={setIdArray}
            idArray={idArray}
            isChecked={isChecked}
          />
        ))}
    </div>
  );
};

export default App;

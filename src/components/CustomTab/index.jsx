import { useState } from "react";
import "./index.css";

const CustomTab = () => {
  const tabsData = [
    { label: "Tab 1", content: "Content for tab 1" },
    { label: "Tab 2", content: "Content for tab 2" },
    { label: "Tab 3", content: "Content for tab 3" },
  ];

  const [selected, setSelected] = useState(0);

  function handleClick(index) {
    setSelected(index);
  }

  return (
    <div className="tab-container">
      <div className="tabs-container">
        {tabsData.map((tabItem, index) => (
          <h1
            className={index === selected ? "active" : ""}
            onClick={() => handleClick(index)}
          >
            {tabItem.label}
          </h1>
        ))}
      </div>
      <div className="content">
        {tabsData[selected] && tabsData[selected].content}
      </div>
    </div>
  );
};

export default CustomTab;

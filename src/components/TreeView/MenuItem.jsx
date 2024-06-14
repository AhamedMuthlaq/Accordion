import { useState } from "react";
import MenuList from "./MenuList";
import { FaMinus, FaPlus } from "react-icons/fa";

const MenuItem = ({ menu }) => {
  const [currentChild, setCurrentChild] = useState({});

  const handleExpansion = (label) => {
    setCurrentChild({ ...currentChild, [label]: !currentChild[label] });
  };

  return (
    <li>
      <div className="menu-container">
        <p>{menu.label}</p>
        <span onClick={() => handleExpansion(menu.label)}>
          {menu && menu.children && menu.children.length ? (
            currentChild[menu.label] ? (
              <FaMinus />
            ) : (
              <FaPlus />
            )
          ) : null}
        </span>
      </div>
      {menu &&
      menu.children &&
      menu.children.length &&
      currentChild[menu.label] ? (
        <MenuList menus={menu.children} />
      ) : null}
    </li>
  );
};

export default MenuItem;

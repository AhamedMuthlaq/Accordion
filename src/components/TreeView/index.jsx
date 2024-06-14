import "./index.css";
import MenuList from "./MenuList";

const TreeView = ({ menus }) => {
  return (
    <div className="treeViewContainer">
      <MenuList menus={menus} />
    </div>
  );
};
export default TreeView;

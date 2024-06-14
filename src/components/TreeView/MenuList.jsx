import MenuItem from "./MenuItem";
const MenuList = ({ menus }) => {
  return (
    <ul className="list">
      {menus && menus.length
        ? menus.map((menu, index) => <MenuItem key={index} menu={menu} />)
        : null}
    </ul>
  );
};
export default MenuList;

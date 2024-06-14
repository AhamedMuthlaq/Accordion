// import StarRating from "./components/StarRating";
// import ColorGenerator from "./components/ColorGenerator";
// import Accordian from "./components/Accordian";
// import ImageSlider from "./components/ImageSlider";
// import LoadMore from "./components/LoadMore";
// import menus from "./components/TreeView/menu";
// import TreeView from "./components/TreeView";
// import QrCode from "./components/QrCode";
// import ThemeToggle from "./components/ThemeToggle";
// import ScrollIndicator from "./components/scroll-indicator";

import CustomTab from "./components/CustomTab";

const App = () => {
  return (
    <div>
      {/* <StarRating noOfStars={10} />
      <ColorGenerator />
      <Accordian />
      <ImageSlider
        url={"https://picsum.photos/v2/list"}
        page={"1"}
        limit={"10"}
      />
      <LoadMore />
      <TreeView menus={menus} />
      <QrCode />
      <ThemeToggle />
      <ScrollIndicator url={"http://dummyjson.com/products?limit=100"} /> */}
      <CustomTab />
    </div>
  );
};

export default App;

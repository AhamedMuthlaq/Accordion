import StarRating from "./components/StarRating";
import ColorGenerator from "./components/ColorGenerator";
import Accordian from "./components/Accordian";
import ImageSlider from "./components/ImageSlider";
import LoadMore from "./components/LoadMore";

const App = () => {
  return (
    <div>
      <StarRating noOfStars={10} />
      <ColorGenerator />
      <Accordian />
      <ImageSlider
        url={"https://picsum.photos/v2/list"}
        page={"1"}
        limit={"10"}
      />
      <LoadMore />
    </div>
  );
};

export default App;

import useWindowSize from "./hook";

const WindowSizeTest = () => {
  const size = useWindowSize();
  return (
    <div>
      width:{size.width} height:{size.height}
    </div>
  );
};

export default WindowSizeTest;

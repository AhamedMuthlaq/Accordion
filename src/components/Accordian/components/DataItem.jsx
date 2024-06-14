const DataItem = ({
  item,
  selected,
  setSelected,
  isChecked,
  idArray,
  setIdArray,
}) => {
  const handleSelect = (id) => {
    if (isChecked) {
      const newArr = [...idArray];
      if (newArr.indexOf(id) !== -1) {
        newArr.splice(newArr.indexOf(id), 1);
      } else {
        if (id === selected) {
          setSelected(null);
          return;
        }
        newArr.push(id);
      }
      setIdArray(newArr);
    } else {
      setIdArray([]);
      setSelected(selected === id ? null : id);
    }
  };

  return (
    <div className="single-item">
      <div className="question" onClick={() => handleSelect(item.id)}>
        <div>{item.question}</div>

        <span>
          {selected === item.id || idArray.includes(item.id) ? "-" : "+"}
        </span>
      </div>
      <div className="answer">
        {idArray.indexOf(item.id) !== -1 || item.id === selected ? (
          <div>{item.answer}</div>
        ) : null}
      </div>
    </div>
  );
};

export default DataItem;

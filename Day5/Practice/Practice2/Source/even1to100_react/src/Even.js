import "./App.css";
const Even = () => {
  let arr = [];
  for (let i = 1; i <= 100; i++) {
    if (i % 2 === 0) {
      arr.push(i);
    }
  }
  return arr.map((value) => {
    return (
      <div className="main-div">
        <div className="even-item">{value}</div>
      </div>
    );
  });
};

export default Even;

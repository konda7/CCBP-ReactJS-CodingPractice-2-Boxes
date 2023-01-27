const Box = (props) => {
  const { name, className } = props;

  return <div className={`${className}`}>{name}</div>;
};

const element = (
  <div className="bg-container">
    <h1 className="main-heading">Boxes</h1>
    <div className="box-conatiner">
      <Box name="Small" className="small" />
      <Box name="Medium" className="medium" />
      <Box name="Large" className="large" />
    </div>
  </div>
);

ReactDOM.render(element, document.getElementById("root"));

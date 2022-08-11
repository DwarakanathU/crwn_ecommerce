import "./categories.styles.scss";

const App = () => {
  const catergories = [
    {
      id: 1,
      title: "Hats",
    },
    {
      id: 2,
      title: "Jackets",
    },
    {
      id: 3,
      title: "Sneakers",
    },
    {
      id: 4,
      title: "Womens",
    },
    {
      id: 5,
      title: "Men",
    },
  ];
  return (
    <div className="categories-container">
      {catergories.map((category) => (
        <div className="category-container">
          <div className="background-image"></div>
          <div className="category-body-container">
            <h2>{category.title}</h2>
            <p>Shop Now</p>
          </div>
        </div>
      ))}
    </div>
  );
};

export default App;

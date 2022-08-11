import CategoryItemContainer from "../category-item/category-item-container";
import "./directory-component.scss";
const Directory = ({ catergories }) => {
  return (
    <div className="categories-container">
      {catergories.map((category) => (
        <CategoryItemContainer key={category.id} category={category} />
      ))}
    </div>
  );
};

export default Directory;

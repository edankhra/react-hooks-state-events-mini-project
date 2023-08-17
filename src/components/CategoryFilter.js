import React, { useState }from "react";

function CategoryFilter({categories}) {
  const [selectedCategory, setSelectedCategory] = useState("All");

  const onCategoryClicked =(category) =>{
    setSelectedCategory(category);
  }
  return (
    <div className="categories">
      <h5>Category filters</h5>
      {categories.map((category) => (
        <button
          className={selectedCategory === category ? "selected" : ""}
          onClick={() => onCategoryClicked(category)}
          key={category}
        >
          {category}
        </button>
      ))}
    </div>
  );
}

export default CategoryFilter;

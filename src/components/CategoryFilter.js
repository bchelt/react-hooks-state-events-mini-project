import React, { useState } from "react";

function CategoryFilter({ categories, setFilter }) {
  const buttonsList = categories.map((category, index) => {
    return (
      <button key={index} onClick={(e) => handleClick(e)}>{category}</button>
    )
  })
  const [buttons, setButtons] = useState(buttonsList)

  const handleClick = function (e) {
    const buttonsList = categories.map((category, index) => {
      if (e.target.textContent === category) {
        return (<button key={index} className={'Selected'} onClick={(e) => handleClick(e)}>{category}</button>)
      } else {
        return (<button key={index} onClick={(e) => handleClick(e)}>{category}</button>)
      }
    })
    setButtons(buttonsList);
    setFilter(e.target.textContent);
  }

  return (
    <div className="categories">
      <h5>Category filters</h5>
      {buttons}
    </div>
  );
}

export default CategoryFilter;

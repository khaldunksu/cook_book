import React, { useState } from "react";
const NewRecipes = (props) => {
  const initialState = {id: null, name: '',ingredients:''}
  const [recipe, setRecipe] = useState(initialState)
  
  const handleInputChange=(event) => {
    const {name, value} = event.currentTarget
    setRecipe({...recipe,[name]:value})
  }

  const formSubmit = (event) => {
    event.preventDefault();
    if(!recipe.name || !recipe.ingredients)
    return
    props.add(recipe)
    setRecipe(initialState)
  }

    return (
      <form className=" form" onSubmit={formSubmit}>
        <div className="ui input">
          <input
            type="text"
            value={recipe.name}
            name="name"
            placeholder="The name of your dish..."
            onChange = {handleInputChange}
            required
          />
        </div>
        <div className="ui input">
          <input
            type="text"
            value={recipe.ingredients}
            name="ingredients"
            placeholder="Descriptions..."
            onChange={handleInputChange}
            required
          />
        </div>
        <button className="ui green button"
          type="submit">
          <i class="plus icon"></i>
          Add</button>
      </form>
    );
}

export default NewRecipes;
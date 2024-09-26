import React from "react";

const RecipesList =(props)=>{
    return (
      <div className="recipes">
          {props.recipes.map((i) => (
            <>
            <div className="oneRecipes" key={i.id}>
              <p  className="name">{i.name}</p>
              <p>{i.data}</p>
              <p>{i.ingredients}</p>
              <button className="ui red button" onClick={()=>props.deleteRecipes(i.id)}>
                <i className="trash alternate icon"></i>
              </button>
              <button className="ui green button" onClick={()=>props.editRecipe(i)}>
              <i className="pencil alternate icon"></i>
              </button>
              </div>
            </>
          ))}
         </div> 
    )
}
export default RecipesList
import React,  { useState, useEffect } from 'react';
import './App.css';
import recipesList from './api/api'
import RecipesList from './components/RecipesList'
import NewRecipes from './components/NewRecipes'
import EditRecipe from './components/EditRecipe'
function App() {
  const [recipes, setRecipes] = useState([])
  const [edit, setEdit] = useState(false)
  const initialState = {id:null, name:'',ingredients:''}
  const [currentRecipe, setCurrentRecipe] = useState(initialState)
  useEffect(() => {
    setRecipes(recipesList);
  }, []);

 
  const deleteRecipes=(id)=> {
    setRecipes(recipes.filter(item=>item.id!==id))
  }
  const add=(recipe) =>{
    let d = new Date();
    let monthA = '01,02,03,04,05,06,07,08,09,10,11,12'.split(',');
    recipe.data= d.getDate() +'/' + monthA[d.getMonth()]+'/'+ d.getFullYear()
    recipe.id = recipes.length + 1
    setRecipes([...recipes,recipe])
  }


  const updateRecipe = (id, updatedRecipe) => {
    setEdit(false)
    setRecipes(recipes.map(recipe => (recipe.id === id ? updatedRecipe : recipe)))
  }

  const editRecipe = recipe => {
    setEdit(true)
    setCurrentRecipe({ id: recipe.id, name: recipe.name, ingredients: recipe.ingredients })
  }

  return (
    <div className="App">
      <header className="App-header">
        <h1 className="title">Cookbook <i className="fas fa-book-open"></i></h1>
      </header>
      <div className="content">
         {edit ? (
            <div>
              <h2 className ="edit">Edit Recipe</h2>
              <EditRecipe
                edit={edit}
                setEdit={setEdit}
                currentRecipe={currentRecipe}
                updateRecipe={updateRecipe}
              />
            </div>
          ) : (<NewRecipes add={add}/>)}
      </div>
     <RecipesList recipes={recipes}
      deleteRecipes={deleteRecipes} 
      editRecipe={editRecipe}/>
    </div>
  );
}
export default App;


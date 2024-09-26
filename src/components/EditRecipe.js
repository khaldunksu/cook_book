import React, {useState} from 'react'

const EditRecipe = (props) => {
  const [recipe, setRecipe] = useState(props.currentRecipe)
  const handleInputChange=(event)=>{
    const {name,value} = event.target
    setRecipe({...recipe,[name]: value})
  }

  const formSubmit =(event)=>{
    event.preventDefault()
    if(!recipe.name||!recipe.ingredients) return
    props.updateRecipe(recipe.id,recipe)
  }

  return (
    <form className=" form" onSubmit={formSubmit}>
      <div className="ui input">
      <input
        type="text"
        name="name"
        value={recipe.name}
        onChange={handleInputChange}
      />
      <input
        type="text"
        name="ingredients"
        value={recipe.ingredients}
        onChange={handleInputChange}
      />
      <button  className="ui green button">Save</button>
      <button onClick={() => props.setEdit(false)}
        className="ui red button"> Cancel</button>
      </div>
    </form>
  )
}

export default EditRecipe
import { useState } from "react"
import { AddCategory,GifGrid } from './components'

export const GifExpertApp = () => {

  const [categories, setCategories] = useState (['Car'])
  const onAddCategory = (newCategory) => {
    console.log(newCategory)
  
    if (categories.includes(newCategory)) return
    setCategories([newCategory, ...categories])
    //Otra manera de hacer esta incorporación es la siguiente...
    //setCategories(cat=>[...cat, 'Piccolo'])
  }
  return (
    <>
    <h1>¿En qué palabra estás pensando?</h1>
    <AddCategory 
    //setCategories = {setCategories}
    onNewCategory={ (value) => onAddCategory(value) }
    />
    
      {categories.map((category) => (
      <GifGrid key={category} category={category}/>
      ))
    }
    
    </>
  )

}

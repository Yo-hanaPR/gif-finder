import { useState } from "react"
import { AddCategory,GifGrid } from './components'
import stickerly from './stickerly.png'

export const GifExpertApp = () => {

  const [categories, setCategories] = useState (['Car'])
  const onAddCategory = (newCategory) => {
    console.log(newCategory)
  
    if (categories.includes(newCategory)) return
    setCategories([newCategory])
    //Otra manera de hacer esta incorporación es la siguiente...
    //setCategories(cat=>[...cat, 'Piccolo'])
  }
  return (
    <>
    <div className="contenedor-header">
      <div>
          <h1>¿En qué palabra estás pensando?</h1>
        <AddCategory 
        //setCategories = {setCategories}
        onNewCategory={ (value) => onAddCategory(value) }
        />
      </div>
      
      <div className="descarga">
        <h5>Convierte tu GIF descargado en un sticker de Whatsapp.</h5>

        <h3>Descarga la aplicación en tu teléfono Android </h3>
          <a
            href="https://play.google.com/store/apps/details?id=com.snowcorp.stickerly.android&hl=es_US&pli=1"
            target="_blank"
            rel="noopener noreferrer"
            class="btn btn-success"
          >
            <img src={stickerly} height="100"></img>
          </a>
      </div>
    </div>
    
    
      {categories.map((category) => (
      <GifGrid key={category} category={category}/>
      ))
    }
    
    </>
  )

}

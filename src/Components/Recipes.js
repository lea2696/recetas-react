import React from "react";
export const Recipe = (props) =>{
    return (
        <div>

    
       <h3>
           {props.recipe.name}
       </h3>
       <span>Ingredientes: </span>
       <ul>
           <li>
               Ingrediente
           </li>
           <li>
               Ingrediente
           </li>
           <li>
               Ingrediente
           </li>
       </ul>
       <p>
           Descripcion
       </p>
       <button>Editar Receta</button>
       </div>
    )
}
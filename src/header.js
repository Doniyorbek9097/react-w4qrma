import React from "react";

function Item(props){
  return(
    <div className="item">
    <img className="item-img" src={props.url} alt={props.alt}></img><br></br>
     <b>Nomi:</b> {props.name}
     <br></br>
     <b>Narxi:</b> {props.price}      
    </div>

  )
}



export default Item;
import React from 'react'
import  './style.css';


const ImageList=(props)=>{
    //console.log(props.images);
<div>
    
</div>
const images= props.images.map((image)=>{
    return (
        <div className="imagelist" key={image.id}>
    <img alt ={image.description} src={image.urls.regular} height="250px" width="250px" ></img>
    </div>
    )
})

    return(
        
        <div className="imageContainer">
            {images}
             
        </div>
        
    )
  
}

export default ImageList
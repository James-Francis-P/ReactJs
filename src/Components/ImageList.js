import React from 'react'
import  './style.css';


const ImageList=(props)=>{
    //console.log(props.images);

const images= props.images.map((image)=>{
    return (
        <div className="imagelist" key={image.id}>
    <img alt ={image.description} src={image.urls.regular}></img>
    </div>
    )
})

    return(
        
        <div>
            {images}
             
        </div>
        
    )
  
}

export default ImageList
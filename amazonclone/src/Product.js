import React from 'react'
import "./Product.css"
import { useStateValue } from './StateProvider'
{/**product take props like id ,title,prcie,rating */}
{/*props*/}
function Product({id,title,image,price,rating}) {
    //1. accees to store
    const [{basket}, dispatch] = useStateValue()
    const addToBasket  = () => (
       //add itme to basket
       dispatch ({
           type: 'ADD_TO_BASKET',
           item:{
               id: id,
               title: title,
               image: image,
               price: price,
               rating: rating
           }

       })
    )
        
    
    
    
    
    
    
    
    return (
        <div className="product">
            <div className ="product__info">

    <p>{title}</p>
    <p className="product__price">
    <small>Euro</small>
    <strong>{price}</strong>

    </p>
    <div className="product__rating">
{
    Array(rating) //5 array creted
    .fill() //fill with empaty values
    .map((_,i)=> ( // map through 5 times
        <p>⭐</p>
    ))
}
            </div>
            </div>


<img src={image} alt=""/>
<button onClick={addToBasket} >Add to basket</button>
    </div>
    
            
       
    )
}

export default Product

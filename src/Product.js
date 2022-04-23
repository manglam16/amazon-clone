import React from 'react'
import "./Product.css"
import item1 from './item1.jpg'
import { useStateValue } from './StateProvider'

function Product({id,title, image, price, rating}) {
    const [{basket},dispatch] = useStateValue();

    const addToBasket = () => {
        //dispatch the item into data layer
        dispatch({
            type: 'ADD_TO_BASKET',
            item: {
                id: id,
                image: image,
                title : title,
                price: price,
                rating: rating,
            }
        })
    }
  return (
    <div className='product'>
        <div className='product__info'>
            <p>{title}</p>
            <p className='product__price'>
                <small>₹</small>
                <strong>  {price}</strong>
            </p>
            <div className='product__rating'>
                {Array(rating)
                .fill()
                .map((_,i) => (
                    <p>✨</p>
                ))}
                
            </div>
        </div>


        <img src={image}></img>
        
        <button onClick={addToBasket} className='product__button'>Add to basket</button>
    </div>

  )
}

export default Product
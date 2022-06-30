// import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { remove } from '../store/cartSlice';

const Card = () => {

  const products = useSelector((state) => state.cart);
  const dispatch = useDispatch()

  const removeHandler = (item) =>{
    dispatch(remove(item))
  }

  let sum = 0;
  products.map((item)=>(
    sum += item.price
  ))
console.log(sum,'sum');
  return (
    <div>
    
      <h3>Cart</h3>
      <div className='cartWrapper'>
        {
          products.map((item)=>(
              <div key={item.id} className="cartCard"> 
              <img src={item.image} alt='dishs'/>
              <h5>{item.dish}</h5>
              <h5>{item.price}</h5>
              <button className='btn' onClick={()=> removeHandler(item.id)}>Remove</button>
              </div>
            ))}
          
      </div>
      <h4>Total:-{sum}</h4>

    </div>
  )
}

export default Card
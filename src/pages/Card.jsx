import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { remove } from '../store/cartSlice';

const Card = () => {

  // useEffect(()=>{
  //   totalPrice()
  // },[])
  const products = useSelector((state) => state.cart);
  const dispatch = useDispatch()
  // console.log(products,'produts');
  const removeHandler = (item) =>{
    dispatch(remove(item))
  }

  const totalPrice = (fh)=>{
    products.map((item)=>{
        return fh + item.price
    })
  }

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
              <h4>Total:-{totalPrice(item.price)}</h4>
              </div>
            ))}
          
      </div>
    </div>
  )
}

export default Card
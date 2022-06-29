import React, { useEffect, useState } from 'react'
import { add } from '../store/cartSlice';
import { useDispatch } from 'react-redux';

const Products = () => {

    const [products,setProducts] = useState([]);

    const dispatch = useDispatch() 

    useEffect(()=>{
        const fetchThali = async ()=>{
            const res = await fetch(`https://62b81c47f4cb8d63df58c0ab.mockapi.io/thali`)
            const data = await res.json()
            console.log(data);
            setProducts(data)
        }
        fetchThali()
    },[])

    const addHandler =(product)=>{
        dispatch(add(product))
    }

  return (
    <div className='productsWrapper'>
        {products.map(item=>(
            <div className='card' key={item.id}>
                <img src={item.image} alt='dishs'/>
                <h4>{item.dish}</h4>
                <h5>{item.price}</h5>
                <button className='btn' onClick={()=> addHandler(item)}>ADD TO CART</button>
            </div>
        ))}
    </div>
  )
}

export default Products
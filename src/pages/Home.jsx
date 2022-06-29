import React from 'react'
import Products from '../components/Products'

const Home = () => {
  return (
    <div>
      <h2 className='heading'>Welcome To First Ever Thali App in Redux Toolkit</h2>
      <section>
        <h3>Thali's</h3>
        <Products/>
      </section>
    </div>
  )
}

export default Home
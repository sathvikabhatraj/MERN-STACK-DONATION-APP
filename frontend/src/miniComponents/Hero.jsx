import React from 'react'
import {Link} from 'react-router-dom';
const Hero = () => {
  return (
    <section className='hero'>
      <div className="banner">
        <h1>volunteers</h1>
        <h3>Needed</h3>
        <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Commodi maxime in, neque nulla veritatis debitis temporibus aliquam, explicabo odit similique quae velit numquam magni voluptate ipsum fugit illum laborum facere?
        </p>
        <Link to={'/donate'}>Donate Now</Link>
      </div>
      <div className="banner">
        <img src="/hero.png" alt="hero" />
      </div>
    </section>
  )
}

export default Hero

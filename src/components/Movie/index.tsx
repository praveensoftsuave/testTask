import { useEffect } from 'react';
import React = require('react');
import Ratings from '../../containers/Ratings';
import './styles.css'

type props = {
  title:string
  rating:number
  category:string
};
const Movie: React.FC<props> = ({ title,rating,category }) => {
 
  useEffect(()=>{

  },[])
  return (
    
    <section className='movieContainer'>
      <span className='title'>{title}</span>
      <span className='category'>{category}</span>
      <Ratings rating={rating}/>
     
    </section>
    
  );
};
export default Movie;

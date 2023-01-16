import { useEffect, useState } from 'react';
import React = require('react');
import Ratings from '../../containers/Ratings';
import { movieInterface } from '../../interfaces/movie.interface';
import './styles.css';
type props = {
  allData: any[];
  filterData: any[];
  userChecked: (any) => void;
};
const MultiSelectRating: React.FC<props> = ({
  allData,
  filterData,
  userChecked,
}) => {
 const arr=new Array(10).fill(0)
  const updateArray = (data: any) => {
    filterData.indexOf(data) >= 0
      ? filterData.splice(filterData.indexOf(data), 1)
      : filterData.push(data);
    userChecked(filterData);
  };
 
  return (
    <section className="multiselectContainer">
        <div className="selectoption">
        <span className="selection">
              <input
                type="checkbox"
                checked={filterData.length===0}
                onChange={() => userChecked([])}
              />
              <span className="selectvalue">
                Any rating
              </span>
            </span>
          {arr.map((mak:number,index:number) => (
            <span className="selection">
              <input
                type="checkbox"
                checked={filterData.indexOf(index+1)>=0}
                onChange={() => updateArray(index+1)}
              />
              <span className="selectvalue">
                <Ratings rating={index+1} />
              </span>
            </span>
          ))}
        </div>
     
    </section>
  );
};
export default MultiSelectRating;

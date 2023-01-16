import { useEffect, useState } from 'react';
import React = require('react');
import { category } from '../../Data';
import { movieInterface } from '../../interfaces/movie.interface';
import './styles.css';
type props = {
  allData: any[];
  filterData: any[];
  userChecked: (any) => void;
};
const MultiSelect: React.FC<props> = ({ allData, filterData, userChecked }) => {
  const [isOpen,setIsOpen]=useState<boolean>(false)
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
              onChange={()=>userChecked([])}
            />
            <span className="selectvalue">All Genre</span>
          </span>
        {category.map((mapData:string) => (
          <span className="selection">
            <input
              type="checkbox"
              checked={filterData.indexOf(mapData)>=0}
              onChange={() => updateArray(mapData)}
            />
            <span className="selectvalue">{mapData}</span>
          </span>
        ))}
      </div>
    </section>
  );
};
export default MultiSelect;

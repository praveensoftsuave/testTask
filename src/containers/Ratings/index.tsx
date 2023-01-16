import { useEffect, useState } from 'react';
import React = require('react');
import Star from '../../components/Star';
import { rating } from '../../interfaces/rating.interface';
import './styles.css';
type props = {
  rating: number;

};
const Ratings: React.FC<props> = ({ rating }) => {
  const [ratings, setRatings] = useState<number[]>([]);
  const [havelower, setHaveLower] = useState<boolean>(false);
  const hasDecimal = (num: number): boolean => {
    return num % 1 > 0;
  };
  const setArrayData = (val: number) => {
    let rate = new Array(10).fill(1);
    rate.fill(2,0, Math.ceil(val))
    setRatings(rate);
  };

  useEffect(() => {
    setHaveLower(hasDecimal(rating));
    setArrayData(rating);
  }, []);

  return (
    <div className="startContainer">
      {ratings.map((rat: number, index: number) =>
        rat > 1 ? (
          <Star isHalf full={(havelower && index===Math.ceil(rating)-1)} key={index+"h"} size={20} />
        ) : (
          <Star  key={index + "n"} size={20} />
        )
      )}
    </div>
  );
};
export default Ratings;

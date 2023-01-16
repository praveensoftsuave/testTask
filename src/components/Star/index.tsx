import React = require('react');
import './styles.css'
type props={
  isHalf?:boolean
  full?:boolean
  size:number
}
const Star:React.FC<props> = ({isHalf,full,size}) => {
 
  return (
  <span className='starContainer'>
      <svg xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" width={String(size)+"px"} height={String(size)+"px"} viewBox="0 0 32 32">
    <defs>
    <linearGradient id="grad">
         <stop offset="50%" stopColor="black"/>
         {isHalf===true && <stop offset="50%" stopColor="white"/>}
      </linearGradient>
    </defs>
    <path  stroke='black' strokeLinejoin="round" strokeWidth="2.5" fill={isHalf?(full?"url(#grad)":'black'):'white'} d="M20.388,10.918L32,12.118l-8.735,7.749L25.914,31.4l-9.893-6.088L6.127,31.4l2.695-11.533L0,12.118
  l11.547-1.2L16.026,0.6L20.388,10.918z"/>
  </svg>
    </span>
  );
};
export default Star;

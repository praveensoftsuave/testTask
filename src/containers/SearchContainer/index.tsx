import { useEffect, useState } from "react"
import React=require("react")
import MultiSelect from "../../components/MultiSelect"
import MultiSelectRating from "../../components/MultiSelectRating"
import { mockData } from "../../Data"
import { filter } from "../../interfaces/filterData.interface"
import Ratings from "../Ratings"
import SearchBar from "../SearchBar"
import  './styles.css'

const SearchContainer:React.FC=()=>{
  const [filterData,setFilterData]=useState<filter>({searchRating:[],searchCategory:[]})
  const [isRatingOpen,setIsRatingOpen]=useState<boolean>(false)
  const [isCategoryOpen,setIsCategoryOpen]=useState<boolean>(false)
  const updatecategoryFilter=(arr:any,val:string)=>{
    let tempdata={...filterData}
    tempdata[val]=arr
    setFilterData(tempdata)
  }
  useEffect(()=>{
setFilterData(filterData)
  },[filterData])

  const toogle=(toogler:string,toogle:boolean)=>{
    if(toogler==='rating' && toogle){
      if(isCategoryOpen){
        setIsCategoryOpen(false)
      }
      setIsRatingOpen(true)
    }
    if(toogler==='rating'&&!toogle){
      setIsRatingOpen(false)
    }
    if(toogler==='category' && toogle){
      if(isRatingOpen){
        setIsRatingOpen(false)
      }
      setIsCategoryOpen(true)
    }
    if(toogler==='category' && !toogle){
      setIsCategoryOpen(false)
    }
    
  }
return(
<div className='container'>
  <SearchBar movieData={mockData} filterObj={filterData}/>
  <div className="drop-main-container">
    <div className="drop-wrapper">
      <div className="dropdown-container" onClick={()=>{toogle('rating',!isRatingOpen)}}>
            <span>Rating</span>
            <span className={isRatingOpen?'rotateArrow':''}>
              <svg
                width="15"
                height="14"
                viewBox="0 0 15 14"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fillRule="evenodd"
                  clipRule="evenodd"
                  d="M12.7279 11.4853L14.1421 10.0711L7.071 3L1.23637e-07 10.071L1.4142 11.4852L7.071 5.8284L12.7279 11.4853Z"
                  fill="#171717"
                />
              </svg>
            </span>
          </div>
          <div className="dropdown-container" onClick={()=>{toogle('category',!isCategoryOpen)}}>
            <span>Genre</span>
            <span className={isCategoryOpen?'rotateArrow':''}>
              <svg
                width="15"
                height="14"
                viewBox="0 0 15 14"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fillRule="evenodd"
                  clipRule="evenodd"
                  d="M12.7279 11.4853L14.1421 10.0711L7.071 3L1.23637e-07 10.071L1.4142 11.4852L7.071 5.8284L12.7279 11.4853Z"
                  fill="#171717"
                />
              </svg>
            </span>
          </div>

    </div>

    {isRatingOpen && <MultiSelectRating  allData={mockData} filterData={filterData.searchRating} userChecked={(data:any)=>updatecategoryFilter(data,'searchRating')}/>}
    {isCategoryOpen && <MultiSelect allData={mockData} filterData={filterData.searchCategory} userChecked={(data:any)=>updatecategoryFilter(data,'searchCategory')}/>}
  </div>
</div>
)
}
export default SearchContainer
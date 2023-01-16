import { useEffect, useState } from 'react';
import React = require('react');
import Movie from '../../components/Movie';
import { filter } from '../../interfaces/filterData.interface';
import { movieInterface } from '../../interfaces/movie.interface';
import './styles.css';

type props = {
  movieData: movieInterface[];
  filterObj: filter;
};

const SearchBar: React.FC<props> = ({ movieData, filterObj }) => {
  const [search, setSearch] = useState<string>('');
  const [filteredData, setFilteredData] = useState<any[]>([]);

  const checkAvailable = (checkValue: any[], possible: string) => {
    let che = checkValue.filter((movie: movieInterface) => {

      if(possible==='category'){if (filterObj.searchCategory.indexOf(movie[possible]) >= 0) {

        return movie;
      }}
      if(possible==='rating'){
        if (filterObj.searchRating.indexOf(Math.ceil(movie[possible])) >= 0) {

          return movie;
        } 
      }
    });
    
    return che;
  };
  const FilterDataBySearch = (searchText: string) => {
    let deepClone=JSON.stringify(movieData)
    let filterData = JSON.parse(deepClone).filter((movie: movieInterface) => {
      if (movie.title.toLowerCase().includes(searchText.toLowerCase())) {
        return movie;
      }
    });

    if (filterData.length > 0) {
      if (filterObj.searchCategory.length > 0) {
        if (filterObj.searchRating.length > 0) {
          return checkAvailable(filterData, 'rating');
        }
        return checkAvailable(filterData, 'category');
      }
      if (filterObj.searchRating.length > 0) {
        return checkAvailable(filterData, 'rating');
      }
    }
    return filterData;
  };

  useEffect(() => {
    search !== ''
      ? setFilteredData(FilterDataBySearch(search))
      : setFilteredData([]);
  }, [search, filterObj]);

  return (
    <div>
      <input
        type="text"
        onChange={(e: any) => setSearch(e.target.value)}
        className="search"
        placeholder='Enter Movie Name'
      />
      {filteredData.length > 0 ? (
        <div className="moviesContainer">
          {filteredData.map((x: any) => (
            <Movie
              category={x.category}
              rating={x.rating}
              title={x.title}
              key={x.title}
            />
          ))}
        </div>
      ) : null}
    </div>
  );
};
export default SearchBar;

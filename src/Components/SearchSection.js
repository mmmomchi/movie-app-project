import SearchForm from "./SearchForm";
import MovieItem from "./MovieItem";
import styles from "./SearchSection.module.css";
import { Fragment } from "react";

function SearchSection(props) {
  console.log(props.searchData);
  return (
    <Fragment>
      <div className={styles.search__bar__container}>
        <h2>Search</h2>
        <SearchForm searchHandler={props.searchHandler} />
      </div>
      <div className={styles.search__content__container}>
        {props.searchData.map((movieItem, index) => {
          return (
            <MovieItem
              key={index}
              title={movieItem.show.name}
              runtime={movieItem.show.runtime}
              language={movieItem.show.language}
              premiered={movieItem.show.premiered}
              summary={movieItem.show.summary}
              officialSite={movieItem.show.officialSite}
              image={movieItem.show.image}
              favorites={props.favorites}
              dispatchFavoriteAction={props.dispatchFavoriteAction}
              onRemoveFavorite={props.onRemoveFavorite}
            />
          );
        })}
      </div>
    </Fragment>
  );
}

export default SearchSection;

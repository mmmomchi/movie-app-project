import { Fragment, useEffect, useState } from "react";
import MovieItem from "./MovieItem";
import ReviewSection from "./ReviewSection";
import { useParams } from "react-router-dom";

function MovieDetailed(props) {
  const param = useParams();
  const [movieObjState, setMovieObjState] = useState({ image: "img" });

  useEffect(() => {
    fetch(`https://api.tvmaze.com/singlesearch/shows?q=${param.movieId}`)
      .then((response) => response.json())
      .then((data) => setMovieObjState(data));
  }, [param.movieId]);

  return (
    <Fragment>
      <MovieItem
        title={movieObjState.name}
        runtime={movieObjState.runtime}
        language={movieObjState.language}
        premiered={movieObjState.premiered}
        image={movieObjState.image}
        summary={movieObjState.summary}
        favorites={props.favorites}
        dispatchFavoriteAction={props.dispatchFavoriteAction}
        onRemoveFavorite={props.onRemoveFavorite}
      />
      <ReviewSection title={movieObjState.name} />
    </Fragment>
  );
}

export default MovieDetailed;

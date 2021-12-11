import React, { useState, useEffect } from "react";
import styles from "./MovieItem.module.css";
import ReactHtmlParser from "react-html-parser";
import { Link } from "react-router-dom";
function MovieItem(props) {
  const [addedToFavorite, setAddedToFavorite] = useState(false);
  useEffect(() => {
    props.favorites.forEach((favorite) => {
      if (favorite.title === props.title) setAddedToFavorite(true);
    });
  }, [props.favorites, props.title]);

  function addToFavoriteHandler() {
    props.dispatchFavoriteAction({
      type: "ADD",
      movie: {
        title: props.title,
        summary: props.summary,
        image: props.image,
      },
    });
  }

  function removeFromFavoriteHandler(e) {
    props.onRemoveFavorite(e);
    setAddedToFavorite(false);
  }

  return (
    <div className={styles.movie__item__container}>
      <img
        className={styles.movie__poster}
        src={props.image !== null ? props.image.medium : ""}
        alt="no image ."
      ></img>
      <div className={styles.info__container}>
        <Link to={`/movies/${props.title}`} className={styles.movie__heading}>
          {props.title}
        </Link>
        <div>
          <span className={styles.duration}>
            Duration: {props.runtime} min |
          </span>
          <span className={styles.language}>Language: {props.language} |</span>
          <span className={styles.date}>Premiered: {props.premiered}</span>
        </div>
        <div className={styles.movie__description}>
          {ReactHtmlParser(props.summary)}
        </div>
        <a className={styles.movie__link} href={props.officialSite}>
          Visit Official Site
        </a>
        {!addedToFavorite ? (
          <button
            onClick={addToFavoriteHandler}
            className={styles.movie__add__favorite}
            type="button"
          >
            Add To Favorites
          </button>
        ) : (
          <button
            name={props.title}
            onClick={removeFromFavoriteHandler}
            className={styles.movie__remove__favorite}
          >
            Remove From Favorites
          </button>
        )}
      </div>
    </div>
  );
}

export default MovieItem;

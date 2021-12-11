import { Link } from "react-router-dom";
import styles from "./FavoritesSection.module.css";

function FavoritesSection(props) {
  return (
    <div className={styles.favorites__container}>
      <h2 className={styles.favorites__heading}>Your Favorites</h2>
      {props.favorites.length !== 0 ? (
        <div className={styles.movies__container}>
          {props.favorites.map((favorite, index) => {
            return (
              <div className={styles.favorite__card} key={index}>
                <img
                  className={styles.favorite__img}
                  src={favorite.image.medium}
                  alt="asd"
                />
                <Link
                  to={`/movies/${favorite.title}`}
                  className={styles.favorites__title}
                >
                  {favorite.title}
                </Link>
                <button
                  name={favorite.title}
                  className={styles.remove__favorite}
                  onClick={props.onRemoveFavorite}
                >
                  Remove
                </button>
              </div>
            );
          })}
        </div>
      ) : (
        <h4 className={styles.empty}>The favorites section is empty. </h4>
      )}
    </div>
  );
}

export default FavoritesSection;

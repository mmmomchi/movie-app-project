import { Link } from "react-router-dom";
import styles from "./SearchForm.module.css";

function SearchForm(props) {
  return (
    <form className={styles.search__form}>
      <input
        className={styles.search__input}
        type="text"
        placeholder="Search by movie title..."
      ></input>
      <Link
        to="/search"
        className={styles.search__btn}
        onClick={props.searchHandler}
      >
        Search
      </Link>
    </form>
  );
}

export default SearchForm;

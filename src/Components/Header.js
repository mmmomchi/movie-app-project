import styles from "./Header.module.css";
import { Link } from "react-router-dom";
import SearchForm from "./SearchForm";

function Header(props) {
  return (
    <nav className={styles.nav}>
      <Link to={`/`} className={styles.movie__heading}>
        My Movie Collection
      </Link>
      <SearchForm searchHandler={props.searchHandler} />
    </nav>
  );
}

export default Header;

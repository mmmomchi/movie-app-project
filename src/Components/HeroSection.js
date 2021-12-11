import { Fragment, useEffect, useState } from "react";
import { Link } from "react-router-dom";
import styles from "./HeroSection.module.css";
import ReactHtmlParser from "react-html-parser";
function HeroSection() {
  const [showData, setHeroData] = useState({ image: {} });
  const randomId = Math.floor(Math.random() * (1000 - 1) + 1);

  useEffect(() => {
    fetch(`  https://api.tvmaze.com/shows/${randomId}`)
      .then((response) => response.json())
      .then((data) => setHeroData(data));
  }, []);

  return (
    <Fragment>
      <div className={styles.show__container}>
        <div className={styles.show__info}>
          <h2>{showData.name}</h2>
          <div className={styles.show__paragraph}>
            {ReactHtmlParser(showData.summary)}
          </div>
          <Link
            to={`/movies/${showData.name}`}
            className={styles.show__search__btn}
          >
            View Detailed
          </Link>
        </div>
        <img
          src={showData.image.original}
          alt="show"
          className={styles.show_picture}
        ></img>
      </div>
      <hr />
    </Fragment>
  );
}

export default HeroSection;

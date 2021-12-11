import "./App.css";
import { Route } from "react-router-dom";
import React, { Fragment, useState, useEffect, useReducer } from "react";
import Header from "./Components/Header";
import HeroSection from "./Components/HeroSection";
import FavoritesSection from "./Components/FavoritesSection";
import SearchSection from "./Components/SearchSection";
import MovieDetailed from "./Components/MovieDetailed";

function favoriteReducer(state, action) {
  if (action.type === "ADD") {
    return [...state, action.movie];
  } else {
    const updatedFavoriteState = state.filter(
      (favorite) => favorite.title !== action.title
    );
    return updatedFavoriteState;
  }
}

function App() {
  const [userInput, setUserInput] = useState("");
  const [searchData, setSearchData] = useState([]);

  const [favoritesState, dispatchFavoriteAction] = useReducer(
    favoriteReducer,
    JSON.parse(localStorage.getItem("favoriteMovies")) || []
  );

  function searchHandler(e) {
    setUserInput(e.target.previousElementSibling.value);
    e.target.previousElementSibling.value = "";
  }

  function onRemoveFavorite(e) {
    dispatchFavoriteAction({
      action: "REMOVE",
      title: e.target.name,
    });
  }

  useEffect(() => {
    fetch(`https://api.tvmaze.com/search/shows?q=${userInput}`)
      .then((response) => response.json())
      .then((data) => setSearchData(data));
  }, [userInput]);

  useEffect(() => {
    localStorage.setItem("favoriteMovies", JSON.stringify(favoritesState));
  }, [favoritesState]);

  return (
    <Fragment>
      <Header searchHandler={searchHandler} />
      <Route path="/" exact>
        <HeroSection />
        <FavoritesSection
          onRemoveFavorite={onRemoveFavorite}
          favorites={favoritesState}
        />
      </Route>
      <Route path="/search">
        <SearchSection
          searchHandler={searchHandler}
          searchData={searchData}
          favorites={favoritesState}
          dispatchFavoriteAction={dispatchFavoriteAction}
          onRemoveFavorite={onRemoveFavorite}
        />
      </Route>
      <Route path="/movies/:movieId">
        <MovieDetailed
          searchData={searchData}
          favorites={favoritesState}
          dispatchFavoriteAction={dispatchFavoriteAction}
          onRemoveFavorite={onRemoveFavorite}
        />
      </Route>
    </Fragment>
  );
}

export default App;

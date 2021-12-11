Another project for my portfolio made with React.

The application has 3 views:

1.  Homepage with header, hero section and movies/shows which are added to the favorites section.
    The header has a title and a search form which will load another view with results from the search.
    Every time the page loads random show will render in the hero section with an option to jump into another more detailed view of the show.
    When a movie/show is added to favorites it will appear in the favorites section. Each favorite show can be removed from this section with the "Remove" button. Also a detailed view can be opened by a click on the movie/show name.

2.  Search page which renders the fetched results from an API.
    Every item can be added or removed from favorites.
    Detailed view can be accessed by clicking on the title. In addition the header title can be clicked to jump back to the homepage.

3.  Detailed view for each movie/show with a review section.
    Submited reviews will be rendered in the same section in a column with a delete button for each review.

There is no back-end so favorites and reviews are stored in the local storage of the browser.

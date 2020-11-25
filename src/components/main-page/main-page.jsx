import React from "react";

import MoviesCatalog from "../movies-catalog/movies-catalog";
import PromoMovie from "../promo-movie/promo-movie";

const MainPage = () => {
  return (
    <React.Fragment>
      <PromoMovie/>

      <div className="page-content">
        <MoviesCatalog/>

        <footer className="page-footer">
          <div className="logo">
            <a className="logo__link logo__link--light">
              <span className="logo__letter logo__letter--1">W</span>
              <span className="logo__letter logo__letter--2">T</span>
              <span className="logo__letter logo__letter--3">W</span>
            </a>
          </div>

          <div className="copyright">
            <p>© 2019 What to watch Ltd.</p>
          </div>
        </footer>
      </div>
    </React.Fragment>
  );
};

export default MainPage;

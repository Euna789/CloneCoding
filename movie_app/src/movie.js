//movies를 render할 곳 
import React from "react";
import PropTypes from "prop-types";
import "./Movie.css";

function Movie({year, title, summary, poster, genres}){
    return (
    <div className="movie">
        <img src={poster} alt={title} title={title}/>
        <div className="movie__data">
            <h3 className="movie__title">{title}</h3>
            <h5 className="movie__year">{year}</h5>
            <ul className="movie__genres">
                {genres.map((genre , index) => 
                <li key={index} className="genres__genre">
                    {genre}
                </li>
                )}
            </ul>
            <p className="movie__summary">{summary}</p>
        </div>
    </div>
    );
}

Movie.propTypes = { //PropTypes말고 proptypes로 쓰기
    //가지고 오고 싶은 data 가져오기
    id: PropTypes.number.isRequired,
    year: PropTypes.number.isRequired,
    title: PropTypes.string.isRequired,
    summary: PropTypes.string.isRequired,
    poster: PropTypes.string.isRequired,
    genres: PropTypes.arrayOf(PropTypes.string).isRequired
}

export default Movie;
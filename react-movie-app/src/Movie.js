import React from "react";
import PropTypes from "prop-types";
import "./Movie.css";

// * Movie 모듈을 생성.
function Movie({ id, year, title, summary, poster }) {
    return (
        <div className="movie">
            <img src={poster} alt={title} title={title} />
            <div className="detail">
                <h3 className="movieTitle">{title}</h3>
                <h5 className="movieYear">since-{year}</h5>
                <p className="movieSummary">{summary}</p>
            </div>
        </div>
    );
}

/*
    React props 및 유사한 객체에 대한 런타임 유형 확인.
    prop가 특정 JS 형식임을 선언할 수 있습니다.
    `isRequired`와 연결하여 prop가 제공되지 않았을 때 경고가 보이도록 할 수 있습니다.
*/
// * Movie의 prop들이 특정 형식임을 명시, isRequired를 통해 형식이 다르면 경고 알림.
Movie.prototype = {
    id: PropTypes.number.isRequired,
    year: PropTypes.number.isRequired,
    title: PropTypes.string.isRequired,
    summary: PropTypes.string.isRequired,
    poster: PropTypes.string.isRequired,
};

export default Movie;

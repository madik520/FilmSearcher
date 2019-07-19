import React from 'react';
import './FilmItem.scss';
import PropTypes from 'prop-types';
import  { IMG } from '../../container/FilmApp';

const FilmItem = ({ films }) => {
    return(
        <>
        {films.map( film => {
            return <li key={film.id}>
            <div className="item fade-in">
                <img src={IMG + film.poster_path} alt="No poster" />
                <h3>{film.title}</h3>
                <p>Raiting: {film.vote_average} <i className="far fa-star"></i></p>
                <p>Release date: {film.release_date}</p>
            </div>
        </li>
        })}
        </>
    )
};

FilmItem.propTypes = {
    id: PropTypes.number,
    src: PropTypes.string,
    title: PropTypes.string,
    average: PropTypes.number,
    release: PropTypes.string,
    films: PropTypes.array
}
FilmItem.defaultProps = {
    id: 0,
    src: "",
    title: "",
    average: 0,
    release: "",
    films: []
}


export default FilmItem;
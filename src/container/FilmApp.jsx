import React, { useState, useEffect } from 'react';
import './FilmApp.scss';
import Input from '../components/Input/Input';
import FilmItem from '../components/FilmItem/FilmItem';
import Button from '../components/Button/Button';

/* My Key */
const API_KEY = "api_key=02b590a5dc4f1ccca9d2d7d2389b1b44";

/* Find Only Popular films */
const POPULAR = "https://api.themoviedb.org/3/movie/popular?";

/* API for search */
const SEARCH = "https://api.themoviedb.org/3/search/movie?";
const QUERY = "&query=";
const LANG_EN = "&language=en-US";

/* For Paginations */
const PAGES = "&page=1";

/* Image Link */
export const IMG = "https://image.tmdb.org/t/p/w200";

const FilmApp = () => {
    const [text, setText] = useState("");
    const [items, setItems] = useState([]);
    const [viewFilm, setViewFilm] = useState(4);
 
    const handleChange = (e) =>{
        setText(e.target.value);
    }
    useEffect(
        () => {
            const FetchPopular = async () => {
                const response = await fetch(`${POPULAR}${API_KEY}${LANG_EN}${PAGES}`);
                const data = await response.json();
                const item = await data.results;
                setItems(item);
            }
            FetchPopular();
        },
        []
    )

    const fetchData = async (search) => {
        if(search !== ""){
            const resp = await fetch(`${SEARCH}${API_KEY}${LANG_EN}${QUERY}${search}`);
            const data = await resp.json();
            const item = await data.results;
            setItems(item);
        }
    }

    const handlePress = ({ key }) => {
        if(key === "Enter"){
            fetchData(text);
        }
    }
    //Get films 

   const addFilms = () => {
       setViewFilm(viewFilm + 4);
   }

    return(
        <div className="full-container">
            <div className="container-fluid">
                <div className="row">
                  <div className="col-12 m-auto">
                      <div className="nav-content">
                          <Input onKeyPress={handlePress} onChange={handleChange} value={text} />
                      </div>
                  </div>
                </div>
                <div className="row">
                    <div className="col-10 m-auto">
                        <ul className="film-list">
                            { text ? <FilmItem films={items.slice(0,viewFilm)} /> : <FilmItem films={items.slice(0, viewFilm)} /> }
                        </ul>
                        {viewFilm < items.length && 
                         <Button onClick={addFilms} className="pagination-btn" value="Load more" />
                        }
                    </div>
                </div>
            </div>
        </div>
    )
};

export default FilmApp;
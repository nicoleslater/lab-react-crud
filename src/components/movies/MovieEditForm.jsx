import React from 'react';
import {useParams, useNavigate} from "react-router-dom";
import { getOneMovie, updateMovie } from '../../api/fetch';

export default function MoviesForm(){
    const {id} = useParams();
    const navigate = useNavigate();

    const [movie, setMovies] = useState({
        type: "",
        title: "",
        country: "",
        dateAdded: "",
        description: "",
        duration: "",
        listedIn: "",
        rating: "",
        releaseYear: "",
    })

    useEffect(()=> {
        getOneMovie(id)
        .then((movieData) => {
        setMovies(movieData)
        })
        .catch((err) => {
            console.log(err)
        }) 
    }, [id])
     
    

    function handleSubmit(e){
        e.preventDefault();
        console.log(movie)
        .then((createMovie) => {
        alert(`movie created:${createMovie.title} ${createMovie.id}`)
        })
        .catch((error) => {
            console.log(error)
        })

    }

    function handleTextChange(event){
        setMovies({
            ...movie, 
            [event.target.id]: event.target.value,
        });
    }

    return (

        <form onSubmit={handleSubmit}>
        <label htmlFor='title'> Title:  </label>
            <input 
            type="text"
            id="title"
            value={movie.title}
            onChange={handleTextChange}
             />
       
        <label htmlfor="description"> Description:  </label>
            <input 
            type="text"
            id="descritpion"
            value={movie.description}
            onChange={handleTextChange}
            />
       
        <label htmlFor="type"> Type:  </label>
            <input 
            type="text"
            id="type"
            value={movie.type}
            onChange={handleTextChange}
            />
       
        <label htmlfor="rating" > Rating:  </label>
            <input
            type="text"
            id="rating"
            value={movie.rating}
            onChange={handleTextChange} 
            />
       
        <label htmlFor='listedIn'> Listed in:   </label>
            <input
            type="text"
            id="listedIn"
            value={movie.listedIn}
            onChange={handleTextChange} 
            />
       
        <label htmlFor='duration'> Duration:   </label>
            <input
            type="text"
            id="duration"
            value={movie.duration}
            onChange={handleTextChange} 
            />
        
        <label htmlFor="releaseYear" > Release Year:  </label>
            <input
            type="text"
            id="releaseYear"
            value={movie.releaseYear} 
            onChange={handleTextChange} 
            />
        
        <label htmlFor='country'> Country:  </label>
            <input 
            type="text"
            id="country"
            value={movie.country}
            onChange={handleTextChange} 
            />
       
        <label htmlFor='dateAdded'> Date added: </label>
            <input 
            type="text"
            id="dateAdded"
            value={movie.dateAdded}
            onChange={handleTextChange} 
             />

             <br />

             <input type="submit"/>

            
     

    </form>
);
    
    }
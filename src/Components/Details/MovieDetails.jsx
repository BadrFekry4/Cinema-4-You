import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { useParams } from "react-router-dom";


export default function MovieDetails() {
    let {id} = useParams();
    const [movdet,setMovDet] = useState({})
    
    async function detailsMovie(id) {
        let {data} = await axios.get(`https://api.themoviedb.org/3/movie/${id}?api_key=44ee5523e457e74020effc2bddc4592e`)
        console.log(data);
        setMovDet(data);
  
    }
      useEffect(()=>{
            detailsMovie(id);
        },[])


  return <>
  <div className="container">
    <div className="row">
        <div className="col-md-3">
        <img src={'https://image.tmdb.org/t/p/w500/'+movdet.poster_path} className='w-100 m-2' alt="" />
        </div>
        <div className="col-md-9">
            <h1>{movdet.title}</h1>
            <div className='mb-2'><span>Description:</span> {movdet.overview}</div>
            <ul className='list-unstyled d-flex'><span>Category:</span>{movdet.genres?.map(genres => <div key={movdet.id} className='bg-danger p-1 mx-1 rounded-2'>{genres.name}</div>)}</ul>
            <div className='mb-2'><span>Vote: </span>{movdet.vote_average}</div>
            <div className='mb-2'><span>Vote Count: </span>{movdet.vote_count}</div>
            <div className='mb-2'><span>Original Country: </span>{movdet.origin_country}</div>
            <div className='mb-2'><span>Release Date: </span>{movdet.release_date}</div>

        </div>
    </div>
  </div>
  
  </>
}

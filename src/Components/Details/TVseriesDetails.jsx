import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom';

export default function TVseriesDetails() {
    let {id} = useParams();
    const [tvdet,setTVDet] = useState({})
    
    async function detailstv(id) {
        let {data} = await axios.get(`https://api.themoviedb.org/3/tv/${id}?api_key=44ee5523e457e74020effc2bddc4592e`)
        console.log(data);
        setTVDet(data);
        
    }

      useEffect(()=>{
                detailstv(id);
            },[])

  return<>
   <div className="container">
    <div className="row">
        <div className="col-md-3">
        <img src={'https://image.tmdb.org/t/p/w500/'+tvdet.poster_path} className='w-100 m-2' alt="" />
        </div>
        <div className="col-md-9">
            <h1>{tvdet.name}</h1>
            <div className='mb-2'><span>Description:</span> {tvdet.overview}</div>
            <ul className='list-unstyled d-flex'><span>Category:</span>{tvdet.genres?.map(genres => <div key={tvdet.id} className='bg-danger p-1 mx-1 rounded-2'>{genres.name}</div>)}</ul>
            <div className='mb-2'><span>Vote: </span>{tvdet.vote_average}</div>
            <div className='mb-2'><span>Vote Count: </span>{tvdet.vote_count}</div>
            <div className='mb-2'><span>Original Country: </span>{tvdet.origin_country}</div>
            <div className='mb-2'><span>Release Date: </span>{tvdet.first_air_date}</div>

        </div>
    </div>
  </div>

  </>
}

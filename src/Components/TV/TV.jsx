import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom';

export default function TV() {
    let [tv , setTv]=useState([])
    async function trendtv() {
        let {data} = await axios.get(`https://api.themoviedb.org/3/trending/tv/day?api_key=44ee5523e457e74020effc2bddc4592e`);
        console.log(data.results); 
        setTv(data.results);   
    }

    useEffect(()=>{
        trendtv();
    },[])


  return <>
  <div className="container">
    <div className="row">
        <div className="col-md-4"></div>
        <div className="col-md-4">
            <hr />
            <h1 className='text-center m-4'>Trend TV Series</h1>
            <hr />
        </div>
        <div className="col-md-4"></div>
    </div>
  </div>

  <div className="container">
    <div className="row">
        {tv.map((item,index)=> <div className="col-md-3" key={index}> 
            <Link to={`/tvdetails/${item.id}`} className='text-white text-decoration-none'>
            <div className="position-relative">
                <img src={'https://image.tmdb.org/t/p/w500/'+item.poster_path} className='w-100 rounded-5' alt="" />
                <div className="imglayer">
                    <div className="imginfo">
                    {item.name}
                    </div>
                </div>
                <div className='position-absolute top-0 end-0 bg-warning p-1 fw-bolder'>{item.vote_average.toFixed(1)}</div>
            </div>
            <h3>{item.name}</h3>
            </Link>
        </div>)}
    </div>
  </div>

  </>
}


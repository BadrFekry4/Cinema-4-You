import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom';
import img from "../../images/ChrisEvans2023.jpg"

export default function Movie() {
    let [movie , setMovie]=useState([])
    async function trendmovies() {
        let {data} = await axios.get(`https://api.themoviedb.org/3/trending/movie/day?api_key=44ee5523e457e74020effc2bddc4592e`);
        console.log(data.results); 
        setMovie(data.results);   
    }
    useEffect(()=>{
        trendmovies();
    },[])


    let [tv , setTv]=useState([])
    async function trendtv() {
        let {data} = await axios.get(`https://api.themoviedb.org/3/trending/tv/day?api_key=44ee5523e457e74020effc2bddc4592e`);
        console.log(data.results); 
        setTv(data.results);   
    }
    useEffect(()=>{
        trendtv();
    },[])


    let [people , setPeople]=useState([])
    async function trendpeople() {
      let {data} = await axios.get(`https://api.themoviedb.org/3/trending/person/day?api_key=44ee5523e457e74020effc2bddc4592e`);
      console.log(data.results);
      setPeople(data.results);
    }
    useEffect(()=>{
      trendpeople();
          },[])


  return <>
  {/* Movies */}
  <div className="container">
    <div className="row">
        <div className="col-md-4"></div>
        <div className="col-md-4">
            <hr />
            <h1 className='text-center m-4'>Trend Movies</h1>
            <hr />
        </div>
        <div className="col-md-4"></div>
    </div>
  </div>
  <div className="container">
    <div className="row">
        {movie.map((item,index)=> <div className="col-md-3" key={index}> 
            <Link to={`/moviedetails/${item.id}`} className='text-white text-decoration-none'>
            <div className="position-relative">
                <img src={'https://image.tmdb.org/t/p/w500/'+item.poster_path} className='w-100 rounded-5' alt="" />
                <div className="imglayer">
                    <div className="imginfo">
                    {item.title}
                    </div>
                </div>
                <div className='position-absolute top-0 end-0 bg-warning p-1 fw-bolder'>{item.vote_average.toFixed(1)}</div>
            </div>
            <h3>{item.title}</h3>
            </Link>
        </div>)}
    </div>
  </div>
{/* Tv series */}
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
{/* Actors */}
    <div className="container">
        <div className="row">
            <div className="col-md-4"></div>
            <div className="col-md-4">
                <hr />
                <h1 className='text-center m-4'>Trending Actors</h1>
                <hr />
            </div>
            <div className="col-md-4"></div>
        </div>
      </div>
      <div className="container">
        <div className="row">
          {people.map((item,index)=> <div className="col-md-3" key={index}> 
          {item.profile_path?<img src={'https://image.tmdb.org/t/p/w500/'+item.profile_path} className='w-100 rounded-5' alt="" />: <img src={img} className='w-100 rounded-5' alt=""/>}
          <h3>{item.name}</h3>
          </div>)}
        </div>
      </div>
  </>
}

import axios from 'axios'
import React, { useEffect, useState } from 'react'
import img from "../../images/ChrisEvans2023.jpg"

export default function Drinks() {
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

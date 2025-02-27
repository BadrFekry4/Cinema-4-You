import React, { useEffect, useState } from 'react'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import Layout from './Components/Layout/Layout'
import Home from './Components/Home/Home'
import Movie from './Components/Movie/Movie'
import TV from './Components/TV/TV'
import Login from './Components/Auth/Login'
import Register from './Components/Auth/Register'
import MovieDetails from './Components/Details/MovieDetails'
import TVseriesDetails from './Components/Details/TVseriesDetails'
import Drinks from './Components/Drinks/Drinks'
import {Toaster} from 'react-hot-toast'
import {jwtDecode} from 'jwt-decode'

export default function App() {
    let [logdata,setLogData] = useState(null);

    function logindata() {
        let encoded = localStorage.getItem("token");
        let decoded = jwtDecode(encoded)
        console.log(decoded)
        setLogData(decoded)
    }
    useEffect(()=>{
        if(localStorage.getItem("token") != null){
            logindata();
        }
    },[])

    let routers= createBrowserRouter([
        {path:"",element:<Layout setLogData={setLogData} logdata={logdata}></Layout>,children:[
            {path:"home",element:<Home></Home>},    
            {path:"movie",element:<Movie></Movie>},
            {path:"moviedetails/:id",element:<MovieDetails></MovieDetails>},
            {path:"tv",element:<TV></TV>},
            {path:"tvdetails/:id",element:<TVseriesDetails></TVseriesDetails>},
            {path:"drinks",element:<Drinks></Drinks>},
            {index:true,element:<Login></Login>},
            {path:"login",element:<Login logindata={logindata}></Login>},
            {path:"register",element:<Register></Register>},
        ]}
    ])
   
  return <>
  <Toaster></Toaster>
  <RouterProvider router={routers} ></RouterProvider>
  </>
}

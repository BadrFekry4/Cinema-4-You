import { useFormik } from 'formik';
import React from 'react';
import * as Yup from 'yup';
import axios from 'axios';
import {useNavigate} from 'react-router-dom';
import toast from 'react-hot-toast';
import img1 from "../../images/cinema-world.webp";

export default function Login({logindata}) {
  let navigate =useNavigate()

  async function LogApi(values) {
    let {data} = await axios.post(`https://note-sigma-black.vercel.app/api/v1/users/signIn`,values);
    console.log(data);
    localStorage.setItem("token",data.token);
    navigate("/home");
    logindata;
    toast.success("Login Successfully",{position:"top-center"});
  }

  let Validation = Yup.object({
    email:Yup.string().email("Invalid Email Address").required("Email is Required"),
    password:Yup.string().matches(/^[A-Z][a-z-0-9]{3,8}$/,"Password Should Start with Capital Letter").required("Password is Required")

  })
  

  let formik = useFormik({
    initialValues:{
      email:"",
      password:"",
    },
    validationSchema:Validation,
    onSubmit:(values)=>LogApi(values)
    
  })

  return <>

  <div className="container">
    <div className="row">
      <div className="col-md-6">
        <img src={img1} alt="" className='w-100 mt-4 h-90 img11'/>
      </div>
      <div className="col-md-6">
        <h1 className='text-center mt-4 bg-danger fw-bolder rounded-5 p-2'>Login</h1>
        <form onSubmit={formik.handleSubmit}>
          {/* Email */}
          <div className="mb-5 mt-4">
            <label htmlFor="email" className="h5 form-label">Email</label>
            <input type="email" className="form-control" id="email" name='email'
            value={formik.values.email}
            onChange={formik.handleChange}
            />
            {formik.errors.email&&formik.touched.email?
            <div className='alert alert-warning'>{formik.errors.email}</div>:""}
          </div>
          {/* Password */}
          <div className="mb-3">
            <label htmlFor="password" className="h5 form-label">Password</label>
            <input type="password" className="form-control" id="password" name='password' 
            value={formik.values.password}
            onChange={formik.handleChange} 
            />
            {formik.errors.password&&formik.touched.password?
            <div className='alert alert-warning'>{formik.errors.password}</div>:""}
          </div>
          {/* Btn */}
          <div className='d-flex justify-content-center'>
          <button type="submit" className="btn btn-danger sub btn-lg">Submit</button>
          </div>
          </form>
      </div>
    </div>

  </div>

  </>
}

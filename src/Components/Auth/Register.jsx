import React from 'react';
import { useFormik } from 'formik';
import * as Yup from 'yup';
import axios from 'axios';
import {useNavigate} from 'react-router-dom';
import img1 from "../../images/cinema-world.webp";

export default function Register() {
  let navigate =useNavigate()

  async function RegApi(values) {
    let {data} = await axios.post(`https://note-sigma-black.vercel.app/api/v1/users/signUp`,values);
    console.log(data);
    navigate("/");
  }
    let Validation = Yup.object({
      name:Yup.string().max(15,"user name should be less than 15 letters").required("Username is Required"),
      email:Yup.string().email("Invalid Email Address").required("Email is Required"),
      password:Yup.string().matches(/^[A-Z][a-z-0-9]{3,8}$/,"Password Should Start with Capital Letter").required("Password is Required"),
      age:Yup.string().required("Age is Required"),
      phone:Yup.string().matches(/^[01][0125][0-9]{8}$/,"Invalid Phone Number").required("Phone is Required")
    })

  let formik = useFormik({
      initialValues:{
        name:"",
        email:"",
        password:"",
        age:"",
        phone:""
      },
      validationSchema:Validation,
      onSubmit:(values)=>RegApi(values)
    })
  
  return <>

  <div className="container">
    <div className="row">
        <div className="col-md-6">
              <img src={img1} alt="" className='w-100 mt-4 h-90 img11'/>
        </div>
        <div className="col-md-6">
        <h1 className='text-center mt-4 bg-danger fw-bolder rounded-5 p-2'>Register</h1>
        <form onSubmit={formik.handleSubmit}>
          {/* Name */}
          <div className="mb-1 mt-1 ">
            <label htmlFor="name" className="h5 form-label">User Name</label>
            <input type="text" className="form-control" id="name" name='name'
            value={formik.values.name}
            onChange={formik.handleChange}
            />
              {formik.errors.name&&formik.touched.name?
              <div className='alert alert-warning'>{formik.errors.name}</div>:""}
          </div>
          {/* Email */}
          <div className="mb-1">
            <label htmlFor="email" className="h5 form-label">Email</label>
            <input type="email" className="form-control" id="email" name='email'
            value={formik.values.email}
            onChange={formik.handleChange}
            />
              {formik.errors.email&&formik.touched.email?
              <div className='alert alert-warning'>{formik.errors.email}</div>:""}
          </div>
          {/* Password */}
          <div className="mb-1">
            <label htmlFor="password" className="h5  form-label">Password</label>
            <input type="password" className="form-control" id="password" name='password' 
            value={formik.values.password}
            onChange={formik.handleChange} 
            />
            {formik.errors.password&&formik.touched.password?
              <div className='alert alert-warning'>{formik.errors.password}</div>:""}
          </div>
          {/* Age */}
          <div className="mb-1">
            <label htmlFor="age" className="h5  form-label">Age</label>
            <input type="number" className="form-control" id="age" name='age' 
            value={formik.values.age}
            onChange={formik.handleChange} 
            />
            {formik.errors.age&&formik.touched.age?
              <div className='alert alert-warning'>{formik.errors.age}</div>:""}
          </div>
          {/* Phone */}
          <div className="mb-3">
            <label htmlFor="phone" className="h5  form-label">Phone Number</label>
            <input type="number" className="form-control" id="phone" name='phone' 
            value={formik.values.phone}
            onChange={formik.handleChange} 
            />
            {formik.errors.phone&&formik.touched.phone?
              <div className='alert alert-warning'>{formik.errors.phone}</div>:""}
          </div>
          {/* Btn */}
          <div className='d-flex justify-content-center'>
          <button type="submit" className="btn btn-danger mb-3 btn-lg">Submit</button>
          </div>

          </form>

        </div>
    </div>  
  
  </div>

  </>
}

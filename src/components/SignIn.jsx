import  { useState } from 'react'
import { supabase } from '../supabaseClient';
import { Link, useNavigate } from 'react-router-dom';
import DataFecch from './DataFecch';

export const SignIn = () => {
  let navigate=useNavigate();
 const [formData,setformData]=useState({
    email:'',
    password:''
   });


   function handleChange(event){
    

    setformData((prevFormData)=>{
      return{
        ...prevFormData,
        [event.target.name]:event.target.value
      }
    })
   }
  async function handleSubmit(e){
    e.preventDefault();
    try{
    const { data, error } = await supabase.auth.signInWithPassword({
    email: formData.email,
    password: formData.password
  })
    if(error)throw error;
    console.log(data);
    navigate('/dashboard');
    }catch(error){
    alert(error);
    }
  }
   <DataFecch />

 return (
 
  <div  className=' bg-gradient-to-r from-yellow-50 to-yellow-50 h-screen pt-24'>
   <div className='mx-auto block max-w-sm  bg-[#d2e603] rounded-lg p-4  '>
        <img src="src/assets/Logo_Full Color.png" alt="logo" width="150" height="74"className="p-8 mx-auto " />
      <form onSubmit={handleSubmit}>
         <p className="text-blue-950 font-bold  text-center my-4 ">Student Area</p>
        <input type="text"  onChange={handleChange} 
        placeholder='Username or email Address' name="email" 
        className='rounded-xl w-[300px] h-[44px] p-2 my-4 mx-4 '>
        </input>
         
        <input type="password" 
         onChange={handleChange} 
         placeholder='Password' 
         name="password"
          className='rounded-xl w-[300px]  h-[44px] p-2 my-4 mx-4'>

          </input>
          <button type="submit"
           className='bg-blue-950 text-white rounded-xl w-[300px] h-[44px] p-2 my-4 mx-4' >
            Login 
            </button> 
          </form>
            <p className='text-blue-500  my-4 mx-8 underline' ><Link to="./forgot-password">Forgot your password?</Link></p>
         
             <p className='text-blue-500  my-4 mx-8 underline' >Don't have an account ? <Link to="./signup">Click here</Link></p>
          </div>
          </div>
  )
}

import React from 'react'
import { useEffect } from 'react';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const Success = ({message}) => {

   console.log("????????????????????",message)
   const notify = () => toast(`${message}`,{
      position: "top-right",
      autoClose: 5000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: false,
      draggable: true,
      progress: undefined,
      theme: "light",
      type:'success'
      });

   

  return (
   
    <ToastContainer notify={notify()} />
  )
}

const Failure = ({message}) => {


   console.log("????????????????????",message)

   const notify = () => toast(`${message}`, {
      position: "top-right",
      autoClose: 5000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: false,
      draggable: true,
      progress: undefined,
      theme: "light",
      type:'error'
      });
   
   useEffect(()=>{notify(message)},[])

  return (
   <ToastContainer notify={notify()}/>
   
  )
}

export {Success,Failure}
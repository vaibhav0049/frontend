// we have to use use client when your importing useeffect 
'use client';
import React, { useEffect } from 'react'
import Navbar from '@/navbar';
import { Toaster } from 'react-hot-toast';




//  way to import bootsrtap js in file 
const Template = ({children}) => {
   useEffect(() => {
     require('bootstrap/dist/js/bootstrap.bundle.min.js')
   }, [])
   


  return (
    <div>
    <Toaster position='top-center'/>
     <Navbar />
      {children}
    </div>
    
  )
}

export default Template;

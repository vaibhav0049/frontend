import React from 'react'

const Comment = () => {
  return (
    <div className='bg-primary vh-100'>
    <div className='conatiner py-4'>
    <h1 className="display-2 fw-bold ">Comment</h1>
     <div className="card shadow">
      <div className='card-header'>
        <input 
        
        type='text' className='form-control   px-3 border-2  border-dark'
        placeholder='post your comment here '/>
      </div>
      <div className='card-body'>
        
      </div>
     </div>

    </div>
        
    </div>
  )
}

export default Comment;

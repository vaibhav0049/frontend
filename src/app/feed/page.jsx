'use client';
import { IconHeart, IconTrash } from '@tabler/icons-react';
import React, { useEffect, useState } from 'react'

const Feed = () => {

    const [postArray, setPostArray] = useState([]);

    const fetchPostData = () => {

        fetch('http://localhost:5000/post/getall')
        .then((response) => {
            console.log(response.status);
            return response.json();
        })
        .then((data) => {
            console.log(data);
            setPostArray(data);
        })
        .catch((err) => {
            console.log(err);
        });
    }

    useEffect(() => {
      fetchPostData();
    }, []);
const deletePost=(id)=>{
    fetch('http://localhost:5000/post/delete/'+id,{
        method:'DELETE'

     })

}
  return (
    <div>
        <div className='container py-4'>
            <h1 className='text-center'>Trending Posts</h1>
            <hr />

            <div className='col-md-6 mx-auto'>
                {
                    postArray.map( (post) => {
                        return <div key={post._id} className='card shadow mb-5' >
                            <div className='card-header'>
                                <h4>{post.title}</h4>
                                <button className='btn btn-danger'></button>
                                <IconTrash/>
                            </div>
                            <img className='card-img-top' src={post.image} alt="" />
                            <div className='card-footer'>
                                <div className='d-flex g-4'>
                                    <button className='btn btn-outline-primary w-100'>{post.likes} <IconHeart/> </button>
                                    <button className='btn btn-outline-primary w-100'>{post.shares} Share</button>
                                </div>
                            </div>
                        </div>
                    })
                }
            </div>

        </div>

    </div>
  )
}

export default Feed;
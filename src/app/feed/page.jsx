'use client';
import React, { useEffect, useState } from 'react'

const Feed = () => {

  const [postArray,setPostArray]=useState([]);

    const fetchPostData = () => {

        fetch('http://localhost:5000/post/getall')
        .then((response) => {
            console.log(response.status);
            return response.json();
        })
        .then((data)=>{
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

  return (
    <div>
        <div className='container py-4'>
            <h1 className='text-center'>Trending Posts</h1>
            <hr />
            <div className='col-md-6 mx-auto'>
            {
                postArray.map((post)=>{
                    return <div key={post._id } className='card shadow mb-5'>
                    <div className='card-header'>
                    <h4>{post._title}</h4>
                    </div>
                    <img className='card-img-top' src={post.image} alt=""/>
                    <div className='d-flex g-4'>
                    <button className='btn btn-otline-primary w-100'>{post.like}like </button>
                    <button className='btn btn-otline-primary w-100'> {post.share}Share </button>
                    
                    <div>
                    </div>
                })
            }

            </div>
        </div>

    </div>
  )
}

export default Feed;
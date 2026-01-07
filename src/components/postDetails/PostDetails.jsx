import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { PostsItem } from '../posts/PostsItem';

export default function PostDetails() {
    const {id} =useParams()
    console.log(id);
    const [post, setPost] = useState([])
   async function getOnePost(id) {
    try {
            const {data :{post}} = await axios.get(`${import.meta.env.VITE_BASE_URL}/posts/${id}`,{
             headers:{
               token:localStorage.getItem('token')
             }
            })
           
            setPost(post)
         console.log(post);
       
         } catch (error) {
           console.log(error);
           
         }}
         
  console.log(import.meta.env.VITE_BASE_URL);
 useEffect(() => {
            getOnePost(id)
         }, [])
      
     
  return <>
    <section>
        <div className="  dark:bg-gray-900 py-8">
  <div className="max-w-xl mx-auto px-4">
    {post && <PostsItem post={post} showAllComments = {true}/>}
  </div>
</div>

    </section>
  </>
}

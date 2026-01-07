import React, { useContext, useEffect, useState } from 'react'
import Add from '../../components/posts/Add'
import PostsList from '../../components/posts/PostsList'
import axios from 'axios'
import { AuthContext } from '../../components/Context/AuthContext'

export default function Profile() {
 const {userData} =useContext(AuthContext)
   const [posts, setPosts] = useState([])
      const [error, setErorr] = useState(null)
    
      //all posts //
   const getUserData = async () => {
 

  try {
    const { data: { posts } } = await axios.get(
      `${import.meta.env.VITE_BASE_URL}/users/${userData?._id}/posts`,
      {
        headers: {
          token: localStorage.getItem("token"),
        },
      }
    );
    setPosts(posts.reverse());
  } catch (error) {
    setErorr(error.response?.data?.error);
    setPosts([]);
  }
};

   useEffect(() => {
 
  getUserData();

}, [userData]);

  
    
  return <>
 <Add onPostCreated={getUserData}/>
    <PostsList error={error} posts ={posts}/>
  </>
}

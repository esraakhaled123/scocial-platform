import React, { useEffect, useState } from 'react'
import { Button } from "flowbite-react";
import PostsList from '../../components/posts/PostsList';
import Add from '../../components/posts/Add';
import axios from 'axios';

export default function Posts() {
   const [posts, setPosts] = useState([])
    const [error, setErorr] = useState(null)
  
    //all posts //
   async function fetchAllPosts() {
    try {
      const { data: { posts } } = await axios.get(
        `${import.meta.env.VITE_BASE_URL}/posts?limit=20&sort=-createdAt`,
        {
          headers: {
            token: localStorage.getItem("token"),
          },
        }
      );
      setPosts(posts);
    } catch (error) {
      setErorr(error.response?.data?.error);
      setPosts([]);
    }
  }
  
  useEffect(() => {
    fetchAllPosts();
  }, []);

  
  return <>
  <Add onPostCreated={fetchAllPosts}/>
   <PostsList error={error} posts ={posts}/>
  </>
}

import React, { useContext, useEffect, useState } from 'react'
import { PostsItem } from './PostsItem'
import axios from 'axios';
import { AuthContext } from '../Context/AuthContext';

export default function PostsList({ error , posts}) {

  const {userData}=useContext(AuthContext)
  console.log(userData);



  return <>
  <section className='pt-0'>
     <div className="container lg:max-w-3xl mx-auto">

  </div>
    <div className=" container lg:max-w-3xl mx-auto">
       <div className='flex flex-col gap-4'>
        {error&& <div className='text-center text-lg text-red-800'>{error}</div>}
      {posts && posts.map((post)=><PostsItem key={post._id} post={post}/>)}
       </div>
    </div>
  </section>
  </>
}

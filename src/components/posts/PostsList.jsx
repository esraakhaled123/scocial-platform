import React, { useContext } from 'react'
import { PostsItem } from './PostsItem'
import { AuthContext } from '../Context/AuthContext';

export default function PostsList({ error , data ,isLoading}) {

  const {userData}=useContext(AuthContext)
  console.log(userData);



  return <>
  <section className='pt-0'>
     { isLoading && <div className="container text-4xl  text-center mx-auto">
           loading.....
  </div>}
    <div className=" container lg:max-w-3xl mx-auto">
       <div className='flex flex-col gap-4'>
        {error&& <div className='text-center text-lg text-red-800'>{error}</div>}
      {data && data.map((post)=><PostsItem key={post._id} post={post}/>)}
       </div>
    </div>
  </section>
  </>
}

import React, { useContext } from 'react'
import { Button } from "flowbite-react";
import PostsList from '../../components/posts/PostsList';
import Add from '../../components/posts/Add';

import useFetch from '../../Hooks/useFetch';
import { AuthContext } from '../../components/Context/AuthContext';

export default function Posts() {
   const {userData} =useContext(AuthContext)
  
  //  const [posts, setPosts] = useState([])
  //   const [error, setErorr] = useState(null)
  
  //   //all posts //
  //  async function fetchAllPosts() {
  //   try {
  //     const { data: { posts } } = await axios.get(
  //       `${import.meta.env.VITE_BASE_URL}/posts?limit=20&sort=-createdAt`,
  //       {
  //         headers: {
  //           token: localStorage.getItem("token"),
  //         },
  //       }
  //     );
  //     setPosts(posts);
  //   } catch (error) {
  //     setErorr(error.response?.data?.error);
  //     setPosts([]);
  //   }
  // }
  
  // useEffect(() => {
  //   fetchAllPosts();
  // }, []);

  //  const {data , isLoading ,error} = useQuery({ 
  //   queryKey: ['posts'],
  //    queryFn: getAllPosts ,
  //     // staleTime:3000

  //   },
     
  //   )
  //  async function getAllPosts(){
  //   return await axios.get(
  //       `${import.meta.env.VITE_BASE_URL}/posts?limit=20&sort=-createdAt`,
  //       {
  //         headers: {
  //           token: localStorage.getItem("token"),
  //         },
  //  })
  // }
  const{data , isLoading  ,error , refetchData}=useFetch(['posts'] ,`posts?limit=20&sort=-createdAt`,userData)
  //  const post = data?.data?.post
console.log(data);
  return <>
  <Add onPostCreated={refetchData}/>
   <PostsList error={error} data ={data?.posts} isLoading={isLoading}/>
  </>
}

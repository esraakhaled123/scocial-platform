import React, { useContext,  } from 'react'
import Add from '../../components/posts/Add'
import PostsList from '../../components/posts/PostsList'
import { AuthContext } from '../../components/Context/AuthContext'
import useFetch from '../../Hooks/useFetch'

export default function Profile() {
 const {userData} =useContext(AuthContext)
//    const [posts, setPosts] = useState([])
//       const [error, setErorr] = useState(null)
    
//       //all posts //
//    const getUserData = async () => {
 

//   try {
//     const { data: { posts } } = await axios.get(
//       `${import.meta.env.VITE_BASE_URL}/users/${userData?._id}/posts`,
//       {
//         headers: {
//           token: localStorage.getItem("token"),
//         },
//       }
//     );
//     setPosts(posts.reverse());
//   } catch (error) {
//     setErorr(error.response?.data?.error);
//     setPosts([]);
//   }
// };

//    useEffect(() => {
 
//   getUserData();

// }, [userData]);

//     const {data , isLoading,error} = useQuery({ queryKey: ['posts'],
//        queryFn: getUserData ,
//        enabled:!!userData
//        })
// async function getUserData() {
//   return await axios.get(
//          `${import.meta.env.VITE_BASE_URL}/users/${userData._id}/posts`,
//         {
//           headers: {
//             token: localStorage.getItem("token"),
//           },
//    })
// }
const { data, isLoading, error, refetchData } =
  useFetch(['profile-posts', userData?._id], `users/${userData?._id}/posts`);
    
  return <>
 <Add onPostCreated={refetchData}/>
    <PostsList error={error} data={[...(data?.posts || [])].reverse()}
 isLoading={isLoading}/>
  </>
}

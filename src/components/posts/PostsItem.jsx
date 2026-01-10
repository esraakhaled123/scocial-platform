
  

import { Avatar, Card } from "flowbite-react";
import { AiOutlineLike } from "react-icons/ai";
import { FaComment, FaShare } from "react-icons/fa";
import { Link } from "react-router-dom";
import ComponentPostHeader from "./ComponentPostHeader";
import AddComment from "./AddComment";


export function PostsItem({post , showAllComments = false}) {
console.log(post);

const {
  user,
  _id,
  image,
  createdAt,
  comments = [],
  body
} = post || {}




  return (
    <Card>
      <ComponentPostHeader user={{...user , body , createdAt}}/>
      {image &&<img src={image} className="h-96 object-cover" alt="imagee" />}
     
      {/* footer */}

         <div className="flex items-center justify-between ">
              <AiOutlineLike className="text-2xl cursor-pointer" />
              <div className="flex items-center gap-x-1 cursor-pointer">
                <FaComment className="" />
                 {comments?.length || 0}
              </div>

             <Link to={`/posts/${_id}`}>
              <FaShare  className="text-xl cursor-pointer " />
             </Link>
         </div>
         
      {/* comments */}
   {comments && comments.length > 0 && (
  showAllComments ? (
    comments.map((comment) => (
      <ComponentPostHeader
        key={comment._id}
        user={{
          ...comment.commentCreator,
          createdAt: comment.createdAt,
          body: comment.content
        }}
        iscomment={true}
      />
    ))
  ) : (
    <ComponentPostHeader
      user={{
        ...comments[comments.length-1].commentCreator,
        createdAt: comments[comments.length-1].createdAt,
        body: comments[comments.length-1].content
      }}
      iscomment={true}
    />
  )
)}


<AddComment post={_id}/>
    </Card>
  );
}

 


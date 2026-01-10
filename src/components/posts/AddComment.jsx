import { useMutation, useQueryClient } from '@tanstack/react-query'
import axios from 'axios';
import { Button, Label, Textarea } from 'flowbite-react'
import React from 'react'
import { useForm } from 'react-hook-form'
import { toast } from 'sonner';

export default function AddComment({post}) {

  const { register, handleSubmit ,reset} = useForm();
  const queryClient = useQueryClient();

   const{mutate ,data}= useMutation({
    mutationFn:addComment,
    onSuccess: (data) => {
    reset();
    toast.success(data.data.message, {
      theme: "dark",
    });
 queryClient.invalidateQueries(['details-post', post]);
 queryClient.invalidateQueries(['posts', post]);
 queryClient.invalidateQueries(['profile-posts', post]);
  },
  onError:(data)=>{
     toast.error(data.data.error, {
      theme: "dark",
    });
  }
});

 async  function addComment(data){
       console.log({...data,post});
       const commentData = {...data , post}
       return await axios.post(`${import.meta.env.VITE_BASE_URL}/comments`, commentData,
      {
         headers: {
          token: localStorage.getItem("token"),
        },
      }
    );
       
   }
  return <>
    <form onSubmit={handleSubmit(mutate)}  className="flex flex-col gap-4">
          <div>
  <div className="relative">
    <Textarea
      id="post"
      placeholder="Add your comment..."
      rows={2}
      {...register("content")}
      className="pr-24 resize-none"
    />

    <Button
      type="submit"
      size="sm"
className="absolute right-2 top-1/2 -translate-y-1/2"
    >
      Comment
    </Button>
  </div>
</div>

  
         </form>
  </>
}

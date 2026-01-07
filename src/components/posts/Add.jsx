import axios from 'axios'
import { Button, Card, Checkbox, Label, Textarea, TextInput } from 'flowbite-react'
import React, { useState } from 'react'
import { useRef } from 'react'
import { useForm } from 'react-hook-form'
import { FaCamera } from 'react-icons/fa'

import AppButton from '../shared/Appbutton/AppButton'
import * as z from 'zod'
import { zodResolver } from '@hookform/resolvers/zod'
import { toast } from 'react-toastify'
export default function Add({onPostCreated}) {

 const fileInputRef  = useRef()

const schema = z.object({
      body:z.string(),
    //   image:z.object()
     
})
const {
  register,
  handleSubmit,
  reset,
  formState: { isSubmitting, isValid },
} = useForm({
  defaultValues: {
    body: "",
    
  },
  mode: "onChange",
  resolver: zodResolver(schema),
});


 async function createPost(values){
    console.log(values.body ,fileInputRef.current.files[0]);
 const formData = new FormData()  
 formData.append("body",values.body) 
 if (fileInputRef.current.files[0]) {
   formData.append("image",fileInputRef.current.files[0]) 
       
 }

   const {data}=  await axios.post(`${import.meta.env.VITE_BASE_URL}/posts`, 
    formData
    ,{
    headers:{
        token:localStorage.getItem('token')
    }
   }) 
   if (data.message ==='success') {
    console.log(data);
    
     reset();
    fileInputRef.current.value = "";
    toast.success('post created successfuly' ,{
      theme:"dark"
      
    })
    // window.location.reload()
    onPostCreated()
   }else{
    toast.error('something went wrong' ,{
      theme:"dark"
    })
   
    
   }
  
   
 }

  return  <section className='pb-4'>
    <div className=" container lg:max-w-3xl mx-auto">
       
        <Card className='mb-0'>
      <form onSubmit={handleSubmit(createPost)}  className="flex flex-col gap-4">
        <div>
          <div className="mb-2 block">
            <Label htmlFor="post">post some thing</Label>
          </div>
             <div className='flex items-center gap-x-2'>
                 <Textarea 
                  id="post" placeholder="whats is on your mind?..."  rows={2} 
                 {...register('body')}
                 />
                 <input className='hidden' 
                 {...register('image')}
                 type='file'
                  ref={fileInputRef} 
                  name=''  
                 
                  />            
                 <FaCamera
                  onClick={()=>fileInputRef.current.click()} 
                  className='text-3xl cursor-pointer' />

             </div>

        </div>
<AppButton
  disabled={!isValid || isSubmitting}
  isloading={isSubmitting}
>
  create post
</AppButton>
      </form>
    </Card>
        
        </div>
        
      
        </section>
}

import { Avatar } from 'flowbite-react'
import React from 'react'
import { formateDate } from '../../lib/formateDate'


//عشان استخدمه ف الهيدر وف الكومنتس

export default function ComponentPostHeader({user:{photo,name,createdAt,body} ,
   iscomment = false ,
    }) {
  return<>
  {/* header */}
        <header
  className={`${
    iscomment && 'rounded p-2 shadow-[0_0_15px_rgba(0,0,0,0.30)]'
  }`}
>
          <div className="flex items-center gap-x-2">
<Avatar 
  img={iscomment && photo ? "https://www.gravatar.com/avatar/?d=mp":photo}
  alt="User avatar"
  rounded
/>
  
            <div>
           <h2 className="text-sm mb-0 pb-0 font-thin tracking-tight text-gray-900 dark:text-white">
           {name}
         </h2>
        <span className="mt-0 pt-0 text-sm text-gray-600">{formateDate(createdAt)}</span>
         </div>        
         
         </div>
           {/* content  */}
         <h3 className={`tracking-tight text-sm font-thin text-gray-900  dark:text-white ${iscomment ? 'ps-11 mt-0 pt-0':'mt-5'}`} >
         {body}
        </h3>
        </header>
      
        
  </>
}

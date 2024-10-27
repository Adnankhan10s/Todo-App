import React from 'react'
import Removebtn from './Removebtn'
import Link from 'next/link'
import {HiPencilAlt} from "react-icons/hi";

const getTopics = async()=>{
try {
  const res = await fetch("http://localhost:3000/api/topics",{cache:"no-store",

  })
  if (!res.ok){
    throw new Error("Failed to fetch topics");

  }
  return res.json();
} catch (error) {
   console.log("Error Loading topics", error);
}
}

const TopicsList = async() => {
  const {topics} = await getTopics();
  return (
  <>
  {topics.map((link,index)=>(

 
  <div key={index}  className='p-4 my-3 border border-slate-600  flex justify-between gap-5 items-start '>
    <div>

    <h2 className='font-bold text-2xl'>{link.title}</h2>
    <div>{link.description}</div>
    </div>
    <div className='flex gap-2'>
      <Removebtn id={link._id} />
      <Link href={`/editTopic/${link._id}`}>
      <HiPencilAlt  size={24}/>
      </Link>
    </div>
  </div>
   ))}
  
  </>
  )
}

export default TopicsList

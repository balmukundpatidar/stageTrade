import React from 'react'

const TaskList = ({data}) => {
  return (
    <ul className="flex flex-col gap-y-6">
           {data.length && data.map((task, i)=>(
   <li key={i} className="relative pl-6 after:content-[''] after:absolute after:left-0 after:top-0 after:h-full after:w-2 after:bg-green after:rounded-full">
   <h5 className="font-extrabold text-base text-darkGray">
     {task.name}
   </h5>
   <span className="text-xs font-medium text-lightBlue">
   {task.time}
   </span>
 </li>
           ))} 
 

  
  </ul>
  )
}

export default TaskList;



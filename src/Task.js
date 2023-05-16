import React from "react";
import { formatDistanceToNow, differenceInDays } from 'date-fns';
import { bg, tr } from 'date-fns/locale';

const Task = ({ taskObj, onComplete }) => {
  const deadline = new Date(taskObj.deadline);
  const formatDeadline = formatDistanceToNow(deadline, { 
    addSuffix: true,
    locale: tr,
    });

  const isCloseDeadline = differenceInDays(deadline, new Date()) <= 3;
  
  console.log(
    "difference", differenceInDays(deadline, new Date()));

  return (
    <div className="bg-[#fff] p-6 rounded leading-6 mt-4 shadow-md">
      <h3 className="text-lg text-[#c8781a]">{taskObj.title}</h3>
      <div className="text-xs pt-1" >
        son teslim: 
       <span className= { isCloseDeadline ? "bg-[#ffd9d4]" : "bg-[#d2d5fd]"  }>
         {formatDeadline}
       </span>
      </div>
      <p className="text-[#444] text-sm py-4 ">{taskObj.description}</p>
      <div>
        {taskObj.people.map((p) => (
          <span className= "inline-block py-1 px-3 mr-1 mb-1.5 text-sm border border-solid rounded-full border-gray-200 " key={p}>{p}</span>
        ))}
      </div>
      {onComplete && 
      <button 
        className="block px-3 py-2 ml-auto bg-c0323 shadow-sm rounded border-0 cursor-pointer bg-[#fecc91]"
        onClick={() => onComplete(taskObj.id)} >
        Tamamlandı
      </button>}
    </div>
  );
};

export default Task;

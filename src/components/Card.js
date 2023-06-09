import React from 'react'
import {FcLike,FcLikePlaceholder} from "react-icons/fc"
import { toast } from 'react-toastify';

const Card = (props) => {
  let course = props.course;
  let lickedCourses = props.lickedCourses;
  let setLickedCourses = props.setLickedCourses;

  function clickHandler(){

        if(lickedCourses.includes(course.id)){
            setLickedCourses((prev) => prev.filter ((cid)=> (cid !== course.id)));
            toast.warning("like removed");
        }
        else{
          if(lickedCourses.length ===0 ){
                setLickedCourses([course.id]);
          }else{
                setLickedCourses((prev) => [...prev,course.id]);
            
          }

          toast.success("liked successfully");
        }
  }
  return (
    <div className='w-[300px] bg-bgDark bg-opacity-80 rounded-md overflow-hidden'>
      <div className='relative'>
        <img src={course.image.url}/>
      

        <div className='w-[40px] h-[40px] bg-white rounded-full absolute right-2 bottom-[-11px] grid place-items-center'>
          <button onClick={clickHandler}>
              {
                lickedCourses.includes(course.id) ? (<FcLike fontSize="1.75rem"/>):(<FcLikePlaceholder fontSize="1.75rem"/>)
              }
          </button>
        </div>
      </div>

      <div className='p-4'>
        <p className='text-white font-bold text-lg leading-6 '>{course.title}</p>
        <p className='mt-2 text-white'>
        {
            course.description.length>100 ? (course.description.substr(0,100)) +"...":
            (course.description) 
        } 
        </p>
      </div>
    </div>
  )
}

export default Card
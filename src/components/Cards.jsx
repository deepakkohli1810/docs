import React from 'react'
import { FaRegFileLines } from "react-icons/fa6";
import { RxDownload } from "react-icons/rx";
import App from '../App';
import { IoMdClose } from "react-icons/io";
import { motion } from "framer-motion";




function  Cards  ({data , reference}) {
  return (
 
    <>
    <motion.div drag dragConstraints={reference} whileDrag={{scale:1.1}} dragElastic={.1} 
    dragTransition={{ bounceStiffness: 100, bounceDamping: 20 }} className=' relative flex-shrink-0 w-60 h-72 rounded-[40px] bg-zinc-900/90 text-white py-10 px-8 overflow-hidden'>
    <FaRegFileLines/>
    <div className='text-sm mt-5 font-semibold leading-tight'>{data.desc}</div>
    <div className='footer absolute bottom-0 w-full  left-0'>
        <div className='flex items-center justify-between mb-5 px-9'>
            <h5>{data.filesize}</h5>
            <span className='w-7 h-7 bg-zinc-600 rounded-full flex items-center  justify-center py-3 mb-2'>
          {data.close ? <IoMdClose/> : <RxDownload size=".9em" color='#fff'/>  }
        </span>
        </div>

       {
        data.tag.isOpen && (
            <div className={`tag w-full py-4 ${data.tag.tagColor ==="blue" ? "bg-blue-600 ": "bg-green-600" } flex items-center justify-center`}>
            <h3 className='text-sm font-semibold'>
             {data.tag.tagTitle}
            </h3>
            </div> 
        ) 
       }
    </div>
    </motion.div>
    </>
  
  )
}

export default Cards

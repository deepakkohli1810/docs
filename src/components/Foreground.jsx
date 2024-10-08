import React,{useRef} from 'react'
import Cards from './Cards'

function Foreground() {
    
    const ref = useRef(null);

    const data =[
    {
        desc:' Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempore, odit.',
        filesize:".9mb",
        close:false,
        tag :{ isOpen:true, tagTitle:"Upload" , tagColor:"blue"  }
    },
    {
        desc:'   Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, consectetur!',
        filesize:".9mb",
        close:false,
        tag :{ isOpen:false, tagTitle:"Download Now" , tagColor:"green"  }
    },
    {
        desc:'This is new text that will be displayed on the card.',
        filesize:".9mb",
        close:false,
        tag :{ isOpen:true, tagTitle:"Download Now" , tagColor:"green"  }
    }
    ]
  return (
    <>

 <div ref={ref} className='fixed top-0 left-0 z-[3] w-full h-full flex gap-10 flex-wrap p-8'>
    {data.map((item,index)=>(
       <Cards data={item} reference={ref} />
    ))}
 </div>
    </>
  )
}

export default Foreground

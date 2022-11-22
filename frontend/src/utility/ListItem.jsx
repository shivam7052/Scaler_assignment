import React,{useState,useEffect} from 'react'
import ScheduleInterview from '../ScreenComponents/ScheduleInterview';

const ListItem = ({index,item,deleteinterview}) => {
  const [update,setupdate] = useState(false)
  const [del,setdel]= useState(false)
  let candidates= item.participants.map((detail,index)=>detail.name )
  let interviewer=candidates.pop()
  let stime= ` ${new Date(item.stime).getHours()} : ${new Date(item.stime).getMinutes()}`
  let etime= ` ${new Date(item.etime).getHours()}: ${new Date(item.etime).getMinutes()}`
  let discription= item.discription
  let date= `${new Date(item.stime).getDate()} - ${new Date(item.stime).getMonth()} - ${new Date(item.stime).getFullYear()}`
  let iid= item._id

  return (
    <>
    <div className=' grid grid-cols-3 gap-5 border-2 bg-slate-100 my-4 py-4 border-red-600  rounded-lg listitem z-10  duration-200'>
      <div className='col-span-2 my-7 mx-5 align-items justify-center '>
           <h3>{`Interview No.   - ${index+1}`}</h3>
           <h4>{`Candidate   : ${candidates}`}</h4>
           <h4>{`Interviewer  : ${interviewer}`}</h4>
           <p> {`Time  :   ${stime}  to  ${etime} `}</p>
          <p>{`Date  : ${date}`}</p>
           <h6>{`description : ${discription}`}</h6> 
      </div>
      <div className='flex-cols grid '>
         <button className=' cursor-pointer bg-blue-600 h-3/5 w-4/5 my-7 mx-5 border-2 border-gray-200 bg-white rounded-xl shadow-2xl shadow-inner  hover:bg-red-300 active:bg-red-400 focus:outline-none focus:ring focus:ring-red-800  hover:scale-105 duration-200'  onClick={()=>{ setdel(!del) ; deleteinterview(iid);}}>Delete Interview</button>
         <button className='cursor-pointer bg-green-600 h-3/5 w-4/5 my-7 mx-5 border-2 border-gray-200 bg-white rounded-xl shadow-2xl shadow-inner hover:bg-violet-300 active:bg-violet-400 focus:outline-none focus:ring focus:ring-violet-800  hover:scale-105 duration-200' onClick={()=>( setupdate(!update))}>Update Interview</button>
      </div>
    </div>
    { update && <div className= 'h-[auto] w-5/6 border-2 mx-auto -mt-4 pt-4 border-t-0 border-gray-600 z-1 rounded-2xl rounded-t-none'>
    <ScheduleInterview flag='update' iid={iid}/>
    </div>
}

    </>
  )
}

export default ListItem
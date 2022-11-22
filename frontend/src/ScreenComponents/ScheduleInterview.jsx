import React,{useState} from 'react'
import CandidateList from '../utility/CandidateList';
import axios from 'axios'
// import { Success,Failure } from '../utility/Error';

const ScheduleInterview = ({flag,iid=``}) => {

  const [participants,setparticipants] =useState([])
  const [date,setdate]=useState(Date)
  const [stime,setstime]=useState(Date)
  const [etime,setetime]=useState(Date)
  const [discription,setdiscription]=useState(String)

  let baseapi =`http://localhost:5000`

  let api = flag==="new"?`${baseapi}/api/interview` : `${baseapi}/api/${iid}`;

  const addinlist= (item)=>{
       setparticipants([...participants,{ _id:item._id ,name: item.name , email: item.email}])    

  }

  const setbacktoEmpty=()=>{
    setparticipants([])
    setdate(Date)
    setstime(Date)
    setetime(Date)
    setdiscription('')
  }

  const submithere=(e)=>{
    e.preventDefault();
    flag==="new" ? (axios.post(api,{
      participants,
      date,
      stime: new Date(`${date}  ${stime}`),
      etime: new Date(`${date}  ${etime}`),
      discription,
    }))
    .then((r)=>{alert(r.data.message); setbacktoEmpty();})
    .catch((err)=>{alert(err.response.data.message)})
    
    :
    (axios.put(api,{
      participants,
      date,
      stime: new Date(`${date}  ${stime}`),
      etime: new Date(`${date}  ${etime}`),
      discription,
    }))
    .then((r)=>{ console.log(r); alert(r.data.message); setbacktoEmpty();window.location.reload();})
    .catch((err)=>{console.log(err) ;alert(err.response.data.message);})
  }


  return (
    <>
    <form onSubmit={e => submithere(e)}>
    <div className='overflow-auto'>

    <div className=' h-3/5 w-auto'>
        <div className='grid md:grid-cols-2 '>
          <CandidateList flag="candidate" addinlist={addinlist}/>
           <CandidateList flag="interviewer" addinlist={addinlist}/>
        </div>
      </div>
      {/*  */}

      <div className='grid md:grid-cols-3 gap-5 mt-5 mx-5 h-[90px] candidateitem'>
        <div className='entries   mx-auto w-4/5 '>
        <p className=' py-2 '>Interview Date :-</p>
        <input className='text-gray-500 border-2 h-[50px] border-blue-400 w-full rounded' type={'date'} placeholder='Date' value={date} name='date' 
        onChange={(e)=>{ console.log(e.target.value) ;setdate(e.target.value)}}></input>
        </div>

        <div  className='  mx-auto w-4/5'>
        <p  className=' py-2'>Start time :-</p>
        <input  className='text-gray-500 border-2 h-[50px] border-blue-400 w-full rounded' type={'time'} placeholder='start' value={stime} name='stime' 
        onChange={(e)=>{ console.log(e.target.value) ;setstime(e.target.value)}}></input>
        </div>

        <div  className='  mx-auto w-4/5'>
        <p  className=' py-2'>End Time :-</p>
        <input  className='text-gray-500 border-2 h-[50px] border-blue-400 w-full rounded' type={'time'} placeholder='end'  value={etime} name='etime'
        onChange={(e)=>{ console.log(e.target.value) ;setetime(e.target.value)}}></input>
        </div>
      </div>

      {/*  */}

      <div className=' grid grid-cols-3 gap-5 mt-10 mb-20 mx-5 candidateitem'>
     
         <div className='col-span-2 w-full mr-4 ml-7 mx-auto'>
          <p>Brief Description:-</p>
          <input className='w-full h-4/6 border rounded border-blue-400' type={'text'} placeholder='Interview Details' value={discription} name='discription' onChange={(e)=>{ console.log(e.target.value) ;setdiscription(e.target.value)}}></input>

         </div>
         <div className='overflow-hidden w-4/5 mx-auto mt-4 border-2 border-black rounded hover:bg-blue-400 active:bg-blue-400 focus:outline-none focus:ring focus:ring-blue-800 active cursor-pointer font-medium hover:scale-110 duration-200'>
             <button type='submit' className=''>{flag==="new" ? 'Schedule Interview': 'Update'} </button>
         </div>

    </div>
   
{/*  */}


    </div>
    </form>
    
    </>
  )
}

export default ScheduleInterview
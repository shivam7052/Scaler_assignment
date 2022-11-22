import React from 'react'
import { useEffect,useState } from 'react'
import axios from 'axios'


const CadidateRow =({item,index, addinlist})=>{

  const [itemstate,setstate]= useState(false)
  
      return(
        <div onClick={()=>{setstate(!itemstate)}}>


       <div className='bg-white my-2 mx-2 py-3 border-gray-200 border-2 rounded-xl px-4 active:bg-blue-100 active:border-2 active:border-blue-400  hover:scale-y-110 cursor-pointer duration-200' >
       {/* <div className={itemstate ? `  bg-blue-100 border-2 border-blue-400  rounded-xl `:''}> */}
  
       <h3 className='text-gray-700'>{item.name}</h3>
      <div className=' text-gray-500 flex justify-between'>
   <p>{item.appliedfor ? item.appliedfor : item.position} </p>
   <p className=''>{item.email}</p>
   {/* </div> */}
   </div>
 </div>
 </div>
      )
}

const CandidateList = ({flag,addinlist}) => {
  let baseapi =`http://localhost:5000`
  const [data,setdata] = useState([])
  
  let api = flag==="candidate"?` ${baseapi}/api/candidate/get` : `${baseapi}/api/interviewer/get`;

useEffect(()=>{
  axios.get(api).then(res =>{
    flag ==="candidate" ?setdata(res.data.cdList)  : setdata(res.data.intList)
  })
 },[]) 


  return (
    <div className=' border-3 border-black h-[380px] w-full justify-center items-center shadow '>
 
    <div className='justify-center items-center w-4/5 h-5/6 mt-8 border-2 border-blue-400 shadow-2xl shadow-inner rounded bg-blue-50  mx-auto candidateitem overflow-auto'>
    {/* item */}
    {data && data.map((item,index)=>(
      <div key={item._id}  onClick={()=>{  addinlist(item) ;}}>
           <CadidateRow item={item} index={index} addinlist={addinlist} />
           </div>
     )

)}
    </div>
    </div>
  )
}

export default CandidateList
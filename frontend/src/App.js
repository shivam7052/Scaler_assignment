import './index.css'
import { useState } from 'react';
import {Link,Route,Routes, BrowserRouter as Router} from 'react-router-dom'
// import { useNavigate } from 'react-router-dom';

import Footer from './utility/Footer';
import Home from './ScreenComponents/Home';
import Navbar from './utility/Navbar';
import ScheduleInterview from './ScreenComponents/ScheduleInterview';

function App() {
  const [task,settask]=useState('schedule');

  return (
    <div className="w-full h-full appbackground" style={{backgroundColor:''}}>
      
      <Navbar />
      <Router>
      <div className='mx-auto full max-w-[1000px] justify-center border-2 border-gray-200 bg-white rounded-3xl shadow-2xl shadow-inner mt-7 overflow-auto'>

      <div className='h-auto w-full overflow-hidden -m-0 -p-0'>
     
          <div className='grid grid-cols-2 overflow-hidden h-25 cursor-pointer '>
              <Link to ='/home'> <div className={task==='schedule'?'deactive':'active'} onClick={()=>{settask('home')}}>Interview List</div></Link>
              <Link to='/s'> <div className={task==='schedule'? `active` : `deactive`} onClick={()=>{settask('schedule')}}>Schedule Interview</div></Link>
          </div>

         
          <Routes>
            <Route path="/home" element={<Home />} />
            <Route path="/s" element={<ScheduleInterview flag='new'/>} />
          </Routes>
        
          
        </div>

      </div>

      </Router>
      <Footer />

    </div>
  );
}

export default App;

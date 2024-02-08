import { signOut } from 'firebase/auth'
import React from 'react'
import auth from '../firebase/firebase.config'
import toast from 'react-hot-toast'

function Banner() {

const handleLogOut = () => {
     signOut(auth)
     .then(()=> {
        toast.success('sing out user')
     })
}



  return (
    <div> 
      
      {/* <button onClick={handleLogOut}>signout</button> */}

      <div className='relative'>
        <img className='w-full h-screen absolute top-0' src="https://img.freepik.com/free-photo/abstract-floral-design-with-purple-blue-blossoms-generated-by-ai_188544-9789.jpg" alt="" />
        <div className='w-full h-screen absolute bg-[#5577ff70] top-0'></div>
        <h1 className='uppercase text-5xl font-bold text-gray-200 text-center absolute top-0'>Amar shonar Bangla ami tomai valobashi</h1>
      </div>
    
    
    </div>
  )
}

export default Banner
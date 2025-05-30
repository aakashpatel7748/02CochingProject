import React, { useContext } from 'react'
import { useNavigate } from 'react-router-dom'
import { recipcontext } from "../context/RecipContext"
import RacipCard from '../components/RacipCard'

const Recips = () => {
  const navigate = useNavigate()
  const { data } = useContext(recipcontext)


  const recips = data.map((recip) => (
    <RacipCard key={recip.id} recip={recip} />
  ))

  return (
    <>
      <div className=' bg-gray-200 flex'>
        <img src="https://wpastra.com/wp-content/uploads/2022/09/How-to-create-a-recipe-website.jpg" className='w-[50%] mr-3  object-cover ' alt="" />
        <img src="https://wpastra.com/wp-content/uploads/2022/09/How-to-create-a-recipe-website.jpg" className='w-[50%]  object-cover ' alt="" />
        <button
          onClick={() => (navigate('/recipes/create-recipe'))}
          className='px-3 py-2 bg-[#F09F2A] text-white text-xl rounded-md mt-4 absolute top-[-1%] left-[87%] overflow-'
        >Create Recip
        </button>
      </div>
        <div className="p-5 mt-2 flex flex-wrap">
          {data.length > 0 ? recips : "No Racip Found!"}
          {/* {recips} */}
         
        </div>
    </>
  )
}

export default Recips
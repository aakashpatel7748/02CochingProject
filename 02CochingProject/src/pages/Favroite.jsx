import React, { useContext } from 'react'
import { recipcontext } from '../context/RecipContext'
import RacipCard from '../components/RacipCard'


const Favroite = () => {
  const { favourite } = useContext(recipcontext)

  const favRecip = favourite.map((recip) => (
    <RacipCard key={recip.id} recip={recip} />
  ))
  return (
    <>
      <div className="p-5 mt-10 flex flex-wrap">
        {favourite.length > 0 ? favRecip : "No recipe found!"}
      </div>
    </>
  )
}

export default Favroite
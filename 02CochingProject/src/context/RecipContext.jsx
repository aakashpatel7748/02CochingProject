import React, { createContext, useEffect, useState } from 'react'
export const recipcontext = createContext(null)

const RecipContext = ({ children }) => {
    const [data, setData] = useState(
        JSON.parse(window.localStorage.getItem("recipes")) || []
    )
    const [favourite, setfavourite] = useState(
        JSON.parse(window.localStorage.getItem("favroite")) || []
    )

    return (
        <recipcontext.Provider value={{ data, setData, favourite, setfavourite }}>
            <div>{children}</div>
        </recipcontext.Provider>
    )
}

export default RecipContext
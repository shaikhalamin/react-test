import React from 'react'

function Sublist({data}) {
  return (
    <>
    {data.map((item,i)=>{
        return <li key={i}>{item.Name}</li>
    })}
    </>
  )
}

export default Sublist

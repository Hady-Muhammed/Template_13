import React from 'react'

const List = ({head , items}) => {
  return (
    <ul className='space-y-4'>
        <h3 className='font-bold text-xl text-slate-600'>{head}</h3>
       {items.map((item ,index)=>(
        <li key={index}>{item}</li>
       ))}
    </ul>
  )
}

export default List
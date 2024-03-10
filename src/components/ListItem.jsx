import React from 'react'

const ListItem = ({pagename}) => {
//   return (
//     <li className={`cursor-pointer px-1.5 py-1 mx-2.5 my-2.5  nav-item ${current === pagename ? 'text-gray-400 border-4 border-b-zinc-700 rounded-xl' : ''}`} onClick={() => handlePageChange(pagename)}>{pagename}</li>
//   )
  return (
    <li className={`cursor-pointer px-1.5 py-1 mx-2.5 my-2.5  nav-item `}>
        {pagename}
        {/* <div className= {`w-14 h-[4px]  bg-black border-b-10 rounded-xl  ${current === pagename ? 'visible' :'invisible'}`}> </div> */}
    </li>
  )
}

export default ListItem

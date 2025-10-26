import React, { useState } from 'react'
import { useAppContext } from '../Context/AppContext'
import {assets} from '../assets/assets'
import moment from 'moment'
const Sidebar = () => {
    const {chats, setSelectedchat, theme, setTheme, user} = useAppContext()
    const [search, setSearch] = useState('')
  return (
    <div className='flex flex-col h-screen min-w-72 p-5 dark:bg-grdinet-to-b from-[241124]/30 to-[#000000]/30 border-r border-[#80609F]/30 backdrop-blur-3xl transition-all duration-500 max-md:absolute left-0 - z-1'>
      {/* Logo */}
        <img src={theme === 'dark' ? assets.logo_full : assets.logo_full_dark} alt="" 
        className='w-full max-w-48'/>

        {/* New Chat Button */}
        <button className='flex justify-center items-center w-full py-2 mt-10 text-white bg-gradient-to-r from-[#a456F7] to-[#3D81F6] text-sm rounded-md cursor-pointer'>
          <span className='mr-2 text-xl'>+</span> New Chat
        </button>

        {/* Search Conversation */}
        <div className='flex items-center gap-2 p-3 mt-4 border der border-gray-400  rounded-md'>
          {/* dark:border-white/20 */}
        <img src={assets.search_icon} className="w-4 dark:invert" alt="" />
        <input type="text" onChange={(e)=>setSearch(e.target.value)} value={search} placeholder='Search Conversation' className='text-xs placeholder:text-gray-400 outline-none'/>
        </div>

        {/* Recent Chats */}
        {chats.length > 0 && <p className='mt-4 text-sm'>Recent Chat</p>}
        <div>
          {
            chats.filter((chat)=>chat.messages[0] ? chat.messages[0].toLowerCase().includes(search.toLowerCase()): chat.name.toLowerCase().includes(search.toLowerCase())).map((chat)=>(
              <div key={chat._id} className='p-2 px-4 bg-[#57317]/10 border border-gray-300 border-[#80609F]/15 rounded-md cursor-pointer flex justify-between group'>
                <div>
                  <p className='truncate w-full'>
                    {chat.messages.length > 0 ? chat.messages[0].content.slice(0,32) : chat.name}
                  </p>
                  <p className='text-xs text-gray-500 dark:text-[#B1A6C0]'>{moment(chat.updatedAt).fromNow()}</p>
                </div>
                <img src={assets.bin_icon} className='hidden group-hover:block w-4 cursor-pointer dark:invert'
                alt="" />
              </div>
            ))
          }
        </div>
    </div>
  )
}

export default Sidebar
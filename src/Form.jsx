import React from 'react'
import {MdOutlineCancelPresentation} from 'react-icons/md'
import {BiCurrentLocation} from 'react-icons/bi'

export default function Form() {
  return (
    <div className='mx-auto w-1/2 border border-2 drop-shadow-lg mt-2'>
        <div className='mx-auto text-center'>
            <input type='text' className='m-2 p-1 border border-gray-300 rounded' placeholder='Destination'/>
            <input type='text' className='m-2 p-1 border border-gray-300 rounded' placeholder='Origin'/>
            <button className='p-2 m-2 bg-red-400 text-white rounded'>Calculate Route</button>
            <button className='text-3xl text-center'><MdOutlineCancelPresentation/></button>
            
        </div>
        <div className='flex flex-row justify-between mx-4'>
            <h1>Distance:</h1>
            <h1 >Durations:</h1>
            <button className='text-2xl'><BiCurrentLocation/></button>
        </div>     
    </div>
  )
}

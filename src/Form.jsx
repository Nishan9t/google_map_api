import React from 'react'
import {MdOutlineCancelPresentation} from 'react-icons/md'
import {BiCurrentLocation} from 'react-icons/bi'

export default function Form({map,setMap,center,Autocomplete,originRef,destinationRef,calculateRoute,clearRoute,distance,duration}) {
  return (
    <div className='mx-auto w-1/2 border border-2 drop-shadow-lg mt-2 '>
        <div className='mx-auto text-center flex flex-row'>
        <Autocomplete>
        <input type='text' className='m-2 p-1 border border-gray-300 rounded' placeholder='Origin' ref={originRef}/>
        </Autocomplete>
        <Autocomplete>
        <input type='text' className='m-2 p-1 border border-gray-300 rounded' placeholder='Destination' ref={destinationRef}/>
        </Autocomplete>
            
            <button className='p-2 m-2 bg-red-400 text-white rounded' onClick={calculateRoute}>Calculate Route</button>
            <button className='text-3xl text-center' onClick={clearRoute}><MdOutlineCancelPresentation/></button>
            
        </div>
        <div className='flex flex-row justify-between mx-4'>
            <h1>Distance:{distance}</h1>
            <h1 >Durations:{duration}</h1>
            <button 
            className='text-2xl border border-2 p-1 rounded-2xl hover:text-blue-300'
            onClick={()=>map.panTo(center)}>

            <BiCurrentLocation/></button>
        </div>     
    </div>
  )
}

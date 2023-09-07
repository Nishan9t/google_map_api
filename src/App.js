/*global google*/
import { useRef, useState } from 'react';
import './App.css';
import Form from './Form';
//useJsApiLoader => it is a hook which provided weather the map script is loaded or not
import {useJsApiLoader,GoogleMap,Marker,Autocomplete,DirectionsRenderer} from '@react-google-maps/api'

function App() {

  const center={lat:48.8584 , lng: 2.2945}

  const [map,setMap]=useState(/**@type google.maps.Map */ (null))
  const [directionsResponse , setDirectionsResponse]=useState(null);
  const [distance,setDistance]=useState('')
  const [duration,setDuration]=useState('')

  //refs for input elements

  /**@type React.MutableRefObject<HTMLInputElement> */
  const originRef=useRef();

/**@type React.MutableRefObject<HTMLInputElement> */
  const destinationRef=useRef();

  const {isLoaded}=useJsApiLoader({
    googleMapsApiKey:process.env.REACT_APP_GOOGLE_MAPS_API,
    libraries:['places'],
  })

  if(!isLoaded)
  {
    return <h1>map is loading</h1>
  }

async function calculateRoute(){
  if(originRef.current.value ==='' || destinationRef.current.value==='')
  {
    return
  }
  const directionService = new google.maps.DirectionsService()
  const results = await directionService.route({
    origin:originRef.current.value,
    destination:destinationRef.current.value,
 /* eslint-disable */
    travelMode:google.maps.TravelMode.DRIVING
  })
  setDirectionsResponse(results)
  setDistance(results.routes[0].legs[0].distance.text)
  setDuration(results.routes[0].legs[0].duration.text)

}

function clearRoute(){
  setDirectionsResponse(null)
  setDistance('')
  setDuration('')
  originRef.current.value=''
  destinationRef.current.value=''
}


  return (
    <div>
     <Form map={map}
      setMap={setMap}
      center={center} 
      Autocomplete={Autocomplete}
      originRef={originRef}
      destinationRef={destinationRef}
      calculateRoute={calculateRoute}
      clearRoute={clearRoute}
      distance={distance}
      duration={duration}
      
      />
     <div className='absolute h-full w-full'>
     {/* google map box */}

      <GoogleMap center={center}
       zoom={15} 
      mapContainerClassName='w-full h-full '
      options={{
        zoomControl:false,
        streetViewControl:false,
        mapTypeControl:false,
        fullscreenControl:false 
      }}
      onLoad={(map)=>setMap(map)}
      >
    <Marker position={center}/>
    <Marker position={center}/>

    {directionsResponse && <DirectionsRenderer directions={directionsResponse}/>}
    
      
      </GoogleMap>
     </div>
    </div>
  );
}

export default App;

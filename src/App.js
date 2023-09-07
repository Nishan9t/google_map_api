
import './App.css';
import Form from './Form';
//useJsApiLoader => it is a hook which provided weather the map script is loaded or not
import {useJsApiLoader,GoogleMap,Marker} from '@react-google-maps/api'

function App() {

  const center={lat:48.8584 , lng: 2.2945}

  const {isLoaded}=useJsApiLoader({
    googleMapsApiKey:process.env.REACT_APP_GOOGLE_MAPS_API,
  })

  if(!isLoaded)
  {
    return <h1>map is loading</h1>
  }

  return (
    <div>
     <Form/>
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
      }}>
    <Marker position={center}/>
      </GoogleMap>
     </div>
    </div>
  );
}

export default App;

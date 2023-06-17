
import {useState, useEffect} from "react"

const defaultCorrs = [ -19.8157, -19.8157,]

export default function useGetLocation(){
    
    const [coords, setCoors] = useState<number[] | null> (null)

    useEffect(() => {

        function onSocess(position: GeolocationPosition ){

            setCoors([position.coords.latitude, position.coords.longitude])

        }

        function onError(){

            console.error("Error on get location")
            setCoors(defaultCorrs)

        }

        try{

            navigator.geolocation.getCurrentPosition( onSocess, onError)

        } catch (error) {

            setCoors(defaultCorrs)
        }
    }, [])

    return {coords}
    
}
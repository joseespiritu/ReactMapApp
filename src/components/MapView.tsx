import { useContext, useLayoutEffect, useRef } from "react"
import { Map } from "mapbox-gl";
import { MapContext, PlacesContext } from "../context";
import { Loading } from "./";

export const MapView = () => {

    const { setMap } = useContext(MapContext);
    const { isLoading, userLocation } = useContext(PlacesContext);
    const mapDiv = useRef<HTMLDivElement>(null);

    useLayoutEffect(() => {
        if (!isLoading) {
            const map = new Map({
                container: mapDiv.current!,
                style: 'mapbox://styles/mapbox/light-v10',
                center: userLocation,
                zoom: 14,
            });

            setMap(map);
        }
    }, [isLoading])

    if (isLoading) {
        return (<Loading />);
    }

    return (
        <div
            ref={mapDiv}
            style={{
                backgroundColor: 'red',
                height: '100vh',
                width: '100%',
                position: 'fixed',
                top: 0,
                left: 0
            }}
        >
            {userLocation?.join(',')}
        </div>
    )
}

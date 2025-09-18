import { MapContainer, TileLayer, Marker, useMapEvents } from "react-leaflet";
import "leaflet/dist/leaflet.css";
import L from "leaflet";
import React from "react";

delete L.Icon.Default.prototype._getIconUrl;
L.Icon.Default.mergeOptions({
    iconRetinaUrl:
        "https://unpkg.com/leaflet@1.9.4/dist/images/marker-icon-2x.png",
    iconUrl: "https://unpkg.com/leaflet@1.9.4/dist/images/marker-icon.png",
    shadowUrl: "https://unpkg.com/leaflet@1.9.4/dist/images/marker-shadow.png",
});

const LocationMarker = React.memo(function LocationMarker({ lng, lat, setLng, setLat }) {
    useMapEvents({
        click(e) {
            setLat(e.latlng.lat);
            setLng(e.latlng.lng);
        },
    });

    return (
        <Marker
            position={[lat, lng]}
            draggable
            eventHandlers={{
                dragend: (e) => {
                    const { lat, lng } = e.target.getLatLng();
                    setLat(lat);
                    setLng(lng);
                },
            }}
        />
    );
});

function Map({ lng, lat, setLng, setLat, onClose }) {
    return (
        <div className="fixed inset-0 flex items-center justify-center bg-black/50 z-50">
            <div className="bg-white rounded-lg p-4 w-11/12 h-[80vh] relative flex flex-col">
                <MapContainer
                    center={[lat || 29.6, lng || 52.54]}
                    zoom={13}
                    style={{ flex: 1 }}
                >
                    <TileLayer url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png" />
                    <LocationMarker lng={lng || 52.54} lat={lat || 29.6} setLng={setLng} setLat={setLat} />
                </MapContainer>

                <div className="flex gap-2 mt-2">
                    <button className="btn btn-primary w-full lg:w-1/2 mx-auto text-xl" onClick={onClose}>
                        ذخیره موقعیت
                    </button>
                </div>
            </div>
        </div>
    );
}

export default Map;

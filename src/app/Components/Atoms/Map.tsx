import React, { useEffect, useState } from 'react';
import { MapContainer, TileLayer } from 'react-leaflet';
import 'leaflet/dist/leaflet.css';
import '../../globals.css';
import dynamic from 'next/dynamic';



const LeafletMap = dynamic(() => import('react-leaflet').then(mod => mod.MapContainer), {
  ssr: false // Disable SSR for this component
});

export const Map: React.FC = () => {
  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    setIsClient(true);
  }, []);

  return (
    <div className='graphBox'>
      <div className="mapBox">
        {isClient && (
          <LeafletMap center={[53.54666, 9.98213]} zoom={15} style={{ height: '400px', width: '100%' }}>
            <TileLayer
              url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
            />
          </LeafletMap>
        )}
      </div>
    </div>
  );
};

import React, { useEffect, useState } from 'react';
import dynamic from 'next/dynamic';
import 'leaflet/dist/leaflet.css';
import '../../globals.css';

const MapContainer = dynamic(() => import('react-leaflet').then(mod => mod.MapContainer), {
  ssr: false
});

const TileLayer = dynamic(() => import('react-leaflet').then(mod => mod.TileLayer), {
  ssr: false
});


interface MapProps {
  title: string;
  subtitle: string;
}

export const Map: React.FC<MapProps> = ({ title, subtitle }) => {
  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    setIsClient(true);
  }, []);

  return (
    <div className="graphBox">
    <div className='flex flex-row items-baseline pb-6'>
      <h4 className='graphTitle'>{title}</h4>
      <p className='graphSubtitle'>{subtitle}</p>
    </div>
      <div className="mapBox">
        {isClient && (
          <MapContainer center={[53.54666, 9.98213]} zoom={15} style={{ height: '400px', width: '100%' }}>
            <TileLayer
              url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
            />
          </MapContainer>
        )}
      </div>
    </div>
  );
};

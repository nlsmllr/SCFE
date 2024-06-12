import React, { useEffect, useState } from 'react';
import dynamic from 'next/dynamic';
import 'leaflet/dist/leaflet.css';
import '../../globals.css';

// Dynamic imports for MapContainer and TileLayer
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
          <MapContainer center={[53.5824, 9.7137]} zoom={15} style={{ height: '400px', width: '100%' }}>
            <TileLayer
              url="https://tiles.stadiamaps.com/tiles/alidade_smooth/{z}/{x}/{y}{r}.{ext}"
              minZoom={0}
              maxZoom={20}
              attribution='&copy; <a href="https://www.stadiamaps.com/" target="_blank">Stadia Maps</a> &copy; <a href="https://openmaptiles.org/" target="_blank">OpenMapTiles</a> &copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
              // @ts-expect-error abc
              ext="png"
            />
          </MapContainer>
        )}
      </div>
    </div>
  );
};

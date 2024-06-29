import React, { useEffect, useState } from 'react';
import dynamic from 'next/dynamic';
import 'leaflet/dist/leaflet.css';
import '../../globals.css';

// Dynamic imports for MapContainer, TileLayer, and GeoJSON
const MapContainer = dynamic(() => import('react-leaflet').then(mod => mod.MapContainer), {
  ssr: false
});

const TileLayer = dynamic(() => import('react-leaflet').then(mod => mod.TileLayer), {
  ssr: false
});

const GeoJSON = dynamic(() => import('react-leaflet').then(mod => mod.GeoJSON), {
  ssr: false
});

interface MapProps {
  title: string;
  subtitle: string;
  geojsonUrl: string; // Add this prop to accept the API URL
}

export const Map: React.FC<MapProps> = ({ title, subtitle, geojsonUrl }) => {
  const [isClient, setIsClient] = useState(false);
  const [geojsonData, setGeojsonData] = useState<any>(null);

  useEffect(() => {
    setIsClient(true);

    // Fetch the GeoJSON data from the API
    fetch(geojsonUrl)
      .then(response => response.json())
      .then(data => setGeojsonData(data))
      .catch(error => console.error('Error fetching GeoJSON data:', error));
  }, [geojsonUrl]);

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
              url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
              attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
            />
            {geojsonData && (
              <GeoJSON data={geojsonData} />
            )}
          </MapContainer>
        )}
      </div>
    </div>
  );
};

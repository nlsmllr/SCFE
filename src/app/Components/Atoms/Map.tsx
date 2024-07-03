import React, { useEffect, useState } from 'react';
import dynamic from 'next/dynamic';
import 'leaflet/dist/leaflet.css';
import 'leaflet-defaulticon-compatibility/dist/leaflet-defaulticon-compatibility.webpack.css';
import '../../globals.css';

const MapContainer = dynamic(() => import('react-leaflet').then(mod => mod.MapContainer), {
  ssr: false,
});
const TileLayer = dynamic(() => import('react-leaflet').then(mod => mod.TileLayer), {
  ssr: false,
});
const GeoJSON = dynamic(() => import('react-leaflet').then(mod => mod.GeoJSON), {
  ssr: false,
});

interface GeojsonUrl {
  url: string;
  label: string;
  color: string;
}

interface MapProps {
  title: string;
  subtitle: string;
  geojsonUrls: GeojsonUrl[]; // Array of GeoJSON URLs with labels and colors
}

export const Map: React.FC<MapProps> = ({ title, subtitle, geojsonUrls }) => {
  const [isClient, setIsClient] = useState(false);
  const [geojsonData, setGeojsonData] = useState<{ [key: string]: any }>({});
  const [activeDataSets, setActiveDataSets] = useState<string[]>(geojsonUrls.map(({ label }) => label));

  useEffect(() => {
    if (typeof window !== 'undefined') {
      setIsClient(true);
      // Load leaflet only on the client side
      const L = require('leaflet');
      require('leaflet-defaulticon-compatibility');
      // Fetch the GeoJSON data from the API for all URLs
      geojsonUrls.forEach(({ url, label }) => {
        fetch(url)
          .then(response => response.json())
          .then(data => setGeojsonData(prevData => ({ ...prevData, [label]: data })))
          .catch(error => console.error(`Error fetching GeoJSON data for ${label}:`, error));
      });
    }
  }, [geojsonUrls]);

  const toggleDataSet = (label: string) => {
    setActiveDataSets(prevActiveDataSets =>
      prevActiveDataSets.includes(label)
        ? prevActiveDataSets.filter(activeLabel => activeLabel !== label)
        : [...prevActiveDataSets, label]
    );
  };

  return (
    <div className="graphBox">
      <div className="flex flex-row items-baseline pb-6">
        <h4 className="graphTitle">{title}</h4>
        <p className="graphSubtitle">{subtitle}</p>
      </div>
      <div className="mapBox">
        {isClient && (
          <MapContainer
            center={[53.5824, 9.7137]}
            zoom={15}
            style={{ height: '600px', width: '100%' }}
            scrollWheelZoom={false} // Disable zooming with the scroll wheel
          >
            <TileLayer
              url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
              attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
            />
            {geojsonUrls.map(({ label, color }) =>
              activeDataSets.includes(label) && geojsonData[label] ? (
                <GeoJSON key={label} data={geojsonData[label]} style={() => ({ color })} />
              ) : null
            )}
          </MapContainer>

        )}
      </div>
      <div className="legend">
        {geojsonUrls.map(({ label, color }) => (
          <div key={label} className="legend-item flex items-center space-x-2">
            <input
              type="checkbox"
              id={label}
              checked={activeDataSets.includes(label)}
              onChange={() => toggleDataSet(label)}
              style={{ accentColor: color }}
              className="checkbox"
            />
            <label htmlFor={label}>{label}</label>
          </div>
        ))}
      </div>
    </div>
  );
};

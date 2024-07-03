// app/Components/Atoms/WebcamStream.js

import React from 'react';

const WebcamStream = ({ title, url }: { title: string, url: string }) => {
  return (
    <div className="webcam-stream">
      <h3>{title}</h3>
      <iframe
        src={url}
        frameBorder="0"
        allowFullScreen
        title={title}
        width="100%"
        height="450"
      ></iframe>
    </div>
  );
};

export default WebcamStream;

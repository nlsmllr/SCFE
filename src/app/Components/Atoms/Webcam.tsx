import React from 'react';

interface WebcamStreamProps {
  streamUrl: string;
}

const WebcamStream: React.FC<WebcamStreamProps> = ({streamUrl }) => {
  return (
    <div className="webcamBox">
      <div className="videoWrapper" style={{ position: 'relative', paddingBottom: '56.25%', height: 0, overflow: 'hidden' }}>
        <video data-html5-video="" muted={true} poster="images/live.jpg?t=1720016381842" preload="metadata" src="blob:https://cam.grassau.com/c2c8822d-6873-4e18-9edf-9737f888d455"></video>
      </div>
    </div>
  );
};

export default WebcamStream;
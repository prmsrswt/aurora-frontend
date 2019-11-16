import React from 'react';

import './path.css';

const Path = ({ width, height }) => {
  return (
    <div className="path_wrapper">
      <svg
        width={width}
        xmlns="http://www.w3.org/2000/svg"
        height={height}
        viewBox="0 0 595.34 411.52"
      >
        <path
          fill="none"
          stroke="#000"
          strokeMiterlimit="10"
          strokeDasharray="10,10"
          d="M.47,411.35A298.7,298.7,0,0,1,115.66,267.73c20.54-13.42,43.91-24.55,68.43-23.74,25.76.85,49.19,14.68,70.23,29.58,17.2,12.18,35.45,29.13,33.41,50.11C286,341.91,267.31,355.75,249,355.12s-34.78-13.49-43-29.86-9.13-35.62-6.08-53.68c2.46-14.6,7.8-29.41,18.84-39.27,12.47-11.15,30-14.21,46.65-16.09,59.87-6.78,122.62-4.7,177.18-30.24,16.13-7.55,31.11-17.36,45.63-27.67,27-19.15,52.87-40.44,72.81-66.83S594.68,33.08,594.84,0"
        />
      </svg>
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 2071.52 997.71">
        <g id="Layer_2" data-name="Layer 2">
          <g id="Layer_1-2" data-name="Layer 1">
            <path
              fill="none"
              stroke="#000"
              strokeMiterlimit="10"
              strokeDasharray="10,10"
              d="M110.6,1.13C168,109.59,129.29,235.45,85.09,340.9,41.16,445.73-13.39,555.09,3,672.28c6.91,49.51,28.15,95.45,62.84,131.58,32.22,33.56,73.56,57.68,117.53,72.32,106,35.27,220.26,10.57,320.31-31.77,105.83-44.78,204.33-108.09,290.46-184,39.81-35.1,75.46-74.44,114.65-110.16,37.16-33.87,79.54-65.87,129.67-76.69,108.42-23.4,194.86,65.43,243.33,151.7,50.17,89.33,77.26,194.53,153.89,266.81,75.26,71,182,92.14,281.63,101.08,106,9.5,226.62,11,311.06-64.48a196.15,196.15,0,0,0,43.09-54.93c.45-.85-.85-1.61-1.3-.76-55.07,104.72-182.59,126.84-290,122.81-104.5-3.91-219.86-16.3-308.5-76.77-90.12-61.48-125.35-167-171-260.74C1261.29,577.73,1198.44,488.36,1104,471c-98.28-18.11-176.21,56.63-239.85,120.3-39.3,39.33-79.49,77.25-123.45,111.39a1096,1096,0,0,1-143.09,94.19c-102.66,56.6-220.21,104-339.68,93.35C158.33,881.3,56.93,825,19.08,728.64c-44.16-112.45,1.83-233.92,46.47-338.19,42.94-100.27,90.83-207.59,70.66-319.37A243.46,243.46,0,0,0,111.9.37c-.45-.85-1.75-.09-1.3.76Z"
            />
          </g>
        </g>
      </svg>
    </div>
  );
};
export default Path;

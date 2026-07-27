import { useMemo } from 'react';

export const PALETTE = {
  b: "#000000",
  w: "#ffffff",
  s: "#a8ccdf", // Cloud shadow
  g: "#00a800", // Dark green
  l: "#80d010", // Light green
  o: "#f83800", // Orange/Red
  d: "#881400", // Dark brown
  y: "#f8b800", // Yellow
  c: "#fce0a8", // Beige
  // Tech Logos Extended Colors
  h: "#e34f26", // HTML Orange
  i: "#f06529", // HTML Light Orange
  u: "#264de4", // CSS Blue
  v: "#2965f1", // CSS Light Blue
  j: "#f7df1e", // JS Yellow
  r: "#61dafb", // React Cyan
  t: "#38bdf8", // Tailwind Cyan
  n: "#339933", // Node Green
  1: "#f24e1e", // Figma Red
  2: "#a259ff", // Figma Purple
  3: "#1abcfe", // Figma Blue
  4: "#0acf83", // Figma Green
};

export const PixelSprite = ({ 
  art, 
  scale = 1, 
  className = "" 
}) => {
  const width = art[0].length;
  const height = art.length;
  
  const rects = useMemo(() => {
    const paths = {};
    for (let y = 0; y < height; y++) {
      for (let x = 0; x < width; x++) {
        const char = art[y][x];
        if (char !== " ") {
          if (!paths[char]) paths[char] = "";
          paths[char] += `M${x},${y}h1v1h-1Z `;
        }
      }
    }
    return Object.entries(paths).map(([char, d]) => (
      <path key={char} d={d} fill={PALETTE[char] || "#000"} />
    ));
  }, [art, width, height]);

  return (
    <svg 
      className={className}
      width={width * scale} 
      height={height * scale} 
      viewBox={`0 0 ${width} ${height}`} 
      xmlns="http://www.w3.org/2000/svg"
      shapeRendering="crispEdges"
    >
      {rects}
    </svg>
  );
};

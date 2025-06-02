const NUM_LINES = 6;
const SPACING = 20; // percent spacing between lines

const zigzagPoints = [
  // Original three lines with adjusted y-coordinates
  "0,20 33,40 66,0 100,20 133,40 166,0 200,20", // Top line: wide V
  "0,40 33,20 66,60 100,40 133,20 166,60 200,40", // Middle line: inverted V
  "0,60 50,80 100,60 150,80 200,60", // Bottom line: V
  
  // New three lines with varied patterns and adjusted spacing
  "0,10 25,30 50,0 75,30 100,10 125,30 150,0 175,30 200,10", // New line 1: More frequent waves
  "0,70 40,50 80,90 120,50 160,90 200,70", // New line 2: Wider waves
  "0,30 20,50 40,20 60,50 80,20 100,30 120,50 140,20 160,50 180,20 200,30" // New line 3: Dense waves
];

const BackgroundLines = () => (
  <div className="absolute inset-0 w-full h-full overflow-hidden">
    <svg
      className="absolute inset-0 w-[200%] h-full pointer-events-none z-0 animate-background-lines"
      viewBox="0 0 200 100"
      preserveAspectRatio="none"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      style={{ 
        width: "200%", 
        height: "100%",
        left: 0,
        top: 0
      }}
    >
      {/* First set of lines */}
      {zigzagPoints.map((points, i) => (
        <polyline
          key={`first-${i}`}
          points={points}
          stroke="#DADADA"
          strokeWidth="0.1"
          fill="none"
        />
      ))}
      {/* Second set of lines (duplicate for seamless transition) */}
      {zigzagPoints.map((points, i) => (
        <polyline
          key={`second-${i}`}
          points={points}
          stroke="#DADADA"
          strokeWidth="0.1"
          fill="none"
          transform="translate(100, 0)"
        />
      ))}
    </svg>
  </div>
);

export default BackgroundLines;

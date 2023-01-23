import { useState } from "react";
import bird from "./photos/bird.jpg";
import { useEffect } from "react";
import { calFlyHeight } from "./function/flyHeight";

function App() {
  const [distance, setDistance] = useState<number>(0);
  const [height, setHeight] = useState<number>(0);
  const [time, setTime] = useState<number>(0);

  // 原本 左右行
  // 依家 只係想佢向加行
  // 係向右行果陣set佢既高度

  useEffect(() => {
    const interval = setInterval(() => {
      setTime(time + 100);
      console.log("distance", distance);
      const result = distance + 10;
      setHeight(calFlyHeight(1, time));
      console.log("calFlyHeight(1, time)", calFlyHeight(1, time));
      if (result >= 200) return;
      setDistance(result);
    }, 100);

    return () => clearInterval(interval);
  }, [distance, height]);

  return (
    <div
      className="App"
      style={{ width: "100vw", height: "100vh", border: "1px solid black" }}
    >
      <img
        style={{ position: "absolute", bottom: -height, left: distance + 40 }}
        src={bird}
        alt="bird"
        height={100}
        width={100}
      />
    </div>
  );
}

export default App;

import { useState } from "react";
import bird from "./photos/bird.jpg";
import { useEffect, useRef } from "react";
import { calFlyHeight } from "./function/flyHeight";

const maxHeight = 100;
const minHeight = 0;

function App() {
  const reached = useRef<boolean>(false);
  const [flyHeight, setFlyHeight] = useState<number>(minHeight);
  const [distance, setDistance] = useState<number>(0);

  useEffect(() => {
    const timeout = setTimeout(
      reached.current
        ? () => {
            setFlyHeight(flyHeight - 10);
            if (flyHeight <= minHeight) {
              reached.current = false;
            }
          }
        : () => {
            setFlyHeight(flyHeight + 10);
            if (flyHeight >= maxHeight) {
              reached.current = true;
            }
          },
      100
    );

    return () => clearTimeout(timeout);
  }, [flyHeight]);

  // useEffect(() => {
  //   const timeout = setTimeout(
  //     reached.current
  //       ? () => {
  //           setFlyHeight(flyHeight - 10);
  //           if (flyHeight <= minHeight) {
  //             reached.current = false;
  //           }
  //         }
  //       : () => {
  //           setFlyHeight(flyHeight + 10);
  //           if (flyHeight >= maxHeight) {
  //             reached.current = true;
  //           }
  //         },
  //     100
  //   );

  //   return () => clearTimeout(timeout);
  // }, [flyHeight]);

  return (
    <div
      className="App"
      style={{ width: "100vw", height: "100vh", border: "1px solid black" }}
    >
      <img
        style={{ position: "absolute", bottom: flyHeight, left: 0 }}
        src={bird}
        alt="bird"
        height={100}
        width={100}
      />
    </div>
  );
}

export default App;

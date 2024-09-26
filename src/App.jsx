import { useState } from "react";
import useIsOnline from "./hooks/useIsOnline"
import { useMousePointer } from "./hooks/useMousePointer";
import { useInterval } from "./hooks/useInterval";
import { useDebounce } from "./hooks/useDebounce";

function App() {
  const isOnline = useIsOnline();
  const mousePosition = useMousePointer();

  const [count, setCount] = useState(0);

  useInterval(() => {
    setCount(c => c + 1);
  }, 1000);

  const [inputValue, setInputValue] = useState('');

  const debounceValue = useDebounce(inputValue, 500);

  return (
    <>
      {isOnline ? <div>You Are Online</div> : <div>You Are Offline</div>}
      <div>
        The position of mouse is {`(${mousePosition.x} , ${mousePosition.y})`}
      </div>
      <div>
        The Count is {count}.
      </div>
      <div>
        <input type="text" placeholder="search..." value={inputValue} onChange={(e) => setInputValue(e.target.value)} />
      </div>
      <div>
        The debounced value is : {debounceValue}.
      </div>
    </>
  )
}

export default App

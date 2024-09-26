import { useEffect, } from "react";

export function useInterval(func, interval) {

   useEffect(() => {
      const instanceValue = setInterval(()=>func(), interval);
      return ()=>clearInterval(instanceValue);
   }, [func, interval]);
}
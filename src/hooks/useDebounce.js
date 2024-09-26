import { useEffect, useState } from "react";

export function useDebounce(value, delay) {
   const [final, setFinal] = useState('value');
   useEffect(() => {
      let timeoutId = setTimeout(() => {
         setFinal(value);
      }, delay);

      return () => {
         clearTimeout(timeoutId)
      }
   }, [value, delay]);

   return final;
}
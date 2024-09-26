import { useState, useEffect } from "react";
import axios from "axios";

function useTodos(time) {
   const [loading, setLoading] = useState(true);
   const [todos, setTodos] = useState([]);

   useEffect(() => {

      const instanceValue = setInterval(
         axios.get('http://localhost:3000/todos/random')
            .then(res => setTodos(res.data.todos))
         , time * 1000);

      axios.get('http://localhost:3000/todos/random')
         .then(res => setTodos(res.data.todos));
      setLoading(false);

      return () => {
         clearInterval(instanceValue);
      }
   }, [time]);


   return { todos, loading };
}

export default useTodos;
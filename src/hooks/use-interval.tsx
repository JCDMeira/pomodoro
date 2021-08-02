import { useEffect, useRef } from "react";

export function useInterval<C extends CallableFunction>(
  callback: C,
  delay: number | null,
): void {
  const savedCallback = useRef<C>();

  // Remenber the latest callback
  useEffect(() => {
    savedCallback.current = callback;
  }, [callback]);

  //set up the interval
  useEffect(() => {
    function tick() {
      if (savedCallback.current) savedCallback.current();
    }
    if (delay !== null) {
      const id = setInterval(tick, delay);
      return () => clearInterval(id);
    }
  }, [delay]);
}

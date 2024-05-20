import { useEffect, useRef } from 'react';

export const useInterval = (callback: Function, delay: number|null) => {
  const savedCallback: { current: Function|undefined } = useRef();

  useEffect(() => {
    savedCallback.current = callback;
  }, [callback]);

  useEffect(() => {
    const tick = () => {
      savedCallback.current!();
    }

    if (delay !== null) {
      const interval = setInterval(tick, delay);

      return () => {
        clearInterval(interval);
      }
    }
  }, [delay]);
}

import { useEffect, useRef } from "react";
  
  export default function useEventListener(
    eventType: string,
    callback: (event: Event) => void,
    element: EventTarget | null = window
  ) {
    const callbackRef = useRef<(event: Event) => void>(callback);
  
    useEffect(() => {
      callbackRef.current = callback;
    }, [callback]);
  
    useEffect(() => {
      if (element == null) return;
      const handler = (e: Event) => callbackRef.current(e);
      element.addEventListener(eventType, handler);
  
      return () => element.removeEventListener(eventType, handler);
    }, [eventType, element]);
  }
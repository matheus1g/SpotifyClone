import { use, useEffect, useState } from "react";

function useDebonce<T>(value: T, delay?: number): T {
  const [debonceValue, setDebouncedValue] = useState<T>(value);

  useEffect(() => {
    const timer = setTimeout(() => {
      setDebouncedValue(value)
    }, delay || 500);

    return () => {
      clearTimeout(timer);
    }
  }, [value, delay]);

  return debonceValue
}

export default useDebonce;
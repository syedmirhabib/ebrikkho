import { useState, useEffect, useCallback } from "react";
  
  export default function useAsync<T>(
    asyncFunction: () => Promise<T>,
    dependencies: any[] = []
  ) {
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState<Error | null>(null);
    const [value, setValue] = useState<T | null>(null);
  
    const execute = useCallback(() => {
      setLoading(true);
      setError(null);
      setValue(null);
  
      return asyncFunction()
        .then(response => setValue(response))
        .catch(error => setError(error))
        .finally(() => setLoading(false));
    }, [asyncFunction]);
  
    useEffect(() => {
      execute();
    }, [execute, ...dependencies]);
  
    return { loading, error, value, execute };
  }
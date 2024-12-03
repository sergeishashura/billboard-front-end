import { useState, useEffect } from "react";

const useErrorHandling = () => {

  const [error, setError] = useState(null);

  useEffect(() => {
    if (error) {
      console.log(error);
      throw error.response.data;
    }
  }, [error]);

  return { setError };
};

export default useErrorHandling;

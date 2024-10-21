import { useState } from 'react';

export const useWebview = () => {
  const [loading, setLoading] = useState(true);

  const handleLoadEnd = () => {
    setLoading(false);
  };

  return { loading, handleLoadEnd };
};

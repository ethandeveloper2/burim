'use client'

import { useMediaQuery } from 'react-responsive';

const useResponsive = () => {
  const greaterThanLarge = useMediaQuery({
    query: `(min-width: 1300px)`
  });

  return {
    greaterThanLarge,
  };
}

export default useResponsive;

import { createContext, useState, useContext } from 'react';

// 1. Context 생성
const StarforceContext = createContext();

// 2. Context Provider 생성
export function StarforceProvider({ children }) {
  const [starforceHistoryArray, setStarforceHistoryArray] = useState([]);

  return (
    <StarforceContext.Provider
      value={{
        starforceHistoryArray,
        setStarforceHistoryArray,
      }}
    >
      {children}
    </StarforceContext.Provider>
  );
}

export function useStarforceHistoryArray() {
  const { starforceHistoryArray, setStarforceHistoryArray } =
    useContext(StarforceContext);
  return [starforceHistoryArray, setStarforceHistoryArray];
}

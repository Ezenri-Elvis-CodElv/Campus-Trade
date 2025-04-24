import { createContext, useState } from 'react';

export const SearchContext = createContext(undefined);

export const SearchProvider = ({ children }) => {
  const [searchQuery, setSearchQuery] = useState('');
  
  return (
    <SearchContext.Provider value={{ searchQuery, setSearchQuery }}>
      {children}
    </SearchContext.Provider>
  );
};
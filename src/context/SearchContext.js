import {createContext, useState} from 'react';

// Create Context
const SearchContext = createContext();
// Create provider function
const SearchProvider = ({children}) => {
  const [keyword, setKeyword] = useState('');

  // Set key when submit search form
  const onSubmit = (key) => {
    setKeyword((pre) => (pre = key));
  };

  // Value of provider
  const ctx = {
    keyword,
    onSubmit,
  };
  console.log(keyword);
  return (
    <SearchContext.Provider value={ctx}>{children}</SearchContext.Provider>
  );
};

export {SearchContext, SearchProvider};

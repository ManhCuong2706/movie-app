import {createContext, useState} from 'react';

// Create Context
const ShowDetailContext = createContext();

// Create Provider

const ShowDetailProvider = ({children}) => {
  const [showDetail, setShowDetail] = useState(false);
  const [movie, setMovie] = useState({});

  // Handle action when user click movie item
  const handleShowDetail = (item) => {
    setShowDetail(!showDetail);
    setMovie(item);
  };

  const contextValue = {
    showDetail,
    movie,
    handleShowDetail,
  };
  return (
    <ShowDetailContext.Provider value={contextValue}>
      {children}
    </ShowDetailContext.Provider>
  );
};

export {ShowDetailContext, ShowDetailProvider};

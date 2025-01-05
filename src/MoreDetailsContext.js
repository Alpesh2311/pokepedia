import React, { createContext, useContext, useState } from "react";

const DetailsContext = createContext();

export const DetailsProvider = ({ children }) => {
  const [detailsData, setDetailsData] = useState(null);
  const [isDetailsVisible, setDetailsVisible] = useState(false);

  const showDetails = (data) => {
    setDetailsData(data);
    setDetailsVisible(true);
  };

  const hideDetails = () => {
    setDetailsData(null);
    setDetailsVisible(false);
  };

  return <DetailsContext.Provider value={{ detailsData, isDetailsVisible, showDetails, hideDetails }}>{children}</DetailsContext.Provider>;
};

export const useDetails = () => useContext(DetailsContext);

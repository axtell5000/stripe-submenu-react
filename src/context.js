import React, { useState, useContext } from 'react';
import sublinks from './data';
const AppContext = React.createContext();


export const AppProvider = ({ children }) => {
  // state items
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const [isSubmenuOpen, setIsSubmenuOpen] = useState(true);
  
  const openSidebar = () => {
    setIsSidebarOpen(true);
  };

  const closeSidebar = () => {
    setIsSidebarOpen(false);
  };

  const openSubmenu = (text, coordinates) => {
    setIsSubmenuOpen(true);
  };

  const closeSubmenu = () => {
    setIsSubmenuOpen(false);
  };


  return (
    <AppContext.Provider
      value={{
        isSidebarOpen,
        isSubmenuOpen,
        openSidebar,
        closeSidebar,
        openSubmenu,
        closeSubmenu        
      }}
    >
      {children}
    </AppContext.Provider>
  );
}

// custom hook, remember to use 'use'
export const useGlobalContext = () => {
  return useContext(AppContext);
};


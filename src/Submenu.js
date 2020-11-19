import React, { useState, useRef, useEffect } from 'react';

import { useGlobalContext } from './context';

const Submenu = () => {
  // pulling from context
  const {isSubmenuOpen, location} = useGlobalContext();

  const container = useRef(null); // a ref to an element

  // do something when location state changes
  useEffect(() => {
    const submenu = container.current; // getting current element    
    const { center, bottom } = location;
    submenu.style.left = `${center}px`;
    submenu.style.top = `${bottom}px`;
  }, [location]);

  return (
    <aside className={`${isSubmenuOpen ? 'submenu show' : 'submenu'}`} ref={container}>
      submenu
    </aside>
  );
};

export default Submenu;

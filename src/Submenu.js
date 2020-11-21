import React, { useState, useRef, useEffect } from 'react';

import { useGlobalContext } from './context';

const Submenu = () => {
  // pulling from context
  const {isSubmenuOpen, location, page: {page, links}} = useGlobalContext();

  const container = useRef(null); // a ref to an element

  // state
  const [columns, setColumns] = useState('col-2');
  // do something when location state changes
  useEffect(() => {
    setColumns('col-2');
    const submenu = container.current; // getting current element    
    const { center, bottom } = location;
    submenu.style.left = `${center}px`;
    submenu.style.top = `${bottom}px`;
    
    if (links.length === 3) {
      setColumns('col-3');
    }
    if (links.length > 3) {
      setColumns('col-4');
    }

  }, [location, links]);

  return (
    <aside className={`${isSubmenuOpen ? 'submenu show' : 'submenu'}`} ref={container}>
      <h4>{page}</h4>
      <div className={`submenu-center ${columns}`}>
        {
          links.map((link, index) => {
            const { url, icon, label } = link;
            return (
              <a key={index} href={url} title={label}>
                {icon}
                {label}
              </a>
            );
          })
        }
      </div>
    </aside>
  );
};

export default Submenu;

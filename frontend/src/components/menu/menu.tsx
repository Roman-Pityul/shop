import React from "react";
import { Link } from "react-router-dom";

import "./menu.scss";

type MenuType = {
   items: ItemType[]
   setVisible: any
}

type ItemType = {
   path: string
   name: string
}

type ClickOutside = MouseEvent & {
   path: Node[]
}

const Menu: React.FC<MenuType> = ({ items, setVisible }) => {
   const menuRef = React.useRef<HTMLDivElement>(null);

   const clickOutside = React.useCallback(
      (e: MouseEvent) => {
         const _e = e as ClickOutside
         if (menuRef.current && !_e.path.includes(menuRef.current)) {
            setVisible(false);
         }
      },
      [setVisible]
   );

   const handleOffVisible = () => {
      setVisible(false);
   };

   const elem = document.querySelector("body")

   React.useEffect(() => {
      if (elem) {
         elem.addEventListener("click", clickOutside);
         return () =>
            elem.removeEventListener("click", clickOutside);
      }

   }, [clickOutside]);

   return (
      <div ref={menuRef} className="menu">
         <div className="menu__container">
            {items.map((item, index: number) => (
               <div
                  onClick={handleOffVisible}
                  key={index}
                  className="menu__item"
               >
                  <Link to={item.path}>{item.name}</Link>
               </div>
            ))}
         </div>
      </div>
   );
};

export default Menu;

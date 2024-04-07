import React from "react";
import { useState } from "react";
import Restmenuitem from "./Restmenuitem";

const Restmenucategory = ({ menu }) => {
  const [activeIndex, setActiveIndex] = useState(1);

  const handleToggleAccordion = (index) => {
    if (index === activeIndex) {
      setActiveIndex(null);
    } else {
      setActiveIndex(index);
    }
  };

  return (
    <>
      <div className="my-4">
        {menu?.map((m, i) => {
          if (m?.card?.card?.title && m?.card?.card?.itemCards) {
            return (
              <Restmenuitem
                item={m}
                key={i}
                index={i}
                activeIndex={activeIndex}
                setActiveIndex={handleToggleAccordion}
              />
            );
          }
        })}
      </div>
    </>
  );
};
export default Restmenucategory;

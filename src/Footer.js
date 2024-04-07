import React from "react";

const Footer = () => {
  return (
    <>
      <div className="bg-linear-pink-invert py-12 px-4">
        <div
          tabIndex="0"
          aria-label="footer"
          className="focus:outline-none mx-auto container flex flex-col items-center justify-center"
        >
          <div className=" flex flex-col md:items-center f-f-l pt-3">
            <div className=" font-bold text-3xl ">
              <span className="text-[#1C1572]">AwsmFoodz</span>
            </div>
            <div className="text-sm text-color mb-10 f-f-l mt-2">
              <p tabIndex="0" className="dark:text-white focus:outline-none">
                © 2024 AwsmFoodz. All rights reserved
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Footer;

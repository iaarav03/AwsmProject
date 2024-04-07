import React from "react";
import pizza from './pizza.png';
import pepsi from './pepsi.png'


const MidBody=()=>{

return (
<>
    <div className="flex flex-col sm:hidden">
        <div className="h-[40vh] pt-20">
          <img src={pizza}></img>
        </div>
        <div className=" ">
            <h1 className="text text-center font-bold text-4xl ">AwsmFoodz</h1>
            <div className="text-center container mx-auto">
                <p className="  pt-5 text-justify pl-12 w-[90vw]">Welcome to AwsmFoodz, your ultimate destination for culinary delight! We're here to tantalize your taste buds and elevate your dining experience to a whole new level. Dive into a world of flavor with our carefully curated selection of recipes, ranging from mouthwatering classics to innovative fusion dishes. Join us on this gastronomic journey and unleash your inner foodie with AwsmFoodz. Bon appétit!</p>
            </div>
        </div>
    </div>
    <div class="flex flex-row">
    <div class="hidden md:block  w-1/2 mt-32">
        <h1 class="text-[#1C1572] text-center font-bold text-3xl font-serif">Now we are taking orders online</h1>
        <h1 class="text-center font-bold text-3xl font-serif">
            <span class="text-[#1C1572]">AwsmFoodz</span>
        </h1>
        <div class="ml-20 text-center container mx-auto">
            <p class="pt-5 text-justify">Welcome to AwsmFoodz, your ultimate destination for culinary delight! We're here to tantalize your taste buds and elevate your dining experience to a whole new level. Dive into a world of flavor with our carefully curated selection of recipes, ranging from mouthwatering classics to innovative fusion dishes. Join us on this gastronomic journey and unleash your inner foodie with AwsmFoodz. Bon appétit!</p>
        </div>
    </div>
    <div class="hidden md:block  pl-52  w-1/2">
        <img src={pepsi} class="h-[50vh]"></img>
    </div>
</div>

</>
);



}
export default MidBody;
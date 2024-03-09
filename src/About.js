import React from 'react'

const About = () => {
  return (
    <div>
      
      <div class="2xl:container 2xl:mx-auto lg:py-16 lg:px-20 md:py-12 md:px-6 py-9 px-4">
            
            <div class="flex lg:flex-row flex-col lg:gap-8 sm:gap-10 gap-12">
                <div class="w-full lg:w-6/12">
                    <h2 class="w-full font-bold lg:text-4xl text-3xl lg:leading-10 dark:text-white leading-9">What’s the AwsmFoodz story?</h2>
                    <p class="font-normal text-base leading-6 text-gray-600 dark:text-gray-200 mt-6">Welcome to AwsmFoodz, where our story is as delightful as our dishes! Born out of a passion for good food and a commitment to convenience, AwsmFoodz started as a dream to bring exceptional culinary experiences right to your doorstep. Our journey began with a simple idea – to create a platform that seamlessly connects food enthusiasts with a diverse array of top-notch eateries. What sets AwsmFoodz apart is not just the delicious fare we deliver, but the shared love for culinary craftsmanship and the joy of savoring a perfect bite. With a focus on quality, efficiency, and a touch of culinary magic, AwsmFoodz is not just a food delivery service; it's a celebration of flavors, a fusion of convenience and culinary excellence, ensuring every meal is a memorable experience. Join us on this gastronomic adventure, and let AwsmFoodz be the secret ingredient that transforms your dining moments into unforgettable celebrations.</p>
                </div>
                <div class="w-full lg:w-6/12">
                    <img class="lg:block hidden w-full" src="https://i.ibb.co/RjNH7QB/Rectangle-122-1.png" alt="people discussing on board" />
                    <img class="lg:hidden sm:block hidden w-full" src="https://i.ibb.co/16fPqrg/Rectangle-122-2.png" alt="people discussing on board" />
                    <img class="sm:hidden block w-full" src="https://i.ibb.co/Jxhpxh6/Rectangle-122.png" alt="people discussing on board" />
                </div>
            </div>
    
            <div class="relative mt-24">
                <div class="grid sm:grid-cols-3 grid-cols-2 sm:gap-8 gap-4">
                    <div class="z-20 w-12 h-12 bg-gray-800 rounded-full flex justify-center items-center">
                        <img src="https://tuk-cdn.s3.amazonaws.com/can-uploader/about-us-3-svg1.svg" alt="flag" />
                    </div>
    
                  <img class="z-20" src="https://tuk-cdn.s3.amazonaws.com/can-uploader/about-us-3-svg2.svg" alt="note" />
    
                   <img class="z-20 sm:block hidden" src="https://tuk-cdn.s3.amazonaws.com/can-uploader/about-us-3-svg3.svg" alt="users" />
                </div>
                <hr class="z-10 absolute top-2/4 w-full bg-gray-200" />
            </div>
            <div class="grid sm:grid-cols-3 grid-cols-2 sm:gap-8 gap-4">
                <div>
                    <p class="font-semibold lg:text-2xl text-xl lg:leading-6 leading-5 text-gray-800 dark:text-white mt-6">Founded by Aarav</p>
                   
                </div>
                <div>
                    <p class="font-semibold lg:text-2xl text-xl lg:leading-6 leading-5 text-gray-800 dark:text-white mt-6">50M montly enrichments</p>
                    
                </div>
                <div class="">
                    <p class="font-semibold lg:text-2xl text-xl lg:leading-6 leading-5 text-gray-800 dark:text-white mt-6">400k User</p>
                    
                </div>
            </div>
          
            
    
           
        </div>
    
    </div>
  )
}

export default About

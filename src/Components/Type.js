import React from 'react'
import { TypeAnimation } from 'react-type-animation';



function Type() {
    return (
        <div className=' font-sans font-extrabold text-2xl text-black dark:text-yellow-400'>

       
        <TypeAnimation
      sequence={[
        // Same substring at the start will only be typed out once, initially
        "WE PROVIDE DETAILED PROCEDURE ALONG WITH VIDEOS",
        1000, 
        "WE PROVIDE RECIPES FROM ALL AROUND THE GLOBE",
        1000,

        "WE PROVIDE SEARCH FILTERS TO FIND YOUR FAVOURITE RECIPE",
        1000,

        "WE PROVIDE SEARCH BY FIRST ALPHABET FUNCTIONALITY",
        1000,

        "WE PROVIDE AN EXHAUSTIVE MENU OF ITEMS",
        1000,

        "WE PROVIDE EVERYTHING FOR FREE!!",
        1000,
        
      ]}
      
      speed={50}
      
      repeat={Infinity}
    />
     </div>
    );
}
 
export default Type;
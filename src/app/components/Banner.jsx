"use client"; // Required for Framer Motion in Next.js

import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";

export default function KettleLanding() {
  // Animation Variants
  const textVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.8 } },
  };

  const imageVariants = {
    hidden: { opacity: 0, scale: 0.8 },
    visible: { opacity: 1, scale: 1, transition: { duration: 1 } },
  };

  return (
    <div className="min-h-screen bg-[#f2e9e4] flex items-center justify-center -tracking-wide px-4 md:px-6">
      <div className="max-w-6xl mx-auto w-full">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Text Section */}
          <div className="space-y-6">
            <motion.h1
              className="text-6xl md:text-7xl lg:text-8xl font-bold tracking-tighter text-[#2d2d2d]"
              initial="hidden"
              animate="visible"
              variants={textVariants}
            >
              <motion.span
                initial="hidden"
                animate="visible"
                variants={textVariants}
                className="block"
              >
                Kettle
              </motion.span>
              <motion.span
                initial="hidden"
                animate="visible"
                variants={textVariants}
                className="text-[#b08968] block"
              >
                Klo.
              </motion.span>
            </motion.h1>
            <motion.p
              className="text-[#6b6b6b] text-lg max-w-[500px]"
              initial="hidden"
              animate="visible"
              variants={textVariants}
            >
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Magni ut
              consectetur, nam, labore iusto odio quia sapiente nemo nihil animi
              veniam iure! Inventore eveniet ipsum voluptas, est blanditis
              praesentium modi?
            </motion.p>

            <div className="flex flex-wrap gap-4">
              <Button className="bg-[#b08968] hover:bg-[#96735a] text-white rounded-full px-8 py-3">
                Learn More
              </Button>
              <Button
                variant="outline"
                className="rounded-full bg-[#b08968] px-8 py-3 border-[#2d2d2d] text-[#2d2d2d] hover:bg-[#2d2d2d] hover:text-white"
              >
                Buy Now →
              </Button>
            </div>
          </div>

          {/* Image Section */}
          <motion.div
            className="relative"
            initial="hidden"
            animate="visible"
            variants={imageVariants}
          >
            <img
              src="/main.png" // Update this to your image path
              alt="White electric kettle with brown handle alongside bagels"
              className="w-full"
            />
          </motion.div>
        </div>
      </div>
    </div>
  );
}































// import { Button } from "@/components/ui/button";

// export default function KettleLanding() {
//   return (
//     <div className="min-h-screen bg-[#f2e9e4] flex items-center justify-center  -tracking-wide px-4 md:px-6">
//       <div className="max-w-6xl mx-auto w-full">
//         <div className="grid lg:grid-cols-2 gap-12 items-center">
//           {/* Text Section */}
//           <div className="space-y-6">
//             <h1 className="text-6xl md:text-7xl lg:text-8xl font-bold tracking-tighter text-[#2d2d2d]">
//               <span>Kettle</span>
//               <span className="text-[#b08968]"> Klo.</span>
//             </h1>
//             <p className="text-[#6b6b6b] text-lg max-w-[500px]">
//               Lorem ipsum dolor sit amet consectetur adipisicing elit. Magni ut consectetur, nam, labore iusto odio quia
//               sapiente nemo nihil animi veniam iure! Inventore eveniet ipsum voluptas, est blanditis praesentium modi?
//             </p>


            
//             <div className="flex flex-wrap gap-4 ">
//               <Button className="bg-[#b08968] hover:bg-[#96735a] text-white rounded-full px-8 py-3">
//                 Learn More
//               </Button>
//               <Button
//                 variant="outline"
//                 className="rounded-full bg-[#b08968] px-8 py-3 border-[#2d2d2d] text-[#2d2d2d] hover:bg-[#2d2d2d] hover:text-white"
//               >
//                 Buy Now →
//               </Button>
//             </div>
//           </div>

//           {/* Image Section */}
//           <div className="relative">
//             <img
//               src="/main.png" // Updated to the uploaded image path
//               alt="White electric kettle with brown handle alongside bagels"
//               className="w-full  h-{30}"
//             />
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// }

import { Link } from "react-router-dom"
import { motion } from "framer-motion"

function PosterCard() {
    return (
        <div className="py-[50px] px-[30px] my-[20px] mb-[75px] overflow-hidden">
            <h2 className="text-[52px] font-semibold text-white heading-font text-center mb-[8px]">Other Design</h2>
            <p className="text-[16px] text-white font-normal text-center text-base/6 mb-[57px]">A glimpse into the digital experiences I’ve designed</p>
            <motion.div animate={{ x: ["0%", "-50%"] }} transition={{duration: 10, repeat: Infinity, ease: "linear", repeatType: "loop"}} className="flex gap-2 shrink-0 justify-around ">
                <img className="w-[100%] h-[100%] max-h-[200px] rounded-xl object-cover" src="/images/behance-4.png"></img>
                <img className="w-[100%] h-[100%] max-h-[200px] rounded-xl object-cover " src="/images/behance-1.png"></img>
                <img className="w-[100%] h-[100%] max-h-[200px] rounded-xl object-cover" src="/images/behance-2.png"></img>
                <img className="w-[100%] h-[100%] max-h-[200px] rounded-xl object-cover " src="/images/behance-5.jpg"></img>
                <img className="w-[100%] h-[100%] max-h-[200px] rounded-xl object-cover" src="/images/behance-7.jpg"></img>
                <img className="w-[100%] h-[100%] max-h-[200px] rounded-xl object-cover" src="/images/behance-3.png"></img>
                <img className="w-[100%] h-[100%] max-h-[200px] rounded-xl object-cover" src="/images/behance-6.png"></img>
                <img className="w-[100%] h-[100%] max-h-[200px] rounded-xl object-cover" src="/images/behance-8.jpg"></img>
                <img className="w-[100%] h-[100%] max-h-[200px] rounded-xl object-cover" src="/images/behance-9.jpg"></img>
            </motion.div>
        </div>
    )
}
export default PosterCard    
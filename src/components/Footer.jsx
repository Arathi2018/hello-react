import { IoIosCheckmarkCircle } from "react-icons/io"
import ListCards from "./ListCards"
import { GoArrowUpRight } from "react-icons/go";
import { FaInstagram } from "react-icons/fa";
import { FaBehance } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import { FaLinkedinIn } from "react-icons/fa";

function Footer(){
    return (
        <div className="text-white text-center p-5 bg-[url('/images/aurora.png')] bg-cover bg-center bg-no-repeat h-[200px] flex flex-col items-center justify-between">
             <div className="flex flex-wrap gap-5 items-center justify-center my-[10px] mt-[20px]">
                <a href="https://www.linkedin.com/in/arathi-as" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 border border-[#484848] bg-[#1A1A1A] px-3 py-3 rounded-xl text-white text-[16px] font-normal">
                    <FaLinkedinIn size={20}/>
                </a>
                <a href="https://www.behance.net/arathias" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 border border-[#484848] bg-[#1A1A1A] px-3 py-3 rounded-xl text-white text-[16px] font-normal">
                    <FaBehance size={20} />
                </a>
                <a href="https://www.instagram.com/art.aarthi_/" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 border border-[#484848] bg-[#1A1A1A] px-3 py-3 rounded-xl text-white text-[16px] font-normal">
                    <FaInstagram size={20} />
                </a>
            </div> 
            <span className="text-white/50 fs-[10px]">allrights@reserved</span>
        </div>
    )
}

export default Footer
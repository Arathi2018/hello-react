import { IoIosCheckmarkCircle } from "react-icons/io"
import ListCards from "./ListCards"
import { GoArrowUpRight } from "react-icons/go";
import { FaInstagram } from "react-icons/fa";
import { FaBehance } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";

const listcard = [
    {
        id: 1,
        title: "Junior Web Designer",
        desc: "Lean Transition Solutions, Trivandrum, India",
        year: "Apr 2023 - Feb 2026"
    },
    {
        id: 2,
        title: "UI/UX Designer Intern",
        desc: "Macrosoft IT Solutions, Trivandrum, India",
        year: "Sep 2022 - Mar 2023"
    },
]
const education = [
    {
        id: 1,
        title: "Bachelor of Science , Statistics",
        desc: "Christ Nagar College, Maranalloor, Trivandrum, India",
        year: "2018 - 2021"
    },
    {
        id: 2,
        title: "Higher Secondary Education",
        desc: "GOVT VHSS Vattiyoorkavu, Trivandrum, India",
        year: "2017 - 2018"
    },
]
function About() {
    return (
        <div className="max-w-3/4 w-full mx-auto py-[20px] text-white">
            <div className="flex flex-col items-start my-5">
                <div className="min-w-[100px] w-[100px] h-[100px] bg-transparent rounded-full flex items-center justify-center mb-4">
                    <img src="/images/Arathi.png" alt="User Avatar" className="rounded-full w-full h-full font-normal text-lg"/>
                </div>
                <div className="flex flex-col">
                    <div className="flex gap-2 items-center">
                        <h1 className="text-[24px] font-semibold text-white">Arathi A S</h1>
                        <IoIosCheckmarkCircle fill="#007FFF" size={24} />
                    </div>
                    <p className="text-[16px] text-white font-normal text-base/7">Hi, I'm Arathi, a UI/UX Designer & Developer passionate about solving complex B2B challenges through clean, accessible design. With 3+ years of experience, I bridge the gap between design and development, working across the full design lifecycle from user research and wireframing to high-fidelity Figma prototypes and production ready interfaces. I take pride in delivering design solutions that reduce friction, improve usability, and align with measurable business outcomes, ensuring every product I build is both visually refined and technically solid.</p>
                </div>
                <div className="flex flex-wrap gap-5 items-center my-[10px] mt-[20px]">
                    <a href="https://www.linkedin.com/in/arathi-as" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 border border-[#484848] bg-[#1A1A1A] px-4 py-3 rounded-2xl md:rounded-full text-white text-[16px] font-normal">
                        <FaLinkedin className="block md:hidden transition-transform duration-300 hover:scale-110" size={24} />
                        <span className="md:block hidden">LinkedIn</span> 
                        <GoArrowUpRight className="md:block hidden" />
                    </a>
                    <a href="https://www.behance.net/arathias" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 border border-[#484848] bg-[#1A1A1A] px-4 py-3 rounded-2xl md:rounded-full text-white text-[16px] font-normal">
                        <FaBehance className="block md:hidden transition-transform duration-300 hover:scale-110" size={24} />
                        <span className="md:block hidden">Behance</span> 
                        <GoArrowUpRight className="md:block hidden" />
                    </a>
                    <a href="https://www.instagram.com/art.aarthi_/" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 border border-[#484848] bg-[#1A1A1A] px-4 py-3 rounded-2xl md:rounded-full text-white text-[16px] font-normal">
                        <FaInstagram className="block md:hidden transition-transform duration-300 hover:scale-110" size={24} />
                        <span className="md:block hidden">Instagram</span> 
                        <GoArrowUpRight className="md:block hidden" />
                    </a>
                </div>
            </div>
            <div className="mb-[20px]">
                <div className="flex flex-col gap-2 items-start mb-4 border-b border-[#343434] py-4 pb-2">
                    <h1 className="text-[20px] font-semibold text-white">Experience</h1>
                </div>  
               <ListCards listcard={listcard} />

            </div>
            <div className="mb-[20px]">
                <div className="flex flex-col gap-2 items-start mb-4 border-b border-[#343434] py-4 pb-2">
                    <h1 className="text-[20px] font-semibold text-white">Education</h1>
                </div>  
               <ListCards listcard={education} />
            </div>
        </div>
    )
}
export default About
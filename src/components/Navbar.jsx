import { House, BookUser, User } from "lucide-react"
import { useNavigate } from "react-router-dom"

function Navbar(){
    const navigate = useNavigate()
    const scrollToWorks = () => {
        document.getElementById("works")?.scrollIntoView({ behavior: "smooth" });
    };

    return (
        <div className="text-white p-5 py-[15px] flex justify-center items-center w-fit fixed top-0 left-[50%] translate-x-[-50%] z-10 ">
            <div className="bg-white/30 backdrop-blur-sm  flex gap-2 items-center justify-between rounded-full px-[25px] py-[8px] shadow-md">
               <div className="text-white text-normal px-[10px] py-[8px] flex items-center justify-center text-[16px] cursor-pointer" onClick={() => navigate("/")}>
                    Home
                </div> 
               <div onClick={scrollToWorks} className="text-white px-[20px] py-[8px] flex items-center justify-center text-[16px] cursor-pointer">
                   Works
                </div>
               <div className="text-white px-[20px] py-[8px] flex items-center justify-center text-[16px] cursor-pointer" onClick={() => navigate("/about")}>
                   About
                </div>
               <a href="https://drive.google.com/file/d/1mX_i4rdnwpkZgYqcumbGOuFFT-YXJWfn/view?usp=sharing" target="_blank" rel="noopener noreferrer" className="text-white text-normal px-[10px] py-[8px] flex items-center justify-center text-[16px] cursor-pointer">
                    Resume
                </a>
            </div>
        </div>
    )
}
export default Navbar
import { House, BookUser, User } from "lucide-react"
import { useNavigate } from "react-router-dom"

function Navbar(){
    const navigate = useNavigate()

    return (
        <div className="text-white p-8 d-flex justify-center items-center w-fit fixed bottom-[30px] left-[50%] translate-x-[-50%] z-10 ">
            <div className="bg-[#2D2D2D] flex gap-2 items-center justify-between rounded-[15px] p-[10px]">
               <div className="bg-[#444444] backdrop-blur-md text-white p-[12px] rounded-[10px] w-[50px] h-[50px] flex items-center justify-center text-xl cursor-pointer" onClick={() => navigate("/")}>
                    <House />
                </div> 
               <a href="https://drive.google.com/file/d/1pejm75jmWpnpF3nQLjyVV08yjL-dWQpV/view?usp=sharing" target="_blank" rel="noopener noreferrer" className="bg-[#444444] backdrop-blur-md text-white p-[12px] rounded-[10px] w-[50px] h-[50px] flex items-center justify-center text-xl cursor-pointer">
                    <BookUser />
                </a>
               <div className="bg-[#444444] backdrop-blur-md text-white p-[12px] rounded-[10px] w-[50px] h-[50px] flex items-center justify-center text-xl cursor-pointer" onClick={() => navigate("/about")}>
                    <User/>
                </div>
            </div>
        </div>
    )
}
export default Navbar
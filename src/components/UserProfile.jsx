import { IoIosCheckmarkCircle } from "react-icons/io";
import RevealOnScroll from "./OnScroll";

function UserProfile(){
    return (
        <div className=" bg-gradient-to-t from-[#000000] via-black-300 to-[#5b5b5b]  p-5 md:p-10 h-[700px] mb-[45px] bg-[url('/images/background_banner.png')] bg-cover bg-center bg-no-repeat content-center">
            <RevealOnScroll>
                 <div className="flex flex-col gap-4 items-center justify-center">
                    <div className="min-w-[100px] w-[100px] h-[100px] bg-transparent rounded-full flex items-center justify-center shadow-xl">
                        <img src="/images/Arathi.png" alt="User Avatar" className="rounded-full w-full h-full font-normal text-lg"/>
                    </div>
                    <div className="flex flex-col">
                        <div className="flex flex-col justify-between items-center gap-[-10px] mb-1">
                            <h6 className="text-[18px] text-white font-normal">I'm Arathi A S</h6>
                            <h1 className="text-[42px] font-semibold text-white heading-font">UI/UX Designer</h1>
                        </div>
                        <p className="text-[16px] text-white font-normal text-center">UI/UX Designer & Developer with 3+ years of experience creating intuitive, <br></br>accessible web applications from complex B2B requirements.</p>
                    </div>
                </div>
            </RevealOnScroll>
        </div>
    )
}

export default UserProfile
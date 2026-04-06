import { IoIosCheckmarkCircle } from "react-icons/io"

function UserProfile(){
    return (
        <div className="flex flex-row items-center my-5">
            <div className="min-w-[100px] w-[100px] h-[100px] bg-transparent rounded-full flex items-center justify-center mr-4">
                <img src="/src/assets/images/Arathi.png" alt="User Avatar" className="rounded-full w-full h-full font-normal text-lg"/>
            </div>
            <div className="flex flex-col">
                <div className="flex flex-row justify-between items-center gap-2 mb-1">
                    <div className="flex gap-2 items-center">
                        <h1 className="text-[24px] font-semibold text-white">Arathi A S</h1>
                        <IoIosCheckmarkCircle fill="#007FFF" size={24} />
                    </div>
                    <span className="text-[18px] text-white/70 font-normal">UI/UX Designer</span>
                </div>
                <p className="text-[16px] text-white font-normal text-base/6">A UI/UX Designer & Developer with 3+ years of experience transforming complex B2B requirements into intuitive, accessible web applications that drive usability and deliver measurable business value.</p>
            </div>
        </div>
    )
}

export default UserProfile
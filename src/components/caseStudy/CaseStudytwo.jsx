import { GoArrowUpRight } from "react-icons/go";
import { Link } from "react-router-dom";

function CaseStudyTwo() {
    return (
        <div className="text-3xl font-bold text-white w-full">
            <div className="w-full !h-full max-h-[450px] mb-6 justify-items-center">
                <img src="/src/assets/images/banner2.jpg" alt="Case Study Image" className="w-full h-full mb-6"/>
            </div>
            <div className="container max-w-3/4 w-full mx-auto">
                <div className="flex flex-col gap-2 items-start mb-4 border-b border-[#343434] pb-4">
                    <h1 className="text-[24px] font-bold text-white">FOOD DELIVERY APP</h1>
                    <p className="text-[16px] text-white font-normal text-xl">A food delivery app redesign eliminating hidden charges and fixing broken customer support giving users full pricing transparency and smarter assistance at every step of their ordering experience.</p>
                </div>

                <h6 className="text-[18px] text-[#999999] font-normal mb-2 mt-[35px]">Problem Statement</h6>
                <p className="text-[16px] text-white font-normal text-base/7 mb-[35px]">Despite the rapid growth of food delivery apps, two critical pain points continue to frustrate users and drive hidden charges that only surface at the final payment stage, and ineffective customer support that fails to resolve real user issues. These problems erode user trust, increase order abandonment, and leave users feeling deceived and unheard, ultimately pushing them toward competitor platforms.</p>

                <h6 className="text-[18px] text-[#999999] font-normal mb-2">User Research</h6>
                <p className="text-[16px] text-white font-normal text-base/7 mb-[35px]">To validate these pain points, I conducted user interviews and surveys with frequent food delivery app users to understand their core frustrations.<br/>
                Key Findings:<br/>
                - A large majority of users felt misled by extra charges including delivery fees, platform fees, and taxes — that were not communicated upfront during browsing or cart stages <br/>
                - Hidden charges were the primary reason users abandoned orders at the payment stage<br/>
                - Users reported that contacting customer support was a frustrating experience, with long wait times and unhelpful responses <br/>
                - AI chatbot support was widely criticized for offering only predefined questions and generic answers that rarely addressed the user's actual problem <br/>
                - Users expressed a strong preference for transparent pricing and accessible, human-like support that could resolve issues quickly and efficiently</p>

                <h6 className="text-[18px] text-[#999999] font-normal mb-4">User Persona</h6>
                <div className="flex flex-col gap-3 w-full h-full mb-6">
                    <img src="/src/assets/images/user-persona1.jpg" alt="Case Study Image" className="w-full h-full mb-6"/>
                    <img src="/src/assets/images/user-persona2.jpg" alt="Case Study Image" className="w-full h-full mb-6"/>
                </div>

                <h6 className="text-[18px] text-[#999999] font-normal mb-2 mt-[35px]">Solutions</h6>
                <p className="text-[16px] text-white font-normal text-base/7 mb-4">The Product Detail screen tackles hidden charges head-on by displaying a full cost breakdown base price, packaging fee, and delivery fee directly on the product page, so users know the exact total before adding anything to their cart.</p>
                
                <img src="/src/assets/images/stage31.jpg" alt="Case Study Image" className="w-full h-full mb-6"/>

                <h6 className="text-[18px] text-[#999999] font-normal mb-2 mt-[35px]">Food Delivery </h6>
                <p className="text-[16px] text-white font-normal text-base/7 mb-4">The Order Tracking screen keeps users fully informed throughout the delivery journey showing a live map view, a step-by-step order progress timeline, and delivery partner details all in one place. When a delay occurs, users receive an instant notification with a clear reason and an updated ETA, eliminating the frustration of waiting without explanation. A prominent Help & Support button ensures that if users need assistance at any point during the delivery, help is just one tap away.</p>
                
                <img src="/src/assets/images/stage32.jpg" alt="Case Study Image" className="w-full h-full mb-6"/>

                <h6 className="text-[18px] text-[#999999] font-normal mb-2 mt-[35px]">AI Food Assistant</h6>
                <p className="text-[16px] text-white font-normal text-base/7 mb-4">The AI Food Assistant goes beyond generic chatbot responses by offering personalized food recommendations based on the user's preferences and past orders making it easy to discover new dishes, get tailored suggestions, and add them to cart instantly, all within a single conversational screen.</p>
                
                <img src="/src/assets/images/stage33.jpg" alt="Case Study Image" className="w-full h-full mb-6"/>
                <p className="text-[16px] text-white font-normal text-base/7 mb-4">The result is a food delivery experience built on transparency, trust, and genuine responsiveness one that respects the user's time, keeps them informed at every step, and ensures help is always within reach when things don't go as planned.</p>
                <div className="flex flex-row gap-2 items-center justify-between mb-4 pt-4 border-t border-[#343434] pb-4">
                    <div className="flex flex-col gap-2 items-start mb-2">
                        <p className="text-[16px] text-white font-normal text-xl">If you want to know more details of this project, get in touch!</p>
                        <a href="https://www.linkedin.com/in/arathi-as" target="_blank" rel="noopener noreferrer" className="text-white text-[16px] text-[#007FFF] font-normal text-xl">LinkedIn</a>
                       <a href="mailto:asarathi743@gmail.com" className="text-white text-[16px] text-[#007FFF] font-normal text-xl">asarathi743@gmail.com</a>
                    </div>
                   <Link to="/case-study/two" className="flex items-center gap-2 border border-[#484848] bg-[#1A1A1A] px-4 py-3 rounded-full text-white text-[16px] font-normal">View Next <GoArrowUpRight /></Link>
                </div>
            </div>
        </div>
    )
}
export default CaseStudyTwo

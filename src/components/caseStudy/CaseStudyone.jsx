import { GoArrowUpRight } from "react-icons/go";
import { Link, useNavigate } from "react-router-dom";
import { Calendar } from "lucide-react";

function CaseStudyOne() {
    return (
        <div className="text-3xl font-bold text-white w-full">
            <div className="w-full !h-full max-h-[450px] mb-6 justify-items-center">
                <img src="/images/banner.jpg" alt="Case Study Image" className="w-full h-full mb-6"/>
            </div>
            <div className="container max-w-3/4 w-full mx-auto">
                <div className="flex flex-col gap-2 items-start mb-4 border-b border-[#343434] pb-4">
                    <h1 className="text-[24px] font-bold text-white"> SCHOOL STUDENT MONITORING APP</h1>
                    <p className="text-[16px] text-white font-normal text-xl">A mobile app that bridges the gap between school and home giving parents real-time visibility into their child's daily activities, updates, and school notifications.</p>
                </div>

                <h6 className="text-[18px] text-[#999999] font-normal mb-2 mt-[35px]">Problem Statement</h6>
                <p className="text-[16px] text-white font-normal text-base/7 mb-[35px]">Parents today are busier than ever, making it increasingly difficult to stay actively involved in their child's school life. Traditional communication methods physical diaries, notice boards, and in-person visits are slow, inconsistent, and easily missed. This disconnect leads to parents being unaware of important school events, academic progress, and daily activities, ultimately reducing parental engagement and impacting the child's overall development.</p>

                <h6 className="text-[18px] text-[#999999] font-normal mb-2">User Research</h6>
                <p className="text-[16px] text-white font-normal text-base/7 mb-[35px]">To understand the core pain points, I focused on identifying the challenges faced by working parents and school administrators.<br/>
                Key Findings:<br/>
                - Most parents could not visit school regularly due to work commitments <br/>
                - Parents felt out of the loop regarding their child's daily academic progress and participation <br/>
                - Schools lacked a centralized, digital channel to communicate updates effectively <br/>
                - Parents missed important events and notifications due to delayed or informal communication <br/>
                - There was a strong demand for a simple, mobile-first solution that required minimal effort to use</p>

                <h6 className="text-[18px] text-[#999999] font-normal mb-2 mt-[35px]">Solutions</h6>
                <p className="text-[16px] text-white font-normal text-base/7 mb-4">The News and Circular screens keep parents consistently informed about everything happening at school from meetings and academic registrations to events and official circulars. Category tags and date indicators make updates easy to scan, while the Circular section delivers official school communications with downloadable options, ensuring no important announcement ever goes unnoticed.</p>
                
                <img src="/images/stage3.jpg" alt="Case Study Image" className="w-full h-full mb-6"/>

                <h6 className="text-[18px] text-[#999999] font-normal mb-2 mt-[35px]">Task Management</h6>
                <p className="text-[16px] text-white font-normal text-base/7 mb-4">The core intent behind this screen was to eliminate the dependency on children remembering to communicate their assignments to their parents, empowering them to stay proactively involved in their child's academic journey and reducing missed deadlines through a clean, scannable, and intuitive layout.</p>
                
                <img src="/images/stage2.jpg" alt="Case Study Image" className="w-full h-full mb-6"/>

                <h6 className="text-[18px] text-[#999999] font-normal mb-2 mt-[35px]"> Examination & Report Card Screen</h6>
                <p className="text-[16px] text-white font-normal text-base/7 mb-4">The Examination screen gives parents a comprehensive view of their child's upcoming exams listing each subject with its date, time, venue, and syllabus portions, so parents can plan ahead and support their child's preparation effectively. An annual exam alert banner ensures critical exam schedules are never missed. The Report Card screen consolidates the child's academic performance into one clean, easy-to-read view displaying key highlights like grade, class rank, and attendance percentage alongside detailed student information, giving parents a complete picture of their child's academic standing at a glance.</p>
                
                <img src="/images/stage4.jpg" alt="Case Study Image" className="w-full h-full mb-6"/>

                <h6 className="text-[18px] text-[#999999] font-normal mb-2 mt-[35px]">Design System</h6>
                <p className="text-[16px] text-white font-normal text-base/7 mb-4">The app was built on a scalable design system with a cohesive blue-anchored color palette, clean hierarchical typography, and standardized reusable components ensuring visual consistency across every screen while streamlining the developer handoff process.</p>
                 <img src="/images/stage5.jpg" alt="Case Study Image" className="w-full h-full mb-6"/>

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
export default CaseStudyOne
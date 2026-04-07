import { GoArrowUpRight } from "react-icons/go";
import { Link } from "react-router-dom";

function CaseStudyThree() {
    return (
        <div className="text-3xl font-bold text-white w-full">
            <div className="w-full !h-full max-h-[450px] mb-6 justify-items-center">
                <img src="/images/banner3.jpg" alt="Case Study Image" className="w-full h-full mb-6"/>
            </div>
            <div className="container max-w-3/4 w-full mx-auto">
                <div className="flex flex-col gap-2 items-start mb-4 border-b border-[#343434] pb-4">
                    <h1 className="text-[24px] font-bold text-white">Employee Management Application</h1>
                    <p className="text-[16px] text-white font-normal text-xl">An employee management app streamlining project management and employee availability with real-time insights on tasks, performance, priorities, and leave.</p>
                </div>

                <h6 className="text-[18px] text-[#999999] font-normal mb-2 mt-[35px]">Problem Statement</h6>
                <p className="text-[16px] text-white font-normal text-base/7 mb-[35px]">Despite the availability of employee management tools, organizations still face challenges in effectively tracking daily tasks, understanding employee availability, and evaluating overall performance. The lack of a centralized system for managing priorities, leave, and project updates leads to poor visibility, miscommunication, and reduced productivity. These gaps make it difficult for managers to make informed decisions and for employees to stay aligned with their responsibilities.</p>

                <h6 className="text-[18px] text-[#999999] font-normal mb-2">User Research</h6>
                <p className="text-[16px] text-white font-normal text-base/7 mb-[35px]">To validate these challenges, I conducted user interviews and surveys with employees, managers, and HR professionals to understand their daily workflow and pain points.<br/>
                Key Findings:<br/>
                - A majority of users struggled with lack of visibility into daily tasks, making it difficult to track progress and priorities <br/>
                - Managers found it challenging to monitor team performance and availability in real time<br/>
                - Employees often felt unclear about task priorities and deadlines, leading to confusion and delays <br/>
                - Leave management was not transparent, causing overlaps, miscommunication, and planning issues<br/>
                - Users expressed a strong need for a simple, centralized dashboard that provides clear insights into tasks, performance, and availability at a glance
                </p>

                <h6 className="text-[18px] text-[#999999] font-normal mb-2 mt-[35px]">Solutions</h6>
                <p className="text-[16px] text-white font-normal text-base/7 mb-4">A centralized dashboard providing a real-time snapshot of tasks, leave, active projects, and priorities, enabling quick decisions and better planning through a clear, intuitive view.</p>
                
                <img src="/images/stage11.jpg" alt="Case Study Image" className="w-full h-full mb-6"/>

                <h6 className="text-[18px] text-[#999999] font-normal mb-2 mt-[35px]">Employee List</h6>
                <p className="text-[16px] text-white font-normal text-base/7 mb-4">A structured list view displaying employees along with their departments and employee IDs, enabling easy access, quick identification, and efficient management of workforce details.</p>
                
                <img src="/images/stage12.jpg" alt="Case Study Image" className="w-full h-full mb-6"/>

                <h6 className="text-[18px] text-[#999999] font-normal mb-2 mt-[35px]">Project List</h6>
                <p className="text-[16px] text-white font-normal text-base/7 mb-4">A structured list view displaying each project with its name, assigned project manager, and team members, enabling clear visibility and efficient project tracking.</p>
                
                <img src="/images/stage13.jpg" alt="Case Study Image" className="w-full h-full mb-6"/>

                <h6 className="text-[18px] text-[#999999] font-normal mb-2 mt-[35px]">Timesheet</h6>

                <p className="text-[16px] text-white font-normal text-base/7 mb-4">A detailed view showing logged hours for each task along with total working hours, enabling users to track time spent and monitor overall productivity.</p>
                <img src="/images/stage14.jpg" alt="Case Study Image" className="w-full h-full mb-6"/>


                <h6 className="text-[18px] text-[#999999] font-normal mb-4">Logo & Branding</h6>
                <div className="flex flex-col w-full h-full mb-6">
                    <img src="/images/stage21.jpg" alt="Case Study Image" className="w-full h-full "/>
                    <img src="/images/stage22.jpg" alt="Case Study Image" className="w-full h-full"/>
                    <img src="/images/stage23.jpg" alt="Case Study Image" className="w-full h-full"/>
                    <img src="/images/stage24.jpg" alt="Case Study Image" className="w-full h-full"/>
                </div>

                <div className="flex flex-col sm:flex-row gap-2 items-start sm:items-center justify-between mb-4 pt-4 border-t border-[#343434] pb-4">
                    <div className="flex flex-col gap-2 items-start mb-2">
                        <p className="text-[16px] text-white font-normal text-xl">If you want to know more details of this project, get in touch!</p>
                        <a href="https://www.linkedin.com/in/arathi-as" target="_blank" rel="noopener noreferrer" className="text-white text-[16px] text-[#007FFF] font-normal text-xl">LinkedIn</a>
                       <a href="mailto:asarathi743@gmail.com" className="text-white text-[16px] text-[#007FFF] font-normal text-xl">asarathi743@gmail.com</a>
                    </div>
                   <Link to="/case-study/student-monitoring-app" className="flex items-center gap-2 border border-[#484848] bg-[#1A1A1A] px-4 py-3 rounded-full text-white text-[16px] font-normal">View Next <GoArrowUpRight /></Link>
                </div>
            </div>
        </div>
    )
}
export default CaseStudyThree

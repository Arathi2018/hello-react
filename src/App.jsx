import { useState, useEffect } from 'react'
import { Routes, Route } from "react-router-dom"
import Navbar from "./components/Navbar"
import UserProfile from "./components/UserProfile"
import GradientCover from "./components/Card"
import CaseStudyOne from "./components/caseStudy/CaseStudyone"
import CaseStudyTwo from "./components/caseStudy/CaseStudytwo"
import CaseStudyThree from "./components/caseStudy/CaseStudythree"
import About from "./components/about"
import Loader from "./components/loader"
import PosterCard from "./components/PosterCard"

function App() {
   const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
    }, 1000);

    return () => clearTimeout(timer);
  }, []);

  // ✅ Show loader first
  if (loading) {
    return <Loader />;
  }
  return(
    <>
       <Navbar/>
        <Routes>
          <Route path="/" element={
            <div className="max-w-3/4 w-full mx-auto py-[20px]">
              <UserProfile/>
              <GradientCover />
              <PosterCard/>

            </div>
          } />
          <Route path="/case-study/student-monitoring-app" element={<CaseStudyOne />} />
          <Route path="/case-study/food-delivery-app" element={<CaseStudyTwo />} />
          <Route path="/case-study/employee-management" element={<CaseStudyThree />} />
          <Route path="/about" element={<About />} />
        </Routes>
    </>
  )
}
export default App
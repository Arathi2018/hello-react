import { Link } from "react-router-dom"

function PosterCard() {
    return (
        <div className="mt-[20px]">
            <div class="grid grid-cos-2 lg:grid-cols-3 gap-4">
                <div class="lg:col-span-2 text-[#FFFFFF]">
                    <a href="https://www.behance.net/gallery/230588691/Social-Media-Poster-Designs" target="_blank" rel="noopener noreferrer" className="border border-[#9999994f] cursor-pointer rounded-[20px] p-[5px] block">
                            <img src="/images/poster2.jpg" loading="lazy"  width={300} height={300} className="w-full h-[300px] object-cover rounded-[15px]" />
                        <div className="bg-[#1A1A1A] rounded-[15px] mt-2 p-3 flex items-center justify-center">
                            <h6 className="text-[#FFFFFF] font-normal">View Posters</h6>
                        </div>
                    </a>
                </div>
                <div class="text-[#FFFFFF]">
                     <a href="https://www.behance.net/arathias" target="_blank" rel="noopener noreferrer" className="border border-[#9999994f] cursor-pointer rounded-[20px] p-[5px] block">
                            <img src="/images/Behance-Lottie-Animation.gif" loading="lazy"  width={300} height={300} className="w-[100%] lg:w-100 h-[300px] object-none rounded-[15px]" />
                        <div className="bg-[#1A1A1A] rounded-[15px] mt-2 p-3 flex items-center justify-center">
                            <h6 className="text-[#FFFFFF] font-normal">View More</h6>
                        </div>
                    </a>
                </div>
            </div>
        </div>
    )
}
export default PosterCard    
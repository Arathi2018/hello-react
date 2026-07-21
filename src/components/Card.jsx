import Card from '@mui/joy/Card';
import CardCover from '@mui/joy/CardCover';
import CardContent from '@mui/joy/CardContent';
import { Link } from 'react-router-dom';
import RevealOnScroll from './OnScroll';
import { ArrowUpRight } from 'lucide-react'

const cardItems = [
  {
    id: 1,
    title: "Stay Close to School",
    description: "A mobile app keeping parents informed with live updates on their child's day.",
    image: "/images/card-image.webp",
    alt: "image description",
    url: '/case-study/student-monitoring-app'
  },
  {
    id: 2,
    title: "Reducing Checkout Friction in Food Delivery Apps",
    description: "A food delivery app improving trust through clear costs and easy support.",
    image: "/images/card-image1.webp",
    alt: "image description 2",
    url: '/case-study/food-delivery-app'
  },
  {
    id: 3,
    title: "Scan Track",
    description: "An employee management application for tracking & real-time performance insights.",
    image: "/images/card-image2.webp",
    alt: "image description 2",
    url:  '/case-study/employee-management'
  },
  //  {
  //   id: 4,
  //   title: "Art Net",
  //   description: "Craft e-commerce platform for easy browsing & better product discovery.",
  //   image: "/images/card-image3.jpg",
  //   alt: "image description 3",
  //   url:  '/case-study/art-net'
  // },
];
function GradientCover() {
  return (
    <div id="works" className="py-[50px] px-[30px] mb-[50px]">
      <RevealOnScroll>
        <h2 className="text-[52px] font-semibold text-white heading-font text-center mb-[8px]">Recent Works</h2>
        <p className="text-[16px] text-white font-normal text-center text-base/6 mb-[57px]">A few projects that reflect how I think, design, and solve problems.</p>
        <div className="grid grid-cols-1 md:grid-cols-1 xl:grid-cols-2 gap-5 flex-wrap justify-center">
          {cardItems.map((cardItem) => (
          <Link to={cardItem.url} key={cardItem.id} style={{ textDecoration: 'none' }}>
            <Card key={cardItem.id} variant="outlined" sx={{ minHeight: '280px', width: '100%' }} className="!rounded-[20px] !border-[#343434] cursor-pointer overflow-hidden relative">
              <span className="w-[45px] h-[45px] bg-[#202020] absolute z-[1] right-[15px] rounded-full border border-[#595959] flex items-center justify-center text-white">
                <ArrowUpRight />
              </span>
              <CardCover><img src={cardItem.image} loading="lazy" alt={cardItem.alt}/></CardCover>
              <CardCover sx={{background:'linear-gradient(to top, rgba(0,0,0,0.4), rgba(0,0,0,0) 200px), linear-gradient(to top, rgba(0,0,0,0.8), rgba(0,0,0,0) 300px)',}}/>
              <CardContent sx={{ justifyContent: 'flex-end' }}>
                <h4 className="text-[22px] font-bold text-white">{cardItem.title}</h4>
                <p className="text-white font-normal text-base">{cardItem.description}</p>
              </CardContent>
            </Card>
            </Link>
            ))
          }
        </div>
      </RevealOnScroll>
    </div>
  );
}
export default GradientCover;